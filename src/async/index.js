const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => {
            resolve('Async')
        }, 3000) : reject(new Error('Error'));
    })
}

const funcOth = async () => {
    const name = await fnAsync();
    console.log(name);
    console.log('Holaj');
}

console.log("Before");
funcOth();
console.log("After");