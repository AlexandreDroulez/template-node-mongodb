import httpStatus from 'http-status';

import {
  getAllUserDatabase, getOneUserDatabase, createUserDatabase, updateUserDatabase, deleteOneUserDatabase,
} from '../../database/user';
import { encryptionService } from '../../services/bcryptjs';

export async function createUserController(req, res) {
  try {
    req.body.password = encryptionService.hashPassword(req.body.password);
    await createUserDatabase(req.body);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if (error.code === 11000) return res.send('email déja utiliser');
    return res.send(error);
  }
}

export async function getAllUserController(req, res) {
  const users = await getAllUserDatabase();
  return res.send(users);
}

export async function getOneUserController(req, res) {
  const userId = req.params.id;
  const user = await getOneUserDatabase(userId);
  return res.send(user);
}

export async function updateUserController(req, res) {
  const userId = req.params.id;
  await updateUserDatabase(userId, req.body);
  return res.sendStatus(httpStatus.OK);
}

export async function deleteOneUserController(req, res) {
  const userId = req.params.id;
  await deleteOneUserDatabase(userId);
  return res.sendStatus(httpStatus.NO_CONTENT);
}
