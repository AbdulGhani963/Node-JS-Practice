const fs = require("fs").promises;

// const util =  require('util');
// const readFilePromise =  util.promisify(fs.readFile);
// const writefilePromise =  util.promisify(fs.writeFile);

const start = async () => {
    try{
       const first = await fs.readFile('./content/first.txt');
       const second = await fs.readFile('./content/second.txt');

       fs.writeFile('./content/async.txt', 
       `This is Awesome ${first} ${second}`,
        {flag: 'a'}
        
       )
    }
    catch(error) {
       console.log(error);
    }
}

start();


// Second Method

// const getText = (path) => {
//   return new Promise((reject, resolve) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else  {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//     try {
//         const first =  await getText('./content/first.txt');
//         console.log(first);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// start();


// First Method

// const getText = (path) => {
//     return new Promise((reject, resolve) => {
//       fs.readFile(path, "utf8", (err, data) => {
//         if (err) {
//           reject(err);
//         } else  {
//           resolve(data);
//         }
//       });
//     });
//   };

// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
