import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3304,
  username: 'root',
  password: 'mysql',
  database: 'cowtodo',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
