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

// leer la ruta y pasarla a utf8 para que se pueda leer
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
// obtener links
/* ---------Función MdLinks------ */
const mdLinks = ( path, options) => {
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    if (doesPathExist(path)) {
      // eslint-disable-next-line prefer-promise-reject-errors
      const absolute = getAbsolutePath(path);
      if (isFile(absolute)) {
        console.log('the path exist');
      } else {
      // si no existe la ruta la promesa se rechaz
      // eslint-disable-next-line prefer-promise-reject-errors
        reject('the path DOSENT exist');
      }
      if (isMarkdown(absolute)) {
        console.log('este archivo es .md');
      } else {
        console.log('esto no es un archivo .md');
      }
      // se resuelve la promesa de readingFiles
      readingFiles('./README.md').then((res) => {
        resolve(res);
      });
    };
  });
};
// se recuelve la promesa de mdLinks
mdLinks('./README.md').then((respuesta) => {
  (respuesta);
});
module.exports = {
  mdLinks,
  isMarkdown,
  doesPathExist,
  getAbsolutePath,
  isFile,
  readingFiles,
};
