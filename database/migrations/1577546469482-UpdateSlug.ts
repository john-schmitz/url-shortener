import {MigrationInterface, QueryRunner} from 'typeorm';

export class UpdateSlug1577546469482 implements MigrationInterface {
    name = 'UpdateSlug1577546469482';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `slug` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `slug` DROP COLUMN `createdAt`', undefined);
    }

}
