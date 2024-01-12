const http = require('http');
const fs =  require('fs');


// const server =  http.createServer((req, resp) => {
//    fs.readFile('./content/big-file.txt', (err, result) => {
//       if(err){
//          return console.log(err);
//       }
//       resp.write(result.toString());
//    } )
// })


const server = http.createServer((req, resp) => {
   const fileStream = fs.createReadStream('./contents/big-file.txt');
   fileStream.on('data', (chunkData) => {
      resp.write(chunkData)
   })
   fileStream.on('end', () => {
      resp.end();
   })
   fileStream.on('error', (err) => {
      console.log(err);
      resp.end('file not found');
   })
})


server.listen(5000);