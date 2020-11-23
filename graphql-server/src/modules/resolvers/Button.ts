import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Button } from "../../entity/Button"

@Resolver()
export class ButtonResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World!";
  }

  @Query(() => Button)
  async getButtonByName(
    @Arg('name') name: string,
  ): Promise<Button> {

    const button = await Button.findOne({
      where: { name }
    })

    return button!;
  }

  @Mutation(() => Button)
  async addButton(
    @Arg('name') name: string,
    @Arg('value', { defaultValue: 0 }) value: number
  ): Promise<Button> {

    const button = await Button.create({
      name,
      value
    }).save()

    return button;
  }

  @Mutation(() => Button)
  async addButtonCount(
    @Arg('name') name: string,
  ): Promise<Button> {

    const button = await Button.findOne({
      where: { name }
    })

    if (button) {
      button.value = button.value + 1
      await Button.save(button);
    }

    return button!;
  }

  @Mutation(() => Button)
  async resetButtonCount(
    @Arg('name') name: string,
  ): Promise<Button> {

    const button = await Button.findOne({
      where: { name }
    })

    if (button) {
      button.value = 0
      await Button.save(button);
    }

    return button!;
  }

}