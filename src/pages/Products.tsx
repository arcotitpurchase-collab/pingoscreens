// import { useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type Product = { name: string; slug: string; imageUrl: string; sourceUrl: string };
// type ProductGroup = {
//   id: string;
//   title: string;
//   description: string;
//   items: Product[];
// };

// // Series and group names follow the product menu in your reference screenshots.
// // These are reference catalogue labels: confirm which series Pingo Screens
// // actually supplies before publishing them as your official catalogue.
// const groups: ProductGroup[] = [
//   {
//     id: "fine-pitch",
//     title: "Fine Pitch Displays",
//     description: "Display series presented in the fine-pitch collection.",
//     items: [
//       { name: "Spectra", slug: "spectra", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/spectra/spectra_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/home-led-display" },
//       { name: "Apex Series", slug: "apex-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/ignis-pro/ignis-pro-front.webp", sourceUrl: "https://www.xtreme-media.com/products/apex-series" },
//       { name: "LIT Series", slug: "lit-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/lit/lit_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/lit-series" },
//       { name: "IGNIS Series", slug: "ignis-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/ignis/ignis_front.webp", sourceUrl: "https://www.xtreme-media.com/products/ignis-series" },
//       { name: "Ace Series", slug: "ace-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/ace/ace_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/ace-series" },
//       { name: "Unify", slug: "unify", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/unify/unify_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/unify" },
//       { name: "Helio Series", slug: "helio-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/helio/helio_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/helio-series" },
//     ],
//   },
//   {
//     id: "indoor",
//     title: "Indoor LED Video Walls",
//     description: "Screen series for indoor display environments and creative installations.",
//     items: [
//       { name: "Vega Series", slug: "vega-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/vega/vega_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/vega" },
//       { name: "Vega Studio", slug: "vega-studio", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/vega_studio/vega_studio_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/vegas" },
//       { name: "Nyx Indoor Series", slug: "nyx-indoor-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/nyx_indoor/nyx_indoor_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-indoor" },
//       { name: "NYX Modular Series", slug: "nyx-modular-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/nyx_modular/nyx_modular_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-modular" },
//       { name: "Flex Series", slug: "flex-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/flex/flex_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/flex-series" },
//       { name: "Iris Indoor Series", slug: "iris-indoor-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/iris_indoor/iris_indoor_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-indoor-series" },
//       { name: "Crystal Series", slug: "crystal-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/crystal/crystal_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/crystalseries" },
//       { name: "GlowBox Series", slug: "glowbox-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/glowbox/glowbox_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/glowbox" },
//       { name: "Floor LED Display", slug: "floor-led-display", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/floor_led/floor_led_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/floor-led-display" },
//     ],
//   },
//   {
//     id: "outdoor",
//     title: "Outdoor LED Video Walls",
//     description: "Display series associated with exterior and outdoor applications.",
//     items: [
//       { name: "Earth Series", slug: "earth-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/earth/earth_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/earth-series-energy-efficient" },
//       { name: "Aegis Pro Series", slug: "aegis-pro-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/aegis/aegis_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/aegis-pro" },
//       { name: "Nyx OD Series", slug: "nyx-od-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/nyx_outdoor/nyx_od_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-od" },
//       { name: "Iris Outdoor Series", slug: "iris-outdoor-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/iris_outdoor/iris_od_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-outdoor-series" },
//       { name: "Iris Media Façade", slug: "iris-media-facade", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/iris_media_facade/iris_media_facade_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-media-facade-series" },
//     ],
//   },
//   {
//     id: "rental",
//     title: "Rental Displays",
//     description: "Series shown under the rental display category in your reference.",
//     items: [
//       { name: "Arena Series", slug: "arena-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/arena/arena_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/arena" },
//       { name: "Orion Series", slug: "orion-series", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/orion/orion_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/orion" },
//     ],
//   },
//   {
//     id: "sports",
//     title: "Sports Series",
//     description: "Screen series presented for sports display applications.",
//     items: [
//       { name: "Atlas", slug: "atlas", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/atlas/atlas_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/atlas" },
//       { name: "Atlas Pro", slug: "atlas-pro", imageUrl: "https://www.xtreme-media.com/images/navbar-cabinet-images/atlas_pro/atlas_pro_cab.webp", sourceUrl: "https://www.xtreme-media.com/products/atlas-pro" },
//     ],
//   },
// ];

// function ArrowIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M7 17 17 7M8 7h9v9" />
//     </svg>
//   );
// }

// function DisplayIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
//       <rect x="6" y="7" width="68" height="45" rx="1" />
//       <path d="M11 12h58v35H11zM40 52v7m-14 0h28M11 37l14-14 10 10 15-15 19 19" />
//       <circle cx="55" cy="20" r="3" />
//     </svg>
//   );
// }

// function ProductCard({ product, index }: { product: Product; index: number }) {
//   const [imageFailed, setImageFailed] = useState(false);
//   const imagePath = product.imageUrl;

//   return (
//     <article className="group min-w-0 overflow-hidden border border-[#E5EAF0] bg-white transition-[border-color,box-shadow] duration-500 hover:border-[#BCD3E5] hover:shadow-[0_18px_40px_rgba(15,40,65,0.07)]">
//       <div className="relative aspect-[5/4] overflow-hidden bg-[linear-gradient(145deg,#F4F8FB_0%,#E6EDF3_100%)]">
//         {imageFailed ? (
//           <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-5 text-center text-[#7591A6]">
//             <DisplayIcon className="h-16 w-20 opacity-50" />
//             <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8DA1B1]">Product image coming soon</span>
//           </div>
//         ) : (
//           <img
//             src={imagePath}
//             alt={`${product.name} LED cabinet — Xtreme Media reference image`}
//             loading="lazy"
//             decoding="async"
//             onError={() => setImageFailed(true)}
//             className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.055] motion-reduce:transition-none sm:p-8"
//           />
//         )}
//         <span className="absolute left-4 top-4 text-[11px] font-medium tracking-[0.18em] text-[#879AA9]">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>
//       <div className="flex min-h-[94px] items-center justify-between gap-3 border-t border-[#E9EEF2] px-5 py-5 sm:px-6">
//         <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.02em] text-[#17344B] sm:text-[19px]">{product.name}</h3>
//         <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${product.name} on Xtreme Media (opens new tab)`} title="View manufacturer reference" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D7E4EC] text-[#176FA2] transition-colors duration-300 hover:border-[#176FA2] hover:bg-[#176FA2] hover:text-white focus-visible:outline-2 focus-visible:outline-[#176FA2]">
//           <ArrowIcon className="h-[18px] w-[18px]" />
//         </a>
//       </div>
//     </article>
//   );
// }

// export default function Products() {
//   const reducedMotion = useReducedMotion();
//   const [activeGroup, setActiveGroup] = useState("fine-pitch");
//   const selectedGroup = groups.find((group) => group.id === activeGroup) ?? groups[0];


//   return (
//     <main className="min-h-screen bg-white">
//       {/* INTRO — compact visual headline */}
//       <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
//         <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DFEEF8]/60 blur-[110px]" />
//         <div className="relative mx-auto max-w-[1440px]">
//           <motion.p
//             initial={{ opacity: reducedMotion ? 1 : 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: reducedMotion ? 0 : 0.5 }}
//             className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#1266A3]"
//           >
//             Pingo Screens / Collection
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeOut" }}
//             className="mt-5 max-w-[950px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]"
//           >
//             The Art of <span className="text-[#1266A3]">Display.</span>
//           </motion.h1>
//           <p className="mt-6 max-w-[680px] text-[16px] leading-8 text-[#637789] sm:text-[18px]">
//             Explore LED display series across fine pitch, indoor, outdoor, rental and sports collections.
//           </p>
//         </div>
//       </section>

//       <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
//         <div className="mx-auto max-w-[1440px]">
//               {/* GROUP FILTERS */}
//               <div className="mb-12 flex flex-wrap gap-2.5 sm:mb-14 sm:gap-3" aria-label="Select LED product category">
//                 {groups.map((group) => (
//                   <button
//                     key={group.id}
//                     type="button"
//                     aria-pressed={activeGroup === group.id}
//                     onClick={() => setActiveGroup(group.id)}
//                     className={`border px-4 py-3 text-[13px] font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1266A3] sm:px-5 sm:text-[14px] ${activeGroup === group.id ? "border-[#142B48] bg-[#142B48] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#1266A3] hover:text-[#1266A3]"}`}
//                   >
//                     {group.title}
//                   </button>
//                 ))}
//               </div>

//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={selectedGroup.id}
//                   initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: reducedMotion ? 1 : 0 }}
//                   transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
//                 >
//                   <div className="mb-9 flex flex-col gap-5 border-b border-[#E6EDF2] pb-8 sm:flex-row sm:items-end sm:justify-between">
//                     <div>
//                       <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1266A3]">LED Video Walls / Collection</p>
//                       <h2 className="text-[clamp(2rem,3.8vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#142B48]">{selectedGroup.title}</h2>
//                       <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#6B7D8E]">{selectedGroup.description}</p>
//                     </div>
//                     <span className="shrink-0 text-[12px] font-medium uppercase tracking-[0.14em] text-[#8B9CAB]">
//                       {String(selectedGroup.items.length).padStart(2, "0")} Series
//                     </span>
//                   </div>

//                   <p className="mb-6 text-[12px] leading-6 text-[#728597]">Series names, cabinet images and external links are from the Xtreme Media reference catalogue. Availability through Pingo Screens has not been confirmed.</p>
//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {selectedGroup.items.map((product, index) => (
//                       <ProductCard key={`${selectedGroup.id}-${product.slug}`} product={product} index={index} />
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//         </div>
//       </section>
//     </main>
//   );
// }







// import { useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type Product = { name: string; slug: string; imageUrl: string; sourceUrl: string };
// type ProductGroup = {
//   id: string;
//   title: string;
//   description: string;
//   items: Product[];
// };

// const groups: ProductGroup[] = [
//   {
//     id: "fine-pitch",
//     title: "Fine Pitch Displays",
//     description: "Display series presented in the fine-pitch collection.",
//     items: [
//       { name: "Spectra", slug: "spectra", imageUrl: "/images/products/fine-pitch/spectra.webp", sourceUrl: "https://www.xtreme-media.com/products/home-led-display" },
//       { name: "Apex Series", slug: "apex-series", imageUrl: "/images/products/fine-pitch/apex-series.webp", sourceUrl: "https://www.xtreme-media.com/products/apex-series" },
//       { name: "LIT Series", slug: "lit-series", imageUrl: "/images/products/fine-pitch/lit-series.webp", sourceUrl: "https://www.xtreme-media.com/products/lit-series" },
//       { name: "IGNIS Series", slug: "ignis-series", imageUrl: "/images/products/fine-pitch/ignis-series.webp", sourceUrl: "https://www.xtreme-media.com/products/ignis-series" },
//       { name: "Ace Series", slug: "ace-series", imageUrl: "/images/products/fine-pitch/ace-series.webp", sourceUrl: "https://www.xtreme-media.com/products/ace-series" },
//       { name: "Unify", slug: "unify", imageUrl: "/images/products/fine-pitch/unify.webp", sourceUrl: "https://www.xtreme-media.com/products/unify" },
//       { name: "Helio Series", slug: "helio-series", imageUrl: "/images/products/fine-pitch/helio-series.webp", sourceUrl: "https://www.xtreme-media.com/products/helio-series" },
//     ],
//   },
//   {
//     id: "indoor",
//     title: "Indoor LED Video Walls",
//     description: "Screen series for indoor display environments and creative installations.",
//     items: [
//       { name: "Vega Series", slug: "vega-series", imageUrl: "/images/products/indoor/vega-series.webp", sourceUrl: "https://www.xtreme-media.com/products/vega" },
//       { name: "Vega Studio", slug: "vega-studio", imageUrl: "/images/products/indoor/vega-studio.webp", sourceUrl: "https://www.xtreme-media.com/products/vegas" },
//       { name: "Nyx Indoor Series", slug: "nyx-indoor-series", imageUrl: "/images/products/indoor/nyx-indoor-series.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-indoor" },
//       { name: "NYX Modular Series", slug: "nyx-modular-series", imageUrl: "/images/products/indoor/nyx-modular-series.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-modular" },
//       { name: "Flex Series", slug: "flex-series", imageUrl: "/images/products/indoor/flex-series.webp", sourceUrl: "https://www.xtreme-media.com/products/flex-series" },
//       { name: "Iris Indoor Series", slug: "iris-indoor-series", imageUrl: "/images/products/indoor/iris-indoor-series.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-indoor-series" },
//       { name: "Crystal Series", slug: "crystal-series", imageUrl: "/images/products/indoor/crystal-series.webp", sourceUrl: "https://www.xtreme-media.com/products/crystalseries" },
//       { name: "GlowBox Series", slug: "glowbox-series", imageUrl: "/images/products/indoor/glowbox-series.webp", sourceUrl: "https://www.xtreme-media.com/products/glowbox" },
//       { name: "Floor LED Display", slug: "floor-led-display", imageUrl: "/images/products/indoor/floor-led-display.webp", sourceUrl: "https://www.xtreme-media.com/products/floor-led-display" },
//     ],
//   },
//   {
//     id: "outdoor",
//     title: "Outdoor LED Video Walls",
//     description: "Display series associated with exterior and outdoor applications.",
//     items: [
//       { name: "Earth Series", slug: "earth-series", imageUrl: "/images/products/outdoor/earth-series.webp", sourceUrl: "https://www.xtreme-media.com/products/earth-series-energy-efficient" },
//       { name: "Aegis Pro Series", slug: "aegis-pro-series", imageUrl: "/images/products/outdoor/aegis-pro-series.webp", sourceUrl: "https://www.xtreme-media.com/products/aegis-pro" },
//       { name: "Nyx OD Series", slug: "nyx-od-series", imageUrl: "/images/products/outdoor/nyx-od-series.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-od" },
//       { name: "Iris Outdoor Series", slug: "iris-outdoor-series", imageUrl: "/images/products/outdoor/iris-outdoor-series.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-outdoor-series" },
//       { name: "Iris Media Façade", slug: "iris-media-facade", imageUrl: "/images/products/outdoor/iris-media-facade.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-media-facade-series" },
//     ],
//   },
//   {
//     id: "rental",
//     title: "Rental Displays",
//     description: "Series shown under the rental display category in your reference.",
//     items: [
//       { name: "Arena Series", slug: "arena-series", imageUrl: "/images/products/rental/arena-series.webp", sourceUrl: "https://www.xtreme-media.com/products/arena" },
//       { name: "Orion Series", slug: "orion-series", imageUrl: "/images/products/rental/orion-series.webp", sourceUrl: "https://www.xtreme-media.com/products/orion" },
//     ],
//   },
//   {
//     id: "sports",
//     title: "Sports Series",
//     description: "Screen series presented for sports display applications.",
//     items: [
//       { name: "Atlas", slug: "atlas", imageUrl: "/images/products/sports/atlas.webp", sourceUrl: "https://www.xtreme-media.com/products/atlas" },
//       { name: "Atlas Pro", slug: "atlas-pro", imageUrl: "/images/products/sports/atlas-pro.webp", sourceUrl: "https://www.xtreme-media.com/products/atlas-pro" },
//     ],
//   },
// ];

// function ArrowIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M7 17 17 7M8 7h9v9" />
//     </svg>
//   );
// }

// function DisplayIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
//       <rect x="6" y="7" width="68" height="45" rx="1" />
//       <path d="M11 12h58v35H11zM40 52v7m-14 0h28M11 37l14-14 10 10 15-15 19 19" />
//       <circle cx="55" cy="20" r="3" />
//     </svg>
//   );
// }

// function ProductCard({ product, index }: { product: Product; index: number }) {
//   const [imageFailed, setImageFailed] = useState(false);
//   const imagePath = product.imageUrl;

//   return (
//     <article className="group min-w-0 overflow-hidden border border-[#E5EAF0] bg-white transition-[border-color,box-shadow] duration-500 hover:border-[#BCD3E5] hover:shadow-[0_18px_40px_rgba(15,40,65,0.07)]">
//       <div className="relative aspect-[5/4] overflow-hidden bg-[linear-gradient(145deg,#F4F8FB_0%,#E6EDF3_100%)]">
//         {imageFailed ? (
//           <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-5 text-center text-[#7591A6]">
//             <DisplayIcon className="h-16 w-20 opacity-50" />
//             <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8DA1B1]">Product image coming soon</span>
//           </div>
//         ) : (
//           <img
//             src={imagePath}
//             alt={`${product.name} LED display product image`}
//             loading="lazy"
//             decoding="async"
//             onError={() => setImageFailed(true)}
//             className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.055] motion-reduce:transition-none sm:p-8"
//           />
//         )}
//         <span className="absolute left-4 top-4 text-[11px] font-medium tracking-[0.18em] text-[#879AA9]">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>
//       <div className="flex min-h-[94px] items-center justify-between gap-3 border-t border-[#E9EEF2] px-5 py-5 sm:px-6">
//         <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.02em] text-[#17344B] sm:text-[19px]">{product.name}</h3>
//         <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${product.name} on Xtreme Media (opens new tab)`} title="View manufacturer reference" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D7E4EC] text-[#176FA2] transition-colors duration-300 hover:border-[#176FA2] hover:bg-[#176FA2] hover:text-white focus-visible:outline-2 focus-visible:outline-[#176FA2]">
//           <ArrowIcon className="h-[18px] w-[18px]" />
//         </a>
//       </div>
//     </article>
//   );
// }

// export default function Products() {
//   const reducedMotion = useReducedMotion();
//   const [activeGroup, setActiveGroup] = useState("fine-pitch");
//   const selectedGroup = groups.find((group) => group.id === activeGroup) ?? groups[0];


//   return (
//     <main className="min-h-screen bg-white">
//       {/* INTRO — compact visual headline */}
//       <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
//         <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DFEEF8]/60 blur-[110px]" />
//         <div className="relative mx-auto max-w-[1440px]">
//           <motion.p
//             initial={{ opacity: reducedMotion ? 1 : 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: reducedMotion ? 0 : 0.5 }}
//             className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#1266A3]"
//           >
//             Pingo Screens / Collection
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeOut" }}
//             className="mt-5 max-w-[950px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]"
//           >
//             The Art of <span className="text-[#1266A3]">Display.</span>
//           </motion.h1>
//           <p className="mt-6 max-w-[680px] text-[16px] leading-8 text-[#637789] sm:text-[18px]">
//             Explore LED display series across fine pitch, indoor, outdoor, rental and sports collections.
//           </p>
//         </div>
//       </section>

//       <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
//         <div className="mx-auto max-w-[1440px]">
//               {/* GROUP FILTERS */}
//               <div className="mb-12 flex flex-wrap gap-2.5 sm:mb-14 sm:gap-3" aria-label="Select LED product category">
//                 {groups.map((group) => (
//                   <button
//                     key={group.id}
//                     type="button"
//                     aria-pressed={activeGroup === group.id}
//                     onClick={() => setActiveGroup(group.id)}
//                     className={`border px-4 py-3 text-[13px] font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1266A3] sm:px-5 sm:text-[14px] ${activeGroup === group.id ? "border-[#142B48] bg-[#142B48] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#1266A3] hover:text-[#1266A3]"}`}
//                   >
//                     {group.title}
//                   </button>
//                 ))}
//               </div>

//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={selectedGroup.id}
//                   initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: reducedMotion ? 1 : 0 }}
//                   transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
//                 >
//                   <div className="mb-9 flex flex-col gap-5 border-b border-[#E6EDF2] pb-8 sm:flex-row sm:items-end sm:justify-between">
//                     <div>
//                       <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1266A3]">LED Video Walls / Collection</p>
//                       <h2 className="text-[clamp(2rem,3.8vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#142B48]">{selectedGroup.title}</h2>
//                       <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#6B7D8E]">{selectedGroup.description}</p>
//                     </div>
//                     <span className="shrink-0 text-[12px] font-medium uppercase tracking-[0.14em] text-[#8B9CAB]">
//                       {String(selectedGroup.items.length).padStart(2, "0")} Series
//                     </span>
//                   </div>

//                   <p className="mb-6 text-[12px] leading-6 text-[#728597]">Series names, cabinet images and external links are from the Xtreme Media reference catalogue. Availability through Pingo Screens has not been confirmed.</p>
//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {selectedGroup.items.map((product, index) => (
//                       <ProductCard key={`${selectedGroup.id}-${product.slug}`} product={product} index={index} />
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//         </div>
//       </section>
//     </main>
//   );
// }













// import { useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type Product = { name: string; slug: string; imageUrl: string; sourceUrl: string };
// type ProductGroup = {
//   id: string;
//   title: string;
//   description: string;
//   items: Product[];
// };

// const groups: ProductGroup[] = [
//   {
//     id: "fine-pitch",
//     title: "Fine Pitch Displays",
//     description: "Display series presented in the fine-pitch collection.",
//     items: [
//       { name: "Spectra", slug: "spectra", imageUrl: "/images/products/fine-pitch/spectra.webp", sourceUrl: "https://www.xtreme-media.com/products/home-led-display" },
//       { name: "Apex Series", slug: "apex-series", imageUrl: "/images/products/fine-pitch/apex-series.webp", sourceUrl: "https://www.xtreme-media.com/products/apex-series" },
//       { name: "LIT Series", slug: "lit-series", imageUrl: "/images/products/fine-pitch/lit-series.webp", sourceUrl: "https://www.xtreme-media.com/products/lit-series" },
//       { name: "IGNIS Series", slug: "ignis-series", imageUrl: "/images/products/fine-pitch/ignis-series.webp", sourceUrl: "https://www.xtreme-media.com/products/ignis-series" },
//       { name: "Ace Series", slug: "ace-series", imageUrl: "/images/products/fine-pitch/ace-series.webp", sourceUrl: "https://www.xtreme-media.com/products/ace-series" },
//       { name: "Unify", slug: "unify", imageUrl: "/images/products/fine-pitch/unify.webp", sourceUrl: "https://www.xtreme-media.com/products/unify" },
//       { name: "Helio Series", slug: "helio-series", imageUrl: "/images/products/fine-pitch/helio-series.webp", sourceUrl: "https://www.xtreme-media.com/products/helio-series" },
//     ],
//   },

//   {
//     id: "indoor",
//     title: "Indoor LED Video Walls",
//     description: "Screen series for indoor display environments and creative installations.",
//     items: [
//       { name: "Vega Series", slug: "vega-series", imageUrl: "/images/products/indoor/vega-series.webp", sourceUrl: "https://www.xtreme-media.com/products/vega" },
//       { name: "Vega Studio", slug: "vega-studio", imageUrl: "/images/products/indoor/vega-studio.webp", sourceUrl: "https://www.xtreme-media.com/products/vegas" },
//       { name: "Nyx Indoor Series", slug: "nyx-indoor-series", imageUrl: "/images/products/indoor/nyx-indoor-series.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-indoor" },
//       { name: "NYX Modular Series", slug: "nyx-modular-series", imageUrl: "/images/products/indoor/nyx-modular-series.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-modular" },
//       { name: "Flex Series", slug: "flex-series", imageUrl: "/images/products/indoor/flex-series.webp", sourceUrl: "https://www.xtreme-media.com/products/flex-series" },
//       { name: "Iris Indoor Series", slug: "iris-indoor-series", imageUrl: "/images/products/indoor/iris-indoor-series.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-indoor-series" },
//       { name: "Crystal Series", slug: "crystal-series", imageUrl: "/images/products/indoor/crystal-series.webp", sourceUrl: "https://www.xtreme-media.com/products/crystalseries" },
//       { name: "GlowBox Series", slug: "glowbox-series", imageUrl: "/images/products/indoor/glowbox-series.webp", sourceUrl: "https://www.xtreme-media.com/products/glowbox" },
//       { name: "Floor LED Display", slug: "floor-led-display", imageUrl: "/images/products/indoor/floor-led-display.webp", sourceUrl: "https://www.xtreme-media.com/products/floor-led-display" },
//     ],
//   },

//   {
//     id: "outdoor",
//     title: "Outdoor LED Video Walls",
//     description: "Display series associated with exterior and outdoor applications.",
//     items: [
//       { name: "Earth Series", slug: "earth-series", imageUrl: "/images/products/outdoor/earth-series.webp", sourceUrl: "https://www.xtreme-media.com/products/earth-series-energy-efficient" },
//       { name: "Aegis Pro Series", slug: "aegis-pro-series", imageUrl: "/images/products/outdoor/aegis-pro-series.webp", sourceUrl: "https://www.xtreme-media.com/products/aegis-pro" },
//       { name: "Nyx OD Series", slug: "nyx-od-series", imageUrl: "/images/products/outdoor/nyx-od-series.webp", sourceUrl: "https://www.xtreme-media.com/products/nyx-od" },
//       { name: "Iris Outdoor Series", slug: "iris-outdoor-series", imageUrl: "/images/products/outdoor/iris-outdoor-series.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-outdoor-series" },
//       { name: "Iris Media Façade", slug: "iris-media-facade", imageUrl: "/images/products/outdoor/iris-media-facade.webp", sourceUrl: "https://www.xtreme-media.com/products/iris-media-facade-series" },
//     ],
//   },

