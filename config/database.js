module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi-boda'),
        username: env('DATABASE_USERNAME', 'boda-user'),
        password: env('DATABASE_PASSWORD', 'monopoly'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
