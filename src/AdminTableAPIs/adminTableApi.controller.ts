import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminUserService } from './adminTableApi.service';
import { CreateAdminUserDto } from './dto/createAdminTableApi.dto';
import { UpdateAdminUserDto } from './dto/updateAdminTableApi.dto';
import { json } from 'stream/consumers';

@Controller('admin-user')
export class AdminUserController {
  constructor(private readonly adminUserService: AdminUserService) {}

  @Get("karthik-support")
  findAl() {
    return this.adminUserService.findAl();
  }
    
  @Post()
  create(@Body() createAdminUserDto: CreateAdminUserDto) {
    return this.adminUserService.create(createAdminUserDto);
  }

  @Get()
  findAll() {
    return this.adminUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminUserService.findOne(+id);
  }

  @Patch(':id')
  async  update(@Param('id') id: string, @Body() updateAdminUserDto: UpdateAdminUserDto) {
    
    const result = await this.adminUserService.update(+id, updateAdminUserDto);
  
    return {
      update: "true",
      result, // You can include the result of the update operation if needed
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminUserService.remove(+id);
    }
    
}
