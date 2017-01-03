// Para dar visibilidade externa
module.exports = {

  // Entrada do js: arquivos que serão lidos
  entry: [

    // jsx é um padrão do Airbnb
    './src/index.jsx',
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] },
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,   // root
  },
  resolve: { extensions: ['', '.js', '.jsx']}
}
