import gql from 'graphql-tag'

export const HELLO_WORLD = gql`
  query helloWorld {
    helloWorld
  }
`
export const GET_BUTTON_BY_NAME = gql`
  query getButtonByName ($name: String!) {
    getButtonByName (name: $name) {
      id
      name
      value
    }
  }
`

export const ADD_BUTTON_COUNT = gql`
  mutation addButtonCount($name: String!) {
    addButtonCount (name: $name) {
      id
      name
      value
    }
  }
`

export const RESET_BUTTON_COUNT = gql`
  mutation resetButtonCount($name: String!) {
    resetButtonCount (name: $name) {
      id
      name
      value
    }
  }
`
