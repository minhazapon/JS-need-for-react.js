/**
 * JavaScript Hoisting কী? (বাংলায় ব্যাখ্যা)
JavaScript-এ Hoisting হলো এমন একটি মেকানিজম যেখানে ভ্যারিয়েবল এবং ফাংশন ডিক্লারেশনগুলো স্বয়ংক্রিয়ভাবে স্ক্রিপ্টের টপ-এ (উপরের দিকে) নিয়ে যাওয়া হয় Execution Context তৈরি হওয়ার সময়। এর মানে হচ্ছে, আপনি কোডের যে কোনো জায়গায় ভ্যারিয়েবল বা ফাংশন ডিক্লেয়ার করলেও, JavaScript ইন্টারপ্রিটার সেগুলোকে শুরুতেই মনে রাখে।

ভ্যারিয়েবল Hoisting (Var, Let, Const)
js
Copy
Edit
console.log(name); // Output: undefined
var name = "Rahim";
console.log(name); // Output: Rahim
কেন undefined এল?
👉 কারণ var name; ডিক্লারেশনটি উপরে চলে গেছে, কিন্তু মান (value) অ্যাসাইনমেন্ট পরে হয়েছে।

js
Copy
Edit
var name;
console.log(name); // undefined
name = "Rahim";
console.log(name); // Rahim
Let & Const এর ক্ষেত্রে
js
Copy
Edit
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age);
👉 let এবং const Hoisting হয়, কিন্তু Initial Value পায় না, তাই ReferenceError দেয়।

Hoisting in Function
js
Copy
Edit
greet(); // Output: Hello World

function greet() {
    console.log("Hello World");
}
👉 ফাংশন Declaration পুরোপুরি Hoist হয়, তাই আগে কল করলেও সমস্যা হয় না।

Function Expression Hoisting
js
Copy
Edit
sayHello(); // TypeError: sayHello is not a function
var sayHello = function() {
    console.log("Hello!");
};
👉 এখানে Hoisting হয়, কিন্তু undefined হিসেবে থাকে কারণ এটি Expression, Declaration নয়।

সংক্ষেপে JavaScript Hoisting:
1️⃣ Var hoist হয়, কিন্তু undefined দেয়।
2️⃣ Let & Const hoist হয়, কিন্তু ইনিশিয়ালাইজ না হওয়া পর্যন্ত ReferenceError দেয়।
3️⃣ Function Declaration পুরোপুরি hoist হয়।
4️⃣ Function Expression hoist হয়, কিন্তু undefined হিসেবে থাকে।
 */