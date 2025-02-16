/**
 * JavaScript এর Array Spread এবং Destructuring কী? (বাংলায় ব্যাখ্যা)
১. Array Spread (...) অপারেটর
Spread অপারেটর (...) ব্যবহার করে একটি অ্যারে বা অবজেক্টকে বিস্তৃত (spread out) করা যায়। এটি মূলত নতুন অ্যারে তৈরি করা, অ্যারের উপাদান কপি করা বা একাধিক অ্যারে একত্রিত করার জন্য ব্যবহৃত হয়।

উদাহরণ ১: একটি অ্যারে কপি করা
js
Copy
Edit
const numbers = [1, 2, 3];
const newNumbers = [...numbers]; // নতুন কপি তৈরি
console.log(newNumbers); // [1, 2, 3]
উদাহরণ ২: দুটি অ্যারে একত্রিত করা
js
Copy
Edit
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
উদাহরণ ৩: নতুন উপাদান যোগ করা
js
Copy
Edit
const fruits = ["Apple", "Banana"];
const newFruits = ["Orange", ...fruits, "Mango"];

console.log(newFruits); 
// ["Orange", "Apple", "Banana", "Mango"]
২. Array Destructuring
Destructuring ব্যবহার করে সহজেই অ্যারের উপাদানগুলো আলাদা করে ভেরিয়েবলে রাখা যায়।

উদাহরণ ১: সাধারণ Destructuring
js
Copy
Edit
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
উদাহরণ ২: নির্দিষ্ট ইনডেক্স স্কিপ করা
js
Copy
Edit
const numbers = [100, 200, 300, 400];

const [first, , third] = numbers;

console.log(first); // 100
console.log(third); // 300
উদাহরণ ৩: বাকী উপাদান গুলো সংগ্রহ করা (Rest Operator)
js
Copy
Edit
const colors = ["Red", "Green", "Blue", "Yellow"];

const [firstColor, ...remainingColors] = colors;

console.log(firstColor); // "Red"
console.log(remainingColors); // ["Green", "Blue", "Yellow"]
সংক্ষেপে পার্থক্য
বৈশিষ্ট্য	Spread ...	Destructuring
উদ্দেশ্য	নতুন অ্যারে তৈরি, একত্রিত করা	অ্যারের উপাদান আলাদা করে ভেরিয়েবলে রাখা
অপারেটর	... (spread)	[] (array destructuring)
ব্যবহারের ধরন	অ্যারে কপি, মার্জ, নতুন উপাদান যোগ	অ্যারের মান এক্সট্রাক্ট করা
এগুলো JavaScript-এ অনেক ব্যবহৃত হয় এবং কোডকে সংক্ষিপ্ত ও পরিষ্কার রাখতে সাহায্য করে! 🚀
 */