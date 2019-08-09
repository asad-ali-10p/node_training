import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users01565334909870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'users1',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'character varying',
                    length: '100',
                },
                {
                    name: 'email',
                    type: 'character varying',
                    length: '100',
                    isUnique: true
                },
                {
                    name: 'password_hash',
                    type: 'character varying',
                    length: '100',
                },
                {
                    name: 'isActive',
                    type: 'boolean',
                    default: true,
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('users1');
    }

}
