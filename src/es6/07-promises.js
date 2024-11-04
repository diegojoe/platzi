const promiseFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Success')
        }else{
            reject('Error')
        }
    })
}

promiseFunction()
    .then(response => console.log(response))
    .catch(response => console.log(response))
