// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type ApplicationCategory = {
//   id: string;
//   number: string;
//   title: string;
//   description: string;
//   images: string[];
// };

// // Preserved all 18 categories and image paths from your previous file.
// // Add photographs to public/images/applications/<category>/1.webp etc.
// const categories: ApplicationCategory[] = [
//   {
//     "id": "dooh",
//     "number": "01",
//     "title": "Digital Out Of Home - DOOH",
//     "description": "Large-format digital display solutions designed for outdoor brand visibility, roadside advertising and public communication.",
//     "images": [
//       "/images/applications/dooh/1.webp",
//       "/images/applications/dooh/2.webp",
//       "/images/applications/dooh/3.webp",
//       "/images/applications/dooh/4.webp",
//       "/images/applications/dooh/5.webp"
//     ]
//   },
//   {
//     "id": "boardroom",
//     "number": "02",
//     "title": "Boardroom",
//     "description": "Premium display environments for meetings, presentations, executive discussions and modern collaboration spaces.",
//     "images": [
//       "/images/applications/boardroom/1.webp",
//       "/images/applications/boardroom/2.webp",
//       "/images/applications/boardroom/3.webp",
//       "/images/applications/boardroom/4.webp",
//       "/images/applications/boardroom/5.webp"
//     ]
//   },
//   {
//     "id": "bfsi",
//     "number": "03",
//     "title": "BFSI",
//     "description": "Reliable display solutions for banking, financial and insurance spaces to improve customer communication and branding.",
//     "images": [
//       "/images/applications/bfsi/1.webp",
//       "/images/applications/bfsi/2.webp",
//       "/images/applications/bfsi/3.webp",
//       "/images/applications/bfsi/4.webp",
//       "/images/applications/bfsi/5.webp"
//     ]
//   },
//   {
//     "id": "retail-stores",
//     "number": "04",
//     "title": "Retail Stores",
//     "description": "Display experiences for retail stores, showrooms and shopping environments to attract attention and boost engagement.",
//     "images": [
//       "/images/applications/retail-stores/1.webp",
//       "/images/applications/retail-stores/2.webp",
//       "/images/applications/retail-stores/3.webp",
//       "/images/applications/retail-stores/4.webp",
//       "/images/applications/retail-stores/5.webp"
//     ]
//   },
//   {
//     "id": "command-control-center",
//     "number": "05",
//     "title": "Command & Control Center",
//     "description": "Clear and high-performance display systems for monitoring, operations and real-time control environments.",
//     "images": [
//       "/images/applications/command-control-center/1.webp",
//       "/images/applications/command-control-center/2.webp",
//       "/images/applications/command-control-center/3.webp",
//       "/images/applications/command-control-center/4.webp",
//       "/images/applications/command-control-center/5.webp"
//     ]
//   },
//   {
//     "id": "government",
//     "number": "06",
//     "title": "Government",
//     "description": "Professional visual display solutions for administrative, civic and public communication applications.",
//     "images": [
//       "/images/applications/government/1.webp",
//       "/images/applications/government/2.webp",
//       "/images/applications/government/3.webp",
//       "/images/applications/government/4.webp",
//       "/images/applications/government/5.webp"
//     ]
//   },
//   {
//     "id": "real-estate",
//     "number": "07",
//     "title": "Real Estate",
//     "description": "Attractive display systems for project galleries, site offices, sales centers and high-impact real estate marketing.",
//     "images": [
//       "/images/applications/real-estate/1.webp",
//       "/images/applications/real-estate/2.webp",
//       "/images/applications/real-estate/3.webp",
//       "/images/applications/real-estate/4.webp",
//       "/images/applications/real-estate/5.webp"
//     ]
//   },
//   {
//     "id": "transportation",
//     "number": "08",
//     "title": "Transportation",
//     "description": "Dynamic displays for transport hubs, stations and travel environments to improve communication and wayfinding.",
//     "images": [
//       "/images/applications/transportation/1.webp",
//       "/images/applications/transportation/2.webp",
//       "/images/applications/transportation/3.webp",
//       "/images/applications/transportation/4.webp",
//       "/images/applications/transportation/5.webp"
//     ]
//   },
//   {
//     "id": "auditorium-venues",
//     "number": "09",
//     "title": "Auditorium / Venues",
//     "description": "Immersive visual installations for auditoriums, event venues and large presentation spaces.",
//     "images": [
//       "/images/applications/auditorium-venues/1.webp",
//       "/images/applications/auditorium-venues/2.webp",
//       "/images/applications/auditorium-venues/3.webp",
//       "/images/applications/auditorium-venues/4.webp",
//       "/images/applications/auditorium-venues/5.webp"
//     ]
//   },
//   {
//     "id": "education",
//     "number": "10",
//     "title": "Education",
//     "description": "Interactive and informative display solutions for schools, colleges, training centers and academic spaces.",
//     "images": [
//       "/images/applications/education/1.webp",
//       "/images/applications/education/2.webp",
//       "/images/applications/education/3.webp",
//       "/images/applications/education/4.webp",
//       "/images/applications/education/5.webp"
//     ]
//   },
//   {
//     "id": "news-room",
//     "number": "11",
//     "title": "News Room",
//     "description": "Broadcast-ready visual solutions for newsroom sets, live content environments and media production spaces.",
//     "images": [
//       "/images/applications/news-room/1.webp",
//       "/images/applications/news-room/2.webp",
//       "/images/applications/news-room/3.webp",
//       "/images/applications/news-room/4.webp",
//       "/images/applications/news-room/5.webp"
//     ]
//   },
//   {
//     "id": "corporate",
//     "number": "12",
//     "title": "Corporate",
//     "description": "Elegant display solutions for receptions, office lobbies, conference spaces and corporate interiors.",
//     "images": [
//       "/images/applications/corporate/1.webp",
//       "/images/applications/corporate/2.webp",
//       "/images/applications/corporate/3.webp",
//       "/images/applications/corporate/4.webp",
//       "/images/applications/corporate/5.webp"
//     ]
//   },
//   {
//     "id": "entertainment",
//     "number": "13",
//     "title": "Entertainment",
//     "description": "High-impact LED experiences for entertainment venues, performance zones and audience engagement.",
//     "images": [
//       "/images/applications/entertainment/1.webp",
//       "/images/applications/entertainment/2.webp",
//       "/images/applications/entertainment/3.webp",
//       "/images/applications/entertainment/4.webp",
//       "/images/applications/entertainment/5.webp"
//     ]
//   },
//   {
//     "id": "sports",
//     "number": "14",
//     "title": "Sports",
//     "description": "Dynamic screens for stadiums, arenas and sports venues to enhance audience experience and information delivery.",
//     "images": [
//       "/images/applications/sports/1.webp",
//       "/images/applications/sports/2.webp",
//       "/images/applications/sports/3.webp",
//       "/images/applications/sports/4.webp",
//       "/images/applications/sports/5.webp"
//     ]
//   },
//   {
//     "id": "religious-places",
//     "number": "15",
//     "title": "Religious Places",
//     "description": "Clear and respectful display solutions for spiritual spaces, worship halls and community gathering areas.",
//     "images": [
//       "/images/applications/religious-places/1.webp",
//       "/images/applications/religious-places/2.webp",
//       "/images/applications/religious-places/3.webp",
//       "/images/applications/religious-places/4.webp",
//       "/images/applications/religious-places/5.webp"
//     ]
//   },
//   {
//     "id": "studio-broadcast",
//     "number": "16",
//     "title": "Studio / Broadcast",
//     "description": "Professional LED applications for studios, digital content stages and broadcast production spaces.",
//     "images": [
//       "/images/applications/studio-broadcast/1.webp",
//       "/images/applications/studio-broadcast/2.webp",
//       "/images/applications/studio-broadcast/3.webp",
//       "/images/applications/studio-broadcast/4.webp",
//       "/images/applications/studio-broadcast/5.webp"
//     ]
//   },
//   {
//     "id": "rental",
//     "number": "17",
//     "title": "Rental",
//     "description": "Flexible rental display solutions for events, temporary installations and touring requirements.",
//     "images": [
//       "/images/applications/rental/1.webp",
//       "/images/applications/rental/2.webp",
//       "/images/applications/rental/3.webp",
//       "/images/applications/rental/4.webp",
//       "/images/applications/rental/5.webp"
//     ]
//   },
//   {
//     "id": "home",
//     "number": "18",
//     "title": "Home",
//     "description": "Premium home visual experiences designed for personal entertainment, media rooms and luxury interiors.",
//     "images": [
//       "/images/applications/home/1.webp",
//       "/images/applications/home/2.webp",
//       "/images/applications/home/3.webp",
//       "/images/applications/home/4.webp",
//       "/images/applications/home/5.webp"
//     ]
//   }
// ];

