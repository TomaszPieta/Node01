const fs = require('fs');

fs.readdir('./data/zadanie02', (error, files) => {
  if (error === null) {
    console.log('Files list:');
    files.forEach(file => console.log(file))
  } else {console.log('listing error'), error}
})