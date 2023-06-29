"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCityDto = void 0;
const returnState_dto_1 = require("../../state/dtos/returnState.dto");
class ReturnCityDto {
    constructor(city) {
        this.name = city.name;
        this.state = city.state ? new returnState_dto_1.RetrunStateDto(city.state) : undefined;
    }
}
exports.ReturnCityDto = ReturnCityDto;
//# sourceMappingURL=returnCity.dto.js.map