// type IconProps = { className?: string };
// function CloseIcon({ className = "" }: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}><path d="M5 5l14 14M19 5 5 19" /></svg>;
// }
// function Chevron({ right = false, className = "" }: IconProps & { right?: boolean }) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{right ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}</svg>;
// }
// function ExpandIcon({ className = "" }: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true" className={className}><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>;
// }

// function GalleryTile({ src, title, index, onOpen }: { src: string; title: string; index: number; onOpen: () => void }) {
//   const [failed, setFailed] = useState(false);
//   const shapes = [
//     "lg:col-span-7 lg:aspect-[1.65]",
//     "lg:col-span-5 lg:aspect-[1.18]",
//     "lg:col-span-4 lg:aspect-[1.15]",
//     "lg:col-span-4 lg:aspect-[1.15]",
//     "lg:col-span-4 lg:aspect-[1.15]",
//     "lg:col-span-12 lg:aspect-[2.3]",
//   ];
//   return (
//     <div className={`relative col-span-1 aspect-[4/3] min-w-0 overflow-hidden bg-[#EEF3F7] sm:aspect-[5/4] ${shapes[index % shapes.length]}`}>
//       {failed ? (
//         <div className="flex h-full flex-col items-center justify-center gap-3 border border-[#E3EAF0] px-5 text-center">
//           <span className="text-xs font-semibold tracking-[0.18em] text-[#7D95A8]">PINGO SCREENS</span>
//           <span className="text-sm text-[#8798A5]">Image coming soon</span>
//         </div>
//       ) : (
//         <button type="button" onClick={onOpen} aria-label={`Open ${title} image ${index + 1}`} className="group relative block h-full w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#1266A3]">
//           <img src={src} alt={`${title} LED installation ${index + 1}`} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.045] motion-reduce:transition-none" />
//           <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061827]/35 via-transparent to-transparent opacity-75" />
//           <span className="absolute bottom-5 left-5 text-xs tracking-[0.18em] text-white/90">{String(index + 1).padStart(2, "0")}</span>
//           <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/65 bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"><ExpandIcon className="h-5 w-5" /></span>
//         </button>
//       )}
//     </div>
//   );
// }

