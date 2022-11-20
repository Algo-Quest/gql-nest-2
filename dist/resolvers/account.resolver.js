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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const account_dto_1 = require("../dto/account.dto");
const axios_1 = require("@nestjs/axios");
let AccountResolver = class AccountResolver {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async accounts() {
        let result = await this.httpService.axiosRef.get('https://node-own.herokuapp.com/accounts');
        return result.data;
    }
    crew(user) {
        console.log('++++++++++++++++++++++++++');
        console.log(user);
        let r = user.crew.map((id) => ({ __typename: 'User', id }));
        console.log(r);
        return r;
    }
    async helloAccount() {
        return 'hello';
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [account_dto_1.AccountType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "accounts", null);
__decorate([
    (0, graphql_1.ResolveField)((of) => [account_dto_1.User]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_dto_1.AccountType]),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "crew", null);
__decorate([
    (0, graphql_1.Query)((returns) => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "helloAccount", null);
AccountResolver = __decorate([
    (0, graphql_1.Resolver)((of) => account_dto_1.AccountType),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AccountResolver);
exports.AccountResolver = AccountResolver;
//# sourceMappingURL=account.resolver.js.map