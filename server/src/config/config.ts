import * as convict from 'convict';
import * as path from 'path';

export const config = convict({
  // default value should be defined even if do not used, leave it an empty string
  env: {
    doc: 'Application environment',
    default: '',
    env: 'NODE_ENV',
  },
  http: {
    port: {
      doc: 'Base server port',
      default: '',
      env: 'PORT',
    },
  },
  db: {
    user: {
      default: '',
      env: 'DB_USER_NAME',
    },
    password: {
      default: '',
      env: 'DB_PASSWORD',
    },
    url: {
      default: '',
      env: 'DB_URL',
    },
    port: {
      default: '',
      env: 'DB_PORT',
    },
    name: {
      default: '',
      env: 'DB_NAME',
    },
    authSource: {
      default: '',
      env: 'DB_AUTH_SOURCE',
    },
  },
  jwt: {
    secret: {
      doc: 'JWT secret',
      default: '',
      env: 'JWT_SECRET',
    },
    accessExpiresIn: {
      doc: 'Expressed in seconds or a string describing a time span zeit/ms',
      default: '30m',
    },
    refreshExpiresIn: {
      doc: 'Expressed in seconds or a string describing a time span zeit/ms',
      default: '30 days',
    },
  },
});

const env = config.get('env');
const envFile = path.resolve(__dirname, `${env}.json`);

config.loadFile(envFile);
config.validate();
