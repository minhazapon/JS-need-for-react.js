/**
 * JavaScript Destructuring কী? (বাংলায় সহজ ব্যাখ্যা)
Destructuring হলো JavaScript-এর একটি বিশেষ ফিচার, যা ব্যবহার করে array বা object থেকে সহজেই মান (value) বের করে ভেরিয়েবলে সংরক্ষণ করা যায়। এটি কোডকে সংক্ষিপ্ত ও পড়তে সহজ করে তোলে।

১. Array Destructuring
Array থেকে সহজে মান বের করার জন্য destructuring ব্যবহার করা হয়।

উদাহরণ:
js
Copy
Edit
const numbers = [10, 20, 30];

// পুরানো পদ্ধতি (index ব্যবহার করে)
const first = numbers[0];
const second = numbers[1];

console.log(first, second); // 10 20

// Destructuring ব্যবহার করে:
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30
👉 ব্যাখ্যা: এখানে numbers অ্যারের ভ্যালুগুলো a, b, c ভেরিয়েবলে সরাসরি এসাইন (assign) হয়ে গেছে।

২. Object Destructuring
Object থেকে মান বের করার জন্য destructuring আরও বেশি দরকারি।

উদাহরণ:
js
Copy
Edit
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

// পুরানো পদ্ধতি
const personName = person.name;
const personAge = person.age;

console.log(personName, personAge); // Rahim 25

// Destructuring ব্যবহার করে:
const { name, age, city } = person;
console.log(name, age, city); // Rahim 25 Dhaka
👉 ব্যাখ্যা: এখানে person অবজেক্টের প্রপার্টিগুলো সরাসরি name, age, city ভেরিয়েবলে চলে এসেছে।

৩. Default Value
Destructuring করার সময় যদি কোনো প্রপার্টি বা ভ্যালু না থাকে, তাহলে default value সেট করা যায়।

উদাহরণ:
js
Copy
Edit
const user = { username: "Hasan" };

// Destructuring + Default Value
const { username, role = "User" } = user;
console.log(username, role); // Hasan User
👉 ব্যাখ্যা: এখানে user অবজেক্টে role নেই, তাই default value হিসাবে "User" ব্যবহার হয়েছে।

৪. Function Parameter Destructuring
ফাংশনের প্যারামিটার হিসেবেও destructuring ব্যবহার করা যায়।

উদাহরণ:
js
Copy
Edit
function printUser({ name, age }) {
  console.log(`User: ${name}, Age: ${age}`);
}

const user = { name: "Sami", age: 22 };
printUser(user); // User: Sami, Age: 22
👉 ব্যাখ্যা: এখানে function parameter destructuring ব্যবহার করে সরাসরি name ও age নেওয়া হয়েছে।

উপসংহার
Array Destructuring: const [a, b] = array;
Object Destructuring: const { key } = object;
Default Value: const { key = "default" } = object;
Function Parameter Destructuring: ফাংশনে সরাসরি অবজেক্টের ভ্যালু ব্যবহার করা যায়।
 */



const arr = [12, 23, 45, 35, 456]

const [a, b, c, d, e, f] = arr

console.log(b)

const value = {

    name: 'minhaz',
    company: 'toptal',
    position: 'react expert'

}

const { name, company, position, age = "23" } = value

console.log(name, company, position, age)