//   {
//     id: "rental",
//     title: "Rental Displays",
//     description: "Series shown under the rental display category in your reference.",
//     items: [
//       { name: "Arena Series", slug: "arena-series", imageUrl: "/images/products/rental/arena-series.webp", sourceUrl: "https://www.xtreme-media.com/products/arena" },
//       { name: "Orion Series", slug: "orion-series", imageUrl: "/images/products/rental/orion-series.webp", sourceUrl: "https://www.xtreme-media.com/products/orion" },
//     ],
//   },
  
//   {
//     id: "sports",
//     title: "Sports Series",
//     description: "Screen series presented for sports display applications.",
//     items: [
//       { name: "Atlas", slug: "atlas", imageUrl: "/images/products/sports/atlas.webp", sourceUrl: "https://www.xtreme-media.com/products/atlas" },
//       { name: "Atlas Pro", slug: "atlas-pro", imageUrl: "/images/products/sports/atlas-pro.webp", sourceUrl: "https://www.xtreme-media.com/products/atlas-pro" },
//     ],
//   },
// ];

// function ArrowIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M7 17 17 7M8 7h9v9" />
//     </svg>
//   );
// }

// function DisplayIcon({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
//       <rect x="6" y="7" width="68" height="45" rx="1" />
//       <path d="M11 12h58v35H11zM40 52v7m-14 0h28M11 37l14-14 10 10 15-15 19 19" />
//       <circle cx="55" cy="20" r="3" />
//     </svg>
//   );
// }

// function ProductCard({ product, index }: { product: Product; index: number }) {
//   const [imageFailed, setImageFailed] = useState(false);
//   const imagePath = product.imageUrl;

//   return (
//     <article className="group min-w-0 overflow-hidden border border-[#E5EAF0] bg-white transition-[border-color,box-shadow] duration-500 hover:border-[#A9C5FF] hover:shadow-[0_18px_40px_rgba(15,40,65,0.07)]">
//       <div className="relative aspect-[5/4] overflow-hidden bg-[linear-gradient(145deg,#F4F8FB_0%,#E6EDF3_100%)]">
//         {imageFailed ? (
//           <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-5 text-center text-[#7591A6]">
//             <DisplayIcon className="h-16 w-20 opacity-50" />
//             <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#8DA1B1]">Product image coming soon</span>
//           </div>
//         ) : (
//           <img
//             src={imagePath}
//             alt={`${product.name} LED display product image`}
//             loading="lazy"
//             decoding="async"
//             onError={() => setImageFailed(true)}
//             className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.055] motion-reduce:transition-none sm:p-8"
//           />
//         )}
//         <span className="absolute left-4 top-4 text-xs font-medium tracking-[0.12em] text-[#879AA9]">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>
//       <div className="flex min-h-[82px] items-center justify-between gap-3 border-t border-[#E9EEF2] px-5 py-5 sm:px-6">
//         <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-[#142B48] sm:text-lg">{product.name}</h3>
//         <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${product.name} on Xtreme Media (opens new tab)`} title="View manufacturer reference" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D7E4EC] text-[#0047C0] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#003799] hover:text-white focus-visible:outline-2 focus-visible:outline-[#0047C0]">
//           <ArrowIcon className="h-[18px] w-[18px]" />
//         </a>
//       </div>
//     </article>
//   );
// }

// export default function Products() {
//   const reducedMotion = useReducedMotion();
//   const [activeGroup, setActiveGroup] = useState("fine-pitch");
//   const selectedGroup = groups.find((group) => group.id === activeGroup) ?? groups[0];


//   return (
//     <main className="min-h-screen bg-white">
//       {/* INTRO — compact visual headline */}
//       <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
//         <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DCE7FF]/60 blur-[110px]" />
//         <div className="relative mx-auto max-w-[1440px]">
//           <motion.p
//             initial={{ opacity: reducedMotion ? 1 : 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: reducedMotion ? 0 : 0.5 }}
//             className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]"
//           >
//             Pingo Screens / Collection
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeOut" }}
//             className="mt-5 max-w-[950px] text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]"
//           >
//             The Art of <span className="text-[#0047C0]">Display.</span>
//           </motion.h1>
//           <p className="mt-6 max-w-[680px] text-base font-normal leading-8 text-[#637789]">
//             Explore LED display series across fine pitch, indoor, outdoor, rental and sports collections.
//           </p>
//         </div>
//       </section>

//       <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
//         <div className="mx-auto max-w-[1440px]">
//               {/* GROUP FILTERS */}
//               <div className="mb-12 flex flex-wrap gap-2.5 sm:mb-14 sm:gap-3" aria-label="Select LED product category">
//                 {groups.map((group) => (
//                   <button
//                     key={group.id}
//                     type="button"
//                     aria-pressed={activeGroup === group.id}
//                     onClick={() => setActiveGroup(group.id)}
//                     className={`border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] sm:px-5 ${activeGroup === group.id ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#0047C0] hover:text-[#0047C0]"}`}
//                   >
//                     {group.title}
//                   </button>
//                 ))}
//               </div>

//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={selectedGroup.id}
//                   initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: reducedMotion ? 1 : 0 }}
//                   transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
//                 >
//                   <div className="mb-9 flex flex-col gap-5 border-b border-[#E6EDF2] pb-8 sm:flex-row sm:items-end sm:justify-between">
//                     <div>
//                       <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">LED Video Walls / Collection</p>
//                       <h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#142B48]">{selectedGroup.title}</h2>
//                       <p className="mt-4 max-w-[650px] text-base font-normal leading-7 text-[#6B7D8E]">{selectedGroup.description}</p>
//                     </div>
//                     <span className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[#8B9CAB]">
//                       {String(selectedGroup.items.length).padStart(2, "0")} Series
//                     </span>
//                   </div>

//                   <p className="mb-6 text-xs font-normal leading-6 text-[#728597]">Series names, cabinet images and external links are from the Xtreme Media reference catalogue. Availability through Pingo Screens has not been confirmed.</p>
//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {selectedGroup.items.map((product, index) => (
//                       <ProductCard key={`${selectedGroup.id}-${product.slug}`} product={product} index={index} />
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//         </div>
//       </section>
//     </main>
//   );
// }




// import { useEffect, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type Product = {
//   name: string;
//   slug: string;
//   groupId: string;
//   imageUrl: string;
//   description: string;
//   pixelPitch: string;
//   brightness: string;
//   refreshRate: string;
//   features: string[];
// };

// const PRODUCTS: Product[] = [
//   {
//     "name": "Spectra",
//     "slug": "spectra",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/spectra.webp",
//     "description": "A fine-pitch LED solution suited to premium home entertainment and immersive large-screen viewing.",
//     "pixelPitch": "0.9, 1.25, 1.56 mm",
//     "brightness": "600–1200 nits",
//     "refreshRate": "≥3840 Hz",
//     "features": [
//       "Home LED display",
//       "customizable bezels",
//       "deep black",
//       "97% color uniformity"
//     ]
//   },
//   {
//     "name": "Apex Series",
//     "slug": "apex-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/apex-series.webp",
//     "description": "A fine-pitch COB display series focused on detailed imagery and high contrast.",
//     "pixelPitch": "0.9, 1.25, 1.56 mm",
//     "brightness": "1200 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Flip-chip COB",
//       "common cathode",
//       "40000:1 contrast"
//     ]
//   },
//   {
//     "name": "LIT Series",
//     "slug": "lit-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/lit-series.webp",
//     "description": "A COB-based fine-pitch display range with multiple high-resolution pixel-pitch options.",
//     "pixelPitch": "0.62, 0.78, 0.9, 1.25, 1.56 mm",
//     "brightness": "600–800 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Flip-chip COB",
//       "common cathode",
//       "20000:1–40000:1 contrast"
//     ]
//   },
//   {
//     "name": "IGNIS Series",
//     "slug": "ignis-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/ignis-series.webp",
//     "description": "A Flip-Chip COB LED series for refined indoor visual presentations.",
//     "pixelPitch": "1.25, 1.56 mm",
//     "brightness": "600 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Flip-chip COB",
//       "common anode",
//       "20000:1 contrast"
//     ]
//   },
//   {
//     "name": "Ace Series",
//     "slug": "ace-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/ace-series.webp",
//     "description": "Professional small-pitch LED displays for boardrooms and control environments.",
//     "pixelPitch": "0.94, 1.25, 1.56, 1.87 mm",
//     "brightness": "600–800 nits",
//     "refreshRate": "≥3840 Hz",
//     "features": [
//       "SMD",
//       "control centers and boardrooms",
//       "front service"
//     ]
//   },
//   {
//     "name": "Unify",
//     "slug": "unify",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/unify.webp",
//     "description": "An integrated all-in-one LED display designed for presentations and collaboration.",
//     "pixelPitch": "0.9375, 1.25, 1.5625 mm",
//     "brightness": "600–800 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "All-in-one COB display",
//       "108–163 inch",
//       "Android 13"
//     ]
//   },
//   {
//     "name": "Helio Series",
//     "slug": "helio-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/helio-series.webp",
//     "description": "MIP LED displays with slim cabinet construction and fine-pitch configurations.",
//     "pixelPitch": "0.93, 1.25, 1.56 mm",
//     "brightness": "800–1200 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "MIP",
//       "27.5 mm cabinet depth",
//       "front service"
//     ]
//   },
//   {
//     "name": "Vega Series",
//     "slug": "vega-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/vega-series.webp",
//     "description": "Modular indoor LED displays suitable for a wide range of fixed-installation layouts.",
//     "pixelPitch": "1.84, 2.5, 3.9 mm",
//     "brightness": "800–3500 nits",
//     "refreshRate": "≥3840 Hz",
//     "features": [
//       "Modular cabinets and curved arrangement",
//       "selected high-brightness variants"
//     ]
//   },
//   {
//     "name": "Vega Studio",
//     "slug": "vega-studio",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/vega-studio.webp",
//     "description": "LED display systems intended for studio and virtual-production environments.",
//     "pixelPitch": "2.5 mm",
//     "brightness": "1000 nits",
//     "refreshRate": "Confirm with supplier (conflicting published figures)",
//     "features": [
//       "Broadcast/virtual production",
//       "refresh-rate discrepancy on source"
//     ]
//   },
//   {
//     "name": "Nyx Indoor Series",
//     "slug": "nyx-indoor-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/nyx-indoor-series.webp",
//     "description": "Front-service modular SMD LED displays for everyday indoor applications.",
//     "pixelPitch": "1.86, 2, 2.5 mm",
//     "brightness": "600–700 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Front-service indoor SMD display",
//       "modular cabinets"
//     ]
//   },
//   {
//     "name": "NYX Modular Series",
//     "slug": "nyx-modular-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/nyx-modular-series.webp",
//     "description": "Cabinetless modular indoor LED screens offering adaptable installation formats.",
//     "pixelPitch": "1.86, 2, 2.5 mm",
//     "brightness": "600–700 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Cabinetless modular display",
//       "320×160 mm modules"
//     ]
//   },
//   {
//     "name": "Flex Series",
//     "slug": "flex-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/flex-series.webp",
//     "description": "Flexible LED panels designed for curved concave or convex display installations.",
//     "pixelPitch": "0.94, 1.25, 1.56, 1.88, 2.5 mm",
//     "brightness": "600–700 nits",
//     "refreshRate": "≥3840 Hz",
//     "features": [
//       "Flexible concave and convex configurations"
//     ]
//   },
//   {
//     "name": "Iris Indoor Series",
//     "slug": "iris-indoor-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/iris-indoor-series.webp",
//     "description": "Transparent indoor LED solutions for architecture and visually open interiors.",
//     "pixelPitch": "2.6–5.2, 3.9–7.8 mm",
//     "brightness": "800 / 4500 nits",
//     "refreshRate": "≥1920 Hz",
//     "features": [
//       "Transparent indoor LED display",
//       "pixel pitch expressed horizontally/vertically"
//     ]
//   },
//   {
//     "name": "Crystal Series",
//     "slug": "crystal-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/crystal-series.webp",
//     "description": "Adhesive transparent LED display solutions for glass-integrated installations.",
//     "pixelPitch": "3.91, 6.25 mm",
//     "brightness": "3000, 4500 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Adhesive see-through LED",
//       "glass mounting",
//       "3 mm depth"
//     ]
//   },
//   {
//     "name": "GlowBox Series",
//     "slug": "glowbox-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/glowbox-series.webp",
//     "description": "Vertical LED display formats for freestanding digital communication.",
//     "pixelPitch": "1.25, 1.5625, 1.8, 2.0, 2.5 mm",
//     "brightness": "600–800 nits",
//     "refreshRate": "1920–3840 Hz",
//     "features": [
//       "Vertical LED kiosk",
//       "COB and SMD options"
//     ]
//   },
//   {
//     "name": "Floor LED Display",
//     "slug": "floor-led-display",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/floor-led-display.webp",
//     "description": "LED floor systems for interactive and immersive walkable display installations.",
//     "pixelPitch": "1.56, 1.86, 2.5, 2.9, 3.9 mm",
//     "brightness": "600–1500 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Floor-rated Terra variants",
//       "GOB or PC mask"
//     ]
//   },
//   {
//     "name": "Earth Series",
//     "slug": "earth-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/earth-series.webp",
//     "description": "High-brightness outdoor displays with energy-saving system options.",
//     "pixelPitch": "3.91, 5.71, 6.67, 8, 10 mm",
//     "brightness": "5000–15000 nits",
//     "refreshRate": "≥3840 Hz",
//     "features": [
//       "Energy-saving dual voltage",
//       "front/back IP66"
//     ]
//   },
//   {
//     "name": "Aegis Pro Series",
//     "slug": "aegis-pro-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/aegis-pro-series.webp",
//     "description": "Durable, weather-resistant outdoor LED solutions for high-impact visuals.",
//     "pixelPitch": "4, 5 mm",
//     "brightness": "6000 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Weather-resistant",
//       "front/back IP65"
//     ]
//   },
//   {
//     "name": "Nyx OD Series",
//     "slug": "nyx-od-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/nyx-od-series.webp",
//     "description": "Modular outdoor LED systems with flexible pitch options.",
//     "pixelPitch": "2.5, 3, 4, 5, 8, 10 mm",
//     "brightness": "5000–6000 nits",
//     "refreshRate": "1920–3840 Hz",
//     "features": [
//       "Outdoor modular display",
//       "front IP65/back IP54"
//     ]
//   },
//   {
//     "name": "Iris Outdoor Series",
//     "slug": "iris-outdoor-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/iris-outdoor-series.webp",
//     "description": "Transparent outdoor LED designs for partially see-through building installations.",
//     "pixelPitch": "3.9–7.8, 15.6–15.6, 15.6–31.2 mm",
//     "brightness": "5500–8000 nits",
//     "refreshRate": "≥2880–≥3840 Hz",
//     "features": [
//       "Transparent outdoor series",
//       "asymmetric pixel pitch"
//     ]
//   },
//   {
//     "name": "Iris Media Façade",
//     "slug": "iris-media-facade",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/iris-media-facade.webp",
//     "description": "Architectural strip-type LED media systems intended for building façades.",
//     "pixelPitch": "31.25–100 mm",
//     "brightness": "1500 nits",
//     "refreshRate": "1024 Hz",
//     "features": [
//       "Outdoor façade LED strip system",
//       "per-strip power ratings"
//     ]
//   },
//   {
//     "name": "Arena Series",
//     "slug": "arena-series",
//     "groupId": "rental",
//     "imageUrl": "/images/products/rental/arena-series.webp",
//     "description": "Rental-focused modular LED displays for events, stages and productions.",
//     "pixelPitch": "2.604, 2.97, 3.8, 3.91, 4.81 mm",
//     "brightness": "700–4000 nits",
//     "refreshRate": "7680 Hz",
//     "features": [
//       "Indoor and outdoor rental variants",
//       "different IP ratings"
//     ]
//   },
//   {
//     "name": "Orion Series",
//     "slug": "orion-series",
//     "groupId": "rental",
//     "imageUrl": "/images/products/rental/orion-series.webp",
//     "description": "Outdoor rental LED solutions intended for repeated setup and dismantling.",
//     "pixelPitch": "3.91–7.8 mm",
//     "brightness": "4500 nits",
//     "refreshRate": "≥3840 Hz",
//     "features": [
//       "Outdoor-rated modular rental display",
//       "back service"
//     ]
//   },
//   {
//     "name": "Atlas",
//     "slug": "atlas",
//     "groupId": "sports",
//     "imageUrl": "/images/products/sports/atlas.webp",
//     "description": "Stadium perimeter LED displays with protective installation features.",
//     "pixelPitch": "5, 6.67, 8, 10 mm",
//     "brightness": "5000 nits",
//     "refreshRate": "3840 Hz",
//     "features": [
//       "Stadium perimeter LED",
//       "protective foam and adjustable installation"
//     ]
//   },
//   {
//     "name": "Atlas Pro",
//     "slug": "atlas-pro",
//     "groupId": "sports",
//     "imageUrl": "/images/products/sports/atlas-pro.webp",
//     "description": "Higher-brightness stadium perimeter displays with reinforced protective construction.",
//     "pixelPitch": "6.67, 8, 10 mm",
//     "brightness": "8000 nits",
//     "refreshRate": "7680 Hz",
//     "features": [
//       "Sports perimeter display",
//       "IP66",
//       "reinforced protection"
//     ]
//   }
// ];

// const GROUPS = [
//   { id: "fine-pitch", title: "Fine Pitch Displays", description: "High-resolution LED displays for close-range viewing and refined visual environments." },
//   { id: "indoor", title: "Indoor LED Video Walls", description: "Flexible LED display solutions for commercial interiors and immersive spaces." },
//   { id: "outdoor", title: "Outdoor LED Video Walls", description: "High-visibility outdoor LED displays for commercial architecture and public spaces." },
//   { id: "rental", title: "Rental Displays", description: "Modular LED displays for events and temporary installations." },
//   { id: "sports", title: "Sports Series", description: "LED display systems for stadium and sports perimeter installations." },
// ] as const;

// function ArrowIcon({ className = "" }: { className?: string }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>;
// }
// function BackIcon({ className = "" }: { className?: string }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h12" /></svg>;
// }
// function ImagePanel({ product, className = "" }: { product: Product; className?: string }) {
//   const [failed, setFailed] = useState(false);
//   useEffect(() => setFailed(false), [product.imageUrl]);
//   return (
//     <div className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#F8FAFD_0%,#EAF0F8_100%)] ${className}`}>
//       {failed ? <div className="px-5 text-center text-sm text-[#728497]">Product image coming soon</div> : (
//         <img src={product.imageUrl} alt={`${product.name} LED display`} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none sm:p-9" />
//       )}
//     </div>
//   );
// }

// function ProductCard({ product, index, onSelect }: { product: Product; index: number; onSelect: () => void }) {
//   return (
//     <article className="group min-w-0 overflow-hidden border border-[#E4EAF1] bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#A9C5FF] hover:shadow-[0_22px_55px_rgba(16,44,76,0.10)]">
//       <button type="button" onClick={onSelect} aria-label={`View details and specifications for ${product.name}`} className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0047C0]">
//         <div className="relative">
//           <ImagePanel product={product} className="aspect-[5/4] w-full" />
//           <span className="absolute left-4 top-4 text-xs font-medium tracking-wide text-[#8293A8]">{String(index + 1).padStart(2, "0")}</span>
//         </div>
//         <div className="flex min-h-[92px] items-center justify-between gap-3 border-t border-[#E9EEF3] px-5 py-5 sm:px-6">
//           <div className="min-w-0">
//             <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-[#142B48] sm:text-lg">{product.name}</h3>
//             <span className="mt-1 block text-xs font-medium text-[#697D90]">View specifications</span>
//           </div>
//           <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D7E4EC] text-[#0047C0] transition-colors duration-300 group-hover:border-[#0047C0] group-hover:bg-[#0047C0] group-hover:text-white"><ArrowIcon className="h-[18px] w-[18px]" /></span>
//         </div>
//       </button>
//     </article>
//   );
// }

// export default function Products() {
//   const reducedMotion = Boolean(useReducedMotion());
//   const [activeGroup, setActiveGroup] = useState<string>("fine-pitch");
//   const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
//   const [detailsTab, setDetailsTab] = useState<"overview" | "specifications">("specifications");
//   const selected = PRODUCTS.find((p) => p.slug === selectedSlug) ?? null;
//   const group = GROUPS.find((g) => g.id === activeGroup) ?? GROUPS[0];
//   const items = PRODUCTS.filter((p) => p.groupId === activeGroup);

//   const openProduct = (product: Product) => {
//     setSelectedSlug(product.slug);
//     setDetailsTab("specifications");
//     window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
//   };
//   const goBack = () => {
//     setSelectedSlug(null);
//     window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
//   };

