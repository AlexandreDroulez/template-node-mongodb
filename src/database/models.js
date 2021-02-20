import { getConnect } from '../services/mongodb';

import users from './user/schema';

const conn = getConnect();

const register = () => {
  conn.model('users', users);
};

export default register;
