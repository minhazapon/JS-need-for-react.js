/**
 * জাভাস্ক্রিপ্টের অ্যারে মেথডগুলো ডাটা ম্যানিপুলেশন করতে অনেক গুরুত্বপূর্ণ। নিচে map(), filter(), reduce(), find(), some(), এবং every() সম্পর্কে বাংলায় সহজ ব্যাখ্যা দেওয়া হলো।

1️⃣ map()
📌 কাজ: প্রতিটি এলিমেন্টের ওপর অপারেশন চালিয়ে নতুন একটি অ্যারে তৈরি করে।
📌 উদাহরণ: প্রতিটি সংখ্যাকে দ্বিগুণ করা

javascript
Copy
Edit
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
2️⃣ filter()
📌 কাজ: কন্ডিশন অনুযায়ী কিছু এলিমেন্ট বেছে নিয়ে নতুন অ্যারে তৈরি করে।
📌 উদাহরণ: শুধু জোড় সংখ্যা বের করা

javascript
Copy
Edit
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
3️⃣ reduce()
📌 কাজ: অ্যারেতে সব এলিমেন্টকে একত্রে গণনা বা অপারেশন চালিয়ে একক মানে পরিণত করে।
📌 উদাহরণ: সব সংখ্যার যোগফল বের করা

javascript
Copy
Edit
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
4️⃣ find()
📌 কাজ: প্রথম যেই এলিমেন্ট শর্ত মিলে, সেটি রিটার্ন করে।
📌 উদাহরণ: প্রথম জোড় সংখ্যা খুঁজে বের করা

javascript
Copy
Edit
const numbers = [1, 3, 5, 6, 8];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 6
5️⃣ some()
📌 কাজ: যদি অন্তত একটি এলিমেন্ট শর্ত মেনে চলে, তাহলে true রিটার্ন করে।
📌 উদাহরণ: অ্যারেতে ১০-এর বেশি সংখ্যা আছে কি না

javascript
Copy
Edit
const numbers = [4, 7, 9, 12];
const hasGreaterThan10 = numbers.some(num => num > 10);
console.log(hasGreaterThan10); // true
6️⃣ every()
📌 কাজ: যদি সব এলিমেন্ট শর্ত মেনে চলে, তাহলে true রিটার্ন করে।
📌 উদাহরণ: সব সংখ্যা কি ৫-এর চেয়ে বড়?

javascript
Copy
Edit
const numbers = [6, 7, 8, 9];
const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5); // true
📌 সংক্ষেপে পার্থক্য
✅ map() → নতুন অ্যারে রিটার্ন করে (সবগুলোর উপর অপারেশন চালায়)।
✅ filter() → নির্দিষ্ট শর্ত মেনে এলিমেন্ট বের করে নতুন অ্যারে রিটার্ন করে।
✅ reduce() → সব এলিমেন্ট একত্রে নিয়ে একক মান তৈরি করে।
✅ find() → প্রথম যেটা শর্ত মানবে, সেটা রিটার্ন করবে।
✅ some() → অন্তত একটা শর্ত মিলে গেলে true রিটার্ন করবে।
✅ every() → সবগুলা শর্ত মেনে চললে true রিটার্ন করবে।
 */


//map

const arrMap = [2, 3, 4, 5, 6, 7, 8, 9]

const mapValue = arrMap.map(num => num * 3)

console.log(mapValue)

//filter

const arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filterValue = arrFilter.filter(num => num % 2 === 0)

console.log(filterValue)

//reduce

const arrReduce = [2, 34, 455, 3556, 2556, 66, 66]

const redueValue = arrReduce.reduce((acc, num) => acc + num, 0)

console.log(redueValue)

//find

const arrFind = [4, 6, 8, 9, 10, 34, 56]

const findValue = arrFind.find(num => num % 10 === 0)

console.log(findValue)