//   return (
//     <main className="min-h-screen bg-white">
//       <AnimatePresence mode="wait" initial={false}>
//         {selected ? (
//           <motion.div key={`details-${selected.slug}`} initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.25 }}>
//             <section className="border-b border-[#E4EAF1] bg-[#F7F9FD] px-5 py-8 sm:px-8 lg:px-12">
//               <div className="mx-auto max-w-[1380px]">
//                 <button type="button" onClick={goBack} className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0047C0] hover:text-[#003799] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"><BackIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" /> Back to products</button>
//               </div>
//             </section>
//             <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
//               <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
//                 <ImagePanel product={selected} className="aspect-[5/4] w-full border border-[#E6ECF3]" />
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0047C0]">{GROUPS.find((g) => g.id === selected.groupId)?.title}</p>
//                   <h1 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.07] tracking-[-0.05em] text-[#142B48]">{selected.name}</h1>
//                   <p className="mt-6 max-w-[540px] text-base font-normal leading-8 text-[#556A7C]">{selected.description}</p>
//                   <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
//                     {[
//                       { label: "Pixel pitch", value: selected.pixelPitch },
//                       { label: "Brightness", value: selected.brightness },
//                       { label: "Refresh rate", value: selected.refreshRate },
//                     ].map(({ label, value }) => <div key={label} className="flex min-h-[105px] min-w-0 flex-col items-center justify-center border border-[#E0E8F2] bg-[#F9FBFE] px-3 py-5 text-center"><span className="block text-xs font-medium uppercase tracking-[0.07em] text-[#6B7E90]">{label}</span><span className="mt-3 block break-words text-[15px] font-semibold leading-6 text-[#142B48]">{value}</span></div>)}
//                   </div>
//                   <a href={`/contact?product=${encodeURIComponent(selected.name)}`} className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-[#0047C0] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003799] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]">Enquire about this product <ArrowIcon className="h-[18px] w-[18px]" /></a>
//                 </div>
//               </div>
//             </section>
//             <section className="border-t border-[#E8EDF4] bg-[#F7F9FC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//               <div className="mx-auto max-w-[1120px]">
//                 <div className="mx-auto max-w-[750px] text-center">
//                   <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#0047C0]">Product information</p>
//                   <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]">Designed for exceptional display.</h2>
//                   <p className="mx-auto mt-4 max-w-[630px] text-sm leading-7 text-[#697F90]">Explore the series characteristics and published technical parameters.</p>
//                 </div>
//                 <div className="mt-10 flex items-center justify-center border-b border-[#DEE6EF]" role="tablist" aria-label="Product information">
//                   {(["specifications", "overview"] as const).map((tab) => (
//                     <button key={tab} id={`tab-${tab}`} role="tab" aria-controls={`panel-${tab}`} aria-selected={detailsTab === tab} type="button" onClick={() => setDetailsTab(tab)} className={`relative min-w-[145px] border-b-[3px] px-5 py-4 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0047C0] sm:min-w-[205px] ${detailsTab === tab ? "border-[#0047C0] text-[#0047C0]" : "border-transparent text-[#73869A] hover:text-[#0047C0]"}`}>{tab === "overview" ? "Overview & Features" : "Specifications"}</button>
//                   ))}
//                 </div>
//                 {detailsTab === "specifications" ? (
//                   <div role="tabpanel" id="panel-specifications" aria-labelledby="tab-specifications" className="pt-12">
//                     <div className="text-center">
//                       <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-[#142B48]">Technical specifications</h3>
//                       <p className="mx-auto mt-3 max-w-[720px] text-sm leading-7 text-[#697F90]">A clear overview of the {selected.name} series, with technical details aligned for easy comparison.</p>
//                     </div>
//                     <div className="mx-auto mt-9 max-w-[950px] overflow-hidden border border-[#DFE7F0] bg-white shadow-[0_20px_60px_rgba(20,43,72,0.035)]">
//                       <div className="grid grid-cols-2 bg-[#142B48] text-center text-[11px] font-semibold uppercase tracking-[0.13em] text-white sm:text-xs">
//                         <span className="flex min-h-[58px] items-center justify-center border-r border-white/20 px-3 py-4">Parameter</span>
//                         <span className="flex min-h-[58px] items-center justify-center px-3 py-4">Specification</span>
//                       </div>
//                       {([
//                         ["Product series", selected.name],
//                         ["Display category", GROUPS.find((g) => g.id === selected.groupId)?.title ?? "—"],
//                         ["Pixel pitch options", selected.pixelPitch],
//                         ["Brightness", selected.brightness],
//                         ["Refresh rate", selected.refreshRate],
//                       ] as [string, string][]).map(([label, value], index) => (
//                         <div key={label} className={`grid grid-cols-2 items-stretch border-b border-[#E9EEF4] last:border-b-0 ${index % 2 ? "bg-[#F8FAFD]" : "bg-white"}`}>
//                           <div className="flex min-h-[68px] items-center justify-center border-r border-[#E9EEF4] px-3 py-4 text-center text-sm font-medium leading-6 text-[#5C7186] sm:px-8">{label}</div>
//                           <div className="flex min-h-[68px] items-center justify-center break-words px-3 py-4 text-center text-sm font-semibold leading-6 text-[#183550] sm:px-8 sm:text-[15px]">{value}</div>
//                         </div>
//                       ))}
//                     </div>
//                     <p className="mx-auto mt-6 max-w-[830px] text-center text-xs leading-6 text-[#7D8D9D]">Technical figures are series-level reference values; specifications may vary by model, pixel pitch and configuration. Confirm final specifications and product availability before ordering.</p>
//                   </div>
//                 ) : (
//                   <div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview" className="pt-12">
//                     <div className="mx-auto max-w-[780px] text-center">
//                       <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-[#142B48]">Overview & key features</h3>
//                       <p className="mx-auto mt-5 max-w-[680px] text-base leading-8 text-[#556D80]">{selected.description}</p>
//                     </div>
//                     <div className="mx-auto mt-10 grid max-w-[950px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                       {selected.features.map((feature, index) => (
//                         <div key={`${feature}-${index}`} className="flex min-h-[120px] flex-col items-center justify-center border border-[#DFE7F0] bg-white px-6 py-7 text-center transition-[border-color,box-shadow] hover:border-[#A9C5FF] hover:shadow-[0_12px_32px_rgba(20,43,72,0.05)]">
//                           <span aria-hidden="true" className="mb-4 h-[3px] w-8 bg-[#0047C0]" />
//                           <p className="text-sm font-medium leading-7 text-[#304A60]">{feature}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </section>
//           </motion.div>
//         ) : (
//           <motion.div key="catalogue" initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.25 }}>
//             <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
//               <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DCE7FF]/60 blur-[110px]" />
//               <div className="relative mx-auto max-w-[1440px]">
//                 <motion.p initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.5 }} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Pingo Screens / Collection</motion.p>
//                 <motion.h1 initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeOut" }} className="mt-5 max-w-[950px] text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]">The Art of <span className="text-[#0047C0]">Display.</span></motion.h1>
//                 <p className="mt-6 max-w-[680px] text-base font-normal leading-8 text-[#637789]">Explore LED display series across fine pitch, indoor, outdoor, rental and sports collections.</p>
//               </div>
//             </section>
//             <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
//               <div className="mx-auto max-w-[1440px]">
//                 <div className="mb-12 flex flex-wrap gap-2.5 sm:mb-14 sm:gap-3" aria-label="Select LED product category">
//                   {GROUPS.map((g) => <button key={g.id} type="button" aria-pressed={activeGroup === g.id} onClick={() => setActiveGroup(g.id)} className={`border px-4 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] sm:px-5 ${activeGroup === g.id ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{g.title}</button>)}
//                 </div>
//                 <AnimatePresence mode="wait" initial={false}>
//                   <motion.div key={group.id} initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.35 }}>
//                     <div className="mb-9 flex flex-col gap-5 border-b border-[#E6EDF2] pb-8 sm:flex-row sm:items-end sm:justify-between">
//                       <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">LED Video Walls / Collection</p><h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#142B48]">{group.title}</h2><p className="mt-4 max-w-[650px] text-base leading-7 text-[#6B7D8E]">{group.description}</p></div>
//                       <span className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[#8B9CAB]">{String(items.length).padStart(2, "0")} Series</span>
//                     </div>
//                     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((product, index) => <ProductCard key={`${group.id}-${product.slug}`} product={product} index={index} onSelect={() => openProduct(product)} />)}</div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </section>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }














// import { useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type SpecRow = { label: string; values: string[] };
// type ProductDetail = { models: string[]; specs: SpecRow[]; note: string };
// type Product = {
//   name: string;
//   slug: string;
//   groupId: string;
//   imageUrl: string;
//   description: string;
//   features: string[];
//   detail: ProductDetail;
// };

// const PRODUCTS: Product[] = [
//   {
//     "name": "Spectra",
//     "slug": "spectra",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/spectra.webp",
//     "description": "A fine-pitch LED solution suited to premium home entertainment and immersive large-screen viewing.",
//     "features": [
//       "Home LED display",
//       "customizable bezels",
//       "deep black",
//       "97% color uniformity"
//     ],
//     "detail": {
//       "models": [
//         "Spectra 0.9",
//         "Spectra 1.25",
//         "Spectra 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.9",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Screen size",
//           "values": [
//             "163 in",
//             "108 in / 135 in",
//             "135 in"
//           ]
//         },
//         {
//           "label": "Screen dimensions (W × H)",
//           "values": [
//             "3.6 × 2.02 m",
//             "2.4 × 1.35 m / 3 × 1.68 m",
//             "3 × 1.68 m"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common cathode",
//             "Common cathode",
//             "Common cathode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600–1200",
//             "600–1200",
//             "600–1200"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "40000:1",
//             "40000:1",
//             "40000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "340",
//             "300",
//             "275"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Apex Series",
//     "slug": "apex-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/apex-series.webp",
//     "description": "A fine-pitch COB display series focused on detailed imagery and high contrast.",
//     "features": [
//       "Flip-chip COB",
//       "common cathode",
//       "40000:1 contrast"
//     ],
//     "detail": {
//       "models": [
//         "Apex 0.9",
//         "Apex 1.25",
//         "Apex 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.9",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "23",
//             "23",
//             "23"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common cathode",
//             "Common cathode",
//             "Common cathode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "1200",
//             "1200",
//             "1200"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "40000:1",
//             "40000:1",
//             "40000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "400",
//             "375",
//             "350"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "19 bit",
//             "19 bit",
//             "19 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "LIT Series",
//     "slug": "lit-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/lit-series.webp",
//     "description": "A COB-based fine-pitch display range with multiple high-resolution pixel-pitch options.",
//     "features": [
//       "Flip-chip COB",
//       "common cathode",
//       "20000:1–40000:1 contrast"
//     ],
//     "detail": {
//       "models": [
//         "LIT 0.62",
//         "LIT 0.78",
//         "LIT 0.9",
//         "LIT 1.25",
//         "LIT 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.62",
//             "0.78",
//             "0.9",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21",
//             "21",
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common cathode",
//             "Common cathode",
//             "Common cathode",
//             "Common cathode",
//             "Common cathode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "800",
//             "800",
//             "800"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1",
//             "40000:1",
//             "40000:1",
//             "40000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "420",
//             "300",
//             "350",
//             "325",
//             "320"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "IGNIS Series",
//     "slug": "ignis-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/ignis-series.webp",
//     "description": "A Flip-Chip COB LED series for refined indoor visual presentations.",
//     "features": [
//       "Flip-chip COB",
//       "common anode",
//       "20000:1 contrast"
//     ],
//     "detail": {
//       "models": [
//         "IGNIS 1.25",
//         "IGNIS 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common anode",
//             "Common anode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "300",
//             "275"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13 bit",
//             "13 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Ace Series",
//     "slug": "ace-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/ace-series.webp",
//     "description": "Professional small-pitch LED displays for boardrooms and control environments.",
//     "features": [
//       "SMD",
//       "control centers and boardrooms",
//       "front service"
//     ],
//     "detail": {
//       "models": [
//         "Ace 0.94",
//         "Ace 1.25",
//         "Ace 1.56",
//         "Ace 1.87"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.94",
//             "1.25",
//             "1.56",
//             "1.87"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "600 × 337.5 × 49",
//             "600 × 337.5 × 38",
//             "600 × 337.5 × 38",
//             "600 × 337.5 × 49"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "25",
//             "25",
//             "25",
//             "25"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "600",
//             "800"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "500",
//             "600",
//             "700",
//             "600"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP30",
//             "IP30",
//             "IP30",
//             "IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         },
//         {
//           "label": "Cabinet depth (mm)",
//           "values": [
//             "49",
//             "38",
//             "38",
//             "49"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Unify",
//     "slug": "unify",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/unify.webp",
//     "description": "An integrated all-in-one LED display designed for presentations and collaboration.",
//     "features": [
//       "All-in-one COB display",
//       "108–163 inch",
//       "Android 13"
//     ],
//     "detail": {
//       "models": [
//         "Unify AIO 0.9375",
//         "Unify AIO 1.25",
//         "Unify AIO 1.5625"
//       ],
//       "specs": [
//         {
//           "label": "Technology",
//           "values": [
//             "COB",
//             "COB",
//             "COB"
//           ]
//         },
//         {
//           "label": "Screen size",
//           "values": [
//             "163 in",
//             "108 in",
//             "135 in"
//           ]
//         },
//         {
//           "label": "Display size (mm)",
//           "values": [
//             "3600 × 2025",
//             "2400 × 1350",
//             "3000 × 1687.5"
//           ]
//         },
//         {
//           "label": "Aspect ratio",
//           "values": [
//             "16:9",
//             "16:9",
//             "16:9"
//           ]
//         },
//         {
//           "label": "Screen resolution",
//           "values": [
//             "3840 × 2160 (4K)",
//             "1920 × 1080 (FHD)",
//             "1920 × 1080 (FHD)"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Screen weight",
//           "values": [
//             "Approx. 170 kg",
//             "Approx. 80 kg",
//             "Approx. 120 kg"
//           ]
//         },
//         {
//           "label": "Maintenance",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Mounting options",
//           "values": [
//             "Wall / Floor stand",
//             "Wall / Floor stand",
//             "Wall / Floor stand"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800",
//             "600 / 800",
//             "600 / 800"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1",
//             "20000:1"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Grayscale",
//           "values": [
//             "13–19 bit",
//             "13 / 19 bit",
//             "13 / 19 bit"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Maximum power consumption",
//           "values": [
//             "Approx. 2550 W ±5%",
//             "Approx. 1100 W ±5%",
//             "Approx. 1450 W ±5%"
//           ]
//         },
//         {
//           "label": "HDMI input",
//           "values": [
//             "2 × HDMI 2.0",
//             "2 × HDMI 2.0",
//             "2 × HDMI 2.0"
//           ]
//         },
//         {
//           "label": "HDMI output",
//           "values": [
//             "1 × HDMI 2.0",
//             "1 × HDMI 2.0",
//             "1 × HDMI 2.0"
//           ]
//         },
//         {
//           "label": "Audio output",
//           "values": [
//             "1 × SPDIF",
//             "1 × SPDIF",
//             "1 × SPDIF"
//           ]
//         },
//         {
//           "label": "USB",
//           "values": [
//             "1 × USB 2.0, 1 × USB 3.0",
//             "1 × USB 2.0, 1 × USB 3.0",
//             "1 × USB 2.0, 1 × USB 3.0"
//           ]
//         },
//         {
//           "label": "Wi-Fi",
//           "values": [
//             "Wi-Fi 6 dual-band",
//             "Wi-Fi 6 dual-band",
//             "Wi-Fi 6 dual-band"
//           ]
//         },
//         {
//           "label": "Bluetooth",
//           "values": [
//             "5.2",
//             "5.2",
//             "5.2"
//           ]
//         },
//         {
//           "label": "Ethernet",
//           "values": [
//             "1 × RJ45",
//             "1 × RJ45",
//             "1 × RJ45"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Helio Series",
//     "slug": "helio-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/helio-series.webp",
//     "description": "MIP LED displays with slim cabinet construction and fine-pitch configurations.",
//     "features": [
//       "MIP",
//       "27.5 mm cabinet depth",
//       "front service"
//     ],
//     "detail": {
//       "models": [
//         "Helio 0.93",
//         "Helio 1.25",
//         "Helio 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.93",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "600 × 337.5 × 27.5",
//             "600 × 337.5 × 27.5",
//             "600 × 337.5 × 27.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "23",
//             "23",
//             "23"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800",
//             "1200",
//             "1200"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "Up to 15000:1",
//             "Up to 15000:1",
//             "Up to 15000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "330–350",
//             "330–350",
//             "330–350"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP31",
//             "IP31",
//             "IP31"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "16 bit",
//             "16 bit",
//             "16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Vega Series",
//     "slug": "vega-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/vega-series.webp",
//     "description": "Modular indoor LED displays suitable for a wide range of fixed-installation layouts.",
//     "features": [
//       "Modular cabinets and curved arrangement",
//       "selected high-brightness variants"
//     ],
//     "detail": {
//       "models": [
//         "Vega 1.84",
//         "Vega 2.5",
//         "Vega 3.9"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.84",
//             "2.5",
//             "3.9"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250",
//             "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250",
//             "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "20",
//             "20",
//             "20"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800",
//             "1000 / 3500",
//             "1000 / 3500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "8000:1",
//             "8000:1",
//             "8000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "500",
//             "550 / 650",
//             "500"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14 bit",
//             "14 bit",
//             "14 bit"
//           ]
//         }
//       ],
//       "note": "Brightness-dependent variants published for 2.5 mm and 3.9 mm."
//     }
//   },
//   {
//     "name": "Vega Studio",
//     "slug": "vega-studio",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/vega-studio.webp",
//     "description": "LED display systems intended for studio and virtual-production environments.",
//     "features": [
//       "Broadcast/virtual production",
//       "refresh-rate discrepancy on source"
//     ],
//     "detail": {
//       "models": [
//         "Vega Studio 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.5"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "500 × 500 × 46.6"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "20"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "1000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "12000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "550"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz) — table",
//           "values": [
//             "7860"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "16 bit"
//           ]
//         }
//       ],
//       "note": "Reference page description says 7680 Hz, but its specification table says 7860 Hz. Confirm the correct figure before quoting."
//     }
//   },
//   {
//     "name": "Nyx Indoor Series",
//     "slug": "nyx-indoor-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/nyx-indoor-series.webp",
//     "description": "Front-service modular SMD LED displays for everyday indoor applications.",
//     "features": [
//       "Front-service indoor SMD display",
//       "modular cabinets"
//     ],
//     "detail": {
//       "models": [
//         "NYX Indoor 1.86",
//         "NYX Indoor 2",
//         "NYX Indoor 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.86",
//             "2",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "640 × 480 × 63",
//             "640 × 480 × 63",
//             "640 × 480 × 63"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "19",
//             "19",
//             "19"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "400",
//             "400",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "NYX Modular Series",
//     "slug": "nyx-modular-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/nyx-modular-series.webp",
//     "description": "Cabinetless modular indoor LED screens offering adaptable installation formats.",
//     "features": [
//       "Cabinetless modular display",
//       "320×160 mm modules"
//     ],
//     "detail": {
//       "models": [
//         "NYX Modular 1.86",
//         "NYX Modular 2",
//         "NYX Modular 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.86",
//             "2",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Module dimensions (W × H, mm)",
//           "values": [
//             "320 × 160",
//             "320 × 160",
//             "320 × 160"
//           ]
//         },
//         {
//           "label": "Module weight (kg)",
//           "values": [
//             "1",
//             "1",
//             "1"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "400",
//             "400",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20"
//           ]
//         },
//         {
//           "label": "Cabinet type",
//           "values": [
//             "Cabinet-free",
//             "Cabinet-free",
//             "Cabinet-free"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Flex Series",
//     "slug": "flex-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/flex-series.webp",
//     "description": "Flexible LED panels designed for curved concave or convex display installations.",
//     "features": [
//       "Flexible concave and convex configurations"
//     ],
//     "detail": {
//       "models": [
//         "Flex 0.94",
//         "Flex 1.25",
//         "Flex 1.56",
//         "Flex 1.88",
//         "Flex 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.94",
//             "1.25",
//             "1.56",
//             "1.88",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Module dimensions (W × H × D, mm)",
//           "values": [
//             "240 × 120 × 90",
//             "240 × 120 × 90",
//             "240 × 120 × 90",
//             "240 × 120 × 90",
//             "240 × 120 × 90"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "40",
//             "40",
//             "40",
//             "40",
//             "40"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "700",
//             "700",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "700",
//             "500",
//             "500",
//             "500",
//             "600"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Mild steel",
//             "Mild steel",
//             "Mild steel",
//             "Mild steel",
//             "Mild steel"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14 bit",
//             "14 bit",
//             "14 bit",
//             "14 bit",
//             "14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Iris Indoor Series",
//     "slug": "iris-indoor-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/iris-indoor-series.webp",
//     "description": "Transparent indoor LED solutions for architecture and visually open interiors.",
//     "features": [
//       "Transparent indoor LED display",
//       "pixel pitch expressed horizontally/vertically"
//     ],
//     "detail": {
//       "models": [
//         "Iris Indoor 2.6–5.2",
//         "Iris Indoor 3.9–7.8"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.6–5.2",
//             "3.9–7.8"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "1000 × 500 × 70",
//             "1000 × 500 × 70"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "9",
//             "9"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800 / 4500",
//             "800 / 4500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "Not specified",
//             "Not specified"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "350 / 500",
//             "300 / 500"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥1920",
//             "≥1920"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP30",
//             "IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": "Standard and high-brightness options; brightness values are alternatives, not a continuous range."
//     }
//   },
//   {
//     "name": "Crystal Series",
//     "slug": "crystal-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/crystal-series.webp",
//     "description": "Adhesive transparent LED display solutions for glass-integrated installations.",
//     "features": [
//       "Adhesive see-through LED",
//       "glass mounting",
//       "3 mm depth"
//     ],
//     "detail": {
//       "models": [
//         "Crystal 3.91",
//         "Crystal 6.25"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.91",
//             "6.25"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "250 × 1200 × 3",
//             "250 × 1500 × 3"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "6",
//             "6"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "3000",
//             "4500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "Not specified",
//             "Not specified"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "1000",
//             "1000"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP20",
//             "IP20"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Mounting structure",
//           "values": [
//             "Glass",
//             "Glass"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "GlowBox Series",
//     "slug": "glowbox-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/glowbox-series.webp",
//     "description": "Vertical LED display formats for freestanding digital communication.",
//     "features": [
//       "Vertical LED kiosk",
//       "COB and SMD options"
//     ],
//     "detail": {
//       "models": [
//         "GlowBox 1.25",
//         "GlowBox 1.5625",
//         "GlowBox 1.8",
//         "GlowBox 2.0",
//         "GlowBox 2.5"
//       ],
//       "specs": [
//         {
//           "label": "LED type",
//           "values": [
//             "COB",
//             "COB",
//             "SMD",
//             "SMD",
//             "SMD"
//           ]
//         },
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.25",
//             "1.5625",
//             "1.8",
//             "2.0",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Screen dimensions (W × H × D, mm)",
//           "values": [
//             "600 × 1687.5 × 27",
//             "600 × 1687.5 × 27",
//             "640 × 1920 × 63",
//             "640 × 1920 × 63",
//             "640 × 1920 × 63"
//           ]
//         },
//         {
//           "label": "Product dimensions (W × H × D, mm)",
//           "values": [
//             "604 × 1826 × 330",
//             "604 × 1826 × 330",
//             "646 × 2064 × 450",
//             "646 × 2064 × 450",
//             "646 × 2064 × 450"
//           ]
//         },
//         {
//           "label": "Resolution",
//           "values": [
//             "480 × 1350",
//             "384 × 1080",
//             "344 × 1032",
//             "320 × 960",
//             "256 × 768"
//           ]
//         },
//         {
//           "label": "Product weight (kg)",
//           "values": [
//             "Approx. 50",
//             "Approx. 50",
//             "Approx. 75",
//             "Approx. 75",
//             "Approx. 75"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600 / 800",
//             "600 / 800",
//             "600",
//             "600",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W)",
//           "values": [
//             "330",
//             "330",
//             "400",
//             "400",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "≥1920"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–19 bit",
//             "13–19 bit",
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Floor LED Display",
//     "slug": "floor-led-display",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/floor-led-display.webp",
//     "description": "LED floor systems for interactive and immersive walkable display installations.",
//     "features": [
//       "Floor-rated Terra variants",
//       "GOB or PC mask"
//     ],
//     "detail": {
//       "models": [
//         "Terra 1.5",
//         "Terra 1.8",
//         "Terra 2.5",
//         "Terra 2.9",
//         "Terra 3.9"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.56",
//             "1.86",
//             "2.5",
//             "2.9",
//             "3.9"
//           ]
//         },
//         {
//           "label": "Surface type",
//           "values": [
//             "GOB",
//             "GOB",
//             "GOB",
//             "PC mask",
//             "PC mask"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "500 × 500 × 78",
//             "500 × 500 × 78",
//             "500 × 500 × 78",
//             "500 × 1000 × 78",
//             "500 × 1000 × 78"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Mild steel",
//             "Mild steel"
//           ]
//         },
//         {
//           "label": "Cabinet weight (kg/m²)",
//           "values": [
//             "44",
//             "44",
//             "44",
//             "44",
//             "44"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "600",
//             "1500",
//             "1500"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "6000:1",
//             "6000:1",
//             "6000:1",
//             "2000:1",
//             "2000:1"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Grayscale (bits)",
//           "values": [
//             "14",
//             "14",
//             "14",
//             "14",
//             "14"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "800",
//             "800",
//             "800",
//             "800",
//             "800"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Earth Series",
//     "slug": "earth-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/earth-series.webp",
//     "description": "High-brightness outdoor displays with energy-saving system options.",
//     "features": [
//       "Energy-saving dual voltage",
//       "front/back IP66"
//     ],
//     "detail": {
//       "models": [
//         "Earth 3.91",
//         "Earth 5.71",
//         "Earth 6.67",
//         "Earth 8",
//         "Earth 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.91",
//             "5.71",
//             "6.67",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "1000 × 1000 × 81",
//             "960 × 960 × 105",
//             "960 × 960 × 105 / 640 × 960 × 105",
//             "960 × 960 × 105 / 640 × 960 × 105",
//             "960 × 960 × 105 / 640 × 960 × 105"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "27",
//             "26",
//             "26",
//             "26",
//             "26"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Dual voltage",
//             "Dual voltage",
//             "Dual voltage",
//             "Dual voltage",
//             "Dual voltage"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5000",
//             "7500 / 9000",
//             "7500 / 9000",
//             "7500 / 9000",
//             "7500 / 9000 / 15000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "550",
//             "580",
//             "580",
//             "580",
//             "580 / 650"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Aegis Pro Series",
//     "slug": "aegis-pro-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/aegis-pro-series.webp",
//     "description": "Durable, weather-resistant outdoor LED solutions for high-impact visuals.",
//     "features": [
//       "Weather-resistant",
//       "front/back IP65"
//     ],
//     "detail": {
//       "models": [
//         "Aegis Pro 4",
//         "Aegis Pro 5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "4",
//             "5"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "960 × 960 × 99",
//             "960 × 960 × 99"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "6000",
//             "6000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°",
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "650",
//             "625"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP65",
//             "Front IP65 / Rear IP65"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Nyx OD Series",
//     "slug": "nyx-od-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/nyx-od-series.webp",
//     "description": "Modular outdoor LED systems with flexible pitch options.",
//     "features": [
//       "Outdoor modular display",
//       "front IP65/back IP54"
//     ],
//     "detail": {
//       "models": [
//         "NYX OD 2.5",
//         "NYX OD 3",
//         "NYX OD 4",
//         "NYX OD 5",
//         "NYX OD 8",
//         "NYX OD 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.5",
//             "3",
//             "4",
//             "5",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "640 × 960 × 125",
//             "960 × 960 × 115",
//             "960 × 960 × 127",
//             "960 × 960 × 127",
//             "960 × 960 × 127",
//             "960 × 960 × 127"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "30",
//             "30",
//             "25",
//             "25",
//             "25",
//             "25"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5000",
//             "5000",
//             "5000",
//             "5000",
//             "5000 / 6000",
//             "5000 / 6000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "760",
//             "650",
//             "750",
//             "750",
//             "650",
//             "650"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "1920",
//             "1920"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "14 bit",
//             "14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear",
//             "Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Iris Outdoor Series",
//     "slug": "iris-outdoor-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/iris-outdoor-series.webp",
//     "description": "Transparent outdoor LED designs for partially see-through building installations.",
//     "features": [
//       "Transparent outdoor series",
//       "asymmetric pixel pitch"
//     ],
//     "detail": {
//       "models": [
//         "Iris Outdoor 3.9–7.8",
//         "Iris Outdoor 15.6–15.6",
//         "Iris Outdoor 15.6–31.2"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.9–7.8",
//             "15.6–15.6",
//             "15.6–31.2"
//           ]
//         },
//         {
//           "label": "LED type",
//           "values": [
//             "SMD 1921",
//             "DIP 3-in-1",
//             "DIP 3-in-1"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "1000 × 500 × 85",
//             "1000 × 1000 × 105",
//             "1000 × 1000 × 105"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "15",
//             "23",
//             "19"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5500",
//             "8000",
//             "8000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "110° × 110°",
//             "110° × 110°",
//             "110° × 110°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "500",
//             "450",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥2880",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP65",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–15 bit",
//             "13–15 bit",
//             "13–15 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Iris Media Façade",
//     "slug": "iris-media-facade",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/iris-media-facade.webp",
//     "description": "Architectural strip-type LED media systems intended for building façades.",
//     "features": [
//       "Outdoor façade LED strip system",
//       "per-strip power ratings"
//     ],
//     "detail": {
//       "models": [
//         "Iris Media Façade 31.25–100"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "31.25–100"
//           ]
//         },
//         {
//           "label": "Strip dimensions (W × H × D, mm)",
//           "values": [
//             "1500 × 100 × 80"
//           ]
//         },
//         {
//           "label": "Weight (kg per strip)",
//           "values": [
//             "0.48"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "1500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Maximum power (W per strip)",
//           "values": [
//             "80"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "1024"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP65"
//           ]
//         },
//         {
//           "label": "Strip material",
//           "values": [
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Arena Series",
//     "slug": "arena-series",
//     "groupId": "rental",
//     "imageUrl": "/images/products/rental/arena-series.webp",
//     "description": "Rental-focused modular LED displays for events, stages and productions.",
//     "features": [
//       "Indoor and outdoor rental variants",
//       "different IP ratings"
//     ],
//     "detail": {
//       "models": [
//         "Arena 2.604 GOB",
//         "Arena 2.97 Indoor",
//         "Arena 2.97 Outdoor",
//         "Arena 3.8",
//         "Arena 3.8 Black Lamp",
//         "Arena 3.91",
//         "Arena 4.81"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.604",
//             "2.97",
//             "2.97",
//             "3.8",
//             "3.8",
//             "3.91",
//             "4.81"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H, mm)",
//           "values": [
//             "500 × 500 / 500 × 1000",
//             "500 × 500 / 500 × 1000",
//             "500 × 500 / 500 × 1000",
//             "576 × 576",
//             "576 × 576",
//             "500 × 500 / 500 × 1000",
//             "576 × 576"
//           ]
//         },
//         {
//           "label": "Cabinet resolution",
//           "values": [
//             "192 × 192 / 192 × 384",
//             "168 × 168 / 168 × 336",
//             "168 × 168 / 168 × 336",
//             "152 × 152",
//             "152 × 152",
//             "128 × 128 / 128 × 256",
//             "120 × 120"
//           ]
//         },
//         {
//           "label": "Weight (kg)",
//           "values": [
//             "6 / 12",
//             "6 / 12",
//             "7 / 13",
//             "8.5",
//             "8.5",
//             "7 / 13",
//             "8.5"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "700",
//             "700–800",
//             "4000",
//             "4000",
//             "2000",
//             "4000",
//             "4000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "300",
//             "350",
//             "700",
//             "700",
//             "650",
//             "700",
//             "700"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "7680",
//             "7680",
//             "7680",
//             "7680",
//             "7680",
//             "7680",
//             "7680"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         }
//       ],
//       "note": "Two 2.97 mm variants have substantially different brightness and ingress protection. Both are kept separately."
//     }
//   },
//   {
//     "name": "Orion Series",
//     "slug": "orion-series",
//     "groupId": "rental",
//     "imageUrl": "/images/products/rental/orion-series.webp",
//     "description": "Outdoor rental LED solutions intended for repeated setup and dismantling.",
//     "features": [
//       "Outdoor-rated modular rental display",
//       "back service"
//     ],
//     "detail": {
//       "models": [
//         "Orion 3.91–7.8"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.91–7.8"
//           ]
//         },
//         {
//           "label": "Cabinet size option A (W × H, mm)",
//           "values": [
//             "500 × 500"
//           ]
//         },
//         {
//           "label": "Cabinet resolution A",
//           "values": [
//             "128 × 64"
//           ]
//         },
//         {
//           "label": "Cabinet weight A (kg)",
//           "values": [
//             "4.5"
//           ]
//         },
//         {
//           "label": "Cabinet size option B (W × H, mm)",
//           "values": [
//             "1000 × 500"
//           ]
//         },
//         {
//           "label": "Cabinet resolution B",
//           "values": [
//             "256 × 64"
//           ]
//         },
//         {
//           "label": "Cabinet weight B (kg)",
//           "values": [
//             "8.5"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "4500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "600"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP65"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Atlas",
//     "slug": "atlas",
//     "groupId": "sports",
//     "imageUrl": "/images/products/sports/atlas.webp",
//     "description": "Stadium perimeter LED displays with protective installation features.",
//     "features": [
//       "Stadium perimeter LED",
//       "protective foam and adjustable installation"
//     ],
//     "detail": {
//       "models": [
//         "Atlas 5",
//         "Atlas 6.67",
//         "Atlas 8",
//         "Atlas 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "5",
//             "6.67",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "960 × 960 × 115",
//             "960 × 960 × 115",
//             "960 × 960 × 115",
//             "960 × 960 × 115"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "33",
//             "33",
//             "33",
//             "33"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5000",
//             "5000",
//             "5000",
//             "5000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "750",
//             "750",
//             "750",
//             "750"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": "Reference description also mentions 1920 Hz, while the specifications table states 3840 Hz."
//     }
//   },
//   {
//     "name": "Atlas Pro",
//     "slug": "atlas-pro",
//     "groupId": "sports",
//     "imageUrl": "/images/products/sports/atlas-pro.webp",
//     "description": "Higher-brightness stadium perimeter displays with reinforced protective construction.",
//     "features": [
//       "Sports perimeter display",
//       "IP66",
//       "reinforced protection"
//     ],
//     "detail": {
//       "models": [
//         "Atlas Pro 6.67",
//         "Atlas Pro 8",
//         "Atlas Pro 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "6.67",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "960 × 960 × 102",
//             "960 × 960 × 102",
//             "960 × 960 × 102"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "34",
//             "34",
//             "34"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "8000",
//             "8000",
//             "8000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "8000:1",
//             "8000:1",
//             "8000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "550",
//             "550",
//             "550"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "7680",
//             "7680",
//             "7680"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP66",
//             "IP66",
//             "IP66"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   }
// ];

