"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_BLOGS = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const Blog_1 = require("../../Entities/Blog");
const Blog_2 = require("../TypeDefs/Blog");
const Users_1 = require("../../Entities/Users");
exports.GET_ALL_BLOGS = {
    type: new graphql_1.GraphQLList(Blog_2.BlogType),
    resolve() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const blogs = yield Blog_1.Blog.find();
            let blogsDetail = blogs === null || blogs === void 0 ? void 0 : blogs.map((blog) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                let user = yield Users_1.Users.findOne({ id: blog === null || blog === void 0 ? void 0 : blog.creator });
                if (user) {
                    return Object.assign(Object.assign({}, blog), { creator: user.name });
                }
                return Object.assign({}, blog);
            }));
            console.log(blogsDetail);
            return blogsDetail;
        });
    },
};
//# sourceMappingURL=Blog.js.map