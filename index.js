const fs = require('fs');

fs.readFile('./code-test-input-files/comma.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //////////////////////Seting of Functions//////////////////////
  const splitingByLinefunc = (text) => {
    return text?.split('\n').map((x) => x.split(','));
  };

  let array = splitingByLinefunc(data);

  const sortedByGenrefunc = (arr) => {
    return arr?.slice()?.sort((a, b) => (a[3] > b[3] ? 1 : -1));
  };

  const sortedByLastNameFunc = (arr, orderDirection) => {
    let result =
      orderDirection === 'descending'
        ? arr?.slice()?.sort((a, b) => (a[0] < b[0] ? 1 : -1))
        : arr?.slice()?.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    return result;
  };
  const sortedByBirthdayFunc = (arr) => {
    return arr
      ?.slice()
      ?.sort((a, b) => (new Date(a[4]).getTime() > new Date(b[4]).getTime() ? 1 : -1));
  };

  const textBuildFunc = (arr) => {
    return arr.map((x) => x.join()).join('\n');
  };

  const textWriteFunc = (text, path) => {
    fs.writeFile(path, text, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('Sorted file generated at' + path);
    });
  };

  //////////////////////Sort and Write of files//////////////////////

  const Sort1 = textBuildFunc(sortedByGenrefunc(sortedByBirthdayFunc(array)));
  const Sort2 = textBuildFunc(sortedByLastNameFunc(sortedByBirthdayFunc(array)));
  const Sort3 = textBuildFunc(sortedByLastNameFunc(array, 'descending'));

  textWriteFunc(Sort1, './code-test-input-files/Sort1.txt');
  textWriteFunc(Sort2, './code-test-input-files/Sort2.txt');
  textWriteFunc(Sort3, './code-test-input-files/Sort3.txt');
});
