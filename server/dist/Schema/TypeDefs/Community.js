"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityType = void 0;
const graphql_1 = require("graphql");
exports.CommunityType = new graphql_1.GraphQLObjectType({
    name: "Community",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        comment: { type: graphql_1.GraphQLString },
    }),
});
//# sourceMappingURL=Community.js.map