// const GROUPS = [
//   {
//     "id": "fine-pitch",
//     "title": "Fine Pitch Displays",
//     "description": "Fine-resolution LED displays for close viewing"
//   },
//   {
//     "id": "indoor",
//     "title": "Indoor LED Video Walls",
//     "description": "LED technologies for immersive indoor spaces"
//   },
//   {
//     "id": "outdoor",
//     "title": "Outdoor LED Video Walls",
//     "description": "High-visibility displays and architectural systems"
//   },
//   {
//     "id": "rental",
//     "title": "Rental Displays",
//     "description": "Event-ready and touring LED configurations"
//   },
//   {
//     "id": "sports",
//     "title": "Sports Series",
//     "description": "Display systems for stadium and sports venues"
//   }
// ] as const;

// function Icon({ kind, className = "" }: { kind: "arrow" | "back" | "check"; className?: string }) {
//   if (kind === "check") return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
//   if (kind === "back") return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h12"/></svg>;
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>;
// }
// function Picture({ product, className = "" }: { product: Product; className?: string }) {
//   const [failed, setFailed] = useState(false);
//   useEffect(() => setFailed(false), [product.imageUrl]);
//   return <div className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#F8FAFC_0%,#EEF3FA_100%)] ${className}`}>
//     {failed ? <span className="px-4 text-center text-sm text-[#8193A5]">Product image coming soon</span> :
//       <img src={product.imageUrl} onError={() => setFailed(true)} alt={`${product.name} LED display`} loading="lazy" decoding="async" className="h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none sm:p-10" />}
//   </div>;
// }
// function productMetric(detail: ProductDetail, index: number, key: string) {
//   const row = detail.specs.find(r => r.label.toLowerCase().includes(key));
//   return row?.values[index] ?? "Not listed";
// }
// function ProductCard({product, index, onOpen}: {product: Product; index: number; onOpen: () => void}) {
//   return <button type="button" onClick={onOpen} className="group min-w-0 overflow-hidden border border-[#E4EBF2] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#AEC8F7] hover:shadow-[0_18px_55px_rgba(16,44,76,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0]" aria-label={`View technical specifications for ${product.name}`}>
//     <div className="relative"><Picture product={product} className="aspect-[5/4] w-full"/><span className="absolute left-4 top-4 text-xs font-medium tracking-wide text-[#8394A5]">{String(index+1).padStart(2,"0")}</span></div>
//     <div className="flex min-h-[91px] items-center justify-between gap-3 border-t border-[#E9EFF5] px-5 py-5 sm:px-6">
//       <div><h3 className="text-base font-semibold tracking-[-0.02em] text-[#142B48] sm:text-lg">{product.name}</h3><p className="mt-1 text-xs text-[#75879A]">View details &amp; specifications</p></div>
//       <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D8E5F4] text-[#0047C0] group-hover:bg-[#0047C0] group-hover:text-white"><Icon kind="arrow" className="h-[18px] w-[18px]"/></span>
//     </div>
//   </button>;
// }
// function SpecsTable({product, variant}: {product: Product; variant: number}) {
//   const rows = product.detail.specs;
//   return <div className="overflow-hidden border border-[#DFE7F1] bg-white shadow-[0_15px_55px_rgba(17,46,74,0.045)]">
//     <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] bg-[#122B48] px-3 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.13em] text-white sm:px-6 sm:text-xs">
//       <span className="border-r border-white/20 pr-2">Parameter</span><span className="pl-2">Specification</span>
//     </div>
//     {rows.map((row,i) => <div key={row.label} className={`grid min-h-[59px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch border-t border-[#E6EDF5] text-center ${i%2 ? "bg-[#F8FAFD]" : "bg-white"}`}>
//       <div className="flex items-center justify-center border-r border-[#E5ECF3] px-3 py-3 text-[13px] font-medium leading-relaxed text-[#5E7185] sm:px-6 sm:text-sm">{row.label}</div>
//       <div className="flex items-center justify-center break-words px-3 py-3 text-[13px] font-semibold leading-relaxed text-[#142B48] sm:px-6 sm:text-sm">{row.values[variant] ?? "Not specified"}</div>
//     </div>)}
//   </div>;
// }
// function ProductPage({product,onBack}: {product: Product;onBack:()=>void}) {
//   const [variant,setVariant] = useState(0);
//   const reducedMotion = useReducedMotion();
//   useEffect(()=>setVariant(0),[product.slug]);
//   const d=product.detail;
//   const group=GROUPS.find(g=>g.id===product.groupId);
//   const stats=[
//     {label:"Pixel pitch",value:productMetric(d,variant,"pixel pitch")},
//     {label:"Brightness",value:productMetric(d,variant,"brightness")},
//     {label:"Refresh rate",value:productMetric(d,variant,"refresh rate")},
//     {label:"Service access",value:productMetric(d,variant,"service access") !== "Not listed" ? productMetric(d,variant,"service access") : productMetric(d,variant,"maintenance")}
//   ];
//   return <motion.div initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:12}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.35}}>
//     <section className="bg-[#F7FAFD] px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14"><div className="mx-auto max-w-[1320px]">
//       <button type="button" onClick={onBack} className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#0047C0] hover:text-[#003799] focus-visible:outline-2 focus-visible:outline-[#0047C0]"><Icon kind="back" className="h-4 w-4"/> Back to products</button>
//       <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
//         <Picture product={product} className="aspect-[5/4] w-full border border-[#E6EDF3]"/>
//         <div className="lg:pl-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">{group?.title} / Product series</p>
//           <h1 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#142B48]">{product.name}</h1>
//           <p className="mt-6 max-w-xl text-base leading-8 text-[#62768A]">{product.description}</p>
//           <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-[#E2EAF2] bg-[#E2EAF2]">
//             {stats.map(s=><div className="min-h-[94px] bg-white px-4 py-5 sm:px-6" key={s.label}><p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8293A5]">{s.label}</p><p className="mt-2 text-sm font-semibold leading-6 text-[#142B48] sm:text-base">{s.value}</p></div>)}
//           </div>
//           <a href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 bg-[#0047C0] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#003799]">Enquire about this display <Icon kind="arrow" className="h-4 w-4"/></a>
//         </div>
//       </div>
//     </div></section>
//     <section className="px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20"><div className="mx-auto max-w-[1140px]">
//       <div className="mx-auto max-w-[770px] text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">Product information</p><h2 className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">Built for its environment.</h2><p className="mt-4 text-base leading-8 text-[#6C7D8E]">Explore the defining characteristics and available configurations of {product.name}.</p></div>
//       <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{product.features.map((feature,i)=><div className="flex min-h-[80px] items-center gap-3 border border-[#E4EBF2] bg-[#FAFCFE] px-5 py-5" key={feature}><span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#E8F0FF] text-[#0047C0]"><Icon kind="check" className="h-4 w-4"/></span><p className="text-sm font-medium leading-6 text-[#233F59]">{feature}</p></div>)}</div>
//     </div></section>
//     <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32"><div className="mx-auto max-w-[1040px]">
//       <div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">Detailed product data</p><h2 className="mt-4 text-[clamp(2.1rem,4vw,3.6rem)] font-semibold tracking-[-0.055em] text-[#142B48]">Technical Specifications</h2><p className="mx-auto mt-3 max-w-[680px] text-sm leading-7 text-[#718496]">Select a model to view its individual technical parameters. All values remain aligned and centered for easy comparison.</p></div>
//       <div className="mx-auto mb-8 mt-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Select product model">{d.models.map((model,i)=><button key={`${model}-${i}`} type="button" aria-pressed={variant===i} onClick={()=>setVariant(i)} className={`border px-4 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] sm:text-sm ${variant===i ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DCE5EF] bg-white text-[#435D76] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{model}</button>)}</div>
//       <div className="mb-5 border-l-[3px] border-[#0047C0] bg-[#F5F8FD] px-5 py-4 text-center"><span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74869A]">Selected model</span><p className="mt-1 text-lg font-semibold text-[#142B48]">{d.models[variant]}</p></div>
//       <SpecsTable product={product} variant={variant}/>
//       {d.note && <p className="mt-5 border-l-2 border-[#E9B44C] bg-[#FFFAED] px-4 py-3 text-sm leading-6 text-[#715522]">{d.note}</p>}
//       <p className="mx-auto mt-6 max-w-[850px] text-center text-xs leading-6 text-[#8393A3]">Published model-reference specifications, shown for technical comparison. Please verify the selected configuration, exact available model, certification and warranty with the supplying manufacturer before quotation or publication as a guaranteed Pingo Screens specification.</p>
//       <div className="mt-10 text-center"><a href="/contact" className="inline-flex min-h-12 items-center gap-4 bg-[#0047C0] px-8 text-sm font-semibold text-white hover:bg-[#003799]">Discuss your requirements <Icon kind="arrow" className="h-4 w-4"/></a></div>
//     </div></section>
//   </motion.div>;
// }
// export default function Products() {
//  const reducedMotion=useReducedMotion();
//  const [activeGroup,setActiveGroup]=useState<string>("fine-pitch");
//  const [openedSlug,setOpenedSlug]=useState<string | null>(null);
//  const selectedGroup=GROUPS.find(g=>g.id===activeGroup)??GROUPS[0];
//  const filtered=useMemo(()=>PRODUCTS.filter(p=>p.groupId===selectedGroup.id),[selectedGroup.id]);
//  const selectedProduct=PRODUCTS.find(p=>p.slug===openedSlug);
//  const open=(slug:string)=>{setOpenedSlug(slug);window.scrollTo({top:0,behavior:"auto"});};
//  const back=()=>{setOpenedSlug(null);window.scrollTo({top:0,behavior:"auto"});};
//  return <main className="min-h-screen bg-white">
//   {selectedProduct ? <ProductPage key={selectedProduct.slug} product={selectedProduct} onBack={back}/> : <>
//    <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28"><div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DCE7FF]/60 blur-[110px]"/><div className="relative mx-auto max-w-[1440px]"><motion.p initial={{opacity:reducedMotion?1:0}} animate={{opacity:1}} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Pingo Screens / Collection</motion.p><motion.h1 initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:18}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.6}} className="mt-5 max-w-[950px] text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]">The Art of <span className="text-[#0047C0]">Display.</span></motion.h1><p className="mt-6 max-w-[680px] text-base leading-8 text-[#637789]">Explore advanced LED display solutions across fine-pitch, indoor, outdoor, rental and sports collections.</p></div></section>
//    <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16"><div className="mx-auto max-w-[1440px]"><div className="mb-12 flex flex-wrap gap-2.5 sm:gap-3" role="group" aria-label="LED product categories">{GROUPS.map(g=><button type="button" key={g.id} aria-pressed={activeGroup===g.id} onClick={()=>setActiveGroup(g.id)} className={`border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0047C0] sm:px-5 ${activeGroup===g.id ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{g.title}</button>)}</div>
//    <AnimatePresence mode="wait" initial={false}><motion.div key={selectedGroup.id} initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:10}} animate={{opacity:1,y:0}} exit={{opacity:reducedMotion?1:0}} transition={{duration:reducedMotion?0:.3}}><div className="mb-9 flex items-end justify-between gap-5 border-b border-[#E6EDF2] pb-8"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">LED Video Walls / Collection</p><h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">{selectedGroup.title}</h2><p className="mt-4 max-w-[650px] text-base leading-7 text-[#6B7D8E]">{selectedGroup.description}</p></div><span className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[#8B9CAB] sm:block">{String(filtered.length).padStart(2,"0")} Series</span></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((p,i)=><ProductCard key={p.slug} product={p} index={i} onOpen={()=>open(p.slug)}/>)}</div></motion.div></AnimatePresence></div></section>
//   </>}
//  </main>;
// }



















// import { useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type SpecRow = { label: string; values: string[] };
// type ProductDetail = { models: string[]; specs: SpecRow[]; note: string };
// type Product = {
//   name: string;
//   slug: string;
//   groupId: string;
//   imageUrl: string;
//   description: string;
//   features: string[];
//   detail: ProductDetail;
// };

