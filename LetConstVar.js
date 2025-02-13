/**
 * JavaScript-এর var, let, এবং const এর পার্থক্য (Bangla)
JavaScript-এ var, let, এবং const তিনটি ভেরিয়েবল ডিক্লেয়ার করার জন্য ব্যবহৃত হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। নিচে সহজভাবে পার্থক্য তুলে ধরা হলো—

১. var
✅ এটি JavaScript-এর পুরনো (ES5) পদ্ধতি ভেরিয়েবল ডিক্লেয়ারের জন্য।
✅ এটি ফাংশন-স্কোপড (function-scoped), অর্থাৎ শুধু ফাংশনের মধ্যেই সীমাবদ্ধ থাকে।
✅ এটি হোস্টিং (hoisting) সমর্থন করে, মানে এটি ডিক্লেয়ার করার আগেও ব্যবহার করা যায় (যদিও এটি undefined থাকবে)।
✅ এটি রিডিক্লেয়ার (redeclare) করা যায়, যা কিছু ক্ষেত্রে সমস্যা তৈরি করতে পারে।

🔹 উদাহরণ:

javascript
Copy
Edit
function example() {
    var x = 10;
    if (true) {
        var x = 20; // আগের x ভেরিয়েবলকে ওভাররাইট করবে
        console.log(x); // 20
    }
    console.log(x); // 20
}
example();
🔹 সমস্যা: ব্লকের বাইরে থেকেও x পরিবর্তিত হয়ে যায়।

২. let
✅ এটি ES6 (ECMAScript 2015) থেকে এসেছে।
✅ এটি ব্লক-স্কোপড (block-scoped), অর্থাৎ {} ব্লকের মধ্যেই সীমাবদ্ধ থাকে।
✅ এটি হোস্টিং সমর্থন করে, কিন্তু ডিক্লেয়ার করার আগে ব্যবহার করলে ReferenceError দিবে।
✅ এটি রিডিক্লেয়ার করা যায় না, তবে আপডেট করা যায়।

🔹 উদাহরণ:

javascript
Copy
Edit
function example() {
    let x = 10;
    if (true) {
        let x = 20; // ব্লকের মধ্যে নতুন x তৈরি হলো
        console.log(x); // 20
    }
    console.log(x); // 10 (বাইরের x অপরিবর্তিত)
}
example();
🔹 উপকারিতা: ব্লকের বাইরে থাকা ভেরিয়েবল পরিবর্তিত হয় না।

৩. const
✅ এটি ES6 থেকে এসেছে এবং কনস্ট্যান্ট ভেরিয়েবল তৈরির জন্য ব্যবহৃত হয়।
✅ এটি ব্লক-স্কোপড (block-scoped)।
✅ একবার ডিক্লেয়ার করলে পরিবর্তন করা যায় না, মানে reassign করা যায় না।
✅ তবে অবজেক্ট ও অ্যারে হলে তার মান পরিবর্তন করা যায় (কিন্তু পুরোপুরি নতুন করে সেট করা যায় না)।

🔹 উদাহরণ:

javascript
Copy
Edit
const x = 10;
x = 20; // ❌ TypeError: Assignment to constant variable.
🔹 অবজেক্ট ও অ্যারে ক্ষেত্রে:

javascript
Copy
Edit
const person = { name: "Rahim" };
person.name = "Karim"; // ✅ ঠিক আছে
console.log(person.name); // Karim

person = { age: 25 }; // ❌ TypeError: Assignment to constant variable.
সংক্ষেপে পার্থক্য:
Feature	var	let	const
Scope	Function-scoped	Block-scoped	Block-scoped
Hoisting	Yes (as undefined)	Yes (but error if used before declaration)	Yes (but error if used before declaration)
Redeclaration	Yes	No	No
Reassignment	Yes	Yes	No (unless object/array properties are modified)
কোনটি ব্যবহার করবেন?
✅ var এড়িয়ে চলা ভালো, কারণ এটি স্কোপ সংক্রান্ত সমস্যা তৈরি করতে পারে।
✅ let ব্যবহার করা ভালো, যদি মান পরিবর্তনের প্রয়োজন হয়।
✅ const ব্যবহার করা ভালো, যদি মান পরিবর্তন করা না হয় (অথবা অবজেক্ট/অ্যারে ব্যবহার করা হয়)।

🚀 সেরা অভ্যাস: সম্ভব হলে const ব্যবহার করুন, প্রয়োজনে let, আর var ব্যবহার এড়িয়ে চলুন!

 */

function VARS(a, b) {

    var value = a + b
    var all = 100 + value
    console.log(all)

}

VARS(10, 20)

function letZ(x, y) {

    let a = x * y
    let b = 200 * a
    console.log(b)

}
letZ(20, 40)

function constZ(v, z) {

    const vz = v + z
    console.log(vz)

}
constZ(100, 200)