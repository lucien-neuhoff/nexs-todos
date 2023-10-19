import { gql } from "@/__generated__";

export const CREATE_TODO = gql(`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      content
      completed
    }
  }
`);

export const UPDATE_TODO = gql(`
  mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
    updateTodo(updateTodoInput: $updateTodoInput) {
      id
      content
      completed
    }
  }
`);
