class user{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    speak(){
        return `My name is ${this._name} and I am ${this._age} years old`;
    }

    get #uAge(){
        return this._age;
    }
    set #uAge(age){
        if(age < 0){
            console.log('Age cannot be negative');
        }else{
            this._age = age;
        }
    }
}

const userJohn = new user('John', 30);
console.log(userJohn.#speak());
console.log(userJohn.uAge);
console.log(userJohn.uAge=100);
console.log(userJohn.speak());