// export default function Applications() {
//   const reduceMotion = useReducedMotion();
//   const [activeId, setActiveId] = useState(categories[0].id);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const closeRef = useRef<HTMLButtonElement>(null);
//   const active = categories.find((item) => item.id === activeId) ?? categories[0];
//   const images = active.images;

//   useEffect(() => {
//     if (openIndex === null) return;
//     const previous = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     closeRef.current?.focus();
//     const handleKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setOpenIndex(null);
//       if (event.key === "ArrowRight") setOpenIndex((index) => index === null ? null : (index + 1) % images.length);
//       if (event.key === "ArrowLeft") setOpenIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
//       if (event.key === "Tab") {
//         const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-lightbox-control]"));
//         const position = buttons.indexOf(document.activeElement as HTMLButtonElement);
//         if (event.shiftKey && position === 0) { event.preventDefault(); buttons[buttons.length - 1]?.focus(); }
//         if (!event.shiftKey && position === buttons.length - 1) { event.preventDefault(); buttons[0]?.focus(); }
//       }
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", handleKey); };
//   }, [openIndex, images.length]);

//   const choose = (id: string) => { if (id !== activeId) { setOpenIndex(null); setActiveId(id); } };
//   const changeImage = (step: number) => setOpenIndex((value) => value === null ? null : (value + step + images.length) % images.length);

