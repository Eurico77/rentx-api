import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
// import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
// import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';

// import uploadConfig from './config/upload';

// const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));
const usersRoutes = Router();
const createUserController = new CreateUserController();
// const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);
// usersRoutes.patch(
//   '/avatar',
//   ensureAuthenticated,
//   uploadAvatar.single('avatar'),
//   updateUserAvatarController.handle
// );

export { usersRoutes };
