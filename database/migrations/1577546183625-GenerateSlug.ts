import {MigrationInterface, QueryRunner} from 'typeorm';

export class GenerateSlug1577546183625 implements MigrationInterface {
    name = 'GenerateSlug1577546183625';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE `slug` (`id` int NOT NULL AUTO_INCREMENT, `url` varchar(500) NOT NULL, `slug` varchar(500) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE `slug`', undefined);
    }

}
