import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $first_name: String!
    $last_name: String!
    $username: String!
    $levelStrand: String!
    $school: String!
    $password: String!
  ) {
    createUser(
      email: $email
      first_name: $first_name
      last_name: $last_name
      username: $username
      levelStrand: $levelStrand
      school: $school
      password: $password
    ) {
      id
      email
      first_name
      last_name
      username
      levelStrand
      school
    }
  }
`;

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    userLogin(
      username: $username
      password: $password
    ){
      successful
      message
      user {
        id
        email
        first_name
        last_name
        username
        levelStrand
        school
        is_admin
        general_test_score
        general_test_count
        special_test_count
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $id: ID!
    $oldPassword: String!
    $newPassword: String!
  ) {
    updatePassword(
      id: $id
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editProfile(
    $id: ID!
    $first_name: String!
    $last_name: String!
    $username: String!
    $levelStrand: String!
    $school: String!
  ) {
    editProfile(
      id: $id
      newFirstName: $first_name
      newLastName: $last_name
      newUsername: $username
      newLevelStrand: $levelStrand
      newSchool: $school
    ) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;

export const CREATE_COMMUNITY = gql`
  mutation createCommunity($comment: String!) {
    createCommunity(comment: $comment) {
      comment
    }
  }
`;

export const DELETE_COMMUNITY = gql`
  mutation deleteCommunity($id: ID!) {
    deleteCommunity(id: $id) {
      message
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation createBlog($content: String! $creator: ID!) {
    createBlog(content: $content creator: $creator) {
      content
      creator
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      message
    }
  }
`;

export const UPDATE_GENERAL_SCORE = gql`
  mutation updateGeneralScore(
    $id: ID!
    $score: String!
  ) {
    updateGeneralScore(
      id: $id
      score: $score
    ) {
      message
    }
  }
`;

export const UPDATE_SPECIAL_TEST = gql`
  mutation updateSpecialTest(
    $id: ID!
    $test_name: String!
    $test_score: Int!
  ) {
    updateSpecialTest(
      id: $id
      test_name: $test_name
      test_score: $test_score
    ) {
      message
    }
  }
`;

export const GET_CURRENT_USER = gql`
  mutation getCurrentUser(
    $id: ID!
  ) {
    getCurrentUser(
      id: $id
    ) {
      successful
      message
      user {
        id
        email
        first_name
        last_name
        username
        levelStrand
        school
        is_admin
        general_test_score
        general_test_count
        special_test_count
      }
    }
  }
`;

export const GET_SPECIAL_TESTS = gql`
  mutation getSpecialTests(
    $id: ID!
  ) {
    getSpecialTests(
      id: $id
    ) {
      id
      test_name
      score
    }
  }
`;

export const CREATE_GENERAL_TEST_SET = gql`
  mutation createGeneralTestSet($questions: String!) {
    createGeneralTestSet(questions: $questions) {
      questions
    }
  }
`

export const EDIT_GENERAL_TEST_SET = gql`
  mutation editGeneralTestSet($questions: String! $id: ID!) {
    editGeneralTestSet(questions: $questions id:$id) {
      questions
    }
  }
`

export const CREATE_SPECIAL_TEST_SET = gql`
  mutation createSpecialTestSet($questions: String! $program: String!) {
    createSpecialTestSet(questions: $questions program: $program) {
      questions
      program
    }
  }
`

export const EDIT_SPECIAL_TEST_SET = gql`
  mutation editSpecialTestSet($questions: String! $id: ID!) {
    editSpecialTestSet(questions: $questions id:$id) {
      questions
    }
  }
`