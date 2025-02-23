

//let , const , var

let name1 = "minhazul abedin apon"
console.log(name1);

const name2 = "apon the javaScript developer"
console.log(name2)

var skill = "react.js"
console.log(skill)

//Arrow Functions

const arw = (a, v) => a + v
console.log(arw(100, 200))

//Template Literals

const n1 = "apon"
const n2 = "javascript"

console.log(` ${n1} is a ${n2} developer`)

//Destructuring 

const info = {

    name: 'apon',
    age: 23,
    profession: 'software developer'

}

const { name, age, ...rest } = info

console.log(name, age, rest)