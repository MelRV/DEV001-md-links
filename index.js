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
  const absolute = getAbsolutePath(path);
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    if (!doesPathExist(absolute)) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject(`${path}the path DOESNT exists`);
      // Revisar o convertir a ruta absoluta
    } else {
      // si no existe la ruta la promesa se rechaz
      // eslint-disable-next-line prefer-promise-reject-errors
      resolve('the path exist');
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


