/**
 * JavaScript-এর Default Parameters কী? (বাংলায় ব্যাখ্যা)
JavaScript-এ default parameters ব্যবহার করা হয় তখন, যখন কোনো ফাংশনের প্যারামিটার হিসেবে কোনো মান (argument) পাঠানো না হয়। যদি কোনো ডিফল্ট মান সেট করা থাকে, তবে সেটাই প্যারামিটারের জন্য ব্যবহার হবে।

কেন দরকার?
ফাংশনে যদি কোনো প্যারামিটার পাঠানো না হয়, তাহলে সেটি undefined হয়ে যায়। কিন্তু আমরা চাইলে ডিফল্ট মান সেট করতে পারি, যাতে ফাংশনটি নির্দিষ্টভাবে কাজ করতে পারে।

উদাহরণ: Default Parameters ব্যবহার করা
javascript
Copy
Edit
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();          // Output: Hello, Guest!
greet("Rahim");   // Output: Hello, Rahim!
🔹 এখানে name প্যারামিটারের ডিফল্ট মান "Guest" দেওয়া হয়েছে। যদি greet() ফাংশনে কোনো মান না পাঠানো হয়, তাহলে Guest প্রিন্ট হবে।

একাধিক Default Parameters ব্যবহার করা
javascript
Copy
Edit
function sum(a = 0, b = 0) {
    return a + b;
}

console.log(sum());        // Output: 0 (কারণ 0 + 0 = 0)
console.log(sum(5));       // Output: 5 (কারণ 5 + 0 = 5)
console.log(sum(5, 10));   // Output: 15
🔹 এখানে a এবং b-র জন্য ডিফল্ট মান 0 সেট করা হয়েছে, যাতে প্যারামিটার না পাঠালেও কোনো error না আসে।

Default Parameters এবং Undefined
যদি undefined পাস করা হয়, তাহলে ডিফল্ট মান ব্যবহার হবে:

javascript
Copy
Edit
function showMessage(message = "No message provided") {
    console.log(message);
}

showMessage(undefined);  // Output: No message provided
showMessage(null);       // Output: null (কারণ null মান নিজেই দেওয়া হয়েছে)
🔹 null পাঠালে এটি ডিফল্ট মান ব্যবহার করবে না, কারণ null মানটি ইচ্ছাকৃতভাবে সেট করা হয়েছে।

সংক্ষেপে
✅ Default parameters সেট করা হয় undefined সমস্যা এড়াতে
✅ undefined দিলে ডিফল্ট মান কাজ করে
✅ null দিলে ডিফল্ট মান কাজ করে না
 */


const apon = (x = 10, y = 20) => {

    const all = x + y

    console.log(all)

}

apon()