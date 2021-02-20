import { UserModel } from '..';

// GET

export function getAllUserDatabase() {
  return UserModel.find({}).lean();
}

export function getOneUserDatabase(userId) {
  return UserModel.findById(userId);
}

// POST

export function createUserDatabase(payload) {
  return new UserModel(payload).save();
}

// PUT

export function updateUserDatabase(userId, payload) {
  return UserModel.findOneAndUpdate({ _id: userId }, payload, { upsert: true });
}

// DELETE

export function deleteOneUserDatabase(userId) {
  return UserModel.deleteOne({ _id: userId });
}
