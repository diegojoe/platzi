const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1');
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2');
    }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rechazado');
    }, 3000);
});

Promise.allSettled([promise1, promise2, promise3])
    .then(response => {
        console.log(response);
    }); // [ { status: 'fulfilled', value: 'promise1' }, { status: 'fulfilled', value: 'promise2' }, { status: 'rejected', reason: 'Rejected' } ]
