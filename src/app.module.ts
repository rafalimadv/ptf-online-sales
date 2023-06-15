import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),
      port: Number(process.env.DB_PORT),
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`], //Set all files with .entity...
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
