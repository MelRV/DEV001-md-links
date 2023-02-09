const fetch = require('node-fetch');
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
/* --------- Leer el archivo ------ */
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
/* --------- obtener links ------ */
const getLinks = (document) => {
  return new Promise((resolve, reject) => {
    const allLinks = [];
    readingFiles(document).then((file) => {
      const regEx = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
      let match = regEx.exec(file);
      while (match !== null) {
        allLinks.push({
          // [1] ejem es la posicion en la que quiero que retorne
          href: match[2], // trae el https
          text: match[1], // el texto del link
          file: document, // de donde lo esta trayendo
        });
        match = regEx.exec(file);
      };
      // console.log(allLinks);
      resolve(allLinks);
    })
        .catch((error) => reject(error));
  });
};
/* --------- Validate ------ */
const validateLinks = (allLinks) => {
  // eslint-disable-next-line arrow-parens
  return Promise.all(allLinks.map((link => {
    return fetch(link.href).then((result) => {
      const data = {
        href: link.href,
        text: link.text,
        file: link.file,
        status: result.status,
        message: (result.ok) ? 'ok' : 'fail',
      };
      // console.log(data);
      return data;
    })
        .catch((error) => {
          const dataError = {
            href: link.href,
            text: link.text,
            file: link.file,
            status: `Fail ${error.message}`,
            message: 'No status',
          };
          return dataError;
        });
  })));
};
/* -------- Stats ------ */
// Links totales
const statsTotales = (links) => {
  const totalLinks = links.length;
  return (totalLinks);
};
// Links rotos
const brokenStats = (links) => {
  const brokenLinks = links.filter((link) => link.message === 'fail');
  return (brokenLinks.length);
};
// links unicos
const uniqueStats = (links) => {
  const uniqueLinks = [...new Set(links.map((link) => link.href))];
  return (uniqueLinks.length);
};
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
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('esto no es un archivo .md'); // reject error cuando
      }
      // se resuelve la promesa de readingFiles
      readingFiles('./README.md').then((res) => {
        (res);
      });
      if (options.validate==true) {
        getLinks('./README.md').then((resultado) => {
          validateLinks(resultado).then((respuesta) => {
            resolve(respuesta);
          })
              .catch((error) => {
                console.log(error);
              });
        });
      } else {
        getLinks('./README.md').then((resultado) => {
          resolve(resultado);
        });
      }
    }
  });
};

module.exports = {
  mdLinks,
  isMarkdown,
  doesPathExist,
  getAbsolutePath,
  isFile,
  readingFiles,
  getLinks,
  validateLinks,
  statsTotales,
  brokenStats,
  uniqueStats,
};
