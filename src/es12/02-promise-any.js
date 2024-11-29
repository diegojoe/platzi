const promise1 = new Promise((resolve, reject) => { reject('WOOOOPS algo salio mal');});
const promise3 = new Promise((resolve, reject) => { resolve('promise3 exitosa');});
const promise2 = new Promise((resolve, reject) => { resolve('promise2 completada');});

Promise.any([promise1,promise3,promise2]).then((value) => {
  console.log(value); // promise2 completada
});
