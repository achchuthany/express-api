## Install Node Js 
 Download and Install from [nodejs.org](https://nodejs.org/en/download)


## To install the Sequelize CLI:

``` npm install --save-dev sequelize-cli ```

Reference : https://sequelize.org/docs/v6/other-topics/migrations/

## Update the Database config

Navigate to  **config/config.json**
```
"development": {
    "username": "root",
    "password": "",
    "database": "express_api",
    "host": "127.0.0.1",
    "dialect": "mariadb"
  }
```
you have to update the username,password based on your configuration

## Create a Database 

You have to create a database ``` express_api ```
