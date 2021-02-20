import { getConnect } from '../services/mongodb';
import registerSchemas from './models';

registerSchemas();

const conn = getConnect();

export const UserModel = conn.model('users');
