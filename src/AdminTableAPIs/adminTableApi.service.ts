import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUser } from './entity/adminTableApi.entity';
import { CreateAdminUserDto } from './dto/createAdminTableApi.dto';
import { UpdateAdminUserDto } from './dto/updateAdminTableApi.dto';

@Injectable()
export class AdminUserService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}

  create(createAdminUserDto: CreateAdminUserDto): Promise<AdminUser> {
    const adminUser = this.adminUserRepository.create(createAdminUserDto);
    return this.adminUserRepository.save(adminUser);
  }

  findAll(): Promise<AdminUser[]> {
    return this.adminUserRepository.find();
  }

  findOne(id: number): Promise<AdminUser> {
    return this.adminUserRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAdminUserDto: UpdateAdminUserDto): Promise<AdminUser> {
    await this.adminUserRepository.update(id, updateAdminUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.adminUserRepository.delete(id);
    }
    
    findAl(): Promise<AdminUser[]> {
        return this.adminUserRepository.find();
      }
}
