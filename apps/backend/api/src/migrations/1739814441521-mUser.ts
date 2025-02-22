import { MigrationInterface, QueryRunner } from "typeorm";
/**
 * add init user
 * username: admin
 * email: admin@example.com
 * password: root
 */
export class MUser1739814441521 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users (username, email, password)
      VALUES ('admin', 'admin@example.com', '$2a$10$sJ/bsjKmWM0c5fPY/YcixON5rMGiYER4pmsvYEMtjWxWJ6YWXYg6C')

      `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM users WHERE username = 'admin'

      `)
  }

}
