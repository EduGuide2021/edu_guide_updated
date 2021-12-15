"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Community = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Community = class Community extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Community.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Community.prototype, "comment", void 0);
Community = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Community);
exports.Community = Community;
//# sourceMappingURL=Community.js.map