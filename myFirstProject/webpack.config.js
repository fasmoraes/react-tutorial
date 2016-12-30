// Para dar visibilidade externa
module.exports = {

  // Entrada do js: arquivos que serão lidos
  entry: [

    // jsx é um padrão do Airbnb
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname,   // root

  }
}
