"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialTest = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let SpecialTest = class SpecialTest extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SpecialTest.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], SpecialTest.prototype, "test_name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SpecialTest.prototype, "creator", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    (0, tslib_1.__metadata)("design:type", Object)
], SpecialTest.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SpecialTest.prototype, "score", void 0);
SpecialTest = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], SpecialTest);
exports.SpecialTest = SpecialTest;
//# sourceMappingURL=SpecialTest.js.map