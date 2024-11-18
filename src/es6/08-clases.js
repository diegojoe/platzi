class user {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    speak(){
        return "Hello";
    }
    get uAge() {
        return this.age;
    }

    set uAge(age) {
        this.age = age;
    }
    get uname() {
        return this.name;
    }
}
const userDiego = new user("Diego",41); // Hello
console.log(userDiego.uAge);
console.log(userDiego.uAge = 20);
