import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export const ADD_DOC = gql`
  mutation createDoc($body: String!, $docId: String!, $name: String!) {
    createDoc(body: $body, docId: $docId, name: $name) {
      docId
      createdAt
      name
    }
  }
`;

export const GET_DOCS = gql`
  query getDocs {
    getDocs {
      docId
      body
      createdAt
      name
    }
  }
`;

export const DELTE_DOC = gql`
  mutation deleteDoc($docId: String!) {
    deleteDoc(docId: $docId)
  }
`;

export const EDIT_DOC = gql`
  mutation editDoc($body: String!, $docId: String!, $name: String!) {
    editDoc(body: $body, docId: $docId, name: $name) {
      docId
      createdAt
      name
    }
  }
`;
