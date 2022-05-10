const fs = require('fs');
const sortedByGenrefunc = require('./functions').sortedByGenrefunc;
const sortedByLastNameFunc = require('./functions').sortedByLastNameFunc;
const sortedByBirthdayFunc = require('./functions').sortedByBirthdayFunc;
const textBuildFunc = require('./functions').textBuildFunc;
const textWriteFunc = require('./functions').textWriteFunc;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('specify separator', (name) => {
  console.log(`This is the separator: ${name}!`);
  readline.close(name);
  const separator = name;
  let x;
  switch (name) {
    case ',':
      x = 'comma';
      break;
    case '|':
      x = 'pipe';
      break;
    case ' ':
      x = 'space';
      break;
    default:
      x = 'space';
      break;
  }

  const pathOfFile = `./code-test-input-files/${x}.txt`;

  fs.readFile(pathOfFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const splitingByLinefunc = (text) => {
      return text?.split('\n').map((x) => x.split(separator));
    };

    let array = splitingByLinefunc(data);

    const Sort1 = textBuildFunc(sortedByGenrefunc(sortedByBirthdayFunc(array)), name);

    const Sort2 = textBuildFunc(
      sortedByLastNameFunc(sortedByBirthdayFunc(array, 'ascending')),
      name
    );

    const Sort3 = textBuildFunc(sortedByLastNameFunc(array, 'descending'), name);

    textWriteFunc(Sort1, './code-test-input-files/Sort1.txt');
    textWriteFunc(Sort2, './code-test-input-files/Sort2.txt');
    textWriteFunc(Sort3, './code-test-input-files/Sort3.txt');
  });
});
