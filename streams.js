const fs =  require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// You can alose define encoding  'utf8'  thats it 

const stream = fs.createReadStream('./content/big-file.txt');

stream.on('data', (result) => {
    console.log(result)
})

stream.on('end', (result) => {
    console.log(result);
})

stream.on('error', (err) => console.log(err))