const fs = require('fs');
const path = require('path');

// revisar si la ruta existe
const doesPathExist = (inputPath) => fs.existsSync(inputPath);
// revisar si es un archivo
const isFile = (route) => fs.statSync(route).isFile();
// identificar si el archivo es md
const isMarkdown = (filePath) => path.extname(filePath) === '.md';
// retorna un path absoluto
const getAbsolutePath = (filePath) =>
(path.isAbsolute(filePath)) ? filePath : path.resolve(filePath);

/* ---------Función MdLinks------ */
const mdLinks = ( path, options) => {
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    if (fs.existsSync(path)) {
      resolve('the path exist');
      // Revisar o convertir a ruta absoluta
    } else {
      // si no existe la ruta la promesa se rechaza
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('the path DOESN`T exists');
    };
  });
};

module.exports = {
  mdLinks,
  isMarkdown,
  doesPathExist,
  getAbsolutePath,
  isFile,
};
