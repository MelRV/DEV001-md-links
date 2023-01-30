const {mdLinks, isFile,
  readingFiles,
  isMarkdown,
} = require('../index.js');


describe('mdLinks', () => {
  /* it('should return a promise', () => {
    expect(mdLinks('./README.md')).toBe(typeof Promise);
  }); */
  it('should reject non-existent path', () => {
    mdLinks('./melissa/dev001/carpeta.md').catch((error) => {
      expect(error).toBe('the path DOESNT exists');
    });
  });
});
describe('isFile', () => {
  it('should be a function', () => {
    expect(typeof isFile).toBe('function');
  });
  it('isFile should return true if its a file', () => {
    expect(isFile('./node.txt')).toBe(true);
  });
});
describe('readingFile', () => {
  it('shoul be a function', () => {
    expect(typeof readingFiles).toBe('function');
  });
});
describe('isMarkdown', () => {
  it('should be a function', () => {
    expect(typeof isMarkdown).toBe('function');
  });
});
