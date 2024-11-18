function* iterate(array)
{
    for(let value of array)
    {
        yield value;
    }
}
const it = iterate(["Diego", "Oscar", "Sergio", "Pedro", "Josue", "Hernan"]);
console.log(it.next());
console.log(it.next());
console.log(it.next());


export function* getId(items) {
    for (let value of items)
    {
        yield value
    }
}

const alphabet = getId(["a", "b", "c", "d", "e", "f"]);
console.log(alphabet.next().value)
console.log(alphabet.next().value)
console.log(alphabet.next().value)
console.log(alphabet.next().value)
