let a = 10;
let b = 10;

setTimeout(() => {
    b = 20;
}, 2000)

// b = 20 but result is a = 10, b = 10 (First declaration) a + b = 20 
console.log(a + b);