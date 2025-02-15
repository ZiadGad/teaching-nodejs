const fs = require('fs');
// Blocking Code

// const whoAmI = fs.readFileSync('./dev-data/important.txt', 'utf-8');
// console.log(whoAmI);
// console.log('Reading File...');

// Non Blocking Code

// fs.readFile('./dev-data/important.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('Reading File...');

fs.readFile('./dev-data/dealingWithFS/start.txt', 'utf-8', (err, data1) => {
      if (err) console.log(err);
      console.log(data1);
      fs.readFile(
            `./dev-data/dealingWithFS/${data1}.txt`,
            'utf-8',
            (err, data2) => {
                  console.log(data2);
                  fs.readFile(
                        './dev-data/dealingWithFS/append.txt',
                        'utf-8',
                        (err, data3) => {
                              console.log(data3);
                              console.log('Writing File');
                              fs.writeFile(
                                    './dev-data/dealingWithFS/newFile.txt',
                                    `This is with asynchronous code \n${data2}\n\n${data3}`,
                                    (err) => {
                                          console.log('Finished');
                                    },
                              );
                        },
                  );
            },
      );
});
