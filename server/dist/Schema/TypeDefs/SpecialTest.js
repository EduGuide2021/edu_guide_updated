"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialTestType = void 0;
const graphql_1 = require("graphql");
exports.SpecialTestType = new graphql_1.GraphQLObjectType({
    name: "SpecialTest",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        test_name: { type: graphql_1.GraphQLString },
        creator: { type: graphql_1.GraphQLID },
        createdAt: { type: graphql_1.GraphQLString },
        score: { type: graphql_1.GraphQLInt }
    }),
});
//# sourceMappingURL=SpecialTest.js.map