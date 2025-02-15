/**
 * JavaScript Callbacks এবং Closures (বাংলায় ব্যাখ্যা)
1. Callbacks:
একটি callback হলো এমন একটি ফাংশন যা অন্য একটি ফাংশনের আর্গুমেন্ট (parameter) হিসাবে পাস করা হয় এবং প্রয়োজন হলে পরবর্তীতে সেই ফাংশনটি কল করা হয়। এটি JavaScript-এ asynchronous কোড পরিচালনার জন্য ব্যাপকভাবে ব্যবহৃত হয়।

উদাহরণ:
javascript
Copy
Edit
function processUserInput(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

processUserInput("Rahim", sayGoodbye);
🔹 এখানে sayGoodbye ফাংশনটি processUserInput-এ callback হিসেবে পাঠানো হয়েছে, যা পরে execute হবে।

প্রয়োজনীয়তা:
Asynchronous operations: যেমন API কল, ফাইল পড়া, ডাটাবেস অপারেশন।
Event handling: ব্যবহারকারীর ক্লিক, টাইপিং ইত্যাদির জন্য।
2. Closures:
একটি closure হলো এমন একটি ফাংশন যা তার বাইরে থাকা scope থেকে ভেরিয়েবল অ্যাক্সেস করতে পারে, এমনকি সেই scope শেষ হয়ে যাওয়ার পরেও। এটি JavaScript-এর lexical scoping এর উপর ভিত্তি করে কাজ করে।

উদাহরণ:
javascript
Copy
Edit
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("Hello");
newFunction("World");
🔹 এখানে innerFunction ফাংশনটি outerFunction-এর বাইরে থাকা ভেরিয়েবল outerVariable অ্যাক্সেস করতে পারছে, কারণ এটি একটি closure তৈরি করেছে।

প্রয়োজনীয়তা:
Encapsulation: ব্যক্তিগত (private) ডাটা সংরক্ষণের জন্য।
State maintenance: ফাংশনের মধ্যে স্টেট (data) ধরে রাখার জন্য।
Callbacks এবং Event Listeners-এ ব্যবহৃত হয়।
সংক্ষেপে পার্থক্য:
বিষয়	Callbacks	Closures
কী?	অন্য ফাংশনে পাস করা হয় এবং পরবর্তীতে execute করা হয়।	একটি ফাংশন তার parent scope থেকে ভেরিয়েবল retain করে।
ব্যবহার	Asynchronous operations, event handling	Data hiding, maintaining state
উদাহরণ	API calls, setTimeout, event listeners	Private variables, currying
এই দুটি ধারণা ভালোভাবে বুঝলে JavaScript-এ asynchronous programming এবং functional programming আরও সহজ হবে! 🚀

 */

///call back

function allBack(name, callback) {

    console.log(` hello, ${name} `)
    callback()

}

function stay() {
    console.log("good bye")
}

allBack("minhazul abedin apon", stay)


function V(number, NameCall) {

    console.log(` that number is ${number} `)
    NameCall()

}

function allNums() {
    console.log(`1234567890987654321`)
}

V(1950374409, allNums)


function calls(name, VBack) {
    console.log(`the name is >>> ${name}`)
    VBack()
}

function otherBack() {
    console.log('all okay baby')
}

calls('minhaz the react developer', otherBack)


//closures

