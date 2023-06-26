import { AddressEntity } from 'src/address/entities/address.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'type_user' })
  typeUser: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => AddressEntity, (adderess) => adderess.user)
  address?: AddressEntity[];
}
