const {mdLinks} =require('./index.js');
mdLinks('./README.md').then(()=>{
  console.log('the path exist');
}).catch((error)=>{
  console.log(error);
});
