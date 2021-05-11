import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import '../../database';
import { AppError } from '../errors/AppError';

const createConnection = null;
async function create() {
  const connection = await createConnection('localhost');
  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection.query(`
    INSERT INTO users (id, name, email, password, "isAdmin", created_at, driver_license)
    VALUES
    ('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', '')
  `);

  await connection.close();
}

create()
  .then(() => console.log('User admin created'))
  .catch((error) => {
    throw new AppError(`User admin create error: ${error}`);
  });
