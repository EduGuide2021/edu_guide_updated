import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      first_name
      last_name
      email
      username
      levelStrand
      school
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query getAllPost {
    getAllPost {
      id
      comment
      creator 
      comments{
        commentText
      } 
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query getAllBlog {
    getAllBlog {
      id
      content
      creator
      createdAt
      is_approved  
    }
  }
`;

export const GET_GENERAL_TEST_SETS = gql`
query getGeneralTestSets {
  getGeneralTestSets {
    id
    questions 
  }
}`;

export const GET_SPECIAL_TEST_SETS = gql`
query getSpecialTestSets {
  getSpecialTestSets {
    id
    questions
    program
  }
}
`;