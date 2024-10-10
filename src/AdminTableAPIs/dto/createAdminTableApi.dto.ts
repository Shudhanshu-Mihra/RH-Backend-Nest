export class CreateAdminUserDto {
    name: string;
    email: string;
    role: string;
    active?: boolean;
    password: string;
  }
  