// const PRODUCTS: Product[] = [
//   {
//     "name": "Spectra",
//     "slug": "spectra",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/spectra.webp",
//     "description": "A fine-pitch LED solution suited to premium home entertainment and immersive large-screen viewing.",
//     "features": [
//       "Home LED display",
//       "customizable bezels",
//       "deep black",
//       "97% color uniformity"
//     ],
//     "detail": {
//       "models": [
//         "Spectra 0.9",
//         "Spectra 1.25",
//         "Spectra 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.9",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Screen size",
//           "values": [
//             "163 in",
//             "108 in / 135 in",
//             "135 in"
//           ]
//         },
//         {
//           "label": "Screen dimensions (W × H)",
//           "values": [
//             "3.6 × 2.02 m",
//             "2.4 × 1.35 m / 3 × 1.68 m",
//             "3 × 1.68 m"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common cathode",
//             "Common cathode",
//             "Common cathode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600–1200",
//             "600–1200",
//             "600–1200"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "40000:1",
//             "40000:1",
//             "40000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "340",
//             "300",
//             "275"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Apex Series",
//     "slug": "apex-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/apex-series.webp",
//     "description": "A fine-pitch COB display series focused on detailed imagery and high contrast.",
//     "features": [
//       "Flip-chip COB",
//       "common cathode",
//       "40000:1 contrast"
//     ],
//     "detail": {
//       "models": [
//         "Apex 0.9",
//         "Apex 1.25",
//         "Apex 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.9",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "23",
//             "23",
//             "23"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common cathode",
//             "Common cathode",
//             "Common cathode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "1200",
//             "1200",
//             "1200"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "40000:1",
//             "40000:1",
//             "40000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "400",
//             "375",
//             "350"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "19 bit",
//             "19 bit",
//             "19 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "LIT Series",
//     "slug": "lit-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/lit-series.webp",
//     "description": "A COB-based fine-pitch display range with multiple high-resolution pixel-pitch options.",
//     "features": [
//       "Flip-chip COB",
//       "common cathode",
//       "20000:1–40000:1 contrast"
//     ],
//     "detail": {
//       "models": [
//         "LIT 0.62",
//         "LIT 0.78",
//         "LIT 0.9",
//         "LIT 1.25",
//         "LIT 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.62",
//             "0.78",
//             "0.9",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21",
//             "21",
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common cathode",
//             "Common cathode",
//             "Common cathode",
//             "Common cathode",
//             "Common cathode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "800",
//             "800",
//             "800"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1",
//             "40000:1",
//             "40000:1",
//             "40000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "420",
//             "300",
//             "350",
//             "325",
//             "320"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit",
//             "13–19 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "IGNIS Series",
//     "slug": "ignis-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/ignis-series.webp",
//     "description": "A Flip-Chip COB LED series for refined indoor visual presentations.",
//     "features": [
//       "Flip-chip COB",
//       "common anode",
//       "20000:1 contrast"
//     ],
//     "detail": {
//       "models": [
//         "IGNIS 1.25",
//         "IGNIS 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "600 × 337.5",
//             "600 × 337.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Common anode",
//             "Common anode"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "300",
//             "275"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13 bit",
//             "13 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Ace Series",
//     "slug": "ace-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/ace-series.webp",
//     "description": "Professional small-pitch LED displays for boardrooms and control environments.",
//     "features": [
//       "SMD",
//       "control centers and boardrooms",
//       "front service"
//     ],
//     "detail": {
//       "models": [
//         "Ace 0.94",
//         "Ace 1.25",
//         "Ace 1.56",
//         "Ace 1.87"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.94",
//             "1.25",
//             "1.56",
//             "1.87"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "600 × 337.5 × 49",
//             "600 × 337.5 × 38",
//             "600 × 337.5 × 38",
//             "600 × 337.5 × 49"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "25",
//             "25",
//             "25",
//             "25"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "600",
//             "800"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "500",
//             "600",
//             "700",
//             "600"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP30",
//             "IP30",
//             "IP30",
//             "IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         },
//         {
//           "label": "Cabinet depth (mm)",
//           "values": [
//             "49",
//             "38",
//             "38",
//             "49"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Unify",
//     "slug": "unify",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/unify.webp",
//     "description": "An integrated all-in-one LED display designed for presentations and collaboration.",
//     "features": [
//       "All-in-one COB display",
//       "108–163 inch",
//       "Android 13"
//     ],
//     "detail": {
//       "models": [
//         "Unify AIO 0.9375",
//         "Unify AIO 1.25",
//         "Unify AIO 1.5625"
//       ],
//       "specs": [
//         {
//           "label": "Technology",
//           "values": [
//             "COB",
//             "COB",
//             "COB"
//           ]
//         },
//         {
//           "label": "Screen size",
//           "values": [
//             "163 in",
//             "108 in",
//             "135 in"
//           ]
//         },
//         {
//           "label": "Display size (mm)",
//           "values": [
//             "3600 × 2025",
//             "2400 × 1350",
//             "3000 × 1687.5"
//           ]
//         },
//         {
//           "label": "Aspect ratio",
//           "values": [
//             "16:9",
//             "16:9",
//             "16:9"
//           ]
//         },
//         {
//           "label": "Screen resolution",
//           "values": [
//             "3840 × 2160 (4K)",
//             "1920 × 1080 (FHD)",
//             "1920 × 1080 (FHD)"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50"
//           ]
//         },
//         {
//           "label": "Screen weight",
//           "values": [
//             "Approx. 170 kg",
//             "Approx. 80 kg",
//             "Approx. 120 kg"
//           ]
//         },
//         {
//           "label": "Maintenance",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Mounting options",
//           "values": [
//             "Wall / Floor stand",
//             "Wall / Floor stand",
//             "Wall / Floor stand"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800",
//             "600 / 800",
//             "600 / 800"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1",
//             "20000:1"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Grayscale",
//           "values": [
//             "13–19 bit",
//             "13 / 19 bit",
//             "13 / 19 bit"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Maximum power consumption",
//           "values": [
//             "Approx. 2550 W ±5%",
//             "Approx. 1100 W ±5%",
//             "Approx. 1450 W ±5%"
//           ]
//         },
//         {
//           "label": "HDMI input",
//           "values": [
//             "2 × HDMI 2.0",
//             "2 × HDMI 2.0",
//             "2 × HDMI 2.0"
//           ]
//         },
//         {
//           "label": "HDMI output",
//           "values": [
//             "1 × HDMI 2.0",
//             "1 × HDMI 2.0",
//             "1 × HDMI 2.0"
//           ]
//         },
//         {
//           "label": "Audio output",
//           "values": [
//             "1 × SPDIF",
//             "1 × SPDIF",
//             "1 × SPDIF"
//           ]
//         },
//         {
//           "label": "USB",
//           "values": [
//             "1 × USB 2.0, 1 × USB 3.0",
//             "1 × USB 2.0, 1 × USB 3.0",
//             "1 × USB 2.0, 1 × USB 3.0"
//           ]
//         },
//         {
//           "label": "Wi-Fi",
//           "values": [
//             "Wi-Fi 6 dual-band",
//             "Wi-Fi 6 dual-band",
//             "Wi-Fi 6 dual-band"
//           ]
//         },
//         {
//           "label": "Bluetooth",
//           "values": [
//             "5.2",
//             "5.2",
//             "5.2"
//           ]
//         },
//         {
//           "label": "Ethernet",
//           "values": [
//             "1 × RJ45",
//             "1 × RJ45",
//             "1 × RJ45"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Helio Series",
//     "slug": "helio-series",
//     "groupId": "fine-pitch",
//     "imageUrl": "/images/products/fine-pitch/helio-series.webp",
//     "description": "MIP LED displays with slim cabinet construction and fine-pitch configurations.",
//     "features": [
//       "MIP",
//       "27.5 mm cabinet depth",
//       "front service"
//     ],
//     "detail": {
//       "models": [
//         "Helio 0.93",
//         "Helio 1.25",
//         "Helio 1.56"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.93",
//             "1.25",
//             "1.56"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "600 × 337.5 × 27.5",
//             "600 × 337.5 × 27.5",
//             "600 × 337.5 × 27.5"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "23",
//             "23",
//             "23"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800",
//             "1200",
//             "1200"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "Up to 15000:1",
//             "Up to 15000:1",
//             "Up to 15000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "330–350",
//             "330–350",
//             "330–350"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP31",
//             "IP31",
//             "IP31"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "16 bit",
//             "16 bit",
//             "16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Vega Series",
//     "slug": "vega-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/vega-series.webp",
//     "description": "Modular indoor LED displays suitable for a wide range of fixed-installation layouts.",
//     "features": [
//       "Modular cabinets and curved arrangement",
//       "selected high-brightness variants"
//     ],
//     "detail": {
//       "models": [
//         "Vega 1.84",
//         "Vega 2.5",
//         "Vega 3.9"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.84",
//             "2.5",
//             "3.9"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250",
//             "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250",
//             "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "20",
//             "20",
//             "20"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800",
//             "1000 / 3500",
//             "1000 / 3500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "8000:1",
//             "8000:1",
//             "8000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "500",
//             "550 / 650",
//             "500"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14 bit",
//             "14 bit",
//             "14 bit"
//           ]
//         }
//       ],
//       "note": "Brightness-dependent variants published for 2.5 mm and 3.9 mm."
//     }
//   },
//   {
//     "name": "Vega Studio",
//     "slug": "vega-studio",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/vega-studio.webp",
//     "description": "LED display systems intended for studio and virtual-production environments.",
//     "features": [
//       "Broadcast/virtual production",
//       "refresh-rate discrepancy on source"
//     ],
//     "detail": {
//       "models": [
//         "Vega Studio 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.5"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "500 × 500 × 46.6"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "20"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "1000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "12000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "550"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz) — table",
//           "values": [
//             "7860"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "16 bit"
//           ]
//         }
//       ],
//       "note": "Reference page description says 7680 Hz, but its specification table says 7860 Hz. Confirm the correct figure before quoting."
//     }
//   },
//   {
//     "name": "Nyx Indoor Series",
//     "slug": "nyx-indoor-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/nyx-indoor-series.webp",
//     "description": "Front-service modular SMD LED displays for everyday indoor applications.",
//     "features": [
//       "Front-service indoor SMD display",
//       "modular cabinets"
//     ],
//     "detail": {
//       "models": [
//         "NYX Indoor 1.86",
//         "NYX Indoor 2",
//         "NYX Indoor 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.86",
//             "2",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "640 × 480 × 63",
//             "640 × 480 × 63",
//             "640 × 480 × 63"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "19",
//             "19",
//             "19"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "400",
//             "400",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "NYX Modular Series",
//     "slug": "nyx-modular-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/nyx-modular-series.webp",
//     "description": "Cabinetless modular indoor LED screens offering adaptable installation formats.",
//     "features": [
//       "Cabinetless modular display",
//       "320×160 mm modules"
//     ],
//     "detail": {
//       "models": [
//         "NYX Modular 1.86",
//         "NYX Modular 2",
//         "NYX Modular 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.86",
//             "2",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Module dimensions (W × H, mm)",
//           "values": [
//             "320 × 160",
//             "320 × 160",
//             "320 × 160"
//           ]
//         },
//         {
//           "label": "Module weight (kg)",
//           "values": [
//             "1",
//             "1",
//             "1"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "400",
//             "400",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20"
//           ]
//         },
//         {
//           "label": "Cabinet type",
//           "values": [
//             "Cabinet-free",
//             "Cabinet-free",
//             "Cabinet-free"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Flex Series",
//     "slug": "flex-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/flex-series.webp",
//     "description": "Flexible LED panels designed for curved concave or convex display installations.",
//     "features": [
//       "Flexible concave and convex configurations"
//     ],
//     "detail": {
//       "models": [
//         "Flex 0.94",
//         "Flex 1.25",
//         "Flex 1.56",
//         "Flex 1.88",
//         "Flex 2.5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "0.94",
//             "1.25",
//             "1.56",
//             "1.88",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Module dimensions (W × H × D, mm)",
//           "values": [
//             "240 × 120 × 90",
//             "240 × 120 × 90",
//             "240 × 120 × 90",
//             "240 × 120 × 90",
//             "240 × 120 × 90"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "40",
//             "40",
//             "40",
//             "40",
//             "40"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "700",
//             "700",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "700",
//             "500",
//             "500",
//             "500",
//             "600"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Mild steel",
//             "Mild steel",
//             "Mild steel",
//             "Mild steel",
//             "Mild steel"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14 bit",
//             "14 bit",
//             "14 bit",
//             "14 bit",
//             "14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Iris Indoor Series",
//     "slug": "iris-indoor-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/iris-indoor-series.webp",
//     "description": "Transparent indoor LED solutions for architecture and visually open interiors.",
//     "features": [
//       "Transparent indoor LED display",
//       "pixel pitch expressed horizontally/vertically"
//     ],
//     "detail": {
//       "models": [
//         "Iris Indoor 2.6–5.2",
//         "Iris Indoor 3.9–7.8"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.6–5.2",
//             "3.9–7.8"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "1000 × 500 × 70",
//             "1000 × 500 × 70"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "9",
//             "9"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "800 / 4500",
//             "800 / 4500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "Not specified",
//             "Not specified"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "350 / 500",
//             "300 / 500"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥1920",
//             "≥1920"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP30",
//             "IP30"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": "Standard and high-brightness options; brightness values are alternatives, not a continuous range."
//     }
//   },
//   {
//     "name": "Crystal Series",
//     "slug": "crystal-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/crystal-series.webp",
//     "description": "Adhesive transparent LED display solutions for glass-integrated installations.",
//     "features": [
//       "Adhesive see-through LED",
//       "glass mounting",
//       "3 mm depth"
//     ],
//     "detail": {
//       "models": [
//         "Crystal 3.91",
//         "Crystal 6.25"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.91",
//             "6.25"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "250 × 1200 × 3",
//             "250 × 1500 × 3"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "6",
//             "6"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "3000",
//             "4500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "Not specified",
//             "Not specified"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "1000",
//             "1000"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP20",
//             "IP20"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Mounting structure",
//           "values": [
//             "Glass",
//             "Glass"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "GlowBox Series",
//     "slug": "glowbox-series",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/glowbox-series.webp",
//     "description": "Vertical LED display formats for freestanding digital communication.",
//     "features": [
//       "Vertical LED kiosk",
//       "COB and SMD options"
//     ],
//     "detail": {
//       "models": [
//         "GlowBox 1.25",
//         "GlowBox 1.5625",
//         "GlowBox 1.8",
//         "GlowBox 2.0",
//         "GlowBox 2.5"
//       ],
//       "specs": [
//         {
//           "label": "LED type",
//           "values": [
//             "COB",
//             "COB",
//             "SMD",
//             "SMD",
//             "SMD"
//           ]
//         },
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.25",
//             "1.5625",
//             "1.8",
//             "2.0",
//             "2.5"
//           ]
//         },
//         {
//           "label": "Screen dimensions (W × H × D, mm)",
//           "values": [
//             "600 × 1687.5 × 27",
//             "600 × 1687.5 × 27",
//             "640 × 1920 × 63",
//             "640 × 1920 × 63",
//             "640 × 1920 × 63"
//           ]
//         },
//         {
//           "label": "Product dimensions (W × H × D, mm)",
//           "values": [
//             "604 × 1826 × 330",
//             "604 × 1826 × 330",
//             "646 × 2064 × 450",
//             "646 × 2064 × 450",
//             "646 × 2064 × 450"
//           ]
//         },
//         {
//           "label": "Resolution",
//           "values": [
//             "480 × 1350",
//             "384 × 1080",
//             "344 × 1032",
//             "320 × 960",
//             "256 × 768"
//           ]
//         },
//         {
//           "label": "Product weight (kg)",
//           "values": [
//             "Approx. 50",
//             "Approx. 50",
//             "Approx. 75",
//             "Approx. 75",
//             "Approx. 75"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front",
//             "Front",
//             "Front",
//             "Front",
//             "Front"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600 / 800",
//             "600 / 800",
//             "600",
//             "600",
//             "700"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "20000:1",
//             "20000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W)",
//           "values": [
//             "330",
//             "330",
//             "400",
//             "400",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "≥1920"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP60 / Rear IP50",
//             "Front IP60 / Rear IP50",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20",
//             "Front IP20 / Rear IP20"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum",
//             "Mild steel + Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–19 bit",
//             "13–19 bit",
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Floor LED Display",
//     "slug": "floor-led-display",
//     "groupId": "indoor",
//     "imageUrl": "/images/products/indoor/floor-led-display.webp",
//     "description": "LED floor systems for interactive and immersive walkable display installations.",
//     "features": [
//       "Floor-rated Terra variants",
//       "GOB or PC mask"
//     ],
//     "detail": {
//       "models": [
//         "Terra 1.5",
//         "Terra 1.8",
//         "Terra 2.5",
//         "Terra 2.9",
//         "Terra 3.9"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "1.56",
//             "1.86",
//             "2.5",
//             "2.9",
//             "3.9"
//           ]
//         },
//         {
//           "label": "Surface type",
//           "values": [
//             "GOB",
//             "GOB",
//             "GOB",
//             "PC mask",
//             "PC mask"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (mm)",
//           "values": [
//             "500 × 500 × 78",
//             "500 × 500 × 78",
//             "500 × 500 × 78",
//             "500 × 1000 × 78",
//             "500 × 1000 × 78"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Mild steel",
//             "Mild steel"
//           ]
//         },
//         {
//           "label": "Cabinet weight (kg/m²)",
//           "values": [
//             "44",
//             "44",
//             "44",
//             "44",
//             "44"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43",
//             "Front IP54 / Rear IP43"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "600",
//             "600",
//             "600",
//             "1500",
//             "1500"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "6000:1",
//             "6000:1",
//             "6000:1",
//             "2000:1",
//             "2000:1"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Grayscale (bits)",
//           "values": [
//             "14",
//             "14",
//             "14",
//             "14",
//             "14"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "800",
//             "800",
//             "800",
//             "800",
//             "800"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Earth Series",
//     "slug": "earth-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/earth-series.webp",
//     "description": "High-brightness outdoor displays with energy-saving system options.",
//     "features": [
//       "Energy-saving dual voltage",
//       "front/back IP66"
//     ],
//     "detail": {
//       "models": [
//         "Earth 3.91",
//         "Earth 5.71",
//         "Earth 6.67",
//         "Earth 8",
//         "Earth 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.91",
//             "5.71",
//             "6.67",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "1000 × 1000 × 81",
//             "960 × 960 × 105",
//             "960 × 960 × 105 / 640 × 960 × 105",
//             "960 × 960 × 105 / 640 × 960 × 105",
//             "960 × 960 × 105 / 640 × 960 × 105"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "27",
//             "26",
//             "26",
//             "26",
//             "26"
//           ]
//         },
//         {
//           "label": "Technology",
//           "values": [
//             "Dual voltage",
//             "Dual voltage",
//             "Dual voltage",
//             "Dual voltage",
//             "Dual voltage"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5000",
//             "7500 / 9000",
//             "7500 / 9000",
//             "7500 / 9000",
//             "7500 / 9000 / 15000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "550",
//             "580",
//             "580",
//             "580",
//             "580 / 650"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66",
//             "Front IP66 / Rear IP66"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         },
//         {
//           "label": "Certification",
//           "values": [
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS",
//             "CE-EMC, CE-LVD, FCC, BIS"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Aegis Pro Series",
//     "slug": "aegis-pro-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/aegis-pro-series.webp",
//     "description": "Durable, weather-resistant outdoor LED solutions for high-impact visuals.",
//     "features": [
//       "Weather-resistant",
//       "front/back IP65"
//     ],
//     "detail": {
//       "models": [
//         "Aegis Pro 4",
//         "Aegis Pro 5"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "4",
//             "5"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "960 × 960 × 99",
//             "960 × 960 × 99"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "21",
//             "21"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "6000",
//             "6000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°",
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "650",
//             "625"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP65",
//             "Front IP65 / Rear IP65"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Nyx OD Series",
//     "slug": "nyx-od-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/nyx-od-series.webp",
//     "description": "Modular outdoor LED systems with flexible pitch options.",
//     "features": [
//       "Outdoor modular display",
//       "front IP65/back IP54"
//     ],
//     "detail": {
//       "models": [
//         "NYX OD 2.5",
//         "NYX OD 3",
//         "NYX OD 4",
//         "NYX OD 5",
//         "NYX OD 8",
//         "NYX OD 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.5",
//             "3",
//             "4",
//             "5",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "640 × 960 × 125",
//             "960 × 960 × 115",
//             "960 × 960 × 127",
//             "960 × 960 × 127",
//             "960 × 960 × 127",
//             "960 × 960 × 127"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "30",
//             "30",
//             "25",
//             "25",
//             "25",
//             "25"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5000",
//             "5000",
//             "5000",
//             "5000",
//             "5000 / 6000",
//             "5000 / 6000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "760",
//             "650",
//             "750",
//             "750",
//             "650",
//             "650"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840",
//             "1920",
//             "1920"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "14 bit",
//             "14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear",
//             "Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Iris Outdoor Series",
//     "slug": "iris-outdoor-series",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/iris-outdoor-series.webp",
//     "description": "Transparent outdoor LED designs for partially see-through building installations.",
//     "features": [
//       "Transparent outdoor series",
//       "asymmetric pixel pitch"
//     ],
//     "detail": {
//       "models": [
//         "Iris Outdoor 3.9–7.8",
//         "Iris Outdoor 15.6–15.6",
//         "Iris Outdoor 15.6–31.2"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.9–7.8",
//             "15.6–15.6",
//             "15.6–31.2"
//           ]
//         },
//         {
//           "label": "LED type",
//           "values": [
//             "SMD 1921",
//             "DIP 3-in-1",
//             "DIP 3-in-1"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "1000 × 500 × 85",
//             "1000 × 1000 × 105",
//             "1000 × 1000 × 105"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "15",
//             "23",
//             "19"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5500",
//             "8000",
//             "8000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "110° × 110°",
//             "110° × 110°",
//             "110° × 110°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "500",
//             "450",
//             "400"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥2880",
//             "≥3840",
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP65",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "13–15 bit",
//             "13–15 bit",
//             "13–15 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Iris Media Façade",
//     "slug": "iris-media-facade",
//     "groupId": "outdoor",
//     "imageUrl": "/images/products/outdoor/iris-media-facade.webp",
//     "description": "Architectural strip-type LED media systems intended for building façades.",
//     "features": [
//       "Outdoor façade LED strip system",
//       "per-strip power ratings"
//     ],
//     "detail": {
//       "models": [
//         "Iris Media Façade 31.25–100"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "31.25–100"
//           ]
//         },
//         {
//           "label": "Strip dimensions (W × H × D, mm)",
//           "values": [
//             "1500 × 100 × 80"
//           ]
//         },
//         {
//           "label": "Weight (kg per strip)",
//           "values": [
//             "0.48"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "1500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Maximum power (W per strip)",
//           "values": [
//             "80"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "1024"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP65"
//           ]
//         },
//         {
//           "label": "Strip material",
//           "values": [
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Arena Series",
//     "slug": "arena-series",
//     "groupId": "rental",
//     "imageUrl": "/images/products/rental/arena-series.webp",
//     "description": "Rental-focused modular LED displays for events, stages and productions.",
//     "features": [
//       "Indoor and outdoor rental variants",
//       "different IP ratings"
//     ],
//     "detail": {
//       "models": [
//         "Arena 2.604 GOB",
//         "Arena 2.97 Indoor",
//         "Arena 2.97 Outdoor",
//         "Arena 3.8",
//         "Arena 3.8 Black Lamp",
//         "Arena 3.91",
//         "Arena 4.81"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "2.604",
//             "2.97",
//             "2.97",
//             "3.8",
//             "3.8",
//             "3.91",
//             "4.81"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H, mm)",
//           "values": [
//             "500 × 500 / 500 × 1000",
//             "500 × 500 / 500 × 1000",
//             "500 × 500 / 500 × 1000",
//             "576 × 576",
//             "576 × 576",
//             "500 × 500 / 500 × 1000",
//             "576 × 576"
//           ]
//         },
//         {
//           "label": "Cabinet resolution",
//           "values": [
//             "192 × 192 / 192 × 384",
//             "168 × 168 / 168 × 336",
//             "168 × 168 / 168 × 336",
//             "152 × 152",
//             "152 × 152",
//             "128 × 128 / 128 × 256",
//             "120 × 120"
//           ]
//         },
//         {
//           "label": "Weight (kg)",
//           "values": [
//             "6 / 12",
//             "6 / 12",
//             "7 / 13",
//             "8.5",
//             "8.5",
//             "7 / 13",
//             "8.5"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "700",
//             "700–800",
//             "4000",
//             "4000",
//             "2000",
//             "4000",
//             "4000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°",
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "300",
//             "350",
//             "700",
//             "700",
//             "650",
//             "700",
//             "700"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "7680",
//             "7680",
//             "7680",
//             "7680",
//             "7680",
//             "7680",
//             "7680"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP30 / Rear IP30",
//             "Front IP30 / Rear IP30",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         }
//       ],
//       "note": "Two 2.97 mm variants have substantially different brightness and ingress protection. Both are kept separately."
//     }
//   },
//   {
//     "name": "Orion Series",
//     "slug": "orion-series",
//     "groupId": "rental",
//     "imageUrl": "/images/products/rental/orion-series.webp",
//     "description": "Outdoor rental LED solutions intended for repeated setup and dismantling.",
//     "features": [
//       "Outdoor-rated modular rental display",
//       "back service"
//     ],
//     "detail": {
//       "models": [
//         "Orion 3.91–7.8"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "3.91–7.8"
//           ]
//         },
//         {
//           "label": "Cabinet size option A (W × H, mm)",
//           "values": [
//             "500 × 500"
//           ]
//         },
//         {
//           "label": "Cabinet resolution A",
//           "values": [
//             "128 × 64"
//           ]
//         },
//         {
//           "label": "Cabinet weight A (kg)",
//           "values": [
//             "4.5"
//           ]
//         },
//         {
//           "label": "Cabinet size option B (W × H, mm)",
//           "values": [
//             "1000 × 500"
//           ]
//         },
//         {
//           "label": "Cabinet resolution B",
//           "values": [
//             "256 × 64"
//           ]
//         },
//         {
//           "label": "Cabinet weight B (kg)",
//           "values": [
//             "8.5"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "4500"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "140° × 140°"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "600"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "≥3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP65"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   },
//   {
//     "name": "Atlas",
//     "slug": "atlas",
//     "groupId": "sports",
//     "imageUrl": "/images/products/sports/atlas.webp",
//     "description": "Stadium perimeter LED displays with protective installation features.",
//     "features": [
//       "Stadium perimeter LED",
//       "protective foam and adjustable installation"
//     ],
//     "detail": {
//       "models": [
//         "Atlas 5",
//         "Atlas 6.67",
//         "Atlas 8",
//         "Atlas 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "5",
//             "6.67",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "960 × 960 × 115",
//             "960 × 960 × 115",
//             "960 × 960 × 115",
//             "960 × 960 × 115"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "33",
//             "33",
//             "33",
//             "33"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Rear",
//             "Rear",
//             "Rear",
//             "Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "5000",
//             "5000",
//             "5000",
//             "5000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "5000:1",
//             "5000:1",
//             "5000:1",
//             "5000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "750",
//             "750",
//             "750",
//             "750"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "3840",
//             "3840",
//             "3840",
//             "3840"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54",
//             "Front IP65 / Rear IP54"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit",
//             "12–14 bit"
//           ]
//         }
//       ],
//       "note": "Reference description also mentions 1920 Hz, while the specifications table states 3840 Hz."
//     }
//   },
//   {
//     "name": "Atlas Pro",
//     "slug": "atlas-pro",
//     "groupId": "sports",
//     "imageUrl": "/images/products/sports/atlas-pro.webp",
//     "description": "Higher-brightness stadium perimeter displays with reinforced protective construction.",
//     "features": [
//       "Sports perimeter display",
//       "IP66",
//       "reinforced protection"
//     ],
//     "detail": {
//       "models": [
//         "Atlas Pro 6.67",
//         "Atlas Pro 8",
//         "Atlas Pro 10"
//       ],
//       "specs": [
//         {
//           "label": "Pixel pitch (mm)",
//           "values": [
//             "6.67",
//             "8",
//             "10"
//           ]
//         },
//         {
//           "label": "Cabinet dimensions (W × H × D, mm)",
//           "values": [
//             "960 × 960 × 102",
//             "960 × 960 × 102",
//             "960 × 960 × 102"
//           ]
//         },
//         {
//           "label": "Weight (kg/m²)",
//           "values": [
//             "34",
//             "34",
//             "34"
//           ]
//         },
//         {
//           "label": "Service access",
//           "values": [
//             "Front / Rear",
//             "Front / Rear",
//             "Front / Rear"
//           ]
//         },
//         {
//           "label": "Maximum brightness (nits)",
//           "values": [
//             "8000",
//             "8000",
//             "8000"
//           ]
//         },
//         {
//           "label": "Viewing angle (H × V)",
//           "values": [
//             "160° × 160°",
//             "160° × 160°",
//             "160° × 160°"
//           ]
//         },
//         {
//           "label": "Contrast ratio",
//           "values": [
//             "8000:1",
//             "8000:1",
//             "8000:1"
//           ]
//         },
//         {
//           "label": "Maximum power (W/m²)",
//           "values": [
//             "550",
//             "550",
//             "550"
//           ]
//         },
//         {
//           "label": "Refresh rate (Hz)",
//           "values": [
//             "7680",
//             "7680",
//             "7680"
//           ]
//         },
//         {
//           "label": "Ingress protection",
//           "values": [
//             "IP66",
//             "IP66",
//             "IP66"
//           ]
//         },
//         {
//           "label": "Cabinet material",
//           "values": [
//             "Die-cast aluminum",
//             "Die-cast aluminum",
//             "Die-cast aluminum"
//           ]
//         },
//         {
//           "label": "Data processing",
//           "values": [
//             "14–16 bit",
//             "14–16 bit",
//             "14–16 bit"
//           ]
//         }
//       ],
//       "note": ""
//     }
//   }
// ];

// const GROUPS = [
//   {
//     "id": "fine-pitch",
//     "title": "Fine Pitch Displays",
//     "description": "Fine-resolution LED displays for close viewing"
//   },
//   {
//     "id": "indoor",
//     "title": "Indoor LED Video Walls",
//     "description": "LED technologies for immersive indoor spaces"
//   },
//   {
//     "id": "outdoor",
//     "title": "Outdoor LED Video Walls",
//     "description": "High-visibility displays and architectural systems"
//   },
//   {
//     "id": "rental",
//     "title": "Rental Displays",
//     "description": "Event-ready and touring LED configurations"
//   },
//   {
//     "id": "sports",
//     "title": "Sports Series",
//     "description": "Display systems for stadium and sports venues"
//   }
// ] as const;

