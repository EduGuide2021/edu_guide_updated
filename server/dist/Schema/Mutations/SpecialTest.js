"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_SPECIAL_TESTS = exports.UPDATE_SPECIAL_TEST = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const Messages_1 = require("../TypeDefs/Messages");
const Users_1 = require("../../Entities/Users");
const SpecialTest_1 = require("../../Entities/SpecialTest");
const SpecialTest_2 = require("../TypeDefs/SpecialTest");
exports.UPDATE_SPECIAL_TEST = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        test_name: { type: graphql_1.GraphQLString },
        test_score: { type: graphql_1.GraphQLInt }
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            const test_score = args.test_score;
            const test_name = args.test_name;
            const user = yield Users_1.Users.findOne({ id: id });
            if (user) {
                yield SpecialTest_1.SpecialTest.insert({
                    test_name,
                    creator: user.id,
                    createdAt: new Date(),
                    score: test_score
                });
                yield Users_1.Users.update({ id: id }, { special_test_count: user.special_test_count + 1 });
                return { successful: true, message: "Special test added" };
            }
            return { successful: false, message: "Special test add failed" };
        });
    },
};
exports.GET_SPECIAL_TESTS = {
    type: new graphql_1.GraphQLList(SpecialTest_2.SpecialTestType),
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            const specialTests = yield SpecialTest_1.SpecialTest.find({ creator: id });
            return specialTests;
        });
    },
};
//# sourceMappingURL=SpecialTest.js.map