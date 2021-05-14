const env = process.env;

// non default export
export const nodeEnv = env.NODE_ENV || 'development';

// default export
export default {
  port: env.PORT || 8080
};