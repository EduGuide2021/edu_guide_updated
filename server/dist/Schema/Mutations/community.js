"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_COMMUNITY = exports.CREATE_COMMUNITY = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const Community_1 = require("../../Entities/Community");
const Community_2 = require("../TypeDefs/Community");
const Messages_1 = require("../TypeDefs/Messages");
exports.CREATE_COMMUNITY = {
    type: Community_2.CommunityType,
    args: {
        id: { type: graphql_1.GraphQLID },
        comment: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { comment } = args;
            yield Community_1.Community.insert({
                comment
            });
            return args;
        });
    },
};
exports.DELETE_COMMUNITY = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            yield Community_1.Community.delete(id);
            return { successful: true, message: "DELETE WORKED" };
        });
    },
};
//# sourceMappingURL=Community.js.map