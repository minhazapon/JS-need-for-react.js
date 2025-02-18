/**JavaScript Classes & Prototypes (বাংলায় সহজ ব্যাখ্যা)
JavaScript-এ Classes এবং Prototypes হল অবজেক্ট ও অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর গুরুত্বপূর্ণ অংশ।

১. JavaScript Prototype (প্রোটোটাইপ) কী?
JavaScript হল প্রোটোটাইপ-ভিত্তিক ভাষা, যেখানে প্রতিটি অবজেক্টের একটি prototype থাকে।

Prototype ব্যাখ্যা:
Prototype হল একটি অবজেক্ট যা অন্য অবজেক্টের জন্য parent (প্যারেন্ট) বা টেমপ্লেট হিসেবে কাজ করে।
যখন একটি অবজেক্ট তৈরি হয়, তখন এটি Prototype Chain ব্যবহার করে তার parent থেকে বৈশিষ্ট্য (properties) এবং মেথড (methods) উত্তরাধিকারসূত্রে (inherit) পায়।
Example (Prototype ব্যবহার করে Method যোগ করা)
javascript
Copy
Edit
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype-এ একটি method যোগ করা
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const person1 = new Person("Rahim", 25);
person1.greet(); // Output: Hello, my name is Rahim and I am 25 years old.
👉 এখানে greet() ফাংশনটি সরাসরি Person কনস্ট্রাক্টর ফাংশনের মধ্যে নেই, এটি prototype chain এর মাধ্যমে অবজেক্টে এসেছে।

২. JavaScript Classes (ক্লাস) কী?
ES6 (ECMAScript 2015) থেকে JavaScript Classes চালু হয়েছে, যা প্রোগ্রামিংকে আরও সহজ এবং গঠনগত (structured) করে তোলে।

Class তৈরি করা:
javascript
Copy
Edit
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Object তৈরি করা
const person1 = new Person("Karim", 30);
person1.greet(); // Output: Hello, my name is Karim and I am 30 years old.
👉 এখানে class ব্যবহার করে সহজ ও পরিষ্কারভাবে constructor এবং method তৈরি করা হয়েছে।

৩. Class এবং Prototype এর পার্থক্য
বিষয়	Prototype	Class
লিখার ধরন	Function Constructor ব্যবহার করে	class কিওয়ার্ড ব্যবহার করে
কোড স্ট্রাকচার	জটিল ও বেশি কোড	সহজ ও সংক্ষিপ্ত
মেথড সংযোগ	prototype ব্যবহার করে	সরাসরি class এর মধ্যে */