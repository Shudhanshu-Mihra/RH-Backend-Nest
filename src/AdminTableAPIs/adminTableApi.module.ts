import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUserService } from './adminTableApi.service';
import { AdminUserController } from './adminTableApi.controller';
import { AdminUser } from './entity/adminTableApi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser])],
  controllers: [AdminUserController],
  providers: [AdminUserService],
})
export class AdminUserModule {}
