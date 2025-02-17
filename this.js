/**
 * JavaScript (JS) কী এবং এটি কীভাবে কাজ করে (বিশেষ করে Class Component-এ)
🔹 JavaScript (JS) কী?
JavaScript হলো একটি scripting language, যা মূলত ওয়েবসাইটের ইন্টারঅ্যাকটিভিটি (interactive features) বাড়ানোর জন্য ব্যবহৃত হয়। এটি client-side এবং server-side দুই জায়গায়ই কাজ করতে পারে।

🔹 React.js Class Components এ JS কিভাবে কাজ করে?
React.js-এ দুই ধরনের কম্পোনেন্ট আছে:

Function Component (নতুন পদ্ধতি, Hooks ব্যবহার করা যায়)
Class Component (পুরোনো পদ্ধতি, কিন্তু এখনও অনেক বড় বড় প্রজেক্টে ব্যবহৃত হয়)
👉 Class Component হলো ECMAScript 6 (ES6) class ব্যবহার করে তৈরি করা React component।

📌 Class Component কীভাবে কাজ করে?
একটি class component তৈরি করতে হলে React.Component থেকে extend করতে হয় এবং কমপক্ষে একটি render() মেথড থাকতে হয়।

🟢 একটি সাধারণ Class Component:
jsx
Copy
Edit
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Class Component!</h1>
      </div>
    );
  }
}

export default MyComponent;
✅ বুঝিয়ে বলি:
1️⃣ class MyComponent extends Component 👉 এটি React.Component থেকে inherit (extend) করছে।
2️⃣ render() মেথডের ভেতরে JSX কোড লেখা হয় যা ব্রাউজারে UI তৈরি করে।

🔹 JS-এ State এবং Lifecycle Methods কিভাবে কাজ করে?
🟢 State কী?
State হলো component-এর নিজের ডাটা, যা পরিবর্তনশীল এবং UI-তে প্রভাব ফেলে।

✅ State-সহ একটি Class Component:
jsx
Copy
Edit
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Counter;
✅ বুঝিয়ে বলি:
1️⃣ constructor(props) 👉 initial state সেট করতে ব্যবহৃত হয়।
2️⃣ this.state = { count: 0 } 👉 count নামে একটি state variable তৈরি হয়েছে।
3️⃣ this.setState({ count: this.state.count + 1 }) 👉 state পরিবর্তন করতে setState() ব্যবহার করতে হয়।
4️⃣ onClick={this.increment} 👉 যখন button ক্লিক হবে, তখন increment() মেথড কল হবে এবং count বাড়বে।

🔹 Lifecycle Methods (JS কিভাবে React Class Component-এর লাইফসাইকেলে কাজ করে)
React Component-এর তিনটি প্রধান লাইফসাইকেল আছে:
1️⃣ Mounting (Component তৈরি হওয়ার সময়)
2️⃣ Updating (State/Props পরিবর্তন হলে)
3️⃣ Unmounting (Component মুছে ফেলার সময়)

📌 Lifecycle Methods এর ব্যবহার
1️⃣ ComponentDidMount() → (Mounting State)
যখন একটি component প্রথমবার render হয়, তখন এটি একবারই কল হয়।
API call, data fetch ইত্যাদির জন্য এটি ব্যবহার হয়।
jsx
Copy
Edit
componentDidMount() {
  console.log("Component Mounted!");
}
2️⃣ ComponentDidUpdate() → (Updating State)
যখন state বা props পরিবর্তন হয়, তখন এটি প্রতি update-এর সময় রান হয়।
jsx
Copy
Edit
componentDidUpdate(prevProps, prevState) {
  console.log("Component Updated!");
}
3️⃣ ComponentWillUnmount() → (Unmounting State)
যখন component ডিলিট হয়ে যায়, তখন এটি কল হয়।
Cleanup (event listener remove, API request cancel ইত্যাদি) করার জন্য এটি ব্যবহার হয়।
jsx
Copy
Edit
componentWillUnmount() {
  console.log("Component Unmounted!");
}
🔹 কেন Class Component-এর বদলে Function Component ব্যবহার করা হয়?
🔥 Class Component-এর কিছু সমস্যা ছিল, যেমন:
✅ বেশি কোড লিখতে হয়।
✅ this ব্যবহার করতে হয়, যা ঝামেলা হতে পারে।
✅ Performance কিছুটা কম।

👉 তাই React নতুন Function Component (Hooks) এনেছে, যেখানে useState, useEffect ব্যবহার করে Class Component ছাড়াই একই কাজ করা যায়।

🔥 সংক্ষেপে React.js-এর Class Component-এর মূল পয়েন্ট:
✅ class MyComponent extends Component দিয়ে তৈরি হয়।
✅ render() মেথড ব্যবহার করে UI দেখানো হয়।
✅ state দিয়ে ডাটা ম্যানেজ করা যায়।
✅ setState() ব্যবহার করে state পরিবর্তন করতে হয়।
✅ componentDidMount, componentDidUpdate, componentWillUnmount এর মাধ্যমে lifecycle ম্যানেজ করা হয়।
 */