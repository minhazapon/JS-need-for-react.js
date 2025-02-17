/**
 * JavaScript-এ Axios ব্যবহার করে API কল করা অনেক সহজ এবং সুবিধাজনক। এটি Promise-based HTTP client, যা GET, POST, PUT, DELETE ইত্যাদি HTTP request সহজে পরিচালনা করতে সাহায্য করে।

Axios ইন্সটলেশন
Axios ব্যবহার করতে হলে আগে এটি ইন্সটল করতে হবে:

1. npm দিয়ে ইনস্টল (Node.js project)
sh
Copy
Edit
npm install axios
2. CDN দিয়ে ব্যবহার (HTML ফাইলে)
html
Copy
Edit
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Axios দিয়ে API কলের বিভিন্ন উদাহরণ
1. GET Request (ডাটা নেওয়া)
js
Copy
Edit
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
2. POST Request (ডাটা পাঠানো)
js
Copy
Edit
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'New Post',
    body: 'This is the post content',
    userId: 1
  })
  .then(response => {
    console.log('Post Created:', response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });
3. PUT Request (ডাটা আপডেট করা)
js
Copy
Edit
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Updated Post',
    body: 'Updated content',
    userId: 1
  })
  .then(response => {
    console.log('Post Updated:', response.data);
  })
  .catch(error => {
    console.error('Error updating post:', error);
  });
4. DELETE Request (ডাটা ডিলিট করা)
js
Copy
Edit
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Post Deleted:', response.data);
  })
  .catch(error => {
    console.error('Error deleting post:', error);
  });
5. Async/Await দিয়ে API কল
js
Copy
Edit
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
6. Multiple API Call (একসাথে একাধিক API কল)
js
Copy
Edit
axios.all([
  axios.get('https://jsonplaceholder.typicode.com/posts/1'),
  axios.get('https://jsonplaceholder.typicode.com/users/1')
])
.then(axios.spread((post, user) => {
  console.log('Post:', post.data);
  console.log('User:', user.data);
}))
.catch(error => {
  console.error('Error fetching data:', error);
});
Axios ব্যবহার করলে কেন ভালো?
✅ Promise-based (async/await ব্যবহার করা যায়)
✅ Automatic JSON data handling
✅ Error handling সহজ
✅ Request & Response Interceptor ব্যবহার করা যায়
✅ Cancel request করা যায়

এখন আপনি Axios দিয়ে API কল করে সহজে ডাটা লোড, সেন্ড, আপডেট বা ডিলিট করতে পারবেন। 🚀
 */

