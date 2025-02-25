

//let , const , var

const { default: axios } = require("axios")

let name1 = "minhazul abedin apon"
// console.log(name1);

const name2 = "apon the javaScript developer"
// console.log(name2)

var skill = "react.js"
// console.log(skill)

//Arrow Functions

const arw = (a, v) => a + v
// console.log(arw(100, 200))

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
// console.log(name, age, rest)

//Spread & Rest Operator

const arr1 = [1, 2, 3, 4, 5, 6, 7]

const arr2 = [22, 33, 44, 55, 66, 77, ...arr1]

const allArr = [...arr2]

// console.log(allArr)

const allData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 222, 33, 44, 66, 77, 88, 99]

const { a, b, ...restZ } = allData

console.log(allData)

//Default Parameters 

const para = (a = 10, b = 200) => {
    console.log(a + b)
}
// para()

//Optional Chaining 

const op = {

    s1: 'html',
    s2: 'css',
    s3: 'javaScript',
    s4: 'react.js',

}
console.log(
    op.s1,
    op.s2,
    op.s3,
    op.s4,
    op?.s5?.a
)


//HOFs

//map

const number = [1, 2, 3, 4, 5, 6, 7]

const numberMap = number.map(num => num * 4)

// console.log(numberMap)

//filter
const products = [

    {
        name: 'mango', price: 200
    },
    {
        name: 'jam', price: 300
    },
    {
        name: 'kathal', price: 400
    },

]

const allProducts = products.filter(products => products.price > 200)

// console.log(allProducts)

//reduce

const values = [

    {
        name: 'iPhone', price: 3000
    },
    {
        name: 'sumsung', price: 4000
    },
    {
        name: 'redmi', price: 6000
    },

]

const allValues = values.reduce((acc, pro) => acc + pro.price, 0)

console.log(allValues)


//CALL BACKS 

function names(x, callback) {

    console.log(` we are looking into ${x} `)

    callback()
}

function all() {

    console.log('hello minhaz , why u call us')

}

// names('apon the react expert', all)


//closures

function parentClose(z) {
    return function childClose(y) {
        console.log(` hello wre looking into ${z} and ${y} `)
    }
}

// const zy = parentClose('react')

// zy('DSA expert')


//promise

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("data get successfully")
            } else {
                reject('data get fail')
            }
        }, 1000);
    });
}

fetchData()
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

//Async/Await

const fetchAsync = async () => {

    try {

        const dataIs = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(dataIs)

    } catch (error) {

        console.log(error)

    }

}
// fetchAsync();

// fetch


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

//axios

axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        console.log(error)
    })








