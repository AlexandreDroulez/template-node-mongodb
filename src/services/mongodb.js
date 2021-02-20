/* eslint no-console: 0 */

import mongoose from 'mongoose';

import configs from '../configs';

/**
 * Connect mongoose to database
 * @returns {void}
 */
export async function connect() {
  await mongoose.connect(configs.services.mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('Mongo Connected');
}

export const getConnect = () => mongoose.connection;

/**
 * Close the mongoose connection to database
 * @returns {void}
 */
export async function close() {
  await mongoose.disconnect();
  console.log('Mongo Disconnected');
}
