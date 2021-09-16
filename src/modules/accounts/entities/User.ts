import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

console.log('alo mundo cruel');

@Entity('users')
class User {
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  email: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User };
