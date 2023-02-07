const {mdLinks,
  statsTotales,
  uniqueStats,
  brokenStats,
} = require('./index.js');

const ruta = process.argv[2];
let isValid = false;
if (process.argv[3] == '--validate') {
  isValid = true;
};
console.log(ruta);
mdLinks(ruta, {validate: isValid}).then((result) => {
  if (process.argv[4] == '--stats' && process.argv[3] == '--validate') {
    console.log(`Total: ${statsTotales(result)}`);
    console.log(`Unique: ${uniqueStats(result)}`);
    console.log(`Broken: ${brokenStats(result)}`);
  } else if (process.argv[4] == '--stats') {
    console.log(`Total: ${statsTotales(result)}`);
    console.log(`Unique: ${uniqueStats(result)}`);
  }
})
    .catch((error) => {
      console.log(error);
    });
