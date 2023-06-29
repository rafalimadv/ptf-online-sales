"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnAddressDto = void 0;
const returnCity_dto_1 = require("../../city/dtos/returnCity.dto");
class ReturnAddressDto {
    constructor(addres) {
        this.complement = addres.complement;
        this.numberAddress = addres.numberAddress;
        this.cep = addres.cep;
        this.city = addres.city ? new returnCity_dto_1.ReturnCityDto(addres.city) : undefined;
    }
}
exports.ReturnAddressDto = ReturnAddressDto;
//# sourceMappingURL=returnAddress.dto.js.map