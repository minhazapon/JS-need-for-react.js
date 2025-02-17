/**
 * JavaScript-এ bind(this) মূলত this-এর মান স্থায়ীভাবে সেট করার জন্য ব্যবহার করা হয়। এটি একটি মেথড যা একটি ফাংশনের নতুন কপি তৈরি করে এবং সেটির this ভ্যালু নির্দিষ্ট করে দেয়।

কিভাবে কাজ করে?
১. সাধারণভাবে this ব্যবহার করলে:
আমরা জানি, this এর মান নির্ভর করে ফাংশন কিভাবে কল করা হচ্ছে তার উপর। উদাহরণস্বরূপ—

js
Copy
Edit
const person = {
  name: "Rahim",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, Rahim
এখানে this person অবজেক্টকে নির্দেশ করছে, তাই this.name = "Rahim"।

২. কিন্তু setTimeout বা অন্য ফাংশনের মধ্যে this হারিয়ে যায়
js
Copy
Edit
const person = {
  name: "Rahim",
  greet: function() {
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

person.greet(); 
// Output: Hello, undefined (কারণ setTimeout-এ `this` মূল অবজেক্টকে নির্দেশ করছে না)
এখানে setTimeout-এর ভিতরে this গ্লোবাল অবজেক্ট (ব্রাউজারে window, নোডে global) নির্দেশ করে, যার মধ্যে name নেই।

৩. bind(this) ব্যবহার করে সমাধান:
js
Copy
Edit
const person = {
  name: "Rahim",
  greet: function() {
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }.bind(this), 1000);
  }
};

person.greet(); 
// Output: Hello, Rahim
এখানে .bind(this) মূল this ধরে রাখে এবং সেটাই setTimeout-এ ব্যবহার হয়।

bind(this) কিভাবে কাজ করে?
১. .bind(this) নতুন একটি ফাংশন তৈরি করে, যেখানে this নির্দিষ্ট থাকে।
২. এটি মূল ফাংশন পরিবর্তন করে না, শুধু একটি নতুন কপি তৈরি করে।

js
Copy
Edit
function sayHello() {
  console.log("Hello, " + this.name);
}

const person = { name: "Karim" };
const boundFunc = sayHello.bind(person); // `this` এখন `person` অবজেক্টকে নির্দেশ করবে।

boundFunc(); // Output: Hello, Karim
সংক্ষেপে:
.bind(this) নতুন একটি ফাংশন তৈরি করে যেখানে this লক করা থাকে।
এটি মূল ফাংশন পরিবর্তন করে না, শুধুমাত্র একটি নতুন ফাংশন রিটার্ন করে।
এটি setTimeout, event listener, call/apply-এর সাথে this ঠিক রাখতে ব্যবহৃত হয়।
 */