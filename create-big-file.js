const fs =  require('fs');

for(let i = 0; i < 10000; i++){
    fs.writeFileSync('./content/big-file.txt', `hello world ${i}\n`, {flag: 'a'})
}