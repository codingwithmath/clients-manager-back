<h1 align="center">
Manager
</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## About This Project

An CRUD API to manage clients. The main goal is to use OOP and the SOLID principles. In the simple way possible, with minimal framework and without an ORM.

## Techs

- **Typescript**
- **Node Js**
- **Express**
- **MySQL**
- **Docker**

## Getting started

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/codingwithmath/clients-manager-back.git

$ cd clients-manager-back
```

### Prerequisites

To run this project you'll need to have a basic environment with NodeJS 18+ and Docker 20+ installed.

**Installing dependencies**

```
$ npm install
```

or

```
$ yarn
```

**running migrations**

```bash
$ docker-compose up

$ docker compose exec -T mysqldb mysql -u root --password=root < src/config/scripts/001_create_tables.sql

```

With all dependencies installed, the Database running and the environment properly configured, you can now run the server:

```
$ npm run dev
```

or

```
$ yarn dev
```
