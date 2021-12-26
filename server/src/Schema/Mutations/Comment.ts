import { GraphQLID, GraphQLString } from "graphql";
import { Comment } from "../../Entities/Comment";
import { CommentType } from "../TypeDefs/Comment";

export const CREATE_COMMENT = {
  type: CommentType,
  args: {
    id: { type: GraphQLID },
    commentType: { type: GraphQLString },
    content: { type: GraphQLString },
    communityId: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { commentType, content, communityId } = args;
    await Comment.insert({
      commentType,
      content,
      communityId
    });
    return args;
  },
};


// export const DELETE_COMMUNITY = {
//   type: MessageType,
//   args: {
//     id: { type: GraphQLID },
//   },
//   async resolve(parent: any, args: any) {
//     const id = args.id;
//     await Community.delete(id);

//     return { successful: true, message: "DELETE WORKED" };
//   },
// };