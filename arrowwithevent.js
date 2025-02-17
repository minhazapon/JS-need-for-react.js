/**
 * Arrow Function ব্যবহার করে Event Handling (ইভেন্ট হ্যান্ডলিং)
JavaScript-এ ইভেন্ট হ্যান্ডলিং করতে সাধারণত function কিওয়ার্ড ব্যবহার করা হয়। তবে Arrow Function ব্যবহার করলে কোড আরও সংক্ষিপ্ত এবং সহজ হয়ে যায়।

Arrow Function দিয়ে Event Handling
আমরা সাধারণত ইভেন্ট হ্যান্ডলিং করতে নিচের মতো কোড লিখি:

javascript
Copy
Edit
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});
এটি function কিওয়ার্ড ব্যবহার করে লেখা হয়েছে। কিন্তু আমরা চাইলে এটি Arrow Function দিয়েও লিখতে পারি:

javascript
Copy
Edit
document.getElementById("myButton").addEventListener("click", () => {
    alert("Button Clicked!");
});
এখানে function() এর পরিবর্তে () => {} ব্যবহার করা হয়েছে, যা Arrow Function।

Arrow Function-এর সুবিধা
কোড সংক্ষিপ্ত হয় – সাধারণ function-এর তুলনায় Arrow Function অনেক কম লেখায় একই কাজ করতে পারে।
this কিওয়ার্ডের সমস্যা দূর করে – Arrow Function ব্যবহার করলে this এর মান পরিবর্তন হয় না।
ES6+ মডার্ন সাপোর্ট – নতুন JavaScript ভার্সনে এটি ব্যবহারের সুবিধা বেশি।
আরও উদাহরণ
১. ইনলাইন Arrow Function
javascript
Copy
Edit
document.getElementById("myButton").addEventListener("click", () => alert("Clicked!"));
২. this সমস্যার সমাধান
সাধারণ function-এ this ব্যবহার করলে কিছু সমস্যার সম্মুখীন হতে হয়:

javascript
Copy
Edit
class MyClass {
    constructor() {
        this.name = "Arrow Function";
        document.getElementById("myButton").addEventListener("click", function() {
            alert(this.name); // এখানে `this` কাজ করবে না
        });
    }
}
এটি ঠিকভাবে কাজ করবে না, কারণ this এখানে ইভেন্ট লিসেনারের নিজস্ব this কে ধরে নেয়।

এটি Arrow Function ব্যবহার করে ঠিক করা যায়:

javascript
Copy
Edit
class MyClass {
    constructor() {
        this.name = "Arrow Function";
        document.getElementById("myButton").addEventListener("click", () => {
            alert(this.name); // এখানে `this` ঠিকভাবে কাজ করবে
        });
    }
}
সংক্ষেপে
Arrow Function ব্যবহার করলে ইভেন্ট হ্যান্ডলিং সহজ ও সংক্ষিপ্ত হয়।
this কিওয়ার্ডের সমস্যাগুলি দূর হয়।
মডার্ন JavaScript কোড লেখার জন্য এটি বেশি উপযোগী।
👉 তুমি চাইলে তোমার প্রজেক্টেও এটি ব্যবহার করতে পারো! 🚀
 */