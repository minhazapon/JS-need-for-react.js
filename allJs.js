

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

//Spread & Rest Operator

const arr1 = [1, 2, 3, 4, 5, 6, 7]

const arr2 = [22, 33, 44, 55, 66, 77, ...arr1]

const allArr = [...arr2]

console.log(allArr)

const allData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 222, 33, 44, 66, 77, 88, 99]

const { a, b, ...restZ } = allData

console.log(allData)

//Default Parameters 

const para = (a = 10, b = 200) => {
    console.log(a + b)
}
para()

