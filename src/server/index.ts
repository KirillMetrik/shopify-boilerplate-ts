require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});

// Import the rest of our application.
export * from './server';