//   return (
//     <main className="min-h-screen w-full bg-white">
//       <section className="bg-[#F6F9FC] px-5 pb-16 pt-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
//         <motion.div initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="mx-auto max-w-[1000px] text-center">
//           <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1266A3]">PINGO SCREENS / APPLICATIONS</p>
//           <h1 className="mt-5 text-[clamp(2.75rem,6vw,6rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-[#142B48]">Designed for <span className="text-[#1266A3]">Every Space.</span></h1>
//           <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-[#607588] sm:text-lg">A visual collection of LED displays in the environments that inspire them.</p>
//         </motion.div>
//       </section>

//       <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-14 sm:px-8 lg:px-12 lg:pt-20">
//         <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
//           <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1266A3]">Browse our galleries</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#142B48] sm:text-4xl">Applications</h2></div>
//           <p className="text-xs tracking-wide text-[#8193A1]">18 ENVIRONMENTS</p>
//         </div>
//         <nav aria-label="Choose an application" className="flex flex-wrap gap-2 border-b border-[#E3EAF0] pb-9 sm:gap-3">
//           {categories.map((cat) => <button key={cat.id} type="button" aria-pressed={activeId === cat.id} onClick={() => choose(cat.id)} className={`border px-4 py-2.5 text-[13px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1266A3] ${activeId === cat.id ? "border-[#142B48] bg-[#142B48] text-white" : "border-[#DFE7EE] bg-white text-[#29445A] hover:border-[#1266A3] hover:text-[#1266A3]"}`}>{cat.title}</button>)}
//         </nav>

//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div key={activeId} initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
//             <div className="flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-end sm:py-12">
//               <div><span className="text-xs font-semibold tracking-[0.2em] text-[#1266A3]">{active.number} / APPLICATION</span><h2 className="mt-3 text-[clamp(2rem,4vw,4rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">{active.title}</h2></div>
//               <p className="max-w-[410px] text-[15px] leading-7 text-[#667A8C]">{active.description}</p>
//             </div>
//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5">
//               {images.map((src, index) => <GalleryTile key={src} src={src} title={active.title} index={index} onOpen={() => setOpenIndex(index)} />)}
//             </div>
//             <div className="mt-8 flex items-center justify-between border-t border-[#E4EBF1] pt-5 text-xs tracking-[0.08em] text-[#7A8D9C]"><span>PINGO SCREENS / APPLICATION GALLERY</span><span>{String(images.length).padStart(2, "0")} PHOTOGRAPHS</span></div>
//           </motion.div>
//         </AnimatePresence>
//       </section>

//       <AnimatePresence>
//         {openIndex !== null && images.length > 0 && (
//           <motion.div role="dialog" aria-modal="true" aria-label={`${active.title} image viewer`} initial={{ opacity: reduceMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-[#06111D]/95 px-4 py-20 backdrop-blur-lg sm:px-20" onClick={() => setOpenIndex(null)}>
//             <button ref={closeRef} data-lightbox-control type="button" aria-label="Close gallery" onClick={() => setOpenIndex(null)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/40 text-white hover:bg-white hover:text-[#142B48]"><CloseIcon className="h-5 w-5" /></button>
//             <button data-lightbox-control type="button" aria-label="Previous photograph" onClick={(event) => {event.stopPropagation();changeImage(-1);}} className="absolute bottom-7 left-[calc(50%-65px)] z-10 flex h-11 w-11 items-center justify-center border border-white/40 text-white hover:bg-white hover:text-[#142B48] sm:bottom-auto sm:left-7"><Chevron className="h-5 w-5" /></button>
//             <motion.img key={images[openIndex]} src={images[openIndex]} alt={`${active.title} photograph ${openIndex + 1}`} initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} onClick={(event) => event.stopPropagation()} className="max-h-[75vh] max-w-full object-contain sm:max-h-[85vh]" />
//             <button data-lightbox-control type="button" aria-label="Next photograph" onClick={(event) => {event.stopPropagation();changeImage(1);}} className="absolute bottom-7 left-[calc(50%+15px)] z-10 flex h-11 w-11 items-center justify-center border border-white/40 text-white hover:bg-white hover:text-[#142B48] sm:bottom-auto sm:left-auto sm:right-7"><Chevron right className="h-5 w-5" /></button>
//             <span className="absolute bottom-8 left-7 hidden text-xs tracking-[0.15em] text-white/70 sm:block">{String(openIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }












