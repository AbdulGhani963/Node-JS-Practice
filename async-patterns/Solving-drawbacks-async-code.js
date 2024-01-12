let a = 10;
let b = 0;

const waitingData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(30)
        }, 2000)
    })
}

const calculatingSum = async () => {
   try{
      const data = await waitingData();
      b = data
      console.log(a + b);
    }
    catch(err) {
        console.log(err)
    }
}

calculatingSum();

console.log("Ending.....");

// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(30);
//     }, 2000)
// })

// waitingData.then((data) => {
//     b = data;
//     console.log(a + b);
// })