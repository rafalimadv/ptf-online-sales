"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTableState1687204722362 = void 0;
class AlterTableState1687204722362 {
    async up(queryRunner) {
        queryRunner.query(`
            ALTER TABLE state
                ADD uf varchar(2) NOT NULL;
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            ALTER TABLE state
                drop uf;
        `);
    }
}
exports.AlterTableState1687204722362 = AlterTableState1687204722362;
//# sourceMappingURL=1687204722362-alter_table_state.js.map