"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Blog = class Blog extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Blog.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Blog.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Blog.prototype, "creator", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    (0, tslib_1.__metadata)("design:type", Object)
], Blog.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Blog.prototype, "is_approved", void 0);
Blog = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Blog);
exports.Blog = Blog;
//# sourceMappingURL=Blog.js.map