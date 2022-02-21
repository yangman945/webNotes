class Person {
    public readonly name :string;
    constructor(_name:string ){
        this.name = _name;
    }
}
let tong = new Person('托尼')
console.log(tong.name)