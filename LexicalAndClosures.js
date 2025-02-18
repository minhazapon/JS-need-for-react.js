/**
 * Lexical Scope কী?
Lexical Scope বলতে বোঝায় যে একটি ফাংশন কোন ভ্যারিয়েবল অ্যাক্সেস করতে পারবে, তা নির্ধারিত হয় সে কোথায় লেখা হয়েছে।

🔹 Example:

javascript
Copy
Edit
function outer() {
  let outerVar = "I am from outer function";

  function inner() {
    console.log(outerVar); // এটি outerVar পাবে, কারণ এটি lexical scope-এর মধ্যে আছে।
  }

  inner();
}

outer();
✅ এখানে inner() ফাংশনটি outerVar ব্যবহার করতে পারছে, কারণ এটি lexically outer()-এর মধ্যে আছে।

👉 Lexical Scope-এর মূল নিয়ম:

Child function তার parent function-এর ভ্যারিয়েবল অ্যাক্সেস করতে পারে।
কিন্তু Parent function তার child function-এর ভ্যারিয়েবল সরাসরি অ্যাক্সেস করতে পারে না।
Closures কী?
Closure তখন হয় যখন একটি ফাংশন তার parent scope-এর ভ্যারিয়েবল মনে রাখে এবং পরবর্তীতে ব্যবহার করতে পারে, এমনকি parent ফাংশনটি execution শেষ হয়ে গেলেও।

🔹 Example:

javascript
Copy
Edit
function outer() {
  let count = 0; // Private variable

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // `outer()` এক্সিকিউট হয়ে গেছে, কিন্তু এর ভিতরের `inner` এখনও এক্সেস করতে পারছে

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
✅ এখানে counter ফাংশনটি count ভ্যারিয়েবল মনে রাখতে পারছে, কারণ এটি closure তৈরি করেছে।

👉 Closures-এর মূল নিয়ম:

Inner function তার parent function-এর variables মনে রাখতে পারে।
Parent function execution শেষ হলেও inner function সেই variables ব্যবহার করতে পারে।
 */