import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBook1620265491311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "books",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "titulo",
                    type: "varchar",
                },
                {
                    name: "editora",
                    type: "varchar",
                },
                {
                    name: "foto",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "autores",
                    type: "array"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
