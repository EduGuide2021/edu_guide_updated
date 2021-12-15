"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogType = void 0;
const graphql_1 = require("graphql");
exports.BlogType = new graphql_1.GraphQLObjectType({
    name: "Blog",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        content: { type: graphql_1.GraphQLString },
        creator: { type: graphql_1.GraphQLID },
        createdAt: { type: graphql_1.GraphQLString },
        is_approved: { type: graphql_1.GraphQLBoolean }
    }),
});
//# sourceMappingURL=Blog.js.map