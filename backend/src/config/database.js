module.exports = {
  development: {
    username: 'postgres',
    password: 'docker',
    database: 'fastfeet_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: true,
      undescored: true,
      underscoredAll: true,
    },
  },
  test: {
    username: 'postgres',
    password: 'docker',
    database: 'fastfeet_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'docker',
    database: 'fastfeet_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
