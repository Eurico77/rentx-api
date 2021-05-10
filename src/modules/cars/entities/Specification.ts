import { v4 as uuidV4 } from 'uuid';

class Specification {
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

  id?: string;
  name: string;
  description: string;
  created_at: Date;
}

export { Specification };
