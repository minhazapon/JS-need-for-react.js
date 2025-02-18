/**
 * JavaScript-এ Truthy এবং Falsy মান বোঝা গুরুত্বপূর্ণ, বিশেষ করে React-এ কন্ডিশনাল রেন্ডারিং করার সময়।

✅ Falsy Values (যেগুলো false হিসাবে বিবেচিত হয়)
নিচের মানগুলো Falsy:

false
0 (সংখ্যা শূন্য)
"" (খালি স্ট্রিং)
null
undefined
NaN (Not-a-Number)
js
Copy
Edit
if (0) { 
  console.log("Truthy");
} else { 
  console.log("Falsy"); // এটি প্রিন্ট হবে
}
✅ Truthy Values (যেগুলো true হিসাবে বিবেচিত হয়)
Falsy ছাড়া বাকি সব কিছু Truthy, যেমন:

"Hello" (স্ট্রিং)
42 (কোনো সংখ্যা, শূন্য ছাড়া)
[] (খালি অ্যারে)
{} (খালি অবজেক্ট)
function() {} (ফাংশন)
true
js
Copy
Edit
if ("Hello") { 
  console.log("Truthy"); // এটি প্রিন্ট হবে
} else { 
  console.log("Falsy");
}
🔹 React-এ Truthy & Falsy ব্যবহার
jsx
Copy
Edit
const message = "";
return <h1>{message || "No message available"}</h1>;
এখানে message যদি ফাঁকা ("") হয়, তাহলে "No message available" দেখাবে।

এছাড়াও Falsy মান চেক করতে && ব্যবহার করা যায়:

jsx
Copy
Edit
const isLoggedIn = true;
return <>{isLoggedIn && <h1>Welcome Back!</h1>}</>;
যদি isLoggedIn true হয়, তাহলে "Welcome Back!" দেখাবে।
 */