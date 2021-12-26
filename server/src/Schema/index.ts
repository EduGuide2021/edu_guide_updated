import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import {
  CREATE_USER,
  DELETE_USER,
  EDIT_PROFILE,
  GET_CURRENT_USER,
  UPDATE_GENERAL_SCORE,
  UPDATE_PASSWORD,
  USER_LOGIN,
} from "./Mutations/User";
import { CREATE_COMMUNITY, DELETE_COMMUNITY } from "./Mutations/Community";
import { GET_ALL_POSTS } from "./Queries/Community";
import { GET_ALL_BLOGS } from "./Queries/Blog";
import { CREATE_BLOG, DELETE_BLOG } from "./Mutations/Blog";
import { GET_SPECIAL_TESTS, UPDATE_SPECIAL_TEST } from "./Mutations/SpecialTest";
import { CREATE_GENERAL_TEST_SET, EDIT_GENERAL_TEST_SET } from "./Mutations/GeneralTestSet";
import { CREATE_SPECIAL_TEST_SET, EDIT_SPECIAL_TEST_SET } from "./Mutations/SpecialTestSet";
import { GET_GENERAL_TEST_SETS } from "./Queries/GeneralTestSet";
import { GET_SPECIAL_TEST_SETS } from "./Queries/SpecialTestSet";
import { CREATE_COMMENT } from "./Mutations/Comment";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllPost: GET_ALL_POSTS,
    getAllBlog: GET_ALL_BLOGS,
    getGeneralTestSets: GET_GENERAL_TEST_SETS,
    getSpecialTestSets: GET_SPECIAL_TEST_SETS
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    userLogin: USER_LOGIN,
    editProfile: EDIT_PROFILE,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    updateGeneralScore: UPDATE_GENERAL_SCORE,
    getCurrentUser: GET_CURRENT_USER,
    getSpecialTests: GET_SPECIAL_TESTS,


    createCommunity: CREATE_COMMUNITY,
    deleteCommunity: DELETE_COMMUNITY,

    createBlog: CREATE_BLOG,
    deleteBlog: DELETE_BLOG,

    updateSpecialTest: UPDATE_SPECIAL_TEST,

    createGeneralTestSet: CREATE_GENERAL_TEST_SET,
    editGeneralTestSet: EDIT_GENERAL_TEST_SET,

    createSpecialTestSet: CREATE_SPECIAL_TEST_SET,
    editSpecialTestSet: EDIT_SPECIAL_TEST_SET,

    createComment: CREATE_COMMENT
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
