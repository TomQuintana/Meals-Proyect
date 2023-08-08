export const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Meal Management',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/**/*.ts'],
};
