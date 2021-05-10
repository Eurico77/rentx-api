import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

class Specification {
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
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Specification };
