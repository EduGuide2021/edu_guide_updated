import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Community } from "../../Entities/Community";
import { CommunityType } from "../TypeDefs/Community";
import { Users } from "../../Entities/Users";
import { Comment } from "../../Entities/Comment";

export const GET_ALL_POSTS = {
  type: new GraphQLList(CommunityType),
  async resolve() {
    const communities = await Community.find();
    let communityDetail = communities?.map(async (community) => {
      let user = await Users.findOne({ id: community?.creator })
      let comments = await Comment.find()
      if (user) {
        return { ...community, creator: user.first_name + " " + user.last_name, comments: comments?.filter(item => item?.communityId === community?.id)?.map(item => { return { commentText: item?.content } }) }
      }
      return { ...community, comments: comments?.filter(item => item?.communityId === community?.id) }
    })
    return communityDetail
  },
};
