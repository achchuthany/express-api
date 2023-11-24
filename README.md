# Project Name

Sample Express API Application


## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Sequelize Setup](#sequelize-setup)
    - [Update Database Config](#update-database-config)
    - [Create Database](#create-database)

## Getting Started

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/en/download/)
- Git: [Download and Install Git](https://git-scm.com/downloads)

### Installation

Clone the repository to your local machine:

```
git clone https://github.com/achchuthany/express-api.git
cd express-api
```

## Getting Started

### To install the Sequelize CLI

```
npm install --save-dev sequelize-cli
```
Reference : https://sequelize.org/docs/v6/other-topics/migrations/

### Update Database Config
Navigate to config/config.json and update the development section:

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

### Create a Database
You have to create a database ``` express_api ```

### Running Migrations
```
npx sequelize-cli db:migrate
```
Reference: https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations

### Install the Dependencies 
```
npm install
```