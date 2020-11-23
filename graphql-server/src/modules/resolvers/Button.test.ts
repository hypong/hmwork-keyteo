import { Connection } from "typeorm";
const faker = require('faker');
import { graphqlCall } from "../../test-utils/graphqlCall";
import { testConn } from "../../test-utils/testConn";

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
})

afterAll(async () => {
  await conn.close();
})

const addButtonMutation = `
  mutation AddButton ($name: String!) {
    addButton(name: $name) {
      id
      name
      value
    }
  }
`

describe('Button', () => {
  it("add button", async () => {
    const button = {
      name: faker.vehicle.color()
    }
    
    const response = await graphqlCall({
      source: addButtonMutation,
      variableValues: button
    })

    expect(response).toMatchObject(
    {
      data : {
        addButton: {
          name: button.name
        }
      }
    })
  })
})