import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type ApplicationCategory = {

  id: string;

  number: string;

  title: string;

  description: string;

  images: string[];

};

// Preserved all 18 categories and image paths from your previous file.

// Add photographs to public/images/applications/<category>/1.webp etc.

const categories: ApplicationCategory[] = [

  {

    "id": "dooh",

    "number": "01",

    "title": "Digital Out Of Home - DOOH",

    "description": "Large-format digital display solutions designed for outdoor brand visibility, roadside advertising and public communication.",

    "images": [

      "/images/applications/dooh/1.webp",

      "/images/applications/dooh/2.webp",

      "/images/applications/dooh/3.webp",

      "/images/applications/dooh/4.webp",

      "/images/applications/dooh/5.webp"

    ]

  },

  {

    "id": "boardroom",

    "number": "02",

    "title": "Boardroom",

    "description": "Premium display environments for meetings, presentations, executive discussions and modern collaboration spaces.",

    "images": [

      "/images/applications/boardroom/1.webp",

      "/images/applications/boardroom/2.webp",

      "/images/applications/boardroom/3.webp",

      "/images/applications/boardroom/4.webp",

      "/images/applications/boardroom/5.webp"

    ]

  },

  {

    "id": "bfsi",

    "number": "03",

    "title": "BFSI",

    "description": "Reliable display solutions for banking, financial and insurance spaces to improve customer communication and branding.",

    "images": [

      "/images/applications/bfsi/1.webp",

      "/images/applications/bfsi/2.webp",

      "/images/applications/bfsi/3.webp",

      "/images/applications/bfsi/4.webp",

      "/images/applications/bfsi/5.webp"

    ]

  },

  {

    "id": "retail-stores",

    "number": "04",

    "title": "Retail Stores",

    "description": "Display experiences for retail stores, showrooms and shopping environments to attract attention and boost engagement.",

    "images": [

      "/images/applications/retail-stores/1.webp",

      "/images/applications/retail-stores/2.webp",

      "/images/applications/retail-stores/3.webp",

      "/images/applications/retail-stores/4.webp",

      "/images/applications/retail-stores/5.webp"

    ]

  },

  {

    "id": "command-control-center",

    "number": "05",

    "title": "Command & Control Center",

    "description": "Clear and high-performance display systems for monitoring, operations and real-time control environments.",

    "images": [

      "/images/applications/command-control-center/1.webp",

      "/images/applications/command-control-center/2.webp",

      "/images/applications/command-control-center/3.webp",

      "/images/applications/command-control-center/4.webp",

      "/images/applications/command-control-center/5.webp"

    ]

  },

  {

    "id": "government",

    "number": "06",

    "title": "Government",

    "description": "Professional visual display solutions for administrative, civic and public communication applications.",

    "images": [

      "/images/applications/government/1.webp",

      "/images/applications/government/2.webp",

      "/images/applications/government/3.webp",

      "/images/applications/government/4.webp",

      "/images/applications/government/5.webp"

    ]

  },

  {

    "id": "real-estate",

    "number": "07",

    "title": "Real Estate",

    "description": "Attractive display systems for project galleries, site offices, sales centers and high-impact real estate marketing.",

    "images": [

      "/images/applications/real-estate/1.webp",

      "/images/applications/real-estate/2.webp",

      "/images/applications/real-estate/3.webp",

      "/images/applications/real-estate/4.webp",

      "/images/applications/real-estate/5.webp"

    ]

  },

  {

    "id": "transportation",

    "number": "08",

    "title": "Transportation",

    "description": "Dynamic displays for transport hubs, stations and travel environments to improve communication and wayfinding.",

    "images": [

      "/images/applications/transportation/1.webp",

      "/images/applications/transportation/2.webp",

      "/images/applications/transportation/3.webp",

      "/images/applications/transportation/4.webp",

      "/images/applications/transportation/5.webp"

    ]

  },

  {

    "id": "auditorium-venues",

    "number": "09",

    "title": "Auditorium / Venues",

    "description": "Immersive visual installations for auditoriums, event venues and large presentation spaces.",

    "images": [

      "/images/applications/auditorium-venues/1.webp",

      "/images/applications/auditorium-venues/2.webp",

      "/images/applications/auditorium-venues/3.webp",

      "/images/applications/auditorium-venues/4.webp",

      "/images/applications/auditorium-venues/5.webp"

    ]

  },

  {

    "id": "education",

    "number": "10",

    "title": "Education",

    "description": "Interactive and informative display solutions for schools, colleges, training centers and academic spaces.",

    "images": [

      "/images/applications/education/1.webp",

      "/images/applications/education/2.webp",

      "/images/applications/education/3.webp",

      "/images/applications/education/4.webp",

      "/images/applications/education/5.webp"

    ]

  },

  {

    "id": "news-room",

    "number": "11",

    "title": "News Room",

    "description": "Broadcast-ready visual solutions for newsroom sets, live content environments and media production spaces.",

    "images": [

      "/images/applications/news-room/1.webp",

      "/images/applications/news-room/2.webp",

      "/images/applications/news-room/3.webp",

      "/images/applications/news-room/4.webp",

      "/images/applications/news-room/5.webp"

    ]

  },

  {

    "id": "corporate",

    "number": "12",

    "title": "Corporate",

    "description": "Elegant display solutions for receptions, office lobbies, conference spaces and corporate interiors.",

    "images": [

      "/images/applications/corporate/1.webp",

      "/images/applications/corporate/2.webp",

      "/images/applications/corporate/3.webp",

      "/images/applications/corporate/4.webp",

      "/images/applications/corporate/5.webp"

    ]

  },

  {

    "id": "entertainment",

    "number": "13",

    "title": "Entertainment",

    "description": "High-impact LED experiences for entertainment venues, performance zones and audience engagement.",

    "images": [

      "/images/applications/entertainment/1.webp",

      "/images/applications/entertainment/2.webp",

      "/images/applications/entertainment/3.webp",

      "/images/applications/entertainment/4.webp",

      "/images/applications/entertainment/5.webp"

    ]

  },

  {

    "id": "sports",

    "number": "14",

    "title": "Sports",

    "description": "Dynamic screens for stadiums, arenas and sports venues to enhance audience experience and information delivery.",

    "images": [

      "/images/applications/sports/1.webp",

      "/images/applications/sports/2.webp",

      "/images/applications/sports/3.webp",

      "/images/applications/sports/4.webp",

      "/images/applications/sports/5.webp"

    ]

  },

  {

    "id": "religious-places",

    "number": "15",

    "title": "Religious Places",

    "description": "Clear and respectful display solutions for spiritual spaces, worship halls and community gathering areas.",

    "images": [

      "/images/applications/religious-places/1.webp",

      "/images/applications/religious-places/2.webp",

      "/images/applications/religious-places/3.webp",

      "/images/applications/religious-places/4.webp",

      "/images/applications/religious-places/5.webp"

    ]

  },

  {

    "id": "studio-broadcast",

    "number": "16",

    "title": "Studio / Broadcast",

    "description": "Professional LED applications for studios, digital content stages and broadcast production spaces.",

    "images": [

      "/images/applications/studio-broadcast/1.webp",

      "/images/applications/studio-broadcast/2.webp",

      "/images/applications/studio-broadcast/3.webp",

      "/images/applications/studio-broadcast/4.webp",

      "/images/applications/studio-broadcast/5.webp"

    ]

  },

  {

    "id": "rental",

    "number": "17",

    "title": "Rental",

    "description": "Flexible rental display solutions for events, temporary installations and touring requirements.",

    "images": [

      "/images/applications/rental/1.webp",

      "/images/applications/rental/2.webp",

      "/images/applications/rental/3.webp",

      "/images/applications/rental/4.webp",

      "/images/applications/rental/5.webp"

    ]

  },

  {

    "id": "home",

    "number": "18",

    "title": "Home",

    "description": "Premium home visual experiences designed for personal entertainment, media rooms and luxury interiors.",

    "images": [

      "/images/applications/home/1.webp",

      "/images/applications/home/2.webp",

      "/images/applications/home/3.webp",

      "/images/applications/home/4.webp",

      "/images/applications/home/5.webp"

    ]

  }

];

