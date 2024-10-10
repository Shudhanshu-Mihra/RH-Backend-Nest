import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("admin_user")
export class AdminUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 30 })
  role: string;

  @Column({ default: true })
  active: boolean;

  @Column({ length: 40 })
  password: string;
}
