async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const asyncGen = asyncGenerator();
console.log(asyncGen.next().then((x) => console.log(x.value)));
console.log(asyncGen.next().then((x) => console.log(x.value)));
console.log(asyncGen.next().then((x) => console.log(x.value)));
console.log("Hello World");