type IconProps = { className?: string };

function CloseIcon({ className = "" }: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}><path d="M5 5l14 14M19 5 5 19" /></svg>;

}

function Chevron({ right = false, className = "" }: IconProps & { right?: boolean }) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{right ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}</svg>;

}

function ExpandIcon({ className = "" }: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true" className={className}><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>;

}

function GalleryTile({ src, title, index, onOpen }: { src: string; title: string; index: number; onOpen: () => void }) {

  const [failed, setFailed] = useState(false);

  const shapes = [

    "lg:col-span-7 lg:aspect-[1.65]",

    "lg:col-span-5 lg:aspect-[1.18]",

    "lg:col-span-4 lg:aspect-[1.15]",

    "lg:col-span-4 lg:aspect-[1.15]",

    "lg:col-span-4 lg:aspect-[1.15]",

    "lg:col-span-12 lg:aspect-[2.3]",

  ];

  return (

    <div className={`relative col-span-1 aspect-[4/3] min-w-0 overflow-hidden bg-[#EEF3F7] sm:aspect-[5/4] ${shapes[index % shapes.length]}`}>

      {failed ? (

        <div className="flex h-full flex-col items-center justify-center gap-3 border border-[#E3EAF0] px-5 text-center">

          <span className="text-xs font-semibold tracking-[0.12em] text-[#0047C0]">PINGO SCREENS</span>

          <span className="text-sm text-[#8798A5]">Image coming soon</span>

        </div>

      ) : (

        <button type="button" onClick={onOpen} aria-label={`Open ${title} image ${index + 1}`} className="group relative block h-full w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#0047C0]">

          <img src={src} alt={`${title} LED installation ${index + 1}`} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.045] motion-reduce:transition-none" />

          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061827]/35 via-transparent to-transparent opacity-75" />

          <span className="absolute bottom-5 left-5 text-xs font-medium tracking-[0.12em] text-white/90">{String(index + 1).padStart(2, "0")}</span>

          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/65 bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"><ExpandIcon className="h-5 w-5" /></span>

        </button>

      )}

    </div>

  );

}

