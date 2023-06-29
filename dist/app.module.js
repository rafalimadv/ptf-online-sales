"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const state_module_1 = require("./state/state.module");
const city_module_1 = require("./city/city.module");
const address_module_1 = require("./address/address.module");
const cache_module_1 = require("./cache/cache.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./guards/roles.guard");
const jwt_1 = require("@nestjs/jwt");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development.local'],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                database: process.env.DB_DATABASE,
                host: process.env.DB_HOST,
                username: process.env.DB_USERNAME,
                password: String(process.env.DB_PASSWORD),
                port: Number(process.env.DB_PORT),
                entities: [`${__dirname}/**/*.entity{.js,.ts}`],
                migrations: [`${__dirname}/migration/{.ts,*.js}`],
                migrationsRun: true,
            }),
            users_module_1.UsersModule,
            state_module_1.StateModule,
            city_module_1.CityModule,
            address_module_1.AddressModule,
            cache_module_1.CacheModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map