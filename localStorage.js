/**JavaScript-এর localStorage এবং sessionStorage হলো Web Storage API-এর অংশ, যা ব্রাউজারে ডাটা সংরক্ষণ করতে ব্যবহৃত হয়। এখন এগুলোর কাজ বাংলায় বুঝিয়ে দিচ্ছি—

🔹 localStorage.setItem("key", value);
👉 এটি localStorage-এ একটি ডাটা সংরক্ষণ করে।
🔹 উদাহরণ:

js
Copy
Edit
localStorage.setItem("username", "Rahim");
📌 কাজ: এটি ব্রাউজারের localStorage-এ username নামে একটি কী তৈরি করবে এবং তার মান হবে "Rahim"।

🔹 localStorage.getItem("key");
👉 এটি localStorage থেকে ডাটা রিড করতে ব্যবহৃত হয়।
🔹 উদাহরণ:

js
Copy
Edit
let user = localStorage.getItem("username");
console.log(user); // Output: Rahim
📌 কাজ: এটি username নামে সংরক্ষিত মান বের করে আনবে।

🔹 sessionStorage.setItem("key", value);
👉 এটি sessionStorage-এ একটি ডাটা সংরক্ষণ করে, যা শুধুমাত্র ব্রাউজার ট্যাব বন্ধ হওয়া পর্যন্ত থাকবে।
🔹 উদাহরণ:

js
Copy
Edit
sessionStorage.setItem("userType", "Admin");
📌 কাজ: এটি sessionStorage-এ userType নামে একটি কী তৈরি করবে যার মান "Admin"। তবে ট্যাব বন্ধ করলে ডাটা মুছে যাবে।

🔥 localStorage vs sessionStorage পার্থক্য:
Feature	localStorage	sessionStorage
ডাটা সংরক্ষণ	স্থায়ী (manually মুছতে হয়)	শুধুমাত্র বর্তমান সেশনের জন্য
এক্সপায়ার হয় কবে?	কখনোই নয় (ম্যানুয়ালি ডিলিট না করলে)	ট্যাব বা ব্রাউজার বন্ধ হলে
ব্যবহারের উদ্দেশ্য	দীর্ঘমেয়াদী সংরক্ষণ	স্বল্পমেয়াদী সংরক্ষণ
✅ যদি ডাটা মুছতে চান:
js
Copy
Edit
localStorage.removeItem("username"); // নির্দিষ্ট key মুছে ফেলে  
localStorage.clear(); // সমস্ত ডাটা মুছে ফেলে  
sessionStorage.removeItem("userType"); // নির্দিষ্ট key মুছে ফেলে  
sessionStorage.clear(); // সমস্ত session ডাটা মুছে ফেলে  
🔹 সংক্ষেপে:

localStorage ব্রাউজার বন্ধ হলেও ডাটা ধরে রাখে।
sessionStorage ব্রাউজার ট্যাব বন্ধ হলে ডাটা মুছে ফেলে। */

//setItem 

localStorage.setItem("username", "minhazul abedin apon")

//getItem

const user = localStorage.getItem("username")

console.log(user)