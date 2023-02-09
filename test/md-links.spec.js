const {mdLinks, isFile,
  readingFiles,
  isMarkdown,
  getLinks,
  getAbsolutePath,
  validateLinks,
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
  it('should be a function', () => {
    expect(typeof readingFiles).toBe('function');
  });
});
describe('isMarkdown', () => {
  it('should be a function', () => {
    expect(typeof isMarkdown).toBe('function');
  });
  it('md extension', () => {
    expect(isMarkdown('./README.md')).toBe(true);
  });
  it('not a md extension', () => {
    expect(isMarkdown('./node.txt')).toBe(false);
  });
});
describe('getLinks', () => {
  it('should be a function', () => {
    expect(typeof getLinks).toBe('function');
  });
});
describe('getAbsolutePath', () => {
  it('should be a function', () => {
    expect(typeof getAbsolutePath).toBe('function');
  });
});
describe('validateLinks', () => {
  it('should be a function', () => {
    expect(typeof validateLinks).toBe('function');
  });
  
});
