module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ep-cold-field-a2gev6fg-pooler.eu-central-1.aws.neon.tech'),
        // port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'neondb'),
        username: env('DATABASE_USERNAME', 'neondb_owner'),
        password: env('DATABASE_PASSWORD', 'xYViHwT5MtI1'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