// function Icon({ kind, className = "" }: { kind: "arrow" | "back" | "check"; className?: string }) {
//   if (kind === "check") return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
//   if (kind === "back") return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h12"/></svg>;
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>;
// }
// function Picture({ product, className = "" }: { product: Product; className?: string }) {
//   const [failed, setFailed] = useState(false);
//   useEffect(() => setFailed(false), [product.imageUrl]);
//   return <div className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#F8FAFC_0%,#EEF3FA_100%)] ${className}`}>
//     {failed ? <span className="px-4 text-center text-sm text-[#8193A5]">Product image coming soon</span> :
//       <img src={product.imageUrl} onError={() => setFailed(true)} alt={`${product.name} LED display`} loading="lazy" decoding="async" className="h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none sm:p-10" />}
//   </div>;
// }
// function productMetric(detail: ProductDetail, index: number, key: string) {
//   const row = detail.specs.find(r => r.label.toLowerCase().includes(key));
//   return row?.values[index] ?? "Not listed";
// }
// function ProductCard({product, index, onOpen}: {product: Product; index: number; onOpen: () => void}) {
//   return <button type="button" onClick={onOpen} className="group min-w-0 overflow-hidden border border-[#E4EBF2] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#AEC8F7] hover:shadow-[0_18px_55px_rgba(16,44,76,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0]" aria-label={`View technical specifications for ${product.name}`}>
//     <div className="relative"><Picture product={product} className="aspect-[5/4] w-full"/><span className="absolute left-4 top-4 text-xs font-medium tracking-wide text-[#8394A5]">{String(index+1).padStart(2,"0")}</span></div>
//     <div className="flex min-h-[91px] items-center justify-between gap-3 border-t border-[#E9EFF5] px-5 py-5 sm:px-6">
//       <div><h3 className="text-base font-semibold tracking-[-0.02em] text-[#142B48] sm:text-lg">{product.name}</h3><p className="mt-1 text-xs text-[#75879A]">View details &amp; specifications</p></div>
//       <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D8E5F4] text-[#0047C0] group-hover:bg-[#0047C0] group-hover:text-white"><Icon kind="arrow" className="h-[18px] w-[18px]"/></span>
//     </div>
//   </button>;
// }
// function SpecsTable({product, variant}: {product: Product; variant: number}) {
//   const rows = product.detail.specs;
//   return <div className="overflow-hidden border border-[#DFE7F1] bg-white shadow-[0_15px_55px_rgba(17,46,74,0.045)]">
//     <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] bg-[#122B48] px-3 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.13em] text-white sm:px-6 sm:text-xs">
//       <span className="border-r border-white/20 pr-2">Parameter</span><span className="pl-2">Specification</span>
//     </div>
//     {rows.map((row,i) => <div key={row.label} className={`grid min-h-[59px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch border-t border-[#E6EDF5] text-center ${i%2 ? "bg-[#F8FAFD]" : "bg-white"}`}>
//       <div className="flex items-center justify-center border-r border-[#E5ECF3] px-3 py-3 text-[13px] font-medium leading-relaxed text-[#5E7185] sm:px-6 sm:text-sm">{row.label}</div>
//       <div className="flex items-center justify-center break-words px-3 py-3 text-[13px] font-semibold leading-relaxed text-[#142B48] sm:px-6 sm:text-sm">{row.values[variant] ?? "Not specified"}</div>
//     </div>)}
//   </div>;
// }
// function ProductPage({product,onBack}: {product: Product;onBack:()=>void}) {
//   const [variant,setVariant] = useState(0);
//   const reducedMotion = useReducedMotion();
//   useEffect(()=>setVariant(0),[product.slug]);
//   const d=product.detail;
//   const group=GROUPS.find(g=>g.id===product.groupId);
//   const stats=[
//     {label:"Pixel pitch",value:productMetric(d,variant,"pixel pitch")},
//     {label:"Brightness",value:productMetric(d,variant,"brightness")},
//     {label:"Refresh rate",value:productMetric(d,variant,"refresh rate")},
//     {label:"Service access",value:productMetric(d,variant,"service access") !== "Not listed" ? productMetric(d,variant,"service access") : productMetric(d,variant,"maintenance")}
//   ];
//   return <motion.div initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:12}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.35}}>
//     <section className="bg-[#F7FAFD] px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14"><div className="mx-auto max-w-[1320px]">
//       <button type="button" onClick={onBack} className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#0047C0] hover:text-[#003799] focus-visible:outline-2 focus-visible:outline-[#0047C0]"><Icon kind="back" className="h-4 w-4"/> Back to products</button>
//       <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
//         <Picture product={product} className="aspect-[5/4] w-full border border-[#E6EDF3]"/>
//         <div className="lg:pl-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">{group?.title} / Product series</p>
//           <h1 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#142B48]">{product.name}</h1>
//           <p className="mt-6 max-w-xl text-base leading-8 text-[#62768A]">{product.description}</p>
//           <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-[#E2EAF2] bg-[#E2EAF2]">
//             {stats.map(s=><div className="min-h-[94px] bg-white px-4 py-5 sm:px-6" key={s.label}><p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8293A5]">{s.label}</p><p className="mt-2 text-sm font-semibold leading-6 text-[#142B48] sm:text-base">{s.value}</p></div>)}
//           </div>
//           <a href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 bg-[#0047C0] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#003799]">Enquire about this display <Icon kind="arrow" className="h-4 w-4"/></a>
//         </div>
//       </div>
//     </div></section>
//     <section className="px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20"><div className="mx-auto max-w-[1140px]">
//       <div className="mx-auto max-w-[770px] text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">Product information</p><h2 className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">Built for its environment.</h2><p className="mt-4 text-base leading-8 text-[#6C7D8E]">Explore the defining characteristics and available configurations of {product.name}.</p></div>
//       <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{product.features.map((feature)=><div className="flex min-h-[80px] items-center gap-3 border border-[#E4EBF2] bg-[#FAFCFE] px-5 py-5" key={feature}><span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#E8F0FF] text-[#0047C0]"><Icon kind="check" className="h-4 w-4"/></span><p className="text-sm font-medium leading-6 text-[#233F59]">{feature}</p></div>)}</div>
//     </div></section>
//     <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32"><div className="mx-auto max-w-[1040px]">
//       <div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">Detailed product data</p><h2 className="mt-4 text-[clamp(2.1rem,4vw,3.6rem)] font-semibold tracking-[-0.055em] text-[#142B48]">Technical Specifications</h2><p className="mx-auto mt-3 max-w-[680px] text-sm leading-7 text-[#718496]">Select a model to view its individual technical parameters. All values remain aligned and centered for easy comparison.</p></div>
//       <div className="mx-auto mb-8 mt-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Select product model">{d.models.map((model,i)=><button key={`${model}-${i}`} type="button" aria-pressed={variant===i} onClick={()=>setVariant(i)} className={`border px-4 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] sm:text-sm ${variant===i ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DCE5EF] bg-white text-[#435D76] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{model}</button>)}</div>
//       <div className="mb-5 border-l-[3px] border-[#0047C0] bg-[#F5F8FD] px-5 py-4 text-center"><span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74869A]">Selected model</span><p className="mt-1 text-lg font-semibold text-[#142B48]">{d.models[variant]}</p></div>
//       <SpecsTable product={product} variant={variant}/>
//       {d.note && <p className="mt-5 border-l-2 border-[#E9B44C] bg-[#FFFAED] px-4 py-3 text-sm leading-6 text-[#715522]">{d.note}</p>}
//       <p className="mx-auto mt-6 max-w-[850px] text-center text-xs leading-6 text-[#8393A3]">Published model-reference specifications, shown for technical comparison. Please verify the selected configuration, exact available model, certification and warranty with the supplying manufacturer before quotation or publication as a guaranteed Pingo Screens specification.</p>
//       <div className="mt-10 text-center"><a href="/contact" className="inline-flex min-h-12 items-center gap-4 bg-[#0047C0] px-8 text-sm font-semibold text-white hover:bg-[#003799]">Discuss your requirements <Icon kind="arrow" className="h-4 w-4"/></a></div>
//     </div></section>
//   </motion.div>;
// }
// export default function Products() {
//  const reducedMotion=useReducedMotion();
//  const [activeGroup,setActiveGroup]=useState<string>("fine-pitch");
//  const [openedSlug,setOpenedSlug]=useState<string | null>(null);
//  const selectedGroup=GROUPS.find(g=>g.id===activeGroup)??GROUPS[0];
//  const filtered=useMemo(()=>PRODUCTS.filter(p=>p.groupId===selectedGroup.id),[selectedGroup.id]);
//  const selectedProduct=PRODUCTS.find(p=>p.slug===openedSlug);
//  const open=(slug:string)=>{setOpenedSlug(slug);window.scrollTo({top:0,behavior:"auto"});};
//  const back=()=>{setOpenedSlug(null);window.scrollTo({top:0,behavior:"auto"});};
//  return <main className="min-h-screen bg-white">
//   {selectedProduct ? <ProductPage key={selectedProduct.slug} product={selectedProduct} onBack={back}/> : <>
//    <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28"><div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DCE7FF]/60 blur-[110px]"/><div className="relative mx-auto max-w-[1440px]"><motion.p initial={{opacity:reducedMotion?1:0}} animate={{opacity:1}} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Pingo Screens / Collection</motion.p><motion.h1 initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:18}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.6}} className="mt-5 max-w-[950px] text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]">The Art of <span className="text-[#0047C0]">Display.</span></motion.h1><p className="mt-6 max-w-[680px] text-base leading-8 text-[#637789]">Explore advanced LED display solutions across fine-pitch, indoor, outdoor, rental and sports collections.</p></div></section>
//    <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16"><div className="mx-auto max-w-[1440px]"><div className="mb-12 flex flex-wrap gap-2.5 sm:gap-3" role="group" aria-label="LED product categories">{GROUPS.map(g=><button type="button" key={g.id} aria-pressed={activeGroup===g.id} onClick={()=>setActiveGroup(g.id)} className={`border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0047C0] sm:px-5 ${activeGroup===g.id ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{g.title}</button>)}</div>
//    <AnimatePresence mode="wait" initial={false}><motion.div key={selectedGroup.id} initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:10}} animate={{opacity:1,y:0}} exit={{opacity:reducedMotion?1:0}} transition={{duration:reducedMotion?0:.3}}><div className="mb-9 flex items-end justify-between gap-5 border-b border-[#E6EDF2] pb-8"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">LED Video Walls / Collection</p><h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">{selectedGroup.title}</h2><p className="mt-4 max-w-[650px] text-base leading-7 text-[#6B7D8E]">{selectedGroup.description}</p></div><span className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[#8B9CAB] sm:block">{String(filtered.length).padStart(2,"0")} Series</span></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((p,i)=><ProductCard key={p.slug} product={p} index={i} onOpen={()=>open(p.slug)}/>)}</div></motion.div></AnimatePresence></div></section>
//   </>}
//  </main>;
// }















import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type SpecRow = { label: string; values: string[] };
type ProductDetail = { models: string[]; specs: SpecRow[]; note: string };
type Product = {
  name: string;
  slug: string;
  groupId: string;
  imageUrl: string;
  description: string;
  features: string[];
  detail: ProductDetail;
};

