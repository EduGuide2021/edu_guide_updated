"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_BLOG = exports.CREATE_BLOG = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const Blog_1 = require("../../Entities/Blog");
const Blog_2 = require("../TypeDefs/Blog");
const Messages_1 = require("../TypeDefs/Messages");
exports.CREATE_BLOG = {
    type: Blog_2.BlogType,
    args: {
        id: { type: graphql_1.GraphQLID },
        content: { type: graphql_1.GraphQLString },
        creator: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { content, creator } = args;
            yield Blog_1.Blog.insert({
                content,
                creator,
                createdAt: new Date(),
                is_approved: false
            });
            return args;
        });
    },
};
exports.DELETE_BLOG = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            yield Blog_1.Blog.delete(id);
            return { successful: true, message: "DELETE WORKED" };
        });
    },
};
//# sourceMappingURL=Blog.js.map