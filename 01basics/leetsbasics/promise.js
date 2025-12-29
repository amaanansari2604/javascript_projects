var addTwoPromises = async function(promise1, promise2) {
    
    const [val1, val2] = await Promise.all([promise1, promise2])
    return val1 + val2;
};

let promise1  = new Promise((resolve) => setTimeout(() => resolve(2), 50));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(3), 20));

console.log(addTwoPromises(promise1, promise2)); 

// this part for waiting for the all promises to come the above async function to complete before moving on