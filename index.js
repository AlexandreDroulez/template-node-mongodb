import serviceExpress from './src/services/express';
import * as serviceMongo from './src/services/mongodb';
import configs from './src/configs';

const express = require('express');
require('esm');

const index = express();

serviceExpress(index);

async function start() {
  console.log('Connecting to database...');

  await serviceMongo.connect();

  console.log('Connection established');

  console.log(`Listening on PORT ${configs.port}`);
}

index.listen(configs.port, start);
