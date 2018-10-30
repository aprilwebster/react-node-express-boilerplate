#! /usr/bin/env node
const server = require('./app');
const logger = require('./config/winston');

const port = 3000;

server.listen(port, () => {
  logger.info('Server running on port: ' + port);
});
