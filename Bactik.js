/**
 * JavaScript এর Template Literals (টেমপ্লেট লিটারাল) কি?
Template Literals হলো ES6 (ECMAScript 2015) থেকে যোগ হওয়া একটি ফিচার যা স্ট্রিং তৈরির সহজ ও সুবিধাজনক উপায় প্রদান করে। এটি backticks (`) ব্যবহার করে স্ট্রিং লেখার সুবিধা দেয় এবং এর মাধ্যমে স্ট্রিং ইন্টারপোলেশন (string interpolation) ও মাল্টি-লাইন স্ট্রিং (multi-line string) সহজ হয়ে যায়।

Template Literals এর সুবিধা
String Interpolation – সহজে ভ্যারিয়েবল ও এক্সপ্রেশন যুক্ত করা যায়।
Multi-line String – নতুন লাইন ব্যবহারের জন্য \n ব্যবহার করতে হয় না।
Readable Code – কোড পড়তে ও বুঝতে সহজ হয়।
Template Literals এর ব্যবহার
1. সাধারণ স্ট্রিং তৈরিতে
js
Copy
Edit
let message = `Hello, JavaScript!`;
console.log(message);
📌 এখানে সাধারণ স্ট্রিং তৈরি করতে backticks (`) ব্যবহার করা হয়েছে।

2. String Interpolation (ভ্যারিয়েবল বা এক্সপ্রেশন যুক্ত করা)
js
Copy
Edit
let name = "Rahim";
let age = 25;

let info = `My name is ${name} and I am ${age} years old.`;
console.log(info);
📌 ${} ব্যবহার করে আমরা ভ্যারিয়েবল বা এক্সপ্রেশন সহজেই স্ট্রিং-এর মধ্যে যোগ করতে পারি।

3. Multi-line String (বহু-লাইন স্ট্রিং)
js
Copy
Edit
let paragraph = `This is line 1.
This is line 2.
This is line 3.`;

console.log(paragraph);
📌 এখানে backticks (`) ব্যবহার করার ফলে + অপারেটর বা \n ব্যবহার করতে হয়নি।

4. Expression এবং ফাংশন ব্যবহার
js
Copy
Edit
let a = 10;
let b = 20;

let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
📌 এখানে ${a + b} ব্যবহার করে আমরা সরাসরি গণনা করতে পারছি।

5. Template Literals এবং Function
js
Copy
Edit
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(greet("Hasan"));
📌 এখানে ফাংশন ব্যবহার করে সহজেই ডায়নামিক স্ট্রিং তৈরি করা হয়েছে।

উপসংহার
Template Literals স্ট্রিং ম্যানিপুলেশনের একটি শক্তিশালী টুল যা string concatenation-এর চেয়ে বেশি সুবিধাজনক। এটি বিশেষ করে ডায়নামিক স্ট্রিং, মাল্টি-লাইন স্ট্রিং, স্ট্রিং ইন্টারপোলেশন ইত্যাদির ক্ষেত্রে খুবই কার্যকর।

✨ মনে রাখার পয়েন্ট:
✅ Backticks (`) ব্যবহার করতে হবে
✅ ${} এর মধ্যে ভ্যারিয়েবল বা এক্সপ্রেশন রাখা যায়
✅ Multi-line string সহজে লেখা যায়
 */


const a = ` minhazul abedin apon and 

farzana moutushi ponny `

console.log(a)

const n1 = 200

const n2 = 300

const all = ` all value is a ${n1} and ${n2} `

console.log(all)


const allValue = (number) => {

    const value = ` i m give him ${number} dollar `

    console.log(value)

}

allValue(100000)