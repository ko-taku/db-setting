import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => {
  const config: TypeOrmModuleOptions = {
    // Todo: DB Config를 완성시켜주세요.
    //NODE_OPTIONS=--experimental-global-webcrypto npm run start:dev 이걸로 서버 실행
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
  };

  console.log('📦 DB 설정 정보:', {
    host: config.host,
    port: config.port,
    username: config.username,
    password: '****',
    database: config.database,
  });

  return config;
};
