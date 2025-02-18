/**
 * JavaScript-এর fetch() ব্যবহার
fetch() হল JavaScript-এর একটি বিল্ট-ইন ফাংশন যা API-তে HTTP অনুরোধ (request) পাঠানোর জন্য ব্যবহার করা হয়। এটি আসলে Promise ফেরত দেয়, যার মাধ্যমে asynchronous ভাবে ডাটা আনতে বা পাঠাতে পারি।

১. fetch() দিয়ে ডাটা আনা (GET Request)
নিচের উদাহরণটি দেখলে fetch()-এর মাধ্যমে কিভাবে API থেকে ডাটা আনা হয় তা বুঝতে পারবেন:

js
Copy
Edit
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // response-কে JSON এ কনভার্ট করা
  .then(data => console.log(data)) // কনসোলে ডাটা দেখানো
  .catch(error => console.error('Error:', error)); // যদি কোন error হয়
কি হচ্ছে এখানে?

fetch() ফাংশনটি API-তে অনুরোধ পাঠাচ্ছে
.then(response => response.json()) দিয়ে response-কে JSON ফরম্যাটে রূপান্তর করা হচ্ছে
.then(data => console.log(data)) দিয়ে পাওয়া ডাটা কনসোলে দেখানো হচ্ছে
.catch(error => console.error('Error:', error)) দিয়ে যদি কোন সমস্যা হয়, তাহলে error দেখানো হচ্ছে
২. fetch() দিয়ে ডাটা পাঠানো (POST Request)
এখন যদি কোনো API-তে নতুন ডাটা পাঠাতে চাই, তাহলে POST অনুরোধ করতে হবে:

js
Copy
Edit
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // অনুরোধের ধরন
  headers: {
    'Content-Type': 'application/json' // কনটেন্ট টাইপ নির্ধারণ
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the content of the post',
    userId: 1
  }) // ডাটা JSON ফরম্যাটে পাঠানো হচ্ছে
})
  .then(response => response.json()) // response-কে JSON এ কনভার্ট করা
  .then(data => console.log('Success:', data)) // সফল হলে কনসোলে দেখানো
  .catch(error => console.error('Error:', error)); // যদি কোন error হয়
৩. async/await ব্যবহার করে fetch()
fetch() ব্যবহার করতে আমরা async/await ব্যবহার করতে পারি, যা কোডকে আরও ক্লিন করে তোলে:

js
Copy
Edit
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
এখানে,

await fetch() দিয়ে অনুরোধ করা হচ্ছে
await response.json() দিয়ে ডাটা JSON ফরম্যাটে নেওয়া হচ্ছে
try...catch দিয়ে error handle করা হচ্ছে
৪. fetch() দিয়ে ডাটা আপডেট করা (PUT Request)
একটি নির্দিষ্ট ডাটা আপডেট করতে হলে PUT বা PATCH অনুরোধ করা হয়:

js
Copy
Edit
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Updated Title',
    body: 'Updated Content',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log('Updated:', data))
  .catch(error => console.error('Error:', error));
৫. fetch() দিয়ে ডাটা মুছে ফেলা (DELETE Request)
নিচের কোড দিয়ে API থেকে একটি নির্দিষ্ট আইটেম মুছে ফেলা যায়:

js
Copy
Edit
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(() => console.log('Post deleted successfully'))
  .catch(error => console.error('Error:', error));
সংক্ষেপে:
কাজ	fetch() অনুরোধের ধরন
ডাটা আনা	fetch(url) (GET)
ডাটা পাঠানো	fetch(url, { method: 'POST' })
ডাটা আপডেট করা	fetch(url, { method: 'PUT' })
ডাটা মুছে ফেলা	fetch(url, { method: 'DELETE' })

 */

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))


async function fetchData() {

  try {

    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let FData = await data.json()
    console.log(FData)

  } catch (error) {

    console.log(error)

  }

}

fetchData()