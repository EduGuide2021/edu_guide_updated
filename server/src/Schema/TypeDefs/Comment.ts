import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    commentType: { type: GraphQLString },
    content: { type: GraphQLString },
    communityId: { type: GraphQLID },
  }),
});
