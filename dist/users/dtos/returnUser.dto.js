"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnUserDto = void 0;
const returnAddress_dto_1 = require("../../address/dto/returnAddress.dto");
class ReturnUserDto {
    constructor(userEntity) {
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.cpf = userEntity.cpf;
        this.phone = userEntity.phone;
        this.address = userEntity.address
            ? userEntity.address.map((address) => new returnAddress_dto_1.ReturnAddressDto(address))
            : undefined;
    }
}
exports.ReturnUserDto = ReturnUserDto;
//# sourceMappingURL=returnUser.dto.js.map