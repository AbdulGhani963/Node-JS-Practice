const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "content/apple.txt");

// fs.writeFileSync(filePath, 'This is simple text file');
// fs.readFile(filePath, "utf8", (err, item) => {
//   if (!err) {
//     console.log(item);
//   } else {
//     console.log(err);
//   }
// });

// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if(!err) {
//         console.log("file is updated!");
//     }
// })

// fs.rename(filePath, `${__dirname}/content/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file name is updated");
//   }
// });

fs.unlinkSync(`${__dirname}/content/fruit.txt`);