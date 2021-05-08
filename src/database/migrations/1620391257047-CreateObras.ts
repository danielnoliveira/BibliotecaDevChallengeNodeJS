import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateObras1620391257047 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "obras",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "titulo",
                    type: "varchar"
                },
                {
                    name: "editora",
                    type: "varchar"
                },
                {
                    name: "foto",
                    type: "varchar"
                },
                {
                    name: "autores",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("obras");
    }

}
