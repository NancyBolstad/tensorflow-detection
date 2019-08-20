const fs = require('fs');

module.exports = function(path, extensions) {
  return fs
    .readdirSync(path)
    .filter(file => file.match(/.*\.(js|jsx|ts|tsx)$/))
    .map(file => ({
      name: file.replace(/\.[^/.]+$/, ''),
      path: `${path}/${file}`,
    }))
    .reduce((acc, file) => {
      acc[file.name] = file.path;
      return acc;
    }, extensions);
};
