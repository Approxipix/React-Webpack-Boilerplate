// Babel configuration:
// https://babeljs.io/docs/usage/api/

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Webpack's built-in tree shaking works on ES6 module syntax only.
        // If you're using Babel's defaults settings, Babel will compile ES6 modules to CommonJS
        // modules, leaving nothing for Webpack to work with.
        modules: false,
        targets: {
          browsers: ['> 0.5%', 'not dead', 'not ie < 11'],
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  ignore: ['node_modules', 'dist'],
};
