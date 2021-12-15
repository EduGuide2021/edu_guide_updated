"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_CURRENT_USER = exports.UPDATE_GENERAL_SCORE = exports.DELETE_USER = exports.EDIT_PROFILE = exports.UPDATE_PASSWORD = exports.USER_LOGIN = exports.CREATE_USER = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Messages_1 = require("../TypeDefs/Messages");
const Users_1 = require("../../Entities/Users");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        email: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        levelStrand: { type: graphql_1.GraphQLString },
        school: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, name, username, levelStrand, school, password } = args;
            let user = yield Users_1.Users.findOne({ email: email });
            if (user) {
                throw new Error("Email already exist");
            }
            let is_admin = false;
            if (username === 'admin') {
                is_admin = true;
            }
            bcrypt_1.default.hash(password, 10).then((hash) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                yield Users_1.Users.insert({
                    email,
                    name,
                    username,
                    levelStrand,
                    school,
                    password: hash,
                    is_admin
                });
                return Object.assign(Object.assign({}, args), { general_test_score: 0, general_test_count: 0, special_test_count: 0 });
            }));
        });
    },
};
exports.USER_LOGIN = {
    type: User_1.UserInfoType,
    args: {
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { username, password } = args;
            const user = yield Users_1.Users.findOne({ username: username });
            if (!user) {
                throw new Error("USERNAME DOESNT EXIST");
            }
            const match = yield bcrypt_1.default.compare(password, user.password);
            if (match) {
                return { successful: true, message: "LOGIN SUCCESS!", user: user };
            }
            else {
                throw new Error("WRONG PASSWORD!");
            }
        });
    },
};
exports.UPDATE_PASSWORD = {
    type: Messages_1.MessageType,
    args: {
        username: { type: graphql_1.GraphQLString },
        oldPassword: { type: graphql_1.GraphQLString },
        newPassword: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { username, oldPassword, newPassword } = args;
            const user = yield Users_1.Users.findOne({ username: username });
            if (!user) {
                throw new Error("USERNAME DOESNT EXIST");
            }
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (oldPassword === userPassword) {
                yield Users_1.Users.update({ username: username }, { password: newPassword });
                return { successful: true, message: "PASSWORD UPDATED" };
            }
            else {
                throw new Error("PASSWORDS DO NOT MATCH!");
            }
        });
    },
};
exports.EDIT_PROFILE = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        newUsername: { type: graphql_1.GraphQLString },
        newLevelStrand: { type: graphql_1.GraphQLString },
        newSchool: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { id, newUsername, newLevelStrand, newSchool } = args;
            const user = yield Users_1.Users.findOne({ id: id });
            if (user) {
                yield Users_1.Users.update({ id: id }, {
                    username: newUsername,
                    levelStrand: newLevelStrand,
                    school: newSchool,
                });
                return { successful: true, message: "PROFILE UPDATED" };
            }
        });
    },
};
exports.DELETE_USER = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            yield Users_1.Users.delete(id);
            return { successful: true, message: "DELETE WORKED" };
        });
    },
};
exports.UPDATE_GENERAL_SCORE = {
    type: Messages_1.MessageType,
    args: { id: { type: graphql_1.GraphQLID }, score: { type: graphql_1.GraphQLString } },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            const score = args.score;
            const user = yield Users_1.Users.findOne({ id: id });
            if (user) {
                yield Users_1.Users.update({ id: id }, {
                    general_test_score: score,
                    general_test_count: user.general_test_count + 1
                });
                return { successful: true, message: "SCORE UPDATED" };
            }
            return { successful: false, message: "SCORE UPDATE FAILED" };
        });
    },
};
exports.GET_CURRENT_USER = {
    type: User_1.UserInfoType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            const user = yield Users_1.Users.findOne({ id: id });
            if (user) {
                return { successful: true, message: "GET USER SUCCESS", user: user };
            }
            return { successful: false, message: "GET USER FAILED" };
        });
    },
};
//# sourceMappingURL=User.js.map