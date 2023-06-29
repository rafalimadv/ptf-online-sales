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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt_1 = require("bcrypt");
const returnUser_dto_1 = require("../users/dtos/returnUser.dto");
const loginPayload_dto_1 = require("./dtos/loginPayload.dto");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = await this.userService
            .findUserByEmail(loginDto === null || loginDto === void 0 ? void 0 : loginDto.email)
            .catch(() => undefined);
        const isMatch = await (0, bcrypt_1.compare)(loginDto.password, (user === null || user === void 0 ? void 0 : user.password) || '');
        if (!user || !isMatch) {
            throw new common_1.NotFoundException('User invalid!');
        }
        return {
            acessToken: this.jwtService.sign(Object.assign({}, new loginPayload_dto_1.LoginPayload(user))),
            user: new returnUser_dto_1.ReturnUserDto(user),
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map