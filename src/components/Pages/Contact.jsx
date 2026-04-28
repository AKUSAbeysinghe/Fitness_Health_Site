import React, { useState } from "react";

/* ================= ICONS ================= */

const PhoneIcon = () => (
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M3 5a2 2 0 012-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2a2 2 0 01-2 2h-1C9 19 5 15 3 6V5z"
strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

const MailIcon = () => (
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M4 4h16v16H4V4z" />
<path d="M4 6l8 6 8-6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

const LocationIcon = () => (
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 22s8-5 8-12a8 8 0 10-16 0c0 7 8 12 8 12z"/>
<circle cx="12" cy="10" r="3"/>
</svg>
);

/* ================= CONTACT PAGE ================= */

const Contact = () => {

const [form,setForm]=useState({
name:"",
email:"",
message:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=(e)=>{
e.preventDefault();
alert("Message sent successfully!");
setForm({name:"",email:"",message:""});
};

return(
<div className="bg-white">

{/* ================= HEADER ================= */}
<section className="bg-emerald-50/50 py-16 px-8">

<div className="max-w-6xl mx-auto text-center">

<h4 className="text-[#2E7D56] font-semibold uppercase text-sm mb-4">
Contact Us
</h4>

<h2 className="text-5xl font-semibold text-gray-900 mb-6">
We’re here to help you
</h2>

<p className="text-gray-600 text-lg max-w-2xl mx-auto">
Have questions about pharmacy, supplements, fitness or orders?
Our team is ready to support you.
</p>

</div>

</section>

{/* ================= CONTACT CARDS ================= */}
<section className="py-20 px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

{/* PHONE */}
<div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl border text-center">
<div className="flex justify-center text-[#2E7D56] mb-6">
<PhoneIcon />
</div>
<h3 className="text-2xl font-semibold mb-2">Call Us</h3>
<p className="text-gray-600">+94 11 234 5678</p>
</div>

{/* EMAIL */}
<div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl border text-center">
<div className="flex justify-center text-[#2E7D56] mb-6">
<MailIcon />
</div>
<h3 className="text-2xl font-semibold mb-2">Email</h3>
<p className="text-gray-600">support@vivara.com</p>
</div>

{/* LOCATION */}
<div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl border text-center">
<div className="flex justify-center text-[#2E7D56] mb-6">
<LocationIcon />
</div>
<h3 className="text-2xl font-semibold mb-2">Location</h3>
<p className="text-gray-600">Colombo, Sri Lanka</p>
</div>

</div>

</section>

{/* ================= FORM ================= */}
<section className="bg-[#f7faf8] py-20 px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

{/* LEFT TEXT */}
<div>
<h2 className="text-4xl font-bold mb-6">
Send us a message
</h2>

<p className="text-gray-600 text-lg">
We usually respond within 24 hours.
</p>
</div>

{/* FORM */}
<form
onSubmit={handleSubmit}
className="bg-white rounded-3xl shadow-md p-10 space-y-6"
>

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
className="w-full p-4 border rounded-xl focus:outline-none focus:border-[#2E7D56]"
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
className="w-full p-4 border rounded-xl focus:outline-none focus:border-[#2E7D56]"
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
rows="5"
className="w-full p-4 border rounded-xl focus:outline-none focus:border-[#2E7D56]"
/>

<button
type="submit"
className="w-full py-4 bg-[#2E7D56] text-white rounded-xl font-semibold hover:bg-[#256a47]"
>
Send Message
</button>

</form>

</div>

</section>

{/* ================= CTA ================= */}
<section className="py-24 px-6 bg-white">

<div className="max-w-6xl mx-auto">

<div className="rounded-[32px] bg-[#2E7D56] px-10 md:px-20 py-20 text-center text-white shadow-xl">

<h2 className="text-5xl font-bold">
Need immediate support?
</h2>

<p className="mt-6 text-lg text-emerald-100 max-w-2xl mx-auto">
Our team is available to help you with orders, prescriptions and guidance.
</p>

<a
href="/support"
className="inline-block mt-10 px-10 py-4 bg-white text-[#2E7D56] rounded-xl font-semibold hover:scale-105 transition"
>
Contact Support
</a>

</div>

</div>

</section>

</div>
);
};

export default Contact;