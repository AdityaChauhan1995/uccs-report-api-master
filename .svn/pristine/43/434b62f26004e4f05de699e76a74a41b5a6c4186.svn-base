const fs = require('fs');

const file = fs.createWriteStream('report.csv');

for(let i=0; i<= 200000; i++) {
  file.write(`Record${i},Col1 \n`);
}

file.end();
