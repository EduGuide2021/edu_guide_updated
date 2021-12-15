"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoType = exports.UserType = void 0;
const graphql_1 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        email: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        levelStrand: { type: graphql_1.GraphQLString },
        school: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        is_admin: { type: graphql_1.GraphQLBoolean },
        general_test_score: { type: graphql_1.GraphQLString },
        general_test_count: { type: graphql_1.GraphQLInt },
        special_test_count: { type: graphql_1.GraphQLInt }
    }),
});
exports.UserInfoType = new graphql_1.GraphQLObjectType({
    name: "UserInfo",
    fields: () => ({
        user: { type: exports.UserType },
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    }),
});
//# sourceMappingURL=User.js.map