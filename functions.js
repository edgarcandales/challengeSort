const fs = require('fs');

module.exports = {
  sortedByGenrefunc: function (arr) {
    return arr?.slice()?.sort((a, b) => (a[2] > b[2] ? 1 : -1));
  },
  sortedByLastNameFunc: function (arr, orderDirection) {
    let result =
      orderDirection === 'descending'
        ? arr?.slice()?.sort((a, b) => (a[0] < b[0] ? 1 : -1))
        : arr?.slice()?.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    return result;
  },
  sortedByBirthdayFunc: function (arr) {
    return arr
      ?.slice()
      ?.sort((a, b) => (new Date(a[3]).getTime() < new Date(b[3]).getTime() ? 1 : -1));
  },
  textBuildFunc: function (arr, name) {
    return arr.map((x) => x.join(name)).join('\n');
  },
  textWriteFunc: function (text, path) {
    fs.writeFile(path, text, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('Sorted file generated at' + path);
    });
  },
};
