"use strict";

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use("Env");

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use("Helpers");

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get("DB_CONNECTION", "sqlite"),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be a good choice for a development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: Helpers.databasePath(
        `${Env.get("DB_DATABASE", "development")}.sqlite`
      ),
    },
    useNullAsDefault: true,
    debug: Env.get("DB_DEBUG", false),
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: "mysql",
    connection: {
      host: Env.get("DB_HOST", "localhost"),
      port: Env.get("DB_PORT", ""),
      user: Env.get("DB_USER", "root"),
      password: Env.get("DB_PASSWORD", ""),
      database: Env.get("DB_DATABASE", "adonis"),
    },
    debug: Env.get("DB_DEBUG", false),
  },

  smkn26: {
    client: "mysql",
    connection: {
      host: "128.199.65.6",
      port: 3306,
      user: "goent",
      password: "server1goent26sukses",
      database: "ss",
    },
    debug: Env.get("DB_DEBUG", false),
  },
  sman94: {
    client: "mysql",
    connection: {
      host: "104.248.152.168",
      port: 3306,
      user: "goent",
      password: "server1goent26sukses",
      database: "ss",
    },
    debug: Env.get("DB_DEBUG", false),
  },
  sman96: {
    client: "mysql",
    connection: {
      host: "104.248.152.155",
      port: 3306,
      user: "goent",
      password: "server1goent26sukses",
      database: "ss",
    },
    debug: Env.get("DB_DEBUG", false),
  },
  smkn6tangsel: {
    client: "mysql",
    connection: {
      host: "128.199.237.64",
      port: 3306,
      user: "goent",
      password: "server1goent26sukses",
      database: "ss",
    },
    debug: Env.get("DB_DEBUG", false),
  },
  smkyadika13: {
    client: "mysql",
    connection: {
      host: "159.223.90.200",
      port: 3306,
      user: "goent",
      password: "server1goent26sukses",
      database: "ss",
    },
    debug: Env.get("DB_DEBUG", false),
  },
  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: "pg",
    connection: {
      host: Env.get("DB_HOST", "localhost"),
      port: Env.get("DB_PORT", ""),
      user: Env.get("DB_USER", "root"),
      password: Env.get("DB_PASSWORD", ""),
      database: Env.get("DB_DATABASE", "adonis"),
    },
    debug: Env.get("DB_DEBUG", false),
  },
};

// if ( process.env.NODE_ENV === 'production' ) {
//   database.mysql.connection.socketPath = Env.get('DB_SOCKET', '/cloudsql/smart-school-300211:asia-southeast2:smart-school');
// }

// module.exports = database
