/**
 * Arrow Function কী? (JavaScript Arrow Function in Bangla)
Arrow Function হলো JavaScript-এর একটি নতুন ফিচার যা ES6 (ECMAScript 2015) এ যুক্ত হয়েছে। এটি সাধারণ function expression-এর একটি সংক্ষিপ্ত এবং উন্নত সংস্করণ। Arrow function ব্যবহার করলে function keyword লেখার দরকার হয় না এবং কোড আরও সংক্ষিপ্ত ও সহজ হয়।

Arrow Function-এর গঠন (Syntax)
Arrow function লেখার মূল গঠন হলো:

js
Copy
Edit
const functionName = (parameter1, parameter2, ...) => {
    // Function body
    return result;
};
যদি এক লাইনেই function-এর কাজ শেষ করা যায়, তাহলে {} ও return শব্দ লেখার দরকার নেই।

Arrow Function-এর কিছু উদাহরণ (Examples)
1. সাধারণ ফাংশনের তুলনায় Arrow Function
❌ Regular Function
js
Copy
Edit
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
✅ Arrow Function
js
Copy
Edit
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
2. একটিমাত্র Parameter থাকলে
যদি function-এর একটি মাত্র parameter থাকে, তাহলে () ব্যবহার করার দরকার নেই।

js
Copy
Edit
const square = x => x * x;
console.log(square(4)); // Output: 16
3. কোনো Parameter না থাকলে
js
Copy
Edit
const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!
Arrow Function-এর সুবিধা
✅ কোড ছোট এবং সহজ
✅ this কনটেক্সটের সমস্যা নেই
✅ Function Expression-এর সংক্ষিপ্ত রূপ

Arrow Function-এর this কিভাবে কাজ করে?
Arrow Function-এর সবচেয়ে বড় সুবিধা হলো এটি this কনটেক্সট নিজেই ধরে রাখে। সাধারন function-এ this পরিবর্তন হতে পারে, কিন্তু Arrow Function-এ this লেক্সিক্যালি (বাইরের স্কোপ থেকে) নেয়।

js
Copy
Edit
const person = {
    name: "Rahim",
    sayName: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.sayName(); // Output: Rahim
এখানে Arrow Function ব্যবহার করার কারণে this পরিবর্তন হয়নি।

উপসংহার
Arrow Function JavaScript-এর অন্যতম গুরুত্বপূর্ণ একটি ফিচার, যা ফাংশন লেখাকে আরও সহজ করে তোলে। এটি সংক্ষিপ্ত এবং this-এর সাথে কাজ করার সময় সুবিধাজনক।
 */


const info = (x, y, z) => {

    const all = x + y + z
    const allZ = 200 * all
    console.log(allZ)

}
info(20, 30, 40)

const value = a => a * 200;

console.log(value(200))

const x = () => "minhazul abedin apon"

console.log(x())
