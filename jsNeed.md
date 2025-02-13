React.js শেখার আগে JavaScript-এর কিছু গুরুত্বপূর্ণ বিষয় জানা দরকার, যা React-এ কাজ করার জন্য অত্যন্ত গুরুত্বপূর্ণ। নিচে প্রয়োজনীয় বিষয়গুলোর তালিকা দেওয়া হলো—

1. JavaScript ES6+ Features
React মূলত ES6+ (ECMAScript 2015+) ফিচারগুলোর উপর নির্ভরশীল। তাই এই বিষয়গুলো জানা দরকার:

Let, Const vs Var → Variable declaration
Arrow Functions → (a, b) => a + b;
Template Literals → `Hello, ${name}`
Destructuring → const {name, age} = person;
Spread & Rest Operator → const newArr = [...arr];
Default Parameters → function sum(a = 10, b = 5) {}
Modules & Import/Export → import { something } from './file';
Optional Chaining (?.) → user?.address?.city


2. DOM Manipulation (Basic Understanding)
React ভার্চুয়াল DOM ব্যবহার করে, তবে বেসিক DOM Manipulation বোঝা দরকার, যেমন:

document.getElementById()
document.querySelector()
addEventListener()


3. Functions & Callbacks
React-এ functional programming অনেক গুরুত্বপূর্ণ, তাই বুঝতে হবে:

Higher-Order Functions → map(), filter(), reduce()
Callbacks এবং Closures
Promise এবং Async/Await


4. JavaScript Objects & Arrays
React-এ props এবং state অনেক ক্ষেত্রেই object & array আকারে থাকে, তাই এই বিষয়গুলো জানা দরকার:

Object.keys(), Object.values(), Object.entries()
Array Methods → map(), filter(), reduce(), find(), some(), every()
Array Spread & Destructuring



5. Event Handling & Scope
React-এ ইভেন্ট হ্যান্ডলিং গুরুত্বপূর্ণ:

this কিভাবে কাজ করে (especially in class components)
Arrow function ব্যবহার করে event handling
bind(this) কিভাবে কাজ করে


6. Asynchronous JavaScript (AJAX, Fetch, Axios)
React-এ API কল করতে জানতে হবে:

fetch() ব্যবহার
axios দিয়ে API কল
async/await


7. Closures & Lexical Scope
React hooks-এ কাজ করার জন্য Closures & Lexical Scope ভালোভাবে বোঝা দরকার।

8. Truthy & Falsy Values
React-এ কন্ডিশনাল রেন্ডারিং করার সময় এগুলো জানা দরকার:


js
Copy
Edit
if (someValue) { 
  console.log("Truthy");
} else { 
  console.log("Falsy");
}


9. JavaScript Classes & Prototypes (For Class Components)
যদিও React-এ এখন Functional Components বেশি জনপ্রিয়, তবে class components বুঝতে গেলে JavaScript classes & prototypes জানতে হবে।

10. LocalStorage & SessionStorage
React-এ data persistency এর জন্য এগুলো দরকার হতে পারে।


localStorage.setItem("key", value);
localStorage.getItem("key");
sessionStorage.setItem("key", value);


✅ সংক্ষেপে:
👉 ES6+ features (let, const, arrow function, destructuring, spread/rest, modules)
👉 Functions & Callbacks
👉 Array Methods (map(), filter(), reduce())
👉 Async/Await & Fetch API
👉 DOM Manipulation (Basic)
👉 Event Handling & Scope (this, bind)
👉 Objects & Arrays (spread, destructuring, Object methods)



//gtp_link: https://chatgpt.com/c/67aa08ab-fbd0-800f-9359-288588642bf1?fbclid=IwZXh0bgNhZW0CMTAAAR2ihD84gqSW08ioKUeriHyo0vkAdUaHWxht_DkqG39orNqxminNk04f0ds_aem_16pdSmlajM5XjqOeyfD2fw