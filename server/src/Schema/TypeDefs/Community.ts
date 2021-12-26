import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";

export const CommunityType = new GraphQLObjectType({
  name: "Community",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    creator: { type: GraphQLID },
    comments: { type: new GraphQLList(new GraphQLObjectType({ name: "Comments", fields: () => ({ commentText: { type: GraphQLString } }) })) }
  }),
});
