"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Users = class Users extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "levelStrand", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "school", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Users.prototype, "is_admin", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "general_test_score", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "general_test_count", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "special_test_count", void 0);
Users = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map