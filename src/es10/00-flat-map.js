//flat
const array = [1, 2, 3, 4, 5,[10,11,12,13,14,15,[20,21,22,["a","b","c"]]],1,1,[6,7,8,9]];
console.log(array.flat(3));


//flatMap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v=>[v,v*10]));
