const {mdLinks} = require('../index.js');


describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!');
  });
  /* it('should return a promise', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });*/
  it('should reject non-existent path', () => {
    return mdLinks('/melissa/dev001/carpeta.md').catch((error) => {
      expect(error).toBe('the path DOESN`T exists');
    });
  });
});
