const express = require('express');
const consign = require('consign');

const app = express();

consign({ verbose: false })
  .include('config.js')
  .then('redis.js')
  .then('database/connection.js')
  .then('libs/middlewares.js')
  .then('models')
  .then('controllers')
  .then('routes')
  .then('libs/boot.js')
  .into(app);

module.exports = app;
