"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountType = exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
let User = class User {
    constructor(user) {
        Object.assign(user);
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, graphql_1.Directive)('@external'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, graphql_1.Directive)('@external'),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, graphql_1.Directive)('@external'),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@extends'),
    (0, graphql_1.Directive)('@key(fields: "id")'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
let AccountType = class AccountType {
    constructor(account) {
        Object.assign(account);
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], AccountType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], AccountType.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [User]),
    __metadata("design:type", Array)
], AccountType.prototype, "crew", void 0);
AccountType = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")'),
    __metadata("design:paramtypes", [Object])
], AccountType);
exports.AccountType = AccountType;
//# sourceMappingURL=account.dto.js.map