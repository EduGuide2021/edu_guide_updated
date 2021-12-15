"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_POSTS = void 0;
const graphql_1 = require("graphql");
const Community_1 = require("../../Entities/Community");
const Community_2 = require("../TypeDefs/Community");
exports.GET_ALL_POSTS = {
    type: new graphql_1.GraphQLList(Community_2.CommunityType),
    resolve() {
        return Community_1.Community.find();
    },
};
//# sourceMappingURL=Community.js.map