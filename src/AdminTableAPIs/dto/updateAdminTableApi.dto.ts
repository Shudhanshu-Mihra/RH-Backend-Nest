import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminUserDto } from './createAdminTableApi.dto';

export class UpdateAdminUserDto extends PartialType(CreateAdminUserDto) {}
