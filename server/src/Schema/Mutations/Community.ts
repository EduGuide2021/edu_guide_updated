import { GraphQLID, GraphQLString } from "graphql";
import { Community } from "../../Entities/Community";
import { CommunityType } from "../TypeDefs/Community";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_COMMUNITY = {
  type: CommunityType,
  args: {
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    creator: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { comment, creator } = args;
    await Community.insert({
      comment,
      creator
    });
    return args;
  },
};


export const DELETE_COMMUNITY = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Community.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};