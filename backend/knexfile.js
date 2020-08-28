const config = require('./config');
const database_settings = config().database;

module.exports = {    
    client: 'postgresql',
    connection: database_settings,    
    migrations: {      
      tableName: 'migrations',
      directory: './database/migrations',
    }  
};
