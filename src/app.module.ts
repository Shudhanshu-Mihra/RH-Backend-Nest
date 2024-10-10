// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { AdminUserModule } from './AdminTableAPIs/adminTAbleApi.module';
// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.DATABASE_HOST,
//       port: parseInt(process.env.DATABASE_PORT, 10),
//       username: process.env.DATABASE_USERNAME,
//       password: process.env.DATABASE_PASSWORD,
//       database: process.env.DATABASE_NAME,
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     AdminUserModule,
//   ],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminUserModule } from './AdminTableAPIs/adminTableApi.module'; // Ensure the path is correct
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration globally available
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'root',
        // database: process.env.DATABASE_NAME || 'Test',
        database: process.env.DATABASE_NAME || 'rhadmin',
        autoLoadEntities: true,
        synchronize: true,
        logging: true, // Enable TypeORM query logging
      }),
    }),

    AdminUserModule,
    // Your custom module for admin user APIs
  ],
  controllers: [AppController], // Add your controller here, not in imports
  providers: [AppService], // Add your service here
})
// export class AppModule implements OnModuleInit {
// onModuleInit() {
//   console.log('Database configuration:');
//   console.log('Host:', process.env.DATABASE_HOST);
//   console.log('Port:', process.env.DATABASE_PORT);
//   console.log('Username:', process.env.DATABASE_USERNAME);
//   console.log('Database:', process.env.DATABASE_NAME);
//   // Avoid logging sensitive information such as passwords
// }
// }
export class AppModule {}


