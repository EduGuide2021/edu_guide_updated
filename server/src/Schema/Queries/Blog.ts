import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Blog } from "../../Entities/Blog";
import { BlogType } from "../TypeDefs/Blog";
import { Users } from "../../Entities/Users";

export const GET_ALL_BLOGS = {
  type: new GraphQLList(BlogType),
  async resolve() {
    const blogs = await Blog.find();
    let blogsDetail = blogs?.map(async (blog) => {
      let user = await Users.findOne({ id: blog?.creator })
      if (user) {
        return { ...blog, creator: user.first_name + " " + user.last_name }
      }
      return { ...blog }
    })
    return blogsDetail
  },
};
