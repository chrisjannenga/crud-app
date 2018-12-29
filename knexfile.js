module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: process.env.CRUD_APP_DB || 'crud-app',
            host: process.env.CRUD_APP_HOST || '127.0.0.1',
            user: process.env.CRUD_APP_USER || '',
            password: process.env.CRUD_APP_PASSWORD || '',
        }
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'd1407rnv08cmdl',
            host: 'ec2-184-73-181-132.compute-1.amazonaws.com',
            user: 'tkfwjwskrekolq',
            password: 'b73f2438dbe67da2faea5870058f6d0d09acbfb72659ec509caa43ee0b321b16'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
          database: 'd1407rnv08cmdl',
          host: 'ec2-184-73-181-132.compute-1.amazonaws.com',
          user: 'tkfwjwskrekolq',
          password: 'b73f2438dbe67da2faea5870058f6d0d09acbfb72659ec509caa43ee0b321b16'
        }
    }
};
