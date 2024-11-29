const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Async Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const fnAsyncAwait = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("HELLO");
}

console.log("Before");
fnAsyncAwait();
console.log("After");
