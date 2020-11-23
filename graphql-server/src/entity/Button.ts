import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Button extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  name: string;

  @Field(() => Int)
  @Column("int")
  value: number;
}