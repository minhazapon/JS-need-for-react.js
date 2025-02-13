/**
 * Spread & Rest Operator কি? (JavaScript - বাংলা ব্যাখ্যা)
Spread (...) ও Rest (...) Operator দেখতে একই রকম হলেও, এদের কাজ সম্পূর্ণ আলাদা।

১. Spread Operator (...)
Spread Operator মূলত একটি Array বা Object কে Expand (প্রসারিত) করতে ব্যবহৃত হয়। অর্থাৎ, এটি কোন Iterable (যেমন: Array, Object, String) এর মধ্যে থাকা Elements গুলোকে আলাদা আলাদা করে ছড়িয়ে দেয়।

✅ উদাহরণ ১: Array Copy & Merge
js
Copy
Edit
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]
এখানে numbers অ্যারের সব উপাদান newNumbers-এ ছড়িয়ে দেওয়া হয়েছে এবং নতুন কিছু উপাদান যোগ করা হয়েছে।

✅ উদাহরণ ২: Object Copy & Merge
js
Copy
Edit
const person = { name: "Rahim", age: 25 };
const newPerson = { ...person, city: "Dhaka" };

console.log(newPerson); 
// Output: { name: "Rahim", age: 25, city: "Dhaka" }
এখানে person অবজেক্টটি কপি করে city নামের নতুন একটি প্রপার্টি যোগ করা হয়েছে।

২. Rest Operator (...)
Rest Operator ব্যবহার করা হয় একটি Function-এ একাধিক Argument গ্রহন করতে বা Object/Array-এর বাকি অংশ সংগ্রহ করতে। এটি মূলত অনেকগুলো মানকে একত্রে একটি Array বা Object-এ পরিণত করে।

✅ উদাহরণ ১: Function-এ Multiple Arguments গ্রহণ করা
js
Copy
Edit
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(10, 20, 30, 40)); // Output: 100
এখানে ...numbers সব Arguments কে একত্রে একটি Array হিসেবে ধরে নিচ্ছে।

✅ উদাহরণ ২: Object Destructuring-এর মাধ্যমে বাকি অংশ গ্রহণ করা
js
Copy
Edit
const student = { name: "Karim", age: 22, dept: "CSE", country: "Bangladesh" };

const { name, age, ...rest } = student;

console.log(name); // Output: Karim
console.log(rest); // Output: { dept: "CSE", country: "Bangladesh" }
এখানে name ও age বের করে নেওয়া হয়েছে, এবং বাকি অংশ rest অবজেক্টে সংরক্ষিত হয়েছে।

Spread vs Rest Operator: মূল পার্থক্য
Feature	Spread (...)	Rest (...)
ব্যবহার	কোনো Array বা Object-এর উপাদান ছড়িয়ে দিতে	Function-এর Arguments বা অবশিষ্ট অংশ সংগ্রহ করতে
কোথায় ব্যবহৃত হয়?	Function call, Array/Object copy/merge	Function Parameter, Destructuring
উদাহরণ	[...arr], {...obj}	(...args), {...rest}
শেষ কথা
Spread (বিস্তারণ) করা হয়।
Rest (সংগ্রহ) করা হয়।
এটাই সংক্ষেপে Spread & Rest Operator-এর ব্যাখ্যা।
 */

//spread

const values = [1, 2, 3, 5]

const allValue = [...values, 6, 7, 8, 9, 10]

console.log(allValue)

//rest

const information = {

    name: 'apon',
    age: '23',
    language: 'javaScript',
    position: 'front end developer',
    company: 'toptal'

}

const { name, age, ...rest } = information

console.log(name, age, rest)