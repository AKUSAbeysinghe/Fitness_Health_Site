import React,{useEffect,useState} from "react";
import FitnessBanner from "../../assets/Fitness/Mind & Body Harmony_ How Physical Activity Boosts Your Mood.jpg";


/* ---------------- SUBCATEGORY IDS ---------------- */
const SUBCATEGORY_IDS = {
  CARDIO:1,
  STRENGTH:2,
  ACCESSORIES:3,
  RECOVERY:4
};



/* ================= HEADER ================= */

const FitnessHeader=()=>{

const [activeTab,setActiveTab]=useState("Overview");

const tabs=[
"Overview",
"Equipment",
"Training",
"Recovery"
];

return(
<section className="bg-emerald-50/50 py-16 px-8">

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

{/* LEFT */}
<div>

<h4 className="text-[#2E7D56] font-semibold uppercase tracking-wide text-sm mb-4">
Fitness
</h4>

<h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
Train stronger. <br/>
Live healthier.
</h2>

<p className="text-lg text-gray-600 max-w-lg">
Discover premium fitness equipment, training essentials
and recovery solutions to support every wellness goal.
</p>

<div className="mt-8 flex flex-wrap gap-4">

<a
href="#fitness-products"
className="px-8 py-4 bg-[#2E7D56] text-white rounded-full font-semibold hover:bg-[#256a47]"
>
Shop Fitness
</a>

<a
href="/fitness-consult"
className="px-8 py-4 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white"
>
Get Expert Advice
</a>

</div>

</div>


{/* RIGHT IMAGE */}
<div className="rounded-3xl overflow-hidden shadow-xl">
<img
src={FitnessBanner}
alt="Fitness"
className="w-full h-[420px] object-cover"
/>
</div>

</div>



{/* Tabs */}
<div className="max-w-6xl mx-auto flex gap-8 flex-wrap border-b border-gray-200 pb-4">

{tabs.map(tab=>(
<button
key={tab}
onClick={()=>setActiveTab(tab)}
className={`pb-4 text-lg font-medium ${
activeTab===tab
? "text-gray-900 border-b-2 border-gray-900"
: "text-gray-500 hover:text-gray-700"
}`}
>
{tab}
</button>
))}

</div>

</section>
)

};



/* ================= PRODUCT CARD ================= */

const FitnessCard=({item})=>(

<div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition">

<div className="relative">

<img
src={
item.image_url ||
"https://via.placeholder.com/600x400?text=Fitness"
}
alt={item.name}
className="w-full h-72 object-cover"
/>

{item.popular &&(
<div className="absolute top-4 left-4 bg-[#2E7D56] text-white px-4 py-1 rounded-full text-sm font-semibold">
Top Pick
</div>
)}

<div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full font-semibold">
Rs. {new Intl.NumberFormat("en-LK").format(item.price)}
</div>

</div>


<div className="p-7">

<h3 className="text-2xl font-semibold">
{item.name}
</h3>

<p className="mt-3 text-gray-600 line-clamp-2">
{item.description ||
"Premium fitness equipment and accessories"}
</p>

<a
href={`/product/${item.id}`}
className="block mt-6 text-center py-4 bg-[#2E7D56] text-white rounded-xl hover:bg-[#256a47]"
>
View Details
</a>

</div>

</div>
);



/* ================= PRODUCT SECTION ================= */

const ProductSection=({
title,
subtitle,
items,
bg
})=>(

<section
id="fitness-products"
className={`${bg} py-20 px-6`}
>

<div className="text-center mb-14">

<h2 className="text-4xl font-bold">
{title}
</h2>

<p className="mt-4 text-gray-600">
{subtitle}
</p>

</div>


<div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{items.length ? (
items.map(item=>(
<FitnessCard
key={item.id}
item={item}
/>
))
):(
<p className="col-span-3 text-center text-gray-500">
No products available
</p>
)}

</div>

</section>
);



/* ================= WHY CHOOSE ================= */

const WhyChooseFitness=()=>{

const benefits=[
{
icon:"🏋️",
title:"Premium Equipment",
desc:"High quality fitness gear built to perform"
},
{
icon:"🔥",
title:"Performance Focused",
desc:"Train for strength endurance and results"
},
{
icon:"💪",
title:"Recovery Support",
desc:"Support recovery and long term progress"
},
{
icon:"⚡",
title:"Expert Guidance",
desc:"Fitness solutions backed by specialists"
}
]

return(
<section className="bg-gray-50 py-20 px-6">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold">
Why Choose Our Fitness Collection?
</h2>

<p className="mt-4 text-gray-600">
Performance gear designed for every fitness journey.
</p>


<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

{benefits.map((b,i)=>(
<div
key={i}
className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg"
>

<div className="text-5xl mb-5">
{b.icon}
</div>

<h3 className="text-2xl font-semibold mb-4">
{b.title}
</h3>

<p className="text-gray-600">
{b.desc}
</p>

</div>
))}

</div>

</div>

</section>
)

};



/* ================= CTA ================= */

const CallToAction=()=>(
<section className="bg-gray-900 py-20 px-6 text-white text-center">

<div className="max-w-4xl mx-auto">

<h2 className="text-5xl font-bold">
Ready To Reach Your Goals?
</h2>

<p className="mt-6 text-lg text-gray-300">
Shop fitness essentials and take your training further.
</p>

<div className="mt-10 flex flex-wrap justify-center gap-5">

<a
href="/shop-fitness"
className="px-10 py-4 bg-[#2E7D56] rounded-xl font-semibold"
>
Shop Fitness
</a>

<a
href="/personal-training"
className="px-10 py-4 border border-white rounded-xl hover:bg-white hover:text-black"
>
Training Consultation
</a>

</div>

</div>

</section>
);



/* ================= MAIN PAGE ================= */

const Fitness=()=>{

const [products,setProducts]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

useEffect(()=>{

const fetchProducts=async()=>{

try{

const res=await fetch(
"http://localhost/your-api/get_products.php?category_id=6"
);

const data=await res.json();

if(data.success){
setProducts(data.data);
}else{
setError("Could not load products");
}

}catch{
setError("Failed to fetch products");
}

finally{
setLoading(false);
}

};

fetchProducts();

},[]);



const cardio=products.filter(
i=>i.sub_category_id===SUBCATEGORY_IDS.CARDIO
);

const strength=products.filter(
i=>i.sub_category_id===SUBCATEGORY_IDS.STRENGTH
);

const recovery=products.filter(
i=>
i.sub_category_id===SUBCATEGORY_IDS.ACCESSORIES ||
i.sub_category_id===SUBCATEGORY_IDS.RECOVERY
);



return(
<div className="bg-white">

{error &&(
<div className="p-4 bg-red-100 text-red-700 text-center">
{error}
</div>
)}

{loading &&(
<div className="py-20 text-center">
Loading Fitness Products...
</div>
)}

<FitnessHeader/>

<ProductSection
title="Cardio Equipment"
subtitle="Support endurance, energy and movement."
items={cardio}
bg="bg-white"
/>

<ProductSection
title="Strength Training"
subtitle="Build power with premium training gear."
items={strength}
bg="bg-[#f7faf8]"
/>

<ProductSection
title="Accessories & Recovery"
subtitle="Recovery tools and performance accessories."
items={recovery}
bg="bg-white"
/>

<WhyChooseFitness/>

<CallToAction/>

</div>
)

};

export default Fitness;