export default function Applications() {

  const reduceMotion = useReducedMotion();

  const [activeId, setActiveId] = useState(categories[0].id);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const closeRef = useRef<HTMLButtonElement>(null);

  const active = categories.find((item) => item.id === activeId) ?? categories[0];

  const images = active.images;

  useEffect(() => {

    if (openIndex === null) return;

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {

      if (event.key === "Escape") setOpenIndex(null);

      if (event.key === "ArrowRight") setOpenIndex((index) => index === null ? null : (index + 1) % images.length);

      if (event.key === "ArrowLeft") setOpenIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);

      if (event.key === "Tab") {

        const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-lightbox-control]"));

        const position = buttons.indexOf(document.activeElement as HTMLButtonElement);

        if (event.shiftKey && position === 0) { event.preventDefault(); buttons[buttons.length - 1]?.focus(); }

        if (!event.shiftKey && position === buttons.length - 1) { event.preventDefault(); buttons[0]?.focus(); }

      }

    };

    window.addEventListener("keydown", handleKey);

    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", handleKey); };

  }, [openIndex, images.length]);

  const choose = (id: string) => { if (id !== activeId) { setOpenIndex(null); setActiveId(id); } };

  const changeImage = (step: number) => setOpenIndex((value) => value === null ? null : (value + step + images.length) % images.length);

  return (

    <main className="min-h-screen w-full bg-white">

      <section className="bg-[#F6F9FC] px-5 pb-16 pt-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <motion.div initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="mx-auto max-w-[1000px] text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">PINGO SCREENS / APPLICATIONS</p>

          <h1 className="mt-5 text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-[#142B48]">Designed for <span className="text-[#0047C0]">Every Space.</span></h1>

          <p className="mx-auto mt-6 max-w-[650px] text-base font-normal leading-8 text-[#607588]">A visual collection of LED displays in the environments that inspire them.</p>

        </motion.div>

      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-14 sm:px-8 lg:px-12 lg:pt-20">

        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">

          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Browse our galleries</p><h2 className="mt-2 text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-[#142B48] sm:text-4xl">Applications</h2></div>

          <p className="text-xs font-medium tracking-[0.08em] text-[#8193A1]">18 ENVIRONMENTS</p>

        </div>

        <nav aria-label="Choose an application" className="flex flex-wrap gap-2 border-b border-[#E3EAF0] pb-9 sm:gap-3">

          {categories.map((cat) => <button key={cat.id} type="button" aria-pressed={activeId === cat.id} onClick={() => choose(cat.id)} className={`border px-4 py-2.5 text-sm font-medium leading-5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] ${activeId === cat.id ? "border-[#0047C0] bg-[#0047C0] text-white" : "border-[#DFE7EE] bg-white text-[#29445A] hover:border-[#0047C0] hover:bg-[#F1F5FF] hover:text-[#0047C0]"}`}>{cat.title}</button>)}

        </nav>

        <AnimatePresence mode="wait" initial={false}>

          <motion.div key={activeId} initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>

            <div className="flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-end sm:py-12">

              <div><span className="text-xs font-semibold tracking-[0.14em] text-[#0047C0]">{active.number} / APPLICATION</span><h2 className="mt-3 text-[clamp(2rem,3.6vw,3.5rem)] font-semibold leading-tight tracking-[-0.05em] text-[#142B48]">{active.title}</h2></div>

              <p className="max-w-[410px] text-base font-normal leading-7 text-[#667A8C]">{active.description}</p>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5">

              {images.map((src, index) => <GalleryTile key={src} src={src} title={active.title} index={index} onOpen={() => setOpenIndex(index)} />)}

            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E4EBF1] pt-5 text-xs font-medium tracking-[0.06em] text-[#7A8D9C]"><span>PINGO SCREENS / APPLICATION GALLERY</span><span>{String(images.length).padStart(2, "0")} PHOTOGRAPHS</span></div>

          </motion.div>

        </AnimatePresence>

      </section>

      <AnimatePresence>

        {openIndex !== null && images.length > 0 && (

          <motion.div role="dialog" aria-modal="true" aria-label={`${active.title} image viewer`} initial={{ opacity: reduceMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reduceMotion ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-[#06111D]/95 px-4 py-20 backdrop-blur-lg sm:px-20" onClick={() => setOpenIndex(null)}>

            <button ref={closeRef} data-lightbox-control type="button" aria-label="Close gallery" onClick={() => setOpenIndex(null)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/40 text-white hover:bg-white hover:text-[#142B48]"><CloseIcon className="h-5 w-5" /></button>

            <button data-lightbox-control type="button" aria-label="Previous photograph" onClick={(event) => {event.stopPropagation();changeImage(-1);}} className="absolute bottom-7 left-[calc(50%-65px)] z-10 flex h-11 w-11 items-center justify-center border border-white/40 text-white hover:bg-white hover:text-[#142B48] sm:bottom-auto sm:left-7"><Chevron className="h-5 w-5" /></button>

            <motion.img key={images[openIndex]} src={images[openIndex]} alt={`${active.title} photograph ${openIndex + 1}`} initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} onClick={(event) => event.stopPropagation()} className="max-h-[75vh] max-w-full object-contain sm:max-h-[85vh]" />

            <button data-lightbox-control type="button" aria-label="Next photograph" onClick={(event) => {event.stopPropagation();changeImage(1);}} className="absolute bottom-7 left-[calc(50%+15px)] z-10 flex h-11 w-11 items-center justify-center border border-white/40 text-white hover:bg-white hover:text-[#142B48] sm:bottom-auto sm:left-auto sm:right-7"><Chevron right className="h-5 w-5" /></button>

            <span className="absolute bottom-8 left-7 hidden text-xs font-medium tracking-[0.12em] text-white/70 sm:block">{String(openIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>

          </motion.div>

        )}

      </AnimatePresence>

    </main>

  );

}
