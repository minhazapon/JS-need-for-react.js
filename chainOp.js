/**
 * Optional Chaining (?.) কি?
Optional Chaining (?.) হলো JavaScript-এর একটি নতুন ফিচার (ES11/ES2020 থেকে যুক্ত হয়েছে), যা আপনাকে undefined বা null চেক না করেই অবজেক্টের প্রপার্টি বা মেথড এক্সেস করার সুযোগ দেয়। এটি মূলত TypeError এড়াতে সাহায্য করে যখন আপনি অবজেক্টের নেস্টেড (nested) প্রপার্টি এক্সেস করতে চান।

কেন Optional Chaining দরকার?
ধরুন, আপনার কাছে নিচের মতো একটি অবজেক্ট আছে—

javascript
Copy
Edit
const user = {
  name: "Rahim",
  address: {
    city: "Dhaka"
  }
};
এখন, আপনি যদি user.address.city এক্সেস করেন, তাহলে কোনো সমস্যা হবে না। কিন্তু যদি আপনি user.address.zipCode এক্সেস করতে চান এবং zipCode প্রপার্টি অবজেক্টে না থাকে, তাহলে TypeError: Cannot read properties of undefined এরর আসবে।

javascript
Copy
Edit
console.log(user.address.zipCode); // TypeError: Cannot read properties of undefined
এই সমস্যা সমাধান করতে আমরা Optional Chaining (?.) ব্যবহার করতে পারি—

javascript
Copy
Edit
console.log(user.address?.zipCode); // Output: undefined (কোনো এরর আসবে না)
এখানে ?. চেক করবে যে address প্রপার্টি আছে কিনা, যদি না থাকে তবে undefined রিটার্ন করবে এবং পুরো স্ক্রিপ্ট ক্র্যাশ করবে না।

Optional Chaining কোথায় ব্যবহার করা যায়?
1. অবজেক্ট প্রপার্টি এক্সেস করার সময়
javascript
Copy
Edit
const user = {
  name: "Karim",
  address: {
    city: "Chittagong"
  }
};

console.log(user?.address?.city);   // Output: "Chittagong"
console.log(user?.address?.zipCode); // Output: undefined
2. অবজেক্টের মেথড কল করার সময়
javascript
Copy
Edit
const person = {
  name: "Rahim",
  greet: function() {
    return "Hello!";
  }
};

console.log(person.greet?.());  // Output: "Hello!"
console.log(person.sayGoodbye?.()); // Output: undefined (এরর হবে না)
3. অ্যারের এলিমেন্ট এক্সেস করার সময়
javascript
Copy
Edit
const users = [
  { name: "Rahim" },
  { name: "Karim" }
];

console.log(users[0]?.name); // Output: "Rahim"
console.log(users[5]?.name); // Output: undefined
উপকারিতা
✅ কোড সহজ ও ক্লিন হয়
✅ TypeError থেকে বাঁচায়
✅ undefined বা null চেক করার ঝামেলা কমে

সংক্ষেপে
Optional Chaining (?.) JavaScript-এ অবজেক্ট বা মেথড এক্সেস করার সময় undefined বা null চেক না করেও নিরাপদে ডাটা এক্সেস করতে সাহায্য করে।

 */


const value = {

    name: 'apon',
    number: 1950374409,
    language: 'javaScript',
    company: 'toptal',
    address: {
        d: 'jhenaida',
    }

}

// console.log(value.address.d, value.address?.devision)


const users = [
    { name: "Rahim" },
    { number: 20 },
    { age: 23 }
];

console.log(users[0].name)
console.log(users[1].number)
console.log(users[2].age)
console.log(users[3]?.position)
console.log(users[4]?.country)