const PRODUCTS: Product[] = [
  {
    "name": "Lumina Pro",
    "slug": "spectra",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/spectra.webp",
    "description": "A fine-pitch LED solution suited to premium home entertainment and immersive large-screen viewing.",
    "features": [
      "Home LED display",
      "customizable bezels",
      "deep black",
      "97% color uniformity"
    ],
    "detail": {
      "models": [
        "Spectra 0.9",
        "Spectra 1.25",
        "Spectra 1.56"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "0.9",
            "1.25",
            "1.56"
          ]
        },
        {
          "label": "Screen size",
          "values": [
            "163 in",
            "108 in / 135 in",
            "135 in"
          ]
        },
        {
          "label": "Screen dimensions (W × H)",
          "values": [
            "3.6 × 2.02 m",
            "2.4 × 1.35 m / 3 × 1.68 m",
            "3 × 1.68 m"
          ]
        },
        {
          "label": "Cabinet dimensions (mm)",
          "values": [
            "600 × 337.5",
            "600 × 337.5",
            "600 × 337.5"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "21",
            "21",
            "21"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Technology",
          "values": [
            "Common cathode",
            "Common cathode",
            "Common cathode"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600–1200",
            "600–1200",
            "600–1200"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "40000:1",
            "40000:1",
            "40000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "340",
            "300",
            "275"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥3840",
            "≥3840",
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "13–19 bit",
            "13–19 bit",
            "13–19 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "VisionEdge",
    "slug": "apex-series",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/apex-series.webp",
    "description": "A fine-pitch COB display series focused on detailed imagery and high contrast.",
    "features": [
      "Flip-chip COB",
      "common cathode",
      "40000:1 contrast"
    ],
    "detail": {
      "models": [
        "Apex 0.9",
        "Apex 1.25",
        "Apex 1.56"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "0.9",
            "1.25",
            "1.56"
          ]
        },
        {
          "label": "Cabinet dimensions (mm)",
          "values": [
            "600 × 337.5",
            "600 × 337.5",
            "600 × 337.5"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "23",
            "23",
            "23"
          ]
        },
        {
          "label": "Technology",
          "values": [
            "Common cathode",
            "Common cathode",
            "Common cathode"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "1200",
            "1200",
            "1200"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "40000:1",
            "40000:1",
            "40000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "400",
            "375",
            "350"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "19 bit",
            "19 bit",
            "19 bit"
          ]
        },
        {
          "label": "Certification",
          "values": [
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "PixelCore",
    "slug": "lit-series",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/lit-series.webp",
    "description": "A COB-based fine-pitch display range with multiple high-resolution pixel-pitch options.",
    "features": [
      "Flip-chip COB",
      "common cathode",
      "20000:1–40000:1 contrast"
    ],
    "detail": {
      "models": [
        "LIT 0.62",
        "LIT 0.78",
        "LIT 0.9",
        "LIT 1.25",
        "LIT 1.56"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "0.62",
            "0.78",
            "0.9",
            "1.25",
            "1.56"
          ]
        },
        {
          "label": "Cabinet dimensions (mm)",
          "values": [
            "600 × 337.5",
            "600 × 337.5",
            "600 × 337.5",
            "600 × 337.5",
            "600 × 337.5"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "21",
            "21",
            "21",
            "21",
            "21"
          ]
        },
        {
          "label": "Technology",
          "values": [
            "Common cathode",
            "Common cathode",
            "Common cathode",
            "Common cathode",
            "Common cathode"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600",
            "800",
            "800",
            "800"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "20000:1",
            "20000:1",
            "40000:1",
            "40000:1",
            "40000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "420",
            "300",
            "350",
            "325",
            "320"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "13–19 bit",
            "13–19 bit",
            "13–19 bit",
            "13–19 bit",
            "13–19 bit"
          ]
        },
        {
          "label": "Certification",
          "values": [
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "NovaView",
    "slug": "ignis-series",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/ignis-series.webp",
    "description": "A Flip-Chip COB LED series for refined indoor visual presentations.",
    "features": [
      "Flip-chip COB",
      "common anode",
      "20000:1 contrast"
    ],
    "detail": {
      "models": [
        "IGNIS 1.25",
        "IGNIS 1.56"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "1.25",
            "1.56"
          ]
        },
        {
          "label": "Cabinet dimensions (mm)",
          "values": [
            "600 × 337.5",
            "600 × 337.5"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "21",
            "21"
          ]
        },
        {
          "label": "Technology",
          "values": [
            "Common anode",
            "Common anode"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "20000:1",
            "20000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "300",
            "275"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "13 bit",
            "13 bit"
          ]
        },
        {
          "label": "Certification",
          "values": [
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "Clarity Pro",
    "slug": "ace-series",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/ace-series.webp",
    "description": "Professional small-pitch LED displays for boardrooms and control environments.",
    "features": [
      "SMD",
      "control centers and boardrooms",
      "front service"
    ],
    "detail": {
      "models": [
        "Ace 0.94",
        "Ace 1.25",
        "Ace 1.56",
        "Ace 1.87"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "0.94",
            "1.25",
            "1.56",
            "1.87"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "600 × 337.5 × 49",
            "600 × 337.5 × 38",
            "600 × 337.5 × 38",
            "600 × 337.5 × 49"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "25",
            "25",
            "25",
            "25"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600",
            "600",
            "800"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "500",
            "600",
            "700",
            "600"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥3840",
            "≥3840",
            "≥3840",
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "IP30",
            "IP30",
            "IP30",
            "IP30"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit",
            "14–16 bit",
            "14–16 bit",
            "14–16 bit"
          ]
        },
        {
          "label": "Cabinet depth (mm)",
          "values": [
            "49",
            "38",
            "38",
            "49"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "OneVision",
    "slug": "unify",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/unify.webp",
    "description": "An integrated all-in-one LED display designed for presentations and collaboration.",
    "features": [
      "All-in-one COB display",
      "108–163 inch",
      "Android 13"
    ],
    "detail": {
      "models": [
        "Unify AIO 0.9375",
        "Unify AIO 1.25",
        "Unify AIO 1.5625"
      ],
      "specs": [
        {
          "label": "Technology",
          "values": [
            "COB",
            "COB",
            "COB"
          ]
        },
        {
          "label": "Screen size",
          "values": [
            "163 in",
            "108 in",
            "135 in"
          ]
        },
        {
          "label": "Display size (mm)",
          "values": [
            "3600 × 2025",
            "2400 × 1350",
            "3000 × 1687.5"
          ]
        },
        {
          "label": "Aspect ratio",
          "values": [
            "16:9",
            "16:9",
            "16:9"
          ]
        },
        {
          "label": "Screen resolution",
          "values": [
            "3840 × 2160 (4K)",
            "1920 × 1080 (FHD)",
            "1920 × 1080 (FHD)"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50"
          ]
        },
        {
          "label": "Screen weight",
          "values": [
            "Approx. 170 kg",
            "Approx. 80 kg",
            "Approx. 120 kg"
          ]
        },
        {
          "label": "Maintenance",
          "values": [
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Mounting options",
          "values": [
            "Wall / Floor stand",
            "Wall / Floor stand",
            "Wall / Floor stand"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "800",
            "600 / 800",
            "600 / 800"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "20000:1",
            "20000:1",
            "20000:1"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Grayscale",
          "values": [
            "13–19 bit",
            "13 / 19 bit",
            "13 / 19 bit"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Maximum power consumption",
          "values": [
            "Approx. 2550 W ±5%",
            "Approx. 1100 W ±5%",
            "Approx. 1450 W ±5%"
          ]
        },
        {
          "label": "HDMI input",
          "values": [
            "2 × HDMI 2.0",
            "2 × HDMI 2.0",
            "2 × HDMI 2.0"
          ]
        },
        {
          "label": "HDMI output",
          "values": [
            "1 × HDMI 2.0",
            "1 × HDMI 2.0",
            "1 × HDMI 2.0"
          ]
        },
        {
          "label": "Audio output",
          "values": [
            "1 × SPDIF",
            "1 × SPDIF",
            "1 × SPDIF"
          ]
        },
        {
          "label": "USB",
          "values": [
            "1 × USB 2.0, 1 × USB 3.0",
            "1 × USB 2.0, 1 × USB 3.0",
            "1 × USB 2.0, 1 × USB 3.0"
          ]
        },
        {
          "label": "Wi-Fi",
          "values": [
            "Wi-Fi 6 dual-band",
            "Wi-Fi 6 dual-band",
            "Wi-Fi 6 dual-band"
          ]
        },
        {
          "label": "Bluetooth",
          "values": [
            "5.2",
            "5.2",
            "5.2"
          ]
        },
        {
          "label": "Ethernet",
          "values": [
            "1 × RJ45",
            "1 × RJ45",
            "1 × RJ45"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "RadiantView",
    "slug": "helio-series",
    "groupId": "fine-pitch",
    "imageUrl": "/images/products/fine-pitch/helio-series.webp",
    "description": "MIP LED displays with slim cabinet construction and fine-pitch configurations.",
    "features": [
      "MIP",
      "27.5 mm cabinet depth",
      "front service"
    ],
    "detail": {
      "models": [
        "Helio 0.93",
        "Helio 1.25",
        "Helio 1.56"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "0.93",
            "1.25",
            "1.56"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "600 × 337.5 × 27.5",
            "600 × 337.5 × 27.5",
            "600 × 337.5 × 27.5"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "23",
            "23",
            "23"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "800",
            "1200",
            "1200"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "Up to 15000:1",
            "Up to 15000:1",
            "Up to 15000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "330–350",
            "330–350",
            "330–350"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "IP31",
            "IP31",
            "IP31"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "16 bit",
            "16 bit",
            "16 bit"
          ]
        }
      ],
      "note": ""
    }
  },
 
  {
    "name": "Lumora Series",
    "slug": "vega-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/vega-series.webp",
    "description": "Modular indoor LED displays suitable for a wide range of fixed-installation layouts.",
    "features": [
      "Modular cabinets and curved arrangement",
      "selected high-brightness variants"
    ],
    "detail": {
      "models": [
        "Vega 1.84",
        "Vega 2.5",
        "Vega 3.9"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "1.84",
            "2.5",
            "3.9"
          ]
        },
        {
          "label": "Cabinet dimensions (mm)",
          "values": [
            "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250",
            "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250",
            "500 × 500 / 250 × 250 / 250 × 500 / 500 × 250"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "20",
            "20",
            "20"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "800",
            "1000 / 3500",
            "1000 / 3500"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "8000:1",
            "8000:1",
            "8000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "500",
            "550 / 650",
            "500"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥3840",
            "≥3840",
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14 bit",
            "14 bit",
            "14 bit"
          ]
        }
      ],
      "note": "Brightness-dependent variants published for 2.5 mm and 3.9 mm."
    }
  },
  {
    "name": "Lumora Studio",
    "slug": "vega-studio",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/vega-studio.webp",
    "description": "LED display systems intended for studio and virtual-production environments.",
    "features": [
      "Broadcast/virtual production",
      "refresh-rate discrepancy on source"
    ],
    "detail": {
      "models": [
        "Vega Studio 2.5"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "2.5"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "500 × 500 × 46.6"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "20"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "1000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "12000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "550"
          ]
        },
        {
          "label": "Refresh rate (Hz) — table",
          "values": [
            "7860"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP30 / Rear IP30"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "16 bit"
          ]
        }
      ],
      "note": "Reference page description says 7680 Hz, but its specification table says 7860 Hz. Confirm the correct figure before quoting."
    }
  },
  {
    "name": "Veltrix Indoor",
    "slug": "nyx-indoor-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/nyx-indoor-series.webp",
    "description": "Front-service modular SMD LED displays for everyday indoor applications.",
    "features": [
      "Front-service indoor SMD display",
      "modular cabinets"
    ],
    "detail": {
      "models": [
        "NYX Indoor 1.86",
        "NYX Indoor 2",
        "NYX Indoor 2.5"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "1.86",
            "2",
            "2.5"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "640 × 480 × 63",
            "640 × 480 × 63",
            "640 × 480 × 63"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "19",
            "19",
            "19"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600",
            "700"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "400",
            "400",
            "400"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP20 / Rear IP20",
            "Front IP20 / Rear IP20",
            "Front IP20 / Rear IP20"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "12–14 bit",
            "12–14 bit",
            "12–14 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "Veltrix Modular",
    "slug": "nyx-modular-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/nyx-modular-series.webp",
    "description": "Cabinetless modular indoor LED screens offering adaptable installation formats.",
    "features": [
      "Cabinetless modular display",
      "320×160 mm modules"
    ],
    "detail": {
      "models": [
        "NYX Modular 1.86",
        "NYX Modular 2",
        "NYX Modular 2.5"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "1.86",
            "2",
            "2.5"
          ]
        },
        {
          "label": "Module dimensions (W × H, mm)",
          "values": [
            "320 × 160",
            "320 × 160",
            "320 × 160"
          ]
        },
        {
          "label": "Module weight (kg)",
          "values": [
            "1",
            "1",
            "1"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600",
            "700"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "400",
            "400",
            "400"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP20 / Rear IP20",
            "Front IP20 / Rear IP20",
            "Front IP20 / Rear IP20"
          ]
        },
        {
          "label": "Cabinet type",
          "values": [
            "Cabinet-free",
            "Cabinet-free",
            "Cabinet-free"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "12–14 bit",
            "12–14 bit",
            "12–14 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "Curvexa Series",
    "slug": "flex-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/flex-series.webp",
    "description": "Flexible LED panels designed for curved concave or convex display installations.",
    "features": [
      "Flexible concave and convex configurations"
    ],
    "detail": {
      "models": [
        "Flex 0.94",
        "Flex 1.25",
        "Flex 1.56",
        "Flex 1.88",
        "Flex 2.5"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "0.94",
            "1.25",
            "1.56",
            "1.88",
            "2.5"
          ]
        },
        {
          "label": "Module dimensions (W × H × D, mm)",
          "values": [
            "240 × 120 × 90",
            "240 × 120 × 90",
            "240 × 120 × 90",
            "240 × 120 × 90",
            "240 × 120 × 90"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "40",
            "40",
            "40",
            "40",
            "40"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600",
            "700",
            "700",
            "700"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "140° × 140°",
            "140° × 140°",
            "140° × 140°",
            "140° × 140°",
            "140° × 140°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "700",
            "500",
            "500",
            "500",
            "600"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥3840",
            "≥3840",
            "≥3840",
            "≥3840",
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Mild steel",
            "Mild steel",
            "Mild steel",
            "Mild steel",
            "Mild steel"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14 bit",
            "14 bit",
            "14 bit",
            "14 bit",
            "14 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "VitraView Indoor",
    "slug": "iris-indoor-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/iris-indoor-series.webp",
    "description": "Transparent indoor LED solutions for architecture and visually open interiors.",
    "features": [
      "Transparent indoor LED display",
      "pixel pitch expressed horizontally/vertically"
    ],
    "detail": {
      "models": [
        "Iris Indoor 2.6–5.2",
        "Iris Indoor 3.9–7.8"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "2.6–5.2",
            "3.9–7.8"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "1000 × 500 × 70",
            "1000 × 500 × 70"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "9",
            "9"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front / Rear",
            "Front / Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "800 / 4500",
            "800 / 4500"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "Not specified",
            "Not specified"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "350 / 500",
            "300 / 500"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥1920",
            "≥1920"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "IP30",
            "IP30"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit",
            "14–16 bit"
          ]
        }
      ],
      "note": "Standard and high-brightness options; brightness values are alternatives, not a continuous range."
    }
  },
  {
    "name": "Clearvue Series",
    "slug": "crystal-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/crystal-series.webp",
    "description": "Adhesive transparent LED display solutions for glass-integrated installations.",
    "features": [
      "Adhesive see-through LED",
      "glass mounting",
      "3 mm depth"
    ],
    "detail": {
      "models": [
        "Crystal 3.91",
        "Crystal 6.25"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "3.91",
            "6.25"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "250 × 1200 × 3",
            "250 × 1500 × 3"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "6",
            "6"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "3000",
            "4500"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "Not specified",
            "Not specified"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "1000",
            "1000"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "IP20",
            "IP20"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Mounting structure",
          "values": [
            "Glass",
            "Glass"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit",
            "14–16 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "Signova Series",
    "slug": "glowbox-series",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/glowbox-series.webp",
    "description": "Vertical LED display formats for freestanding digital communication.",
    "features": [
      "Vertical LED kiosk",
      "COB and SMD options"
    ],
    "detail": {
      "models": [
        "GlowBox 1.25",
        "GlowBox 1.5625",
        "GlowBox 1.8",
        "GlowBox 2.0",
        "GlowBox 2.5"
      ],
      "specs": [
        {
          "label": "LED type",
          "values": [
            "COB",
            "COB",
            "SMD",
            "SMD",
            "SMD"
          ]
        },
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "1.25",
            "1.5625",
            "1.8",
            "2.0",
            "2.5"
          ]
        },
        {
          "label": "Screen dimensions (W × H × D, mm)",
          "values": [
            "600 × 1687.5 × 27",
            "600 × 1687.5 × 27",
            "640 × 1920 × 63",
            "640 × 1920 × 63",
            "640 × 1920 × 63"
          ]
        },
        {
          "label": "Product dimensions (W × H × D, mm)",
          "values": [
            "604 × 1826 × 330",
            "604 × 1826 × 330",
            "646 × 2064 × 450",
            "646 × 2064 × 450",
            "646 × 2064 × 450"
          ]
        },
        {
          "label": "Resolution",
          "values": [
            "480 × 1350",
            "384 × 1080",
            "344 × 1032",
            "320 × 960",
            "256 × 768"
          ]
        },
        {
          "label": "Product weight (kg)",
          "values": [
            "Approx. 50",
            "Approx. 50",
            "Approx. 75",
            "Approx. 75",
            "Approx. 75"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front",
            "Front",
            "Front",
            "Front",
            "Front"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600 / 800",
            "600 / 800",
            "600",
            "600",
            "700"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "20000:1",
            "20000:1",
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W)",
          "values": [
            "330",
            "330",
            "400",
            "400",
            "400"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840",
            "3840",
            "≥1920"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP60 / Rear IP50",
            "Front IP60 / Rear IP50",
            "Front IP20 / Rear IP20",
            "Front IP20 / Rear IP20",
            "Front IP20 / Rear IP20"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Mild steel + Die-cast aluminum",
            "Mild steel + Die-cast aluminum",
            "Mild steel + Die-cast aluminum",
            "Mild steel + Die-cast aluminum",
            "Mild steel + Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "13–19 bit",
            "13–19 bit",
            "12–14 bit",
            "12–14 bit",
            "12–14 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "TerraStep LED",
    "slug": "floor-led-display",
    "groupId": "indoor",
    "imageUrl": "/images/products/indoor/floor-led-display.webp",
    "description": "LED floor systems for interactive and immersive walkable display installations.",
    "features": [
      "Floor-rated Terra variants",
      "GOB or PC mask"
    ],
    "detail": {
      "models": [
        "Terra 1.5",
        "Terra 1.8",
        "Terra 2.5",
        "Terra 2.9",
        "Terra 3.9"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "1.56",
            "1.86",
            "2.5",
            "2.9",
            "3.9"
          ]
        },
        {
          "label": "Surface type",
          "values": [
            "GOB",
            "GOB",
            "GOB",
            "PC mask",
            "PC mask"
          ]
        },
        {
          "label": "Cabinet dimensions (mm)",
          "values": [
            "500 × 500 × 78",
            "500 × 500 × 78",
            "500 × 500 × 78",
            "500 × 1000 × 78",
            "500 × 1000 × 78"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Mild steel",
            "Mild steel"
          ]
        },
        {
          "label": "Cabinet weight (kg/m²)",
          "values": [
            "44",
            "44",
            "44",
            "44",
            "44"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP54 / Rear IP43",
            "Front IP54 / Rear IP43",
            "Front IP54 / Rear IP43",
            "Front IP54 / Rear IP43",
            "Front IP54 / Rear IP43"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "600",
            "600",
            "600",
            "1500",
            "1500"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "6000:1",
            "6000:1",
            "6000:1",
            "2000:1",
            "2000:1"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Grayscale (bits)",
          "values": [
            "14",
            "14",
            "14",
            "14",
            "14"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "800",
            "800",
            "800",
            "800",
            "800"
          ]
        }
      ],
      "note": ""
    }
  },
  
  {
    "name": "TerraMax Series",
    "slug": "earth-series",
    "groupId": "outdoor",
    "imageUrl": "/images/products/outdoor/earth-series.webp",
    "description": "High-brightness outdoor displays with energy-saving system options.",
    "features": [
      "Energy-saving dual voltage",
      "front/back IP66"
    ],
    "detail": {
      "models": [
        "Earth 3.91",
        "Earth 5.71",
        "Earth 6.67",
        "Earth 8",
        "Earth 10"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "3.91",
            "5.71",
            "6.67",
            "8",
            "10"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "1000 × 1000 × 81",
            "960 × 960 × 105",
            "960 × 960 × 105 / 640 × 960 × 105",
            "960 × 960 × 105 / 640 × 960 × 105",
            "960 × 960 × 105 / 640 × 960 × 105"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "27",
            "26",
            "26",
            "26",
            "26"
          ]
        },
        {
          "label": "Technology",
          "values": [
            "Dual voltage",
            "Dual voltage",
            "Dual voltage",
            "Dual voltage",
            "Dual voltage"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front / Rear",
            "Front / Rear",
            "Front / Rear",
            "Front / Rear",
            "Front / Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "5000",
            "7500 / 9000",
            "7500 / 9000",
            "7500 / 9000",
            "7500 / 9000 / 15000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "550",
            "580",
            "580",
            "580",
            "580 / 650"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥3840",
            "≥3840",
            "≥3840",
            "≥3840",
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP66 / Rear IP66",
            "Front IP66 / Rear IP66",
            "Front IP66 / Rear IP66",
            "Front IP66 / Rear IP66",
            "Front IP66 / Rear IP66"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit",
            "14–16 bit",
            "14–16 bit",
            "14–16 bit",
            "14–16 bit"
          ]
        },
        {
          "label": "Certification",
          "values": [
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS",
            "CE-EMC, CE-LVD, FCC, BIS"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "TitanShield Pro",
    "slug": "aegis-pro-series",
    "groupId": "outdoor",
    "imageUrl": "/images/products/outdoor/aegis-pro-series.webp",
    "description": "Durable, weather-resistant outdoor LED solutions for high-impact visuals.",
    "features": [
      "Weather-resistant",
      "front/back IP65"
    ],
    "detail": {
      "models": [
        "Aegis Pro 4",
        "Aegis Pro 5"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "4",
            "5"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "960 × 960 × 99",
            "960 × 960 × 99"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "21",
            "21"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "6000",
            "6000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "140° × 140°",
            "140° × 140°"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "650",
            "625"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP65 / Rear IP65",
            "Front IP65 / Rear IP65"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit",
            "14–16 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "Veltrix Outdoor",
    "slug": "nyx-od-series",
    "groupId": "outdoor",
    "imageUrl": "/images/products/outdoor/nyx-od-series.webp",
    "description": "Modular outdoor LED systems with flexible pitch options.",
    "features": [
      "Outdoor modular display",
      "front IP65/back IP54"
    ],
    "detail": {
      "models": [
        "NYX OD 2.5",
        "NYX OD 3",
        "NYX OD 4",
        "NYX OD 5",
        "NYX OD 8",
        "NYX OD 10"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "2.5",
            "3",
            "4",
            "5",
            "8",
            "10"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "640 × 960 × 125",
            "960 × 960 × 115",
            "960 × 960 × 127",
            "960 × 960 × 127",
            "960 × 960 × 127",
            "960 × 960 × 127"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "30",
            "30",
            "25",
            "25",
            "25",
            "25"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "5000",
            "5000",
            "5000",
            "5000",
            "5000 / 6000",
            "5000 / 6000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "760",
            "650",
            "750",
            "750",
            "650",
            "650"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840",
            "3840",
            "1920",
            "1920"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "12–14 bit",
            "12–14 bit",
            "14 bit",
            "14 bit",
            "12–14 bit",
            "12–14 bit"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Rear",
            "Rear",
            "Front / Rear",
            "Front / Rear",
            "Front / Rear",
            "Front / Rear"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "VitraView Outdoor",
    "slug": "iris-outdoor-series",
    "groupId": "outdoor",
    "imageUrl": "/images/products/outdoor/iris-outdoor-series.webp",
    "description": "Transparent outdoor LED designs for partially see-through building installations.",
    "features": [
      "Transparent outdoor series",
      "asymmetric pixel pitch"
    ],
    "detail": {
      "models": [
        "Iris Outdoor 3.9–7.8",
        "Iris Outdoor 15.6–15.6",
        "Iris Outdoor 15.6–31.2"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "3.9–7.8",
            "15.6–15.6",
            "15.6–31.2"
          ]
        },
        {
          "label": "LED type",
          "values": [
            "SMD 1921",
            "DIP 3-in-1",
            "DIP 3-in-1"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "1000 × 500 × 85",
            "1000 × 1000 × 105",
            "1000 × 1000 × 105"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "15",
            "23",
            "19"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front / Rear",
            "Front / Rear",
            "Front / Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "5500",
            "8000",
            "8000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "110° × 110°",
            "110° × 110°",
            "110° × 110°"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "500",
            "450",
            "400"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥2880",
            "≥3840",
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP65 / Rear IP65",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "13–15 bit",
            "13–15 bit",
            "13–15 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "name": "VitraView Media Façade",
    "slug": "iris-media-facade",
    "groupId": "outdoor",
    "imageUrl": "/images/products/outdoor/iris-media-facade.webp",
    "description": "Architectural strip-type LED media systems intended for building façades.",
    "features": [
      "Outdoor façade LED strip system",
      "per-strip power ratings"
    ],
    "detail": {
      "models": [
        "Iris Media Façade 31.25–100"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "31.25–100"
          ]
        },
        {
          "label": "Strip dimensions (W × H × D, mm)",
          "values": [
            "1500 × 100 × 80"
          ]
        },
        {
          "label": "Weight (kg per strip)",
          "values": [
            "0.48"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front / Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "1500"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°"
          ]
        },
        {
          "label": "Maximum power (W per strip)",
          "values": [
            "80"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "1024"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP65 / Rear IP65"
          ]
        },
        {
          "label": "Strip material",
          "values": [
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit"
          ]
        }
      ],
      "note": ""
    }
  },
  
  {
    "name": "Eventrix Series",
    "slug": "arena-series",
    "groupId": "rental",
    "imageUrl": "/images/products/rental/arena-series.webp",
    "description": "Rental-focused modular LED displays for events, stages and productions.",
    "features": [
      "Indoor and outdoor rental variants",
      "different IP ratings"
    ],
    "detail": {
      "models": [
        "Arena 2.604 GOB",
        "Arena 2.97 Indoor",
        "Arena 2.97 Outdoor",
        "Arena 3.8",
        "Arena 3.8 Black Lamp",
        "Arena 3.91",
        "Arena 4.81"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "2.604",
            "2.97",
            "2.97",
            "3.8",
            "3.8",
            "3.91",
            "4.81"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H, mm)",
          "values": [
            "500 × 500 / 500 × 1000",
            "500 × 500 / 500 × 1000",
            "500 × 500 / 500 × 1000",
            "576 × 576",
            "576 × 576",
            "500 × 500 / 500 × 1000",
            "576 × 576"
          ]
        },
        {
          "label": "Cabinet resolution",
          "values": [
            "192 × 192 / 192 × 384",
            "168 × 168 / 168 × 336",
            "168 × 168 / 168 × 336",
            "152 × 152",
            "152 × 152",
            "128 × 128 / 128 × 256",
            "120 × 120"
          ]
        },
        {
          "label": "Weight (kg)",
          "values": [
            "6 / 12",
            "6 / 12",
            "7 / 13",
            "8.5",
            "8.5",
            "7 / 13",
            "8.5"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Rear",
            "Rear",
            "Rear",
            "Rear",
            "Rear",
            "Rear",
            "Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "700",
            "700–800",
            "4000",
            "4000",
            "2000",
            "4000",
            "4000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "140° × 140°",
            "140° × 140°",
            "140° × 140°",
            "140° × 140°",
            "140° × 140°",
            "140° × 140°",
            "140° × 140°"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "300",
            "350",
            "700",
            "700",
            "650",
            "700",
            "700"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "7680",
            "7680",
            "7680",
            "7680",
            "7680",
            "7680",
            "7680"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP30 / Rear IP30",
            "Front IP30 / Rear IP30",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        }
      ],
      "note": "Two 2.97 mm variants have substantially different brightness and ingress protection. Both are kept separately."
    }
  },
  {
    "name": "StageNova Series",
    "slug": "orion-series",
    "groupId": "rental",
    "imageUrl": "/images/products/rental/orion-series.webp",
    "description": "Outdoor rental LED solutions intended for repeated setup and dismantling.",
    "features": [
      "Outdoor-rated modular rental display",
      "back service"
    ],
    "detail": {
      "models": [
        "Orion 3.91–7.8"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "3.91–7.8"
          ]
        },
        {
          "label": "Cabinet size option A (W × H, mm)",
          "values": [
            "500 × 500"
          ]
        },
        {
          "label": "Cabinet resolution A",
          "values": [
            "128 × 64"
          ]
        },
        {
          "label": "Cabinet weight A (kg)",
          "values": [
            "4.5"
          ]
        },
        {
          "label": "Cabinet size option B (W × H, mm)",
          "values": [
            "1000 × 500"
          ]
        },
        {
          "label": "Cabinet resolution B",
          "values": [
            "256 × 64"
          ]
        },
        {
          "label": "Cabinet weight B (kg)",
          "values": [
            "8.5"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "4500"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "140° × 140°"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "600"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "≥3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "IP65"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum"
          ]
        }
      ],
      "note": ""
    }
  },
 
  {
    "name": "StadiumX",
    "slug": "atlas",
    "groupId": "sports",
    "imageUrl": "/images/products/sports/atlas.webp",
    "description": "Stadium perimeter LED displays with protective installation features.",
    "features": [
      "Stadium perimeter LED",
      "protective foam and adjustable installation"
    ],
    "detail": {
      "models": [
        "Atlas 5",
        "Atlas 6.67",
        "Atlas 8",
        "Atlas 10"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "5",
            "6.67",
            "8",
            "10"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "960 × 960 × 115",
            "960 × 960 × 115",
            "960 × 960 × 115",
            "960 × 960 × 115"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "33",
            "33",
            "33",
            "33"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Rear",
            "Rear",
            "Rear",
            "Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "5000",
            "5000",
            "5000",
            "5000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "5000:1",
            "5000:1",
            "5000:1",
            "5000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "750",
            "750",
            "750",
            "750"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "3840",
            "3840",
            "3840",
            "3840"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54",
            "Front IP65 / Rear IP54"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "12–14 bit",
            "12–14 bit",
            "12–14 bit",
            "12–14 bit"
          ]
        }
      ],
      "note": "Reference description also mentions 1920 Hz, while the specifications table states 3840 Hz."
    }
  },
  {
    "name": "StadiumX Pro",
    "slug": "atlas-pro",
    "groupId": "sports",
    "imageUrl": "/images/products/sports/atlas-pro.webp",
    "description": "Higher-brightness stadium perimeter displays with reinforced protective construction.",
    "features": [
      "Sports perimeter display",
      "IP66",
      "reinforced protection"
    ],
    "detail": {
      "models": [
        "Atlas Pro 6.67",
        "Atlas Pro 8",
        "Atlas Pro 10"
      ],
      "specs": [
        {
          "label": "Pixel pitch (mm)",
          "values": [
            "6.67",
            "8",
            "10"
          ]
        },
        {
          "label": "Cabinet dimensions (W × H × D, mm)",
          "values": [
            "960 × 960 × 102",
            "960 × 960 × 102",
            "960 × 960 × 102"
          ]
        },
        {
          "label": "Weight (kg/m²)",
          "values": [
            "34",
            "34",
            "34"
          ]
        },
        {
          "label": "Service access",
          "values": [
            "Front / Rear",
            "Front / Rear",
            "Front / Rear"
          ]
        },
        {
          "label": "Maximum brightness (nits)",
          "values": [
            "8000",
            "8000",
            "8000"
          ]
        },
        {
          "label": "Viewing angle (H × V)",
          "values": [
            "160° × 160°",
            "160° × 160°",
            "160° × 160°"
          ]
        },
        {
          "label": "Contrast ratio",
          "values": [
            "8000:1",
            "8000:1",
            "8000:1"
          ]
        },
        {
          "label": "Maximum power (W/m²)",
          "values": [
            "550",
            "550",
            "550"
          ]
        },
        {
          "label": "Refresh rate (Hz)",
          "values": [
            "7680",
            "7680",
            "7680"
          ]
        },
        {
          "label": "Ingress protection",
          "values": [
            "IP66",
            "IP66",
            "IP66"
          ]
        },
        {
          "label": "Cabinet material",
          "values": [
            "Die-cast aluminum",
            "Die-cast aluminum",
            "Die-cast aluminum"
          ]
        },
        {
          "label": "Data processing",
          "values": [
            "14–16 bit",
            "14–16 bit",
            "14–16 bit"
          ]
        }
      ],
      "note": ""
    }
  },

  {
    "name": "Pingo VisionCore 20",
    "slug": "s20-s20f",
    "groupId": "control",
    "imageUrl": "/images/products/control/s20-s20f.webp",
    "description": "High-capacity LED sending controllers with 4K video inputs and flexible output connections.",
    "features": [
      "Sender / controller",
      "HDMI 2.0 and DisplayPort 1.2 inputs",
      "Up to 8.85 million pixels family loading capacity",
      "Integrated audio output and device-status controls"
    ],
    "detail": {
      "models": [
        "S20",
        "S20F"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED sender",
            "LED sender"
          ]
        },
        {
          "label": "Video inputs (family)",
          "values": [
            "HDMI 2.0 and DisplayPort 1.2",
            "HDMI 2.0 and DisplayPort 1.2"
          ]
        },
        {
          "label": "Maximum input signal (family)",
          "values": [
            "4096 × 2160 @ 60 Hz per input",
            "4096 × 2160 @ 60 Hz per input"
          ]
        },
        {
          "label": "Ethernet outputs (family)",
          "values": [
            "20 ports",
            "20 ports"
          ]
        },
        {
          "label": "Maximum loading capacity (family)",
          "values": [
            "Up to 8.85 million pixels",
            "Up to 8.85 million pixels"
          ]
        },
        {
          "label": "Maximum width / height (family)",
          "values": [
            "Up to 8192 pixels",
            "Up to 8192 pixels"
          ]
        },
        {
          "label": "Signal switching",
          "values": [
            "Dual 4K input switching",
            "Dual 4K input switching"
          ]
        },
        {
          "label": "Audio",
          "values": [
            "HDMI/DP audio extraction and audio output",
            "HDMI/DP audio extraction and audio output"
          ]
        },
        {
          "label": "Device control",
          "values": [
            "USB and serial port",
            "USB and serial port"
          ]
        },
        {
          "label": "Local operation",
          "values": [
            "Status display, knob and buttons",
            "Status display, knob and buttons"
          ]
        },
        {
          "label": "3D mode",
          "values": [
            "Supported (one-click control)",
            "Supported (one-click control)"
          ]
        }
      ],
      "note": "The listed capabilities are published for this product family; variant-specific figures and physical/electrical parameters require confirmation from the individual model datasheet."
    }
  },
  {
    "name": "Pingo VisionCore Series",
    "slug": "s6f-s4-s2",
    "groupId": "control",
    "imageUrl": "/images/products/control/s6f-s4-s2.webp",
    "description": "Multi-function LED sending controllers for video signal distribution and scalable LED systems.",
    "features": [
      "Sender / controller",
      "HDMI/DVI video input and loop",
      "Ethernet/fiber transmission options",
      "USB and LAN management"
    ],
    "detail": {
      "models": [
        "S6F",
        "S4",
        "S2"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED sender",
            "LED sender",
            "LED sender"
          ]
        },
        {
          "label": "Input formats (family)",
          "values": [
            "HDMI / DVI input and loop-through",
            "HDMI / DVI input and loop-through",
            "HDMI / DVI input and loop-through"
          ]
        },
        {
          "label": "Family maximum loading",
          "values": [
            "Up to 2.3 million pixels",
            "Up to 2.3 million pixels",
            "Up to 2.3 million pixels"
          ]
        },
        {
          "label": "Family Ethernet outputs",
          "values": [
            "Up to 6 Gigabit Ethernet outputs",
            "Up to 6 Gigabit Ethernet outputs",
            "Up to 6 Gigabit Ethernet outputs"
          ]
        },
        {
          "label": "Output mode (family)",
          "values": [
            "Ethernet and optical fiber transmission",
            "Ethernet and optical fiber transmission",
            "Ethernet and optical fiber transmission"
          ]
        },
        {
          "label": "Control interfaces (family)",
          "values": [
            "USB and LAN",
            "USB and LAN",
            "USB and LAN"
          ]
        },
        {
          "label": "Model-specific load capacity",
          "values": [
            "Not confirmed for this variant",
            "Not confirmed for this variant",
            "Not confirmed for this variant"
          ]
        },
        {
          "label": "Model-specific port count",
          "values": [
            "Not confirmed for this variant",
            "Not confirmed for this variant",
            "Not confirmed for this variant"
          ]
        }
      ],
      "note": "The listed capabilities are published for this product family; variant-specific figures and physical/electrical parameters require confirmation from the individual model datasheet."
    }
  },
  {
    "name": "Pingo PixelSync 5G",
    "slug": "5g-series",
    "groupId": "control",
    "imageUrl": "/images/products/control/5g-series.webp",
    "description": "High-capacity LED receiving-card series with advanced grayscale and color processing.",
    "features": [
      "Receiving card",
      "12-bit video source",
      "Infi-bit grayscale extension",
      "Color calibration tools"
    ],
    "detail": {
      "models": [
        "5G Series"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED receiving card"
          ]
        },
        {
          "label": "Maximum load capacity (series)",
          "values": [
            "384 × 1024 pixels"
          ]
        },
        {
          "label": "Video source color depth",
          "values": [
            "12 bit"
          ]
        },
        {
          "label": "Grayscale",
          "values": [
            "Infi-bit grayscale extension and refinement"
          ]
        },
        {
          "label": "RGB gamma",
          "values": [
            "Independent red, green and blue gamma correction"
          ]
        },
        {
          "label": "Calibration",
          "values": [
            "Grayscale adjustment using colorimeter"
          ]
        },
        {
          "label": "Color gamut",
          "values": [
            "Gamut adjustment"
          ]
        }
      ],
      "note": "Series-level specifications only; identify the exact 5G card before quoting hardware dimensions or power requirements."
    }
  },
  {
    "name": "Pingo PixelCore Series",
    "slug": "k10-k8-k5-plus",
    "groupId": "control",
    "imageUrl": "/images/products/control/k10-k8-k5-plus.webp",
    "description": "LED receiving-card family supporting precise grayscale, color and image adjustments.",
    "features": [
      "Receiving card",
      "12-bit video-source support",
      "Independent RGB gamma adjustment",
      "HDR10/HLG support in family presentation"
    ],
    "detail": {
      "models": [
        "K10",
        "K8",
        "K5+"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED receiving card",
            "LED receiving card",
            "LED receiving card"
          ]
        },
        {
          "label": "Video source color depth (family)",
          "values": [
            "12 bit",
            "12 bit",
            "12 bit"
          ]
        },
        {
          "label": "Grayscale (family)",
          "values": [
            "Infi-bit extension and grayscale refinement",
            "Infi-bit extension and grayscale refinement",
            "Infi-bit extension and grayscale refinement"
          ]
        },
        {
          "label": "Color adjustment (family)",
          "values": [
            "Independent RGB gamma and gamut",
            "Independent RGB gamma and gamut",
            "Independent RGB gamma and gamut"
          ]
        },
        {
          "label": "HDR support (family)",
          "values": [
            "HDR10 / HLG",
            "HDR10 / HLG",
            "HDR10 / HLG"
          ]
        },
        {
          "label": "Image joining (family)",
          "values": [
            "Advanced soft-edge correction",
            "Advanced soft-edge correction",
            "Advanced soft-edge correction"
          ]
        },
        {
          "label": "Maximum pixel load by model",
          "values": [
            "Not confirmed for this variant",
            "Not confirmed for this variant",
            "Not confirmed for this variant"
          ]
        },
        {
          "label": "Port / interface count by model",
          "values": [
            "Not confirmed for this variant",
            "Not confirmed for this variant",
            "Not confirmed for this variant"
          ]
        }
      ],
      "note": "The listed capabilities are published for this product family; variant-specific figures and physical/electrical parameters require confirmation from the individual model datasheet."
    }
  },
  {
    "name": "Pingo PixelCore Pro",
    "slug": "e320pro",
    "groupId": "control",
    "imageUrl": "/images/products/control/e320pro.webp",
    "description": "High-density LED receiving card with sophisticated color-processing and synchronization features.",
    "features": [
      "Receiving card",
      "640 × 360 maximum pixel load",
      "40 parallel RGB groups",
      "HDR10 and low-latency processing",
      "Seam correction"
    ],
    "detail": {
      "models": [
        "E320Pro"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED receiving card"
          ]
        },
        {
          "label": "Maximum load capacity",
          "values": [
            "640 × 360 pixels"
          ]
        },
        {
          "label": "Parallel RGB data",
          "values": [
            "40 groups"
          ]
        },
        {
          "label": "Grayscale",
          "values": [
            "Infi-bit extension and grayscale refinement"
          ]
        },
        {
          "label": "Color",
          "values": [
            "Color gamut adjustment"
          ]
        },
        {
          "label": "HDR",
          "values": [
            "HDR10"
          ]
        },
        {
          "label": "Seam correction",
          "values": [
            "Independent correction coefficients"
          ]
        },
        {
          "label": "Latency",
          "values": [
            "Low-latency processing"
          ]
        },
        {
          "label": "Backup",
          "values": [
            "Parameters and calibration coefficients"
          ]
        },
        {
          "label": "Firmware",
          "values": [
            "Redundancy and firmware readback"
          ]
        }
      ],
      "note": "Confirmed from the E320Pro feature page. Consult its separate datasheet for voltage, dimensions and complete interface specifications."
    }
  },
  {
    "name": "Pingo PixelCore Lite",
    "slug": "e120-e80",
    "groupId": "control",
    "imageUrl": "/images/products/control/e120-e80.webp",
    "description": "LED receiving-card family for screen mapping, adjustment, calibration and fault tolerance.",
    "features": [
      "Receiving card",
      "Cabinet image rotation",
      "Brightness and chroma calibration",
      "Signal-loop and firmware redundancy"
    ],
    "detail": {
      "models": [
        "E120",
        "E80"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED receiving card",
            "LED receiving card"
          ]
        },
        {
          "label": "Maximum loading (family)",
          "values": [
            "Up to 512 × 512 pixels",
            "Up to 512 × 512 pixels"
          ]
        },
        {
          "label": "Parallel RGB data (family)",
          "values": [
            "Up to 32 groups",
            "Up to 32 groups"
          ]
        },
        {
          "label": "Color temperature",
          "values": [
            "Adjustable",
            "Adjustable"
          ]
        },
        {
          "label": "Cabinet identification",
          "values": [
            "Cabinet highlight and OSD",
            "Cabinet highlight and OSD"
          ]
        },
        {
          "label": "Brightness and chroma",
          "values": [
            "Pixel-level calibration",
            "Pixel-level calibration"
          ]
        },
        {
          "label": "Image rotation",
          "values": [
            "90° / 180° / 270°",
            "90° / 180° / 270°"
          ]
        },
        {
          "label": "Signal failover",
          "values": [
            "Loop redundancy",
            "Loop redundancy"
          ]
        },
        {
          "label": "Firmware",
          "values": [
            "Redundancy and readback",
            "Redundancy and readback"
          ]
        },
        {
          "label": "Irregular modules",
          "values": [
            "Modular design support",
            "Modular design support"
          ]
        },
        {
          "label": "Model-specific capacity",
          "values": [
            "Not confirmed for this variant",
            "Not confirmed for this variant"
          ]
        }
      ],
      "note": "The listed capabilities are published for this product family; variant-specific figures and physical/electrical parameters require confirmation from the individual model datasheet."
    }
  },
  {
    "name": "Pingo PixelSync Series",
    "slug": "5a-75e-5a-75b",
    "groupId": "control",
    "imageUrl": "/images/products/control/5a-75e-5a-75b.webp",
    "description": "LED receiving-card solutions for cabinet control and display calibration.",
    "features": [
      "Receiving card",
      "Image rotation",
      "Color-temperature adjustment",
      "Calibration and loop redundancy"
    ],
    "detail": {
      "models": [
        "5A-75E",
        "5A-75B"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED receiving card",
            "LED receiving card"
          ]
        },
        {
          "label": "Maximum loading (family)",
          "values": [
            "Up to 512 × 512 pixels",
            "Up to 512 × 512 pixels"
          ]
        },
        {
          "label": "Parallel RGB data (family)",
          "values": [
            "Up to 32 groups",
            "Up to 32 groups"
          ]
        },
        {
          "label": "Color temperature",
          "values": [
            "Adjustable",
            "Adjustable"
          ]
        },
        {
          "label": "Cabinet OSD",
          "values": [
            "Supported",
            "Supported"
          ]
        },
        {
          "label": "Calibration",
          "values": [
            "Brightness and chroma",
            "Brightness and chroma"
          ]
        },
        {
          "label": "Image rotation",
          "values": [
            "90° / 180° / 270°",
            "90° / 180° / 270°"
          ]
        },
        {
          "label": "Redundancy",
          "values": [
            "Signal loop and firmware readback",
            "Signal loop and firmware readback"
          ]
        },
        {
          "label": "Irregular modules",
          "values": [
            "Modular design support",
            "Modular design support"
          ]
        },
        {
          "label": "Model-specific capacity",
          "values": [
            "Not confirmed for this variant",
            "Not confirmed for this variant"
          ]
        }
      ],
      "note": "The listed capabilities are published for this product family; variant-specific figures and physical/electrical parameters require confirmation from the individual model datasheet."
    }
  },
  {
    "name": "Pingo FiberLink",
    "slug": "optical-fiber-transceiver",
    "groupId": "control",
    "imageUrl": "/images/products/control/optical-fiber-transceiver.webp",
    "description": "Fiber-optic transmission accessories for LED control systems and reliable long-distance signal distribution.",
    "features": [
      "Optical transmission accessory",
      "Two selectable modes",
      "Real-time connection-status display",
      "1RU rack installation"
    ],
    "detail": {
      "models": [
        "Optical Fiber Transceiver"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "Optical fiber transceiver"
          ]
        },
        {
          "label": "Mounting",
          "values": [
            "1RU standard rack-mountable"
          ]
        },
        {
          "label": "Operation modes",
          "values": [
            "Two selectable modes"
          ]
        },
        {
          "label": "Connection monitoring",
          "values": [
            "Real-time connection-status display"
          ]
        },
        {
          "label": "Connector",
          "values": [
            "Upgraded transmission connector"
          ]
        },
        {
          "label": "Optical standard / distance",
          "values": [
            "Not specified on feature page"
          ]
        }
      ],
      "note": "Optical bandwidth, fiber type and transmission distance depend on the exact transceiver model; check the corresponding datasheet."
    }
  },
  {
    "name": "Pingo SmartMonitor",
    "slug": "monitoring-accessories",
    "groupId": "control",
    "imageUrl": "/images/products/control/monitoring-accessories.webp",
    "description": "Monitoring and power-management accessories for LED displays and connected equipment.",
    "features": [
      "Remote relay control",
      "Brightness adjustment with sensor",
      "Ambient condition monitoring",
      "Time-based management"
    ],
    "detail": {
      "models": [
        "Monitoring Accessories"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED monitoring accessory"
          ]
        },
        {
          "label": "Relay power control",
          "values": [
            "8 relays"
          ]
        },
        {
          "label": "Brightness automation",
          "values": [
            "Supported with brightness sensor (iM9)"
          ]
        },
        {
          "label": "Temperature / humidity",
          "values": [
            "Monitoring with external sensors"
          ]
        },
        {
          "label": "Cooling-system control",
          "values": [
            "On/off control in response to temperature and humidity"
          ]
        },
        {
          "label": "Environment sensors",
          "values": [
            "Noise, air quality, temperature and humidity"
          ]
        },
        {
          "label": "Scheduled operation",
          "values": [
            "Timing control for brightness and power"
          ]
        }
      ],
      "note": "These are family-level features; sensors and relay units may be separate accessory components."
    }
  },
  {
    "name": "Pingo ScreenConfig",
    "slug": "ledsetting",
    "groupId": "control",
    "imageUrl": "/images/products/control/ledsetting.webp",
    "description": "Display setup and calibration software for LED control and receiver configuration.",
    "features": [
      "LED control software",
      "500+ chip library (manufacturer claim)",
      "Cabinet setup and receiver mapping",
      "Full-screen calibration",
      "Windows and Kylin support"
    ],
    "detail": {
      "models": [
        "LEDSetting"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED control software"
          ]
        },
        {
          "label": "Chip library",
          "values": [
            "500+ compatible chips (manufacturer claim)"
          ]
        },
        {
          "label": "Display support",
          "values": [
            "Thousands of screen configurations (manufacturer claim)"
          ]
        },
        {
          "label": "Device status",
          "values": [
            "Device-status visualization"
          ]
        },
        {
          "label": "Cabinet configuration",
          "values": [
            "Guided cabinet and module setup"
          ]
        },
        {
          "label": "Receiving card management",
          "values": [
            "Receiver sorting and bulk setup"
          ]
        },
        {
          "label": "Calibration",
          "values": [
            "Full-screen calibration; multiple senders and coefficients"
          ]
        },
        {
          "label": "Operating systems",
          "values": [
            "Windows and Kylin"
          ]
        },
        {
          "label": "License / version",
          "values": [
            "Check the current software download"
          ]
        }
      ],
      "note": "This is software: electrical and cabinet hardware specifications are not applicable."
    }
  },
  {
    "name": "Pingo Firmware Manager",
    "slug": "ledupgrade",
    "groupId": "control",
    "imageUrl": "/images/products/control/ledupgrade.webp",
    "description": "Firmware management utility for compatible Colorlight LED-control hardware.",
    "features": [
      "Firmware update utility",
      "Bundled firmware options",
      "Automatic firmware matching",
      "Batch upgrades"
    ],
    "detail": {
      "models": [
        "LEDUpgrade"
      ],
      "specs": [
        {
          "label": "Product type",
          "values": [
            "LED firmware upgrade software"
          ]
        },
        {
          "label": "Firmware availability",
          "values": [
            "Built-in firmware packages"
          ]
        },
        {
          "label": "Firmware matching",
          "values": [
            "Automatic selection of matching firmware"
          ]
        },
        {
          "label": "Upgrade operation",
          "values": [
            "Batch device upgrades"
          ]
        },
        {
          "label": "Supported versions / OS",
          "values": [
            "Check the current official software release notes"
          ]
        }
      ],
      "note": "Software functionality is verified; supported devices can change by release, so review release notes before use."
    }
  }
];

const GROUPS = [
  { id: "control", title: "LED Control Systems", description: "Senders, receiving cards, accessories and control software" },
  {
    "id": "fine-pitch",
    "title": "Fine Pitch Displays",
    "description": "Fine-resolution LED displays for close viewing"
  },
  {
    "id": "indoor",
    "title": "Indoor LED Video Walls",
    "description": "LED technologies for immersive indoor spaces"
  },
  {
    "id": "outdoor",
    "title": "Outdoor LED Video Walls",
    "description": "High-visibility displays and architectural systems"
  },
  {
    "id": "rental",
    "title": "Rental Displays",
    "description": "Event-ready and touring LED configurations"
  },
  {
    "id": "sports",
    "title": "Sports Series",
    "description": "Display systems for stadium and sports venues"
  }
] as const;

function Icon({ kind, className = "" }: { kind: "arrow" | "back" | "check"; className?: string }) {
  if (kind === "check") return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
  if (kind === "back") return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h12"/></svg>;
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>;
}
function Picture({ product, className = "" }: { product: Product; className?: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [product.imageUrl]);
  return <div className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#F8FAFC_0%,#EEF3FA_100%)] ${className}`}>
    {failed ? <span className="px-4 text-center text-sm text-[#8193A5]">Product image coming soon</span> :
      <img src={product.imageUrl} onError={() => setFailed(true)} alt={`${product.name} LED display`} loading="lazy" decoding="async" className="h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none sm:p-10" />}
  </div>;
}
function productMetric(detail: ProductDetail, index: number, key: string) {
  const row = detail.specs.find(r => r.label.toLowerCase().includes(key));
  return row?.values[index] ?? "Not listed";
}
function ProductCard({product, index, onOpen}: {product: Product; index: number; onOpen: () => void}) {
  return <button type="button" onClick={onOpen} className="group min-w-0 overflow-hidden border border-[#E4EBF2] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#AEC8F7] hover:shadow-[0_18px_55px_rgba(16,44,76,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0]" aria-label={`View technical specifications for ${product.name}`}>
    <div className="relative"><Picture product={product} className="aspect-[5/4] w-full"/><span className="absolute left-4 top-4 text-xs font-medium tracking-wide text-[#8394A5]">{String(index+1).padStart(2,"0")}</span></div>
    <div className="flex min-h-[91px] items-center justify-between gap-3 border-t border-[#E9EFF5] px-5 py-5 sm:px-6">
      <div><h3 className="text-base font-semibold tracking-[-0.02em] text-[#142B48] sm:text-lg">{product.name}</h3><p className="mt-1 text-xs text-[#75879A]">View details &amp; specifications</p></div>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D8E5F4] text-[#0047C0] group-hover:bg-[#0047C0] group-hover:text-white"><Icon kind="arrow" className="h-[18px] w-[18px]"/></span>
    </div>
  </button>;
}
function SpecsTable({product, variant}: {product: Product; variant: number}) {
  const rows = product.detail.specs;
  return <div className="overflow-hidden border border-[#DFE7F1] bg-white shadow-[0_15px_55px_rgba(17,46,74,0.045)]">
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] bg-[#122B48] px-3 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.13em] text-white sm:px-6 sm:text-xs">
      <span className="border-r border-white/20 pr-2">Parameter</span><span className="pl-2">Specification</span>
    </div>
    {rows.map((row,i) => <div key={row.label} className={`grid min-h-[59px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch border-t border-[#E6EDF5] text-center ${i%2 ? "bg-[#F8FAFD]" : "bg-white"}`}>
      <div className="flex items-center justify-center border-r border-[#E5ECF3] px-3 py-3 text-[13px] font-medium leading-relaxed text-[#5E7185] sm:px-6 sm:text-sm">{row.label}</div>
      <div className="flex items-center justify-center break-words px-3 py-3 text-[13px] font-semibold leading-relaxed text-[#142B48] sm:px-6 sm:text-sm">{row.values[variant] ?? "Not specified"}</div>
    </div>)}
  </div>;
}
function ProductPage({product,onBack}: {product: Product;onBack:()=>void}) {
  const [variant,setVariant] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(()=>setVariant(0),[product.slug]);
  const d=product.detail;
  const group=GROUPS.find(g=>g.id===product.groupId);
  const stats = product.groupId === "control"
    ? d.specs.slice(0, 4).map((row) => ({ label: row.label, value: row.values[variant] ?? "Not specified" }))
    : [
        {label:"Pixel pitch",value:productMetric(d,variant,"pixel pitch")},
        {label:"Brightness",value:productMetric(d,variant,"brightness")},
        {label:"Refresh rate",value:productMetric(d,variant,"refresh rate")},
        {label:"Service access",value:productMetric(d,variant,"service access") !== "Not listed" ? productMetric(d,variant,"service access") : productMetric(d,variant,"maintenance")}
      ];
  return <motion.div initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:12}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.35}}>
    <section className="bg-[#F7FAFD] px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14"><div className="mx-auto max-w-[1320px]">
      <button type="button" onClick={onBack} className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#0047C0] hover:text-[#003799] focus-visible:outline-2 focus-visible:outline-[#0047C0]"><Icon kind="back" className="h-4 w-4"/> Back to products</button>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Picture product={product} className="aspect-[5/4] w-full border border-[#E6EDF3]"/>
        <div className="lg:pl-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">{group?.title} / Product series</p>
          <h1 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#142B48]">{product.name}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#62768A]">{product.description}</p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-[#E2EAF2] bg-[#E2EAF2]">
            {stats.map(s=><div className="min-h-[94px] bg-white px-4 py-5 sm:px-6" key={s.label}><p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8293A5]">{s.label}</p><p className="mt-2 text-sm font-semibold leading-6 text-[#142B48] sm:text-base">{s.value}</p></div>)}
          </div>
          <a href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 bg-[#0047C0] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#003799]">Enquire about this display <Icon kind="arrow" className="h-4 w-4"/></a>
        </div>
      </div>
    </div></section>
    <section className="px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20"><div className="mx-auto max-w-[1140px]">
      <div className="mx-auto max-w-[770px] text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">Product information</p><h2 className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">Built for its environment.</h2><p className="mt-4 text-base leading-8 text-[#6C7D8E]">Explore the defining characteristics and available configurations of {product.name}.</p></div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{product.features.map((feature)=><div className="flex min-h-[80px] items-center gap-3 border border-[#E4EBF2] bg-[#FAFCFE] px-5 py-5" key={feature}><span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#E8F0FF] text-[#0047C0]"><Icon kind="check" className="h-4 w-4"/></span><p className="text-sm font-medium leading-6 text-[#233F59]">{feature}</p></div>)}</div>
    </div></section>
    <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32"><div className="mx-auto max-w-[1040px]">
      <div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0047C0]">Detailed product data</p><h2 className="mt-4 text-[clamp(2.1rem,4vw,3.6rem)] font-semibold tracking-[-0.055em] text-[#142B48]">Technical Specifications</h2><p className="mx-auto mt-3 max-w-[680px] text-sm leading-7 text-[#718496]">Select a model to view its individual technical parameters. All values remain aligned and centered for easy comparison.</p></div>
      <div className="mx-auto mb-8 mt-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Select product model">{d.models.map((model,i)=><button key={`${model}-${i}`} type="button" aria-pressed={variant===i} onClick={()=>setVariant(i)} className={`border px-4 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] sm:text-sm ${variant===i ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DCE5EF] bg-white text-[#435D76] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{model}</button>)}</div>
      <div className="mb-5 border-l-[3px] border-[#0047C0] bg-[#F5F8FD] px-5 py-4 text-center"><span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74869A]">Selected model</span><p className="mt-1 text-lg font-semibold text-[#142B48]">{d.models[variant]}</p></div>
      <SpecsTable product={product} variant={variant}/>
      {d.note && <p className="mt-5 border-l-2 border-[#E9B44C] bg-[#FFFAED] px-4 py-3 text-sm leading-6 text-[#715522]">{d.note}</p>}
      <p className="mx-auto mt-6 max-w-[850px] text-center text-xs leading-6 text-[#8393A3]">Published specifications and features are provided for technical comparison. Family-level values are not necessarily identical for every model. Confirm hardware revision, configuration and availability using the relevant manufacturer datasheet before quotation.</p>
      <div className="mt-10 text-center"><a href="/contact" className="inline-flex min-h-12 items-center gap-4 bg-[#0047C0] px-8 text-sm font-semibold text-white hover:bg-[#003799]">Discuss your requirements <Icon kind="arrow" className="h-4 w-4"/></a></div>
    </div></section>
  </motion.div>;
}
export default function Products() {
 const reducedMotion=useReducedMotion();
 const [activeGroup,setActiveGroup]=useState<string>("fine-pitch");
 const [openedSlug,setOpenedSlug]=useState<string | null>(null);
 const selectedGroup=GROUPS.find(g=>g.id===activeGroup)??GROUPS[0];
 const filtered=useMemo(()=>PRODUCTS.filter(p=>p.groupId===selectedGroup.id),[selectedGroup.id]);
 const selectedProduct=PRODUCTS.find(p=>p.slug===openedSlug);
 const open=(slug:string)=>{setOpenedSlug(slug);window.scrollTo({top:0,behavior:"auto"});};
 const back=()=>{setOpenedSlug(null);window.scrollTo({top:0,behavior:"auto"});};
 return <main className="min-h-screen bg-white">
  {selectedProduct ? <ProductPage key={selectedProduct.slug} product={selectedProduct} onBack={back}/> : <>
   <section className="relative overflow-hidden bg-[#F6F9FB] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28"><div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full bg-[#DCE7FF]/60 blur-[110px]"/><div className="relative mx-auto max-w-[1440px]"><motion.p initial={{opacity:reducedMotion?1:0}} animate={{opacity:1}} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Pingo Screens / Collection</motion.p><motion.h1 initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:18}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.6}} className="mt-5 max-w-[950px] text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#142B48]">The Art of <span className="text-[#0047C0]">Display.</span></motion.h1><p className="mt-6 max-w-[680px] text-base leading-8 text-[#637789]">Explore LED displays, control systems, receiving cards, accessories and software for complete screen solutions.</p></div></section>
   <section className="px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16"><div className="mx-auto max-w-[1440px]"><div className="mb-12 flex flex-wrap gap-2.5 sm:gap-3" role="group" aria-label="LED product categories">{GROUPS.map(g=><button type="button" key={g.id} aria-pressed={activeGroup===g.id} onClick={()=>setActiveGroup(g.id)} className={`border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0047C0] sm:px-5 ${activeGroup===g.id ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DAE5EC] bg-white text-[#344F65] hover:border-[#0047C0] hover:text-[#0047C0]"}`}>{g.title}</button>)}</div>
   <AnimatePresence mode="wait" initial={false}><motion.div key={selectedGroup.id} initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:10}} animate={{opacity:1,y:0}} exit={{opacity:reducedMotion?1:0}} transition={{duration:reducedMotion?0:.3}}><div className="mb-9 flex items-end justify-between gap-5 border-b border-[#E6EDF2] pb-8"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">LED Video Walls / Collection</p><h2 className="text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">{selectedGroup.title}</h2><p className="mt-4 max-w-[650px] text-base leading-7 text-[#6B7D8E]">{selectedGroup.description}</p></div><span className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[#8B9CAB] sm:block">{String(filtered.length).padStart(2,"0")} Series</span></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((p,i)=><ProductCard key={p.slug} product={p} index={i} onOpen={()=>open(p.slug)}/>)}</div></motion.div></AnimatePresence></div></section>
  </>}
 </main>;
}
