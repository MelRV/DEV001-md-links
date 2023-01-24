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

// leer la ruta y pasarla a utf8
// const route = './node.txt'
const readingFiles = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf8', function(error, data) {
    if (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('error');
    } else {
      resolve(data);
    }
  });
});
/* ---------Función MdLinks------ */
const mdLinks = ( path, options) => {
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    if (doesPathExist(path)) {
      // eslint-disable-next-line prefer-promise-reject-errors
      const absolute = getAbsolutePath(path);
      if (isFile(absolute)) {
      // Revisar o convertir a ruta absoluta
        console.log('the path exist');
      } else {
      // si no existe la ruta la promesa se rechaz
      // eslint-disable-next-line prefer-promise-reject-errors
        reject('the path DOSENT exist');
      }
      readingFiles('./node.txt').then((res) => (res));
    };
  });
};
console.log(mdLinks('./node.txt'));
module.exports = {
  mdLinks,
  isMarkdown,
  doesPathExist,
  getAbsolutePath,
  isFile,
  readingFiles,
};
