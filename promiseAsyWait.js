/**
 * JavaScript Promise এবং Async/Await কি? (বাংলায় ব্যাখ্যা)
✅ JavaScript Promise কি?
JavaScript-এ Promise হলো একটি অবজেক্ট যা অ্যাসিনক্রোনাস অপারেশন (যেমন API কল, ডেটাবেস থেকে ডাটা আনানো, বা setTimeout ব্যবহার করে কিছু সময় পর একটি কাজ করা) সম্পন্ন হলে সফল (resolve) বা ব্যর্থ (reject) হবে কিনা তা নির্দেশ করে।

👉 Promise এর তিনটি স্টেট:
Pending (অপেক্ষমাণ) – যখন Promise তৈরি হয়, তখন এটি Pending স্টেটে থাকে।
Fulfilled (সম্পন্ন) – যখন Promise সফলভাবে সম্পন্ন হয় এবং resolve() কল হয়।
Rejected (ব্যর্থ) – যখন কোনো সমস্যা হয় এবং reject() কল হয়।
🎯 Promise এর ব্যবহার উদাহরণ:
javascript
Copy
Edit
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("ডাটা সফলভাবে লোড হয়েছে!");
            } else {
                reject("ডাটা লোড করতে সমস্যা হয়েছে!");
            }
        }, 2000);
    });
}

fetchData()
    .then(response => console.log(response))  // ✅ সফল হলে এটি চলবে
    .catch(error => console.log(error));  // ❌ ব্যর্থ হলে এটি চলবে
✅ Async/Await কি?
async এবং await হলো ES6-এ সংযোজন করা একটি নতুন উপায় যা অ্যাসিনক্রোনাস কোডকে আরো সহজে লেখা ও পরিচালনা করতে সাহায্য করে। এটি Promise এর ওপর ভিত্তি করে কাজ করে, তবে .then() ও .catch() এর পরিবর্তে await ব্যবহার করে সিনট্যাক্সকে সহজ করে।

🎯 Async/Await এর ব্যবহার উদাহরণ:
javascript
Copy
Edit
async function loadData() {
    try {
        let response = await fetchData();
        console.log(response);  // ✅ সফল হলে এটি চলবে
    } catch (error) {
        console.log(error);  // ❌ ব্যর্থ হলে এটি চলবে
    }
}

loadData();
🔹 async ব্যবহার করলে ফাংশনটি স্বয়ংক্রিয়ভাবে একটি Promise রিটার্ন করে।
🔹 await ব্যবহার করলে JavaScript ঐ Promise-এর রেজাল্ট আসা পর্যন্ত অপেক্ষা করবে।

🎯 Promise বনাম Async/Await পার্থক্য:
বিষয়	Promise	Async/Await
কোড লেখা	.then() ও .catch() দিয়ে হ্যান্ডল করতে হয়	try...catch ব্লক ব্যবহার করা হয়
কোড সহজতা	একটু জটিল দেখা যায়	সিম্পল ও সিঙ্ক্রোনাস-এর মতো লাগে
এরর হ্যান্ডলিং	.catch() ব্যবহার করতে হয়	try...catch ব্লক সহজে এরর হ্যান্ডেল করে
✅ উপসংহার
Promise হলো একটি অ্যাসিনক্রোনাস অপারেশন হ্যান্ডল করার জন্য একটি অবজেক্ট।
Async/Await হলো Promise ব্যবহার করে অ্যাসিনক্রোনাস কোড লেখা সহজ করার জন্য একটি ফিচার।
Async/Await ব্যবহার করলে কোড বেশি ক্লিন ও রিডেবল হয়।
🔹 যদি তোমার সহজ ও ক্লিন কোডের প্রয়োজন হয়, তবে Async/Await ব্যবহার করা ভালো।
🔹 যদি একাধিক Promise একসাথে হ্যান্ডেল করতে চাও (যেমন Promise.all()), তবে Promise সরাসরি ব্যবহার করা সুবিধাজনক।
 */
