import React, { useEffect, useState } from "react";
import SupplimentBanner from "../../assets/Suppliments/Can Magnesium Glycinate Lower Blood Sugar_ Here’s What the Science Says.jpg"

/* ---------------- SUBCATEGORY IDS ---------------- */
const SUBCATEGORY_IDS = {
  VITAMINS: 1,
  SPORTS_NUTRITION: 2,
  HERBAL_WELLNESS: 3,
  PROTEIN: 4,
};


/* ================= HEADER (replaces old hero) ================= */

const SupplementsHeader = () => {
  const [activeTab,setActiveTab]=useState("Overview");

  const tabs=[
    "Overview",
    "Vitamins",
    "Sports Nutrition",
    "Wellness"
  ];

return(
<section className="bg-emerald-50/50 py-16 px-8">

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

{/* LEFT */}
<div>
<h4 className="text-[#2E7D56] font-semibold uppercase tracking-wide text-sm mb-4">
Supplements
</h4>

<h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
Nutrition that powers <br/>
your wellness journey.
</h2>

<p className="text-lg text-gray-600 max-w-lg">
Premium vitamins, sports nutrition and wellness essentials —
trusted products to support energy, performance and everyday health.
</p>

<div className="mt-8 flex flex-wrap gap-4">

<a
href="#supplement-products"
className="px-8 py-4 bg-[#2E7D56] text-white rounded-full font-semibold hover:bg-[#256a47] transition"
>
Explore Supplements
</a>

<a
href="/nutrition-consult"
className="px-8 py-4 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
>
Get Expert Advice
</a>

</div>
</div>


{/* RIGHT IMAGE */}
<div className="rounded-3xl overflow-hidden shadow-xl">
<img
src={SupplimentBanner}
alt="Supplements"
className="w-full h-[420px] object-cover"
/>
</div>

</div>



{/* TABS */}
<div className="max-w-6xl mx-auto flex items-center gap-8 border-b border-gray-200 pb-4 flex-wrap">

{tabs.map((tab)=>(
<button
key={tab}
onClick={()=>setActiveTab(tab)}
className={`pb-4 text-lg font-medium transition-colors ${
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

const SupplementCard=({item})=>(
<div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition">

<div className="relative">

<img
src={
item.image_url ||
"https://via.placeholder.com/600x400?text=Supplements"
}
alt={item.name}
className="w-full h-72 object-cover"
/>

{item.popular &&(
<div className="absolute top-4 left-4 bg-[#2E7D56] text-white px-4 py-1 rounded-full text-sm font-semibold">
Best Seller
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
"Premium supplements for wellness and performance"}
</p>

<a
href={`/product/${item.id}`}
className="block mt-6 text-center py-4 bg-[#2E7D56] text-white rounded-xl hover:bg-[#256a47] transition"
>
View Details
</a>

</div>

</div>
);



/* ================= CATEGORY SECTION ================= */

const ProductSection=({
title,
subtitle,
items,
bg
})=>(

<section
className={`${bg} py-20 px-6`}
id="supplement-products"
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
<SupplementCard
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

const WhyChooseSupplements=()=>{

const benefits=[
{
icon:"💊",
title:"Premium Quality",
desc:"Carefully selected trusted brands"
},
{
icon:"💪",
title:"Performance Support",
desc:"Fuel recovery and endurance"
},
{
icon:"🌿",
title:"Wellness Focus",
desc:"Support everyday wellbeing"
},
{
icon:"🛡️",
title:"Expert Guidance",
desc:"Trusted supplement advice"
}
]

return(
<section className="bg-gray-50 py-20 px-6">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold">
Why Choose Our Supplements?
</h2>

<p className="mt-4 text-gray-600">
Quality nutrition backed by expertise.
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
Ready To Elevate Your Wellness?
</h2>

<p className="mt-6 text-lg text-gray-300">
Shop premium supplements or talk to a nutrition expert.
</p>

<div className="mt-10 flex flex-wrap justify-center gap-5">

<a
href="/shop-supplements"
className="px-10 py-4 bg-[#2E7D56] rounded-xl font-semibold"
>
Shop Now
</a>

<a
href="/nutrition-consult"
className="px-10 py-4 border border-white rounded-xl hover:bg-white hover:text-black"
>
Free Consultation
</a>

</div>

</div>

</section>
);



/* ================= MAIN PAGE ================= */

const Supplements=()=>{

const [products,setProducts]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

useEffect(()=>{

const fetchProducts=async()=>{
try{

const res=await fetch(
"http://localhost/your-api/get_products.php?category_id=5"
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



const vitamins=products.filter(
i=>i.sub_category_id===SUBCATEGORY_IDS.VITAMINS
);

const sportsNutrition=products.filter(
i=>
i.sub_category_id===SUBCATEGORY_IDS.SPORTS_NUTRITION ||
i.sub_category_id===SUBCATEGORY_IDS.PROTEIN
);

const wellness=products.filter(
i=>i.sub_category_id===SUBCATEGORY_IDS.HERBAL_WELLNESS
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
Loading Supplements...
</div>
)}

{/* NEW HEADER replaces old hero */}
<SupplementsHeader/>

<ProductSection
title="Vitamins & Minerals"
subtitle="Daily essentials for immunity and energy."
items={vitamins}
bg="bg-white"
/>

<ProductSection
title="Sports Nutrition"
subtitle="Fuel performance and recovery."
items={sportsNutrition}
bg="bg-[#f7faf8]"
/>

<ProductSection
title="Herbal Wellness"
subtitle="Natural support for balanced living."
items={wellness}
bg="bg-white"
/>

<WhyChooseSupplements/>

<CallToAction/>

</div>
)

};

export default Supplements;