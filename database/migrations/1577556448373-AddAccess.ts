import {MigrationInterface, QueryRunner} from 'typeorm';

export class AddAccess1577556448373 implements MigrationInterface {
    name = 'AddAccess1577556448373';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE `access` (`id` int NOT NULL AUTO_INCREMENT, `accessedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `slugId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
        await queryRunner.query('ALTER TABLE `access` ADD CONSTRAINT `FK_4a067b5cc32bbc3392a0d6348cf` FOREIGN KEY (`slugId`) REFERENCES `slug`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `access` DROP FOREIGN KEY `FK_4a067b5cc32bbc3392a0d6348cf`', undefined);
        await queryRunner.query('DROP TABLE `access`', undefined);
    }

}
