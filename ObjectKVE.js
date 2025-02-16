
/**
 * Object.keys(), Object.values(), এবং Object.entries() হল JavaScript-এর বিল্ট-ইন মেথড, যা অবজেক্টের বিভিন্ন তথ্য বের করতে ব্যবহার করা হয়। নিচে বাংলা ভাষায় বিস্তারিত ব্যাখ্যা দেওয়া হলো:

🔹 Object.keys()
👉 এটি একটি অবজেক্টের সব প্রপার্টির (keys) এর অ্যারে রিটার্ন করে।

✨ উদাহরণ:
js
Copy
Edit
const person = { name: "Rahim", age: 25, city: "Dhaka" };

console.log(Object.keys(person));
আউটপুট:

js
Copy
Edit
["name", "age", "city"]
📌 এখানে Object.keys(person) কল করলে, অবজেক্ট person এর সব keys (প্রপার্টির নাম) পাওয়া যায়।

🔹 Object.values()
👉 এটি একটি অবজেক্টের সব ভ্যালু (values) এর অ্যারে রিটার্ন করে।

✨ উদাহরণ:
js
Copy
Edit
const person = { name: "Rahim", age: 25, city: "Dhaka" };

console.log(Object.values(person));
আউটপুট:

js
Copy
Edit
["Rahim", 25, "Dhaka"]
📌 এখানে Object.values(person) কল করলে, অবজেক্ট person এর values গুলো পাওয়া যায়।

🔹 Object.entries()
👉 এটি একটি অবজেক্টের key-value পেয়ারগুলোর অ্যারে রিটার্ন করে।

✨ উদাহরণ:
js
Copy
Edit
const person = { name: "Rahim", age: 25, city: "Dhaka" };

console.log(Object.entries(person));
আউটপুট:

js
Copy
Edit
[
  ["name", "Rahim"],
  ["age", 25],
  ["city", "Dhaka"]
]
📌 এখানে Object.entries(person) কল করলে, প্রতিটি key-value পেয়ার কে একটি array হিসেবে রিটার্ন করে।

🎯 সংক্ষেপে পার্থক্য:
মেথড	কাজ
Object.keys()	অবজেক্টের সব keys রিটার্ন করে
Object.values()	অবজেক্টের সব values রিটার্ন করে
Object.entries()	অবজেক্টের key-value পেয়ারগুলোর অ্যারে রিটার্ন করে
এই মেথডগুলো অবজেক্ট থেকে ডাটা বের করে কাজে লাগাতে অনেক সুবিধা দেয়। 😊
 */


//object keys

const info1 = {

    name: 'minhazul abedin apon',
    age: 23,
    profession: "software developer",
    address: 'jhenaidah',
    position: 'react.js engineer',
    gender: 'male',
    school: 'jhenaidah govt. high school'

}

console.log(Object.keys(info1))


//object values


const info2 = {

    name: 'minhazul abedin apon',
    age: 23,
    profession: "software developer",
    address: 'jhenaidah',
    position: 'react.js engineer',
    gender: 'male',
    school: 'jhenaidah govt. high school'

}

console.log(Object.values(info2))

//object entries

const info3 = {

    name: 'minhazul abedin apon',
    age: 23,
    profession: "software developer",
    address: 'jhenaidah',
    position: 'react.js engineer',
    gender: 'male',
    school: 'jhenaidah govt. high school'

}

console.log(Object.entries(info3))
