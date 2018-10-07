const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (error,data) => {
  if (error === null) {
    data = JSON.parse(data).reduce((a, b) => a + b);
    console.log(data);
  } else {console.log('error', error)}
})

// fs.writeFile('./data/zadanie01/sum.txt', 'Hello World', error => {
//   if (error === null) {
//     fs.readFile('./data/zadanie01/sum.txt', 'utf8', (error, data) => {
//       if (error === null) {console.log('write & read success', data)}
//       else {console.log('error', error)}
//     });
//   }
//   else {console.log('write error'), error};
// });