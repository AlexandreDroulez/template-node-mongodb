import express from 'express';

import {
  getAllUserController, getOneUserController, createUserController, updateUserController, deleteOneUserController,
} from './controller';

const router = express.Router();

router.get('/', getAllUserController);
router.get('/:id', getOneUserController);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteOneUserController);

export default router;
