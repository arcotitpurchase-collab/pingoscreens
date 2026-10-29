
// import { useCallback, useEffect, useRef, useState } from "react";
// import { Link } from "react-router";
// import { motion, useReducedMotion } from "motion/react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ArrowUpRight,
//   Pause,
//   Play,
// } from "lucide-react";

// // ==========================================
// // PINGO SCREENS — HERO SLIDES
// // ==========================================

// const slides = [
//   {
//     id: 1,
//     category: "INDOOR LED DISPLAYS",
//     title: "Transform Every Interior.",
//     description:
//       "Extraordinary visual experiences for premium interiors, commercial spaces, and modern environments.",
//     image: "/images/hero/indoor-led.webp",
//     position: "center",
//   },
//   {
//     id: 2,
//     category: "OUTDOOR LED DISPLAYS",
//     title: "Make Every Impression Count.",
//     description:
//       "Dynamic large-format displays that bring brands, messages, and cityscapes to life.",
//     image: "/images/hero/outdoor-led.webp",
//     position: "center",
//   },
//   {
//     id: 3,
//     category: "TRANSPARENT LED DISPLAYS",
//     title: "Where Vision Meets Architecture.",
//     description:
//       "Discover creative visual possibilities with transparent display experiences.",
//     image: "/images/hero/transparent-led.webp",
//     position: "center",
//   },
//   {
//     id: 4,
//     category: "FINE PITCH LED DISPLAYS",
//     title: "Experience Every Detail.",
//     description:
//       "Remarkable clarity for professional environments where precision matters.",
//     image: "/images/hero/fine-pitch-led.webp",
//     position: "center",
//   },
//   {
//     id: 5,
//     category: "CREATIVE LED DISPLAYS",
//     title: "Beyond the Ordinary.",
//     description:
//       "Immersive, curved, and architectural display experiences that inspire.",
//     image: "/images/hero/creative-led.webp",
//     position: "center",
//   },
// ] as const;

// // ==========================================
// // ANIMATION SETTINGS
// // ==========================================

// const SLIDE_DURATION = 10000;
// const IMAGE_TRANSITION = 2400;
// const TEXT_TRANSITION = 900;

// export default function Home() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [ready, setReady] = useState<number[]>([]);
//   const [contentVisible, setContentVisible] = useState(true);

//   const reducedMotion = Boolean(useReducedMotion());

//   const textTimer = useRef<ReturnType<
//     typeof setTimeout
//   > | null>(null);

//   // ==========================================
//   // PRELOAD HERO IMAGES
//   // ==========================================

//   useEffect(() => {
//     let cancelled = false;

//     slides.forEach((slide, index) => {
//       const image = new Image();

//       const markReady = () => {
//         if (cancelled) return;

//         setReady((previous) =>
//           previous.includes(index)
//             ? previous
//             : [...previous, index]
//         );
//       };

//       const decodeImage = () => {
//         if (typeof image.decode === "function") {
//           image
//             .decode()
//             .then(markReady)
//             .catch(() => {
//               if (image.naturalWidth > 0) {
//                 markReady();
//               }
//             });
//         } else {
//           markReady();
//         }
//       };

//       image.onload = decodeImage;
//       image.src = slide.image;

//       if (
//         image.complete &&
//         image.naturalWidth > 0
//       ) {
//         decodeImage();
//       }
//     });

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // ==========================================
//   // CHANGE SLIDES WITHOUT TEXT MOVEMENT
//   // ==========================================

//   const changeSlide = useCallback(
//     (nextIndex: number) => {
//       const index =
//         (nextIndex + slides.length) %
//         slides.length;

//       if (!ready.includes(index)) return;
//       if (index === active) return;

//       if (textTimer.current) {
//         clearTimeout(textTimer.current);
//       }

//       if (reducedMotion) {
//         setActive(index);
//         setContentVisible(true);
//         return;
//       }

//       // Fade out content at its current position
//       setContentVisible(false);

//       // Change the image and text after fade-out
//       textTimer.current = setTimeout(() => {
//         setActive(index);

//         // Fade in the new content
//         setContentVisible(true);
//       }, TEXT_TRANSITION);
//     },
//     [active, ready, reducedMotion]
//   );

//   const nextSlide = useCallback(() => {
//     for (
//       let offset = 1;
//       offset < slides.length;
//       offset++
//     ) {
//       const next =
//         (active + offset) % slides.length;

//       if (ready.includes(next)) {
//         changeSlide(next);
//         return;
//       }
//     }
//   }, [active, ready, changeSlide]);

//   const previousSlide = useCallback(() => {
//     for (
//       let offset = 1;
//       offset < slides.length;
//       offset++
//     ) {
//       const previous =
//         (active - offset + slides.length) %
//         slides.length;

//       if (ready.includes(previous)) {
//         changeSlide(previous);
//         return;
//       }
//     }
//   }, [active, ready, changeSlide]);

//   // ==========================================
//   // AUTOMATIC SLIDESHOW
//   // ==========================================

//   useEffect(() => {
//     if (paused || reducedMotion) return;
//     if (ready.length < 2) return;

//     const timer = setTimeout(
//       nextSlide,
//       SLIDE_DURATION
//     );

//     return () => clearTimeout(timer);
//   }, [
//     active,
//     paused,
//     reducedMotion,
//     ready,
//     nextSlide,
//   ]);

//   // ==========================================
//   // CLEAN UP TIMERS
//   // ==========================================

//   useEffect(() => {
//     return () => {
//       if (textTimer.current) {
//         clearTimeout(textTimer.current);
//       }
//     };
//   }, []);

//   const current = slides[active];

//   // ==========================================
//   // HOMEPAGE
//   // ==========================================

//   return (
//     <main className="w-full overflow-x-hidden">
//       <section
//         aria-label="Pingo Screens cinematic showcase"
//         className="
//           relative isolate
//           h-[calc(100svh-76px)]
//           min-h-[560px]
//           w-full overflow-hidden
//           bg-[#081320]
//           lg:h-[calc(100svh-84px)]
//         "
//       >
//         {/* =====================================
//             CINEMATIC BACKGROUND
//         ===================================== */}

//         <div className="absolute inset-0 z-0">
//           {slides.map((slide, index) => {
//             const isActive = active === index;

//             return (
//               <div
//                 key={slide.id}
//                 aria-hidden="true"
//                 className={`
//                   absolute inset-0
//                   transition-opacity
//                   ${
//                     reducedMotion
//                       ? "duration-0"
//                       : "duration-[2400ms] ease-in-out"
//                   }
//                   ${
//                     isActive
//                       ? "z-10 opacity-100"
//                       : "z-0 opacity-0"
//                   }
//                 `}
//               >
//                 <motion.img
//                   src={slide.image}
//                   alt=""
//                   draggable={false}
//                   loading="eager"
//                   decoding="async"
//                   initial={false}
//                   animate={{
//                     scale:
//                       isActive && !reducedMotion
//                         ? 1
//                         : 1.075,
//                   }}
//                   transition={{
//                     duration: reducedMotion
//                       ? 0
//                       : SLIDE_DURATION / 1000,
//                     ease: "linear",
//                   }}
//                   style={{
//                     objectPosition: slide.position,
//                   }}
//                   className="
//                     h-full w-full
//                     object-cover
//                     transform-gpu
//                   "
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* =====================================
//             DARK GRADIENT OVERLAYS
//         ===================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute inset-0 z-10
//             bg-gradient-to-r
//             from-[#061421]/85
//             via-[#061421]/45
//             to-[#061421]/10
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute inset-0 z-10
//             bg-gradient-to-t
//             from-[#061421]/75
//             via-transparent
//             to-transparent
//           "
//         />

//         {/* =====================================
//             HERO TEXT
//         ===================================== */}

//         <div
//           className="
//             relative z-20
//             mx-auto flex h-full w-full
//             max-w-[1600px]
//             items-center
//             px-6 sm:px-10
//             lg:px-16 xl:px-24
//           "
//         >
//           {/* Fixed content positioning */}
//           <div
//             className="
//               flex w-full max-w-[850px]
//               flex-col justify-center
//               pb-24
//               sm:pb-20
//               lg:pb-12
//             "
//           >
//             <motion.div
//               initial={false}
//               animate={{
//                 opacity:
//                   contentVisible ? 1 : 0,
//               }}
//               transition={{
//                 duration: reducedMotion
//                   ? 0
//                   : TEXT_TRANSITION / 1000,
//                 ease: "easeInOut",
//               }}
//               className="w-full"
//             >
//               {/* CATEGORY LABEL */}
//               <div className="mb-6 flex items-center gap-4">
//                 <span
//                   className="
//                     h-px w-10
//                     bg-[#79DCFA]
//                   "
//                 />

//                 <span
//                   className="
//                     text-[10px]
//                     font-semibold
//                     tracking-[0.28em]
//                     text-[#91E5FF]
//                     sm:text-xs
//                   "
//                 >
//                   {current.category}
//                 </span>
//               </div>

//               {/* MAIN HEADLINE */}
//               <h1
//                 className="
//                   max-w-[850px]
//                   text-[clamp(2.4rem,5.2vw,5.6rem)]
//                   leading-[1.08]
//                   font-semibold
//                   tracking-[-0.045em]
//                   text-white
//                 "
//               >
//                 {current.title}
//               </h1>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//                   mt-7 max-w-[550px]
//                   text-sm leading-7
//                   font-normal text-white/85
//                   sm:text-base
//                   md:text-lg md:leading-8
//                 "
//               >
//                 {current.description}
//               </p>

//               {/* ACTION BUTTONS */}
//               <div
//                 className="
//                   mt-9 flex flex-wrap
//                   items-center gap-5
//                 "
//               >
//                 <Link
//                   to="/products"
//                   className="
//                     group inline-flex
//                     min-h-12 items-center
//                     gap-3 bg-white
//                     px-7 py-3
//                     text-sm font-semibold
//                     text-[#102C4C]
//                     transition-colors
//                     duration-300
//                     hover:bg-[#DDF6FF]
//                   "
//                 >
//                   Explore Screens

//                   <ArrowUpRight
//                     size={18}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5
//                     "
//                   />
//                 </Link>

//                 <Link
//                   to="/applications"
//                   className="
//                     inline-flex min-h-12
//                     items-center gap-2
//                     border-b border-white/60
//                     text-sm font-medium
//                     text-white
//                     transition-colors
//                     hover:border-[#91E5FF]
//                     hover:text-[#91E5FF]
//                   "
//                 >
//                   View Applications

//                   <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* =====================================
//             BOTTOM SLIDE CONTROLS
//         ===================================== */}

//         <div className="absolute inset-x-0 bottom-0 z-30">
//           <div
//             className="
//               mx-auto flex w-full
//               max-w-[1600px]
//               flex-col gap-3
//               px-6 pb-5
//               sm:px-10 sm:pb-9
//               lg:flex-row
//               lg:items-end
//               lg:justify-between
//               lg:px-16 xl:px-24
//             "
//           >
//             {/* SLIDE INDICATORS */}
//             <div
//               className="
//                 flex w-full max-w-[390px]
//                 items-center gap-3
//               "
//             >
//               <span className="text-xs font-medium text-white tabular-nums">
//                 0{active + 1}
//               </span>

//               <div className="flex flex-1 gap-2">
//                 {slides.map((slide, index) => (
//                   <button
//                     key={slide.id}
//                     type="button"
//                     disabled={
//                       !ready.includes(index)
//                     }
//                     onClick={() =>
//                       changeSlide(index)
//                     }
//                     aria-label={`Show ${slide.category}`}
//                     aria-current={
//                       active === index
//                         ? "true"
//                         : undefined
//                     }
//                     className="
//                       group flex h-9 flex-1
//                       items-center
//                       disabled:cursor-wait
//                     "
//                   >
//                     <span
//                       className={`
//                         h-[2px] w-full
//                         transition-colors
//                         duration-500
//                         ${
//                           active === index
//                             ? "bg-[#7DE3FF]"
//                             : "bg-white/35 group-hover:bg-white/75"
//                         }
//                       `}
//                     />
//                   </button>
//                 ))}
//               </div>

//               <span className="text-xs text-white/65 tabular-nums">
//                 0{slides.length}
//               </span>
//             </div>

//             {/* SLIDE CONTROLS */}
//             <div
//               className="
//                 flex items-center
//                 justify-between
//                 gap-5
//                 sm:justify-end
//               "
//             >
//               <div className="flex items-center gap-2">

//                 {/* PLAY / PAUSE */}
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setPaused((value) => !value)
//                   }
//                   aria-label={
//                     paused
//                       ? "Play slideshow"
//                       : "Pause slideshow"
//                   }
//                   aria-pressed={paused}
//                   className="
//                     flex h-11 w-11
//                     items-center justify-center
//                     border border-white/35
//                     text-white
//                     transition-colors
//                     hover:border-white
//                     hover:bg-white/15
//                   "
//                 >
//                   {paused || reducedMotion ? (
//                     <Play size={17} />
//                   ) : (
//                     <Pause size={17} />
//                   )}
//                 </button>

//                 {/* PREVIOUS */}
//                 <button
//                   type="button"
//                   onClick={previousSlide}
//                   aria-label="Previous slide"
//                   className="
//                     flex h-11 w-11
//                     items-center justify-center
//                     border border-white/35
//                     text-white
//                     transition-colors
//                     hover:border-white
//                     hover:bg-white/15
//                   "
//                 >
//                   <ArrowLeft size={19} />
//                 </button>

//                 {/* NEXT */}
//                 <button
//                   type="button"
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="
//                     flex h-11 w-11
//                     items-center justify-center
//                     border border-white/35
//                     text-white
//                     transition-colors
//                     hover:border-white
//                     hover:bg-white/15
//                   "
//                 >
//                   <ArrowRight size={19} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }















// import { useCallback, useEffect, useRef, useState } from "react";

// import { Link } from "react-router";

// import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// import {

//   ArrowLeft,

//   ArrowRight,

//   ArrowUpRight,

//   Pause,

//   Play,

// } from "lucide-react";

// // PINGO SCREENS — HERO SLIDES

// const slides = [

//   {

//     id: 1,

//     category: "INDOOR LED DISPLAYS",

//     title: "Transform Every Interior.",

//     description:

//       "Extraordinary visual experiences for premium interiors, commercial spaces, and modern environments.",

//     image: "/images/hero/indoor-led.webp",

//     position: "center",

//   },

//   {

//     id: 2,

//     category: "OUTDOOR LED DISPLAYS",

//     title: "Make Every Impression Count.",

//     description:

//       "Dynamic large-format displays that bring brands, messages, and cityscapes to life.",

//     image: "/images/hero/outdoor-led.webp",

//     position: "center",

//   },

//   {

//     id: 3,

//     category: "TRANSPARENT LED DISPLAYS",

//     title: "Where Vision Meets Architecture.",

//     description:

//       "Discover creative visual possibilities with transparent display experiences.",

//     image: "/images/hero/transparent-led.webp",

//     position: "center",

//   },

//   {

//     id: 4,

//     category: "FINE PITCH LED DISPLAYS",

//     title: "Experience Every Detail.",

//     description:

//       "Remarkable clarity for professional environments where precision matters.",

//     image: "/images/hero/fine-pitch-led.webp",

//     position: "center",

//   },

//   {

//     id: 5,

//     category: "CREATIVE LED DISPLAYS",

//     title: "Beyond the Ordinary.",

//     description:

//       "Immersive, curved, and architectural display experiences that inspire.",

//     image: "/images/hero/creative-led.webp",

//     position: "center",

//   },

// ] as const;


// // ANIMATION SETTINGS

// // SECTION 03 — PRODUCT COLLECTION (edit titles and image paths here)
// const showcaseProducts = [
//   { id: 1, name: "Indoor LED Screen", description: "Seamless digital experiences for offices, showrooms, and commercial interiors.", image: "/images/home/hindoor-led.webp" },
//   { id: 2, name: "Outdoor LED Screen", description: "Impactful displays for outdoor advertising, public spaces, and building exteriors.", image: "/images/home/houtdoor-led.webp" },
//   { id: 3, name: "Transparent LED Screen", description: "Creative display experiences for glass architecture and retail environments.", image: "/images/home/htransparent-led.webp" },
//   { id: 4, name: "Fine Pitch LED Screen", description: "Detailed viewing experiences for boardrooms and professional settings.", image: "/images/home/hfine-pitch-led.webp" },
//   { id: 5, name: "Creative LED Screen", description: "Curved and immersive displays for distinctive architectural spaces.", image: "/images/home/hcreative-led.webp" },
// ];

// const SLIDE_DURATION = 10000;

// const TEXT_TRANSITION = 900;

// export default function Home() {

//   const [active, setActive] = useState(0);

//   const [paused, setPaused] = useState(false);

//   const [ready, setReady] = useState<number[]>([]);

//   const [contentVisible, setContentVisible] = useState(true);



//   const reducedMotion = Boolean(useReducedMotion());

//   // Product carousel: keep its scroll behavior independent from the hero.
//   const productsRef = useRef<HTMLDivElement>(null);

//   // Section 04: gradual reveal tied to the section entering the viewport.
//   const visionRef = useRef<HTMLElement>(null);
//   const { scrollYProgress: visionProgress } = useScroll({
//     target: visionRef,
//     offset: ["start end", "end start"],
//   });
//   const visionScale = useTransform(
//     visionProgress,
//     [0, 0.42, 0.65, 1],
//     [0.85, 1, 1, 0.9]
//   );
//   const visionOpacity = useTransform(
//     visionProgress,
//     [0, 0.42, 0.65, 1],
//     [0.4, 1, 1, 0.55]
//   );

//   const scrollProducts = (direction: -1 | 1) => {
//     const list = productsRef.current;
//     const card = list?.firstElementChild as HTMLElement | null;
//     if (!list || !card) return;

//     const gap = Number.parseFloat(window.getComputedStyle(list).gap) || 0;
//     list.scrollBy({
//       left: direction * (card.getBoundingClientRect().width + gap),
//       behavior: reducedMotion ? "instant" : "smooth",
//     });
//   };




//   const textTimer = useRef<ReturnType<

//     typeof setTimeout

//   > | null>(null);



//   // ==========================================

//   // PRELOAD HERO IMAGES

//   // ==========================================



//   useEffect(() => {

//     let cancelled = false;



//     slides.forEach((slide, index) => {

//       const image = new Image();



//       const markReady = () => {

//         if (cancelled) return;



//         setReady((previous) =>

//           previous.includes(index)

//             ? previous

//             : [...previous, index]

//         );

//       };



//       const decodeImage = () => {

//         if (typeof image.decode === "function") {

//           image

//             .decode()

//             .then(markReady)

//             .catch(() => {

//               if (image.naturalWidth > 0) {

//                 markReady();

//               }

//             });

//         } else {

//           markReady();

//         }

//       };



//       image.onload = decodeImage;

//       image.src = slide.image;



//       if (

//         image.complete &&

//         image.naturalWidth > 0

//       ) {

//         decodeImage();

//       }

//     });



//     return () => {

//       cancelled = true;

//     };

//   }, []);



//   // ==========================================

//   // CHANGE SLIDES WITHOUT TEXT MOVEMENT

//   // ==========================================



//   const changeSlide = useCallback(

//     (nextIndex: number) => {

//       const index =

//         (nextIndex + slides.length) %

//         slides.length;



//       if (!ready.includes(index)) return;

//       if (index === active) return;



//       if (textTimer.current) {

//         clearTimeout(textTimer.current);

//       }



//       if (reducedMotion) {

//         setActive(index);

//         setContentVisible(true);

//         return;

//       }



//       // Fade out content at its current position

//       setContentVisible(false);



//       // Change the image and text after fade-out

//       textTimer.current = setTimeout(() => {

//         setActive(index);



//         // Fade in the new content

//         setContentVisible(true);

//       }, TEXT_TRANSITION);

//     },

//     [active, ready, reducedMotion]

//   );



//   const nextSlide = useCallback(() => {

//     for (

//       let offset = 1;

//       offset < slides.length;

//       offset++

//     ) {

//       const next =

//         (active + offset) % slides.length;



//       if (ready.includes(next)) {

//         changeSlide(next);

//         return;

//       }

//     }

//   }, [active, ready, changeSlide]);



//   const previousSlide = useCallback(() => {

//     for (

//       let offset = 1;

//       offset < slides.length;

//       offset++

//     ) {

//       const previous =

//         (active - offset + slides.length) %

//         slides.length;



//       if (ready.includes(previous)) {

//         changeSlide(previous);

//         return;

//       }

//     }

//   }, [active, ready, changeSlide]);



//   // ==========================================

//   // AUTOMATIC SLIDESHOW

//   // ==========================================



//   useEffect(() => {

//     if (paused || reducedMotion) return;

//     if (ready.length < 2) return;



//     const timer = setTimeout(

//       nextSlide,

//       SLIDE_DURATION

//     );



//     return () => clearTimeout(timer);

//   }, [

//     active,

//     paused,

//     reducedMotion,

//     ready,

//     nextSlide,

//   ]);



//   // ==========================================

//   // CLEAN UP TIMERS

//   // ==========================================



//   useEffect(() => {

//     return () => {

//       if (textTimer.current) {

//         clearTimeout(textTimer.current);

//       }

//     };

//   }, []);



//   const current = slides[active];



//   // ==========================================

//   // HOMEPAGE

//   // ==========================================



//   return (

//     <main className="w-full overflow-x-hidden">

//       <section

//         aria-label="Pingo Screens cinematic showcase"

//         className="

//           relative isolate

//           h-[calc(100svh-76px)]

//           min-h-[560px]

//           w-full overflow-hidden

//           bg-[#081320]

//           lg:h-[calc(100svh-84px)]

//         "

//       >

//         {/* =====================================

//             CINEMATIC BACKGROUND

//         ===================================== */}



//         <div className="absolute inset-0 z-0">

//           {slides.map((slide, index) => {

//             const isActive = active === index;



//             return (

//               <div

//                 key={slide.id}

//                 aria-hidden="true"

//                 className={`

//                   absolute inset-0

//                   transition-opacity

//                   ${

//                     reducedMotion

//                       ? "duration-0"

//                       : "duration-[2400ms] ease-in-out"

//                   }

//                   ${

//                     isActive

//                       ? "z-10 opacity-100"

//                       : "z-0 opacity-0"

//                   }

//                 `}

//               >

//                 <motion.img

//                   src={slide.image}

//                   alt=""

//                   draggable={false}

//                   loading="eager"

//                   decoding="async"

//                   initial={false}

//                   animate={{

//                     scale:

//                       isActive && !reducedMotion

//                         ? 1

//                         : 1.075,

//                   }}

//                   transition={{

//                     duration: reducedMotion

//                       ? 0

//                       : SLIDE_DURATION / 1000,

//                     ease: "linear",

//                   }}

//                   style={{

//                     objectPosition: slide.position,

//                   }}

//                   className="

//                     h-full w-full

//                     object-cover

//                     transform-gpu

//                   "

//                 />

//               </div>

//             );

//           })}

//         </div>



//         {/* =====================================

//             DARK GRADIENT OVERLAYS

//         ===================================== */}



//         <div

//           className="

//             pointer-events-none

//             absolute inset-0 z-10

//             bg-gradient-to-r

//             from-[#061421]/85

//             via-[#061421]/45

//             to-[#061421]/10

//           "

//         />



//         <div

//           className="

//             pointer-events-none

//             absolute inset-0 z-10

//             bg-gradient-to-t

//             from-[#061421]/75

//             via-transparent

//             to-transparent

//           "

//         />



//         {/* =====================================

//             HERO TEXT

//         ===================================== */}



//         <div

//           className="

//             relative z-20

//             mx-auto flex h-full w-full

//             max-w-[1600px]

//             items-center

//             px-6 sm:px-10

//             lg:px-16 xl:px-24

//           "

//         >

//           {/* Fixed content positioning */}

//           <div

//             className="

//               flex w-full max-w-[850px]

//               flex-col justify-center

//               pb-24

//               sm:pb-20

//               lg:pb-12

//             "

//           >

//             <motion.div

//               initial={false}

//               animate={{

//                 opacity:

//                   contentVisible ? 1 : 0,

//               }}

//               transition={{

//                 duration: reducedMotion

//                   ? 0

//                   : TEXT_TRANSITION / 1000,

//                 ease: "easeInOut",

//               }}

//               className="w-full"

//             >

//               {/* CATEGORY LABEL */}

//               <div className="mb-6 flex items-center gap-4">

//                 <span

//                   className="

//                     h-px w-10

//                     bg-[#79DCFA]

//                   "

//                 />



//                 <span

//                   className="

//                     text-[10px]

//                     font-semibold

//                     tracking-[0.28em]

//                     text-[#91E5FF]

//                     sm:text-xs

//                   "

//                 >

//                   {current.category}

//                 </span>

//               </div>



//               {/* MAIN HEADLINE */}

//               <h1

//                 className="

//                   max-w-[850px]

//                   text-[clamp(2.4rem,5.2vw,5.6rem)]

//                   leading-[1.08]

//                   font-semibold

//                   tracking-[-0.045em]

//                   text-white

//                 "

//               >

//                 {current.title}

//               </h1>



//               {/* DESCRIPTION */}

//               <p

//                 className="

//                   mt-7 max-w-[550px]

//                   text-sm leading-7

//                   font-normal text-white/85

//                   sm:text-base

//                   md:text-lg md:leading-8

//                 "

//               >

//                 {current.description}

//               </p>



//               {/* ACTION BUTTONS */}

//               <div

//                 className="

//                   mt-9 flex flex-wrap

//                   items-center gap-5

//                 "

//               >

//                 <Link

//                   to="/products"

//                   className="

//                     group inline-flex

//                     min-h-12 items-center

//                     gap-3 bg-white

//                     px-7 py-3

//                     text-sm font-semibold

//                     text-[#102C4C]

//                     transition-colors

//                     duration-300

//                     hover:bg-[#DDF6FF]

//                   "

//                 >

//                   Explore Screens



//                   <ArrowUpRight

//                     size={18}

//                     className="

//                       transition-transform

//                       duration-300

//                       group-hover:-translate-y-0.5

//                       group-hover:translate-x-0.5

//                     "

//                   />

//                 </Link>



//                 <Link

//                   to="/applications"

//                   className="

//                     inline-flex min-h-12

//                     items-center gap-2

//                     border-b border-white/60

//                     text-sm font-medium

//                     text-white

//                     transition-colors

//                     hover:border-[#91E5FF]

//                     hover:text-[#91E5FF]

//                   "

//                 >

//                   View Applications



//                   <ArrowRight size={17} />

//                 </Link>

//               </div>

//             </motion.div>

//           </div>

//         </div>



//         {/* =====================================

//             BOTTOM SLIDE CONTROLS

//         ===================================== */}



//         <div className="absolute inset-x-0 bottom-0 z-30">

//           <div

//             className="

//               mx-auto flex w-full

//               max-w-[1600px]

//               flex-col gap-3

//               px-6 pb-5

//               sm:px-10 sm:pb-9

//               lg:flex-row

//               lg:items-end

//               lg:justify-between

//               lg:px-16 xl:px-24

//             "

//           >

//             {/* SLIDE INDICATORS */}

//             <div

//               className="

//                 flex w-full max-w-[390px]

//                 items-center gap-3

//               "

//             >

//               <span className="text-xs font-medium text-white tabular-nums">

//                 0{active + 1}

//               </span>



//               <div className="flex flex-1 gap-2">

//                 {slides.map((slide, index) => (

//                   <button

//                     key={slide.id}

//                     type="button"

//                     disabled={

//                       !ready.includes(index)

//                     }

//                     onClick={() =>

//                       changeSlide(index)

//                     }

//                     aria-label={`Show ${slide.category}`}

//                     aria-current={

//                       active === index

//                         ? "true"

//                         : undefined

//                     }

//                     className="

//                       group flex h-9 flex-1

//                       items-center

//                       disabled:cursor-wait

//                     "

//                   >

//                     <span

//                       className={`

//                         h-[2px] w-full

//                         transition-colors

//                         duration-500

//                         ${

//                           active === index

//                             ? "bg-[#7DE3FF]"

//                             : "bg-white/35 group-hover:bg-white/75"

//                         }

//                       `}

//                     />

//                   </button>

//                 ))}

//               </div>



//               <span className="text-xs text-white/65 tabular-nums">

//                 0{slides.length}

//               </span>

//             </div>



//             {/* SLIDE CONTROLS */}

//             <div

//               className="

//                 flex items-center

//                 justify-between

//                 gap-5

//                 sm:justify-end

//               "

//             >

//               <div className="flex items-center gap-2">



//                 {/* PLAY / PAUSE */}

//                 <button

//                   type="button"

//                   onClick={() =>

//                     setPaused((value) => !value)

//                   }

//                   aria-label={

//                     paused

//                       ? "Play slideshow"

//                       : "Pause slideshow"

//                   }

//                   aria-pressed={paused}

//                   className="

//                     flex h-11 w-11

//                     items-center justify-center

//                     border border-white/35

//                     text-white

//                     transition-colors

//                     hover:border-white

//                     hover:bg-white/15

//                   "

//                 >

//                   {paused || reducedMotion ? (

//                     <Play size={17} />

//                   ) : (

//                     <Pause size={17} />

//                   )}

//                 </button>



//                 {/* PREVIOUS */}

//                 <button

//                   type="button"

//                   onClick={previousSlide}

//                   aria-label="Previous slide"

//                   className="

//                     flex h-11 w-11

//                     items-center justify-center

//                     border border-white/35

//                     text-white

//                     transition-colors

//                     hover:border-white

//                     hover:bg-white/15

//                   "

//                 >

//                   <ArrowLeft size={19} />

//                 </button>



//                 {/* NEXT */}

//                 <button

//                   type="button"

//                   onClick={nextSlide}

//                   aria-label="Next slide"

//                   className="

//                     flex h-11 w-11

//                     items-center justify-center

//                     border border-white/35

//                     text-white

//                     transition-colors

//                     hover:border-white

//                     hover:bg-white/15

//                   "

//                 >

//                   <ArrowRight size={19} />

//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* SECTION 02 — INTRODUCING PINGO SCREENS */}
//       {/* <section
//         id="introduction"
//         aria-labelledby="pingo-intro-heading"
//         className="w-full bg-[#F9FAFC] py-16 sm:py-20 lg:py-28"
//       >
//         <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:gap-20 xl:px-20">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: reducedMotion ? 0 : 0.8 }}
//             className="max-w-[590px]"
//           >
//             <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#1266A3]">
//               Introducing Pingo Screens
//             </p>

//             <h2
//               id="pingo-intro-heading"
//               className="text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
//             >
//               Beyond Screens.
//               <br />
//               <span className="text-[#1266A3]">Beyond Imagination.</span>
//             </h2>

//             <p className="mt-7 max-w-[440px] text-base leading-8 text-[#485C71] md:text-lg">
//               Bringing spaces to life through remarkable digital display experiences.
//             </p>

//             <Link
//               to="/about"
//               className="mt-9 inline-flex items-center gap-3 border-b border-[#1266A3] pb-2 text-sm font-semibold text-[#142B48] transition-colors duration-300 hover:text-[#1266A3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1266A3]"
//             >
//               Discover Pingo Screens
//               <ArrowUpRight size={18} aria-hidden="true" />
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: reducedMotion ? 0 : 0.9 }}
//             className="aspect-[5/4] w-full overflow-hidden bg-[#E2E8F0] lg:aspect-[4/4.5]"
//           >
//             <img
//               src="/images/hero/indoor-led.webp"
//               alt="Indoor LED display in a contemporary commercial space"
//               loading="lazy"
//               decoding="async"
//               className="h-full w-full object-cover transition-transform duration-1000 ease-out motion-safe:hover:scale-[1.04]"
//             />
//           </motion.div>
//         </div>
//       </section> */}



// {/* SECTION 02 — INTRODUCING PINGO SCREENS */}

// <section
//   id="introduction"
//   aria-labelledby="pingo-intro-heading"
//   className="w-full bg-[#F9FAFC] py-16 sm:py-20 lg:py-28"
// >
//   <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:gap-20 xl:px-20">

//     {/* LEFT — BRAND INTRODUCTION */}
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: reducedMotion ? 0 : 0.8 }}
//       className="max-w-[590px]"
//     >
//       {/* SECTION LABEL */}
//       <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#0047C0]">
//         Introducing Pingo Screens
//       </p>

//       {/* HEADING */}
//       <h2
//         id="pingo-intro-heading"
//         className="text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
//       >
//         Beyond Screens.
//         <br />
//         <span className="text-[#0047C0]">
//           Beyond Imagination.
//         </span>
//       </h2>

//       {/* DESCRIPTION */}
//       <p className="mt-7 max-w-[440px] text-base leading-8 text-[#485C71] md:text-lg">
//         Bringing spaces to life through remarkable digital
//         display experiences.
//       </p>

//       {/* ABOUT LINK */}
//       <Link
//         to="/about"
//         className="group mt-9 inline-flex items-center gap-3 border-b border-[#0047C0] pb-2 text-sm font-semibold text-[#142B48] transition-colors duration-300 hover:text-[#0047C0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
//       >
//         Discover Pingo Screens

//         <ArrowUpRight
//           size={18}
//           aria-hidden="true"
//           className="text-[#0047C0] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
//         />
//       </Link>
//     </motion.div>

//     {/* RIGHT — DISPLAY IMAGE */}
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: reducedMotion ? 0 : 0.9 }}
//       className="aspect-[5/4] w-full overflow-hidden bg-[#E2E8F0] lg:aspect-[4/4.5]"
//     >
//       <img
//         src="/images/home/introduction.webp"
//         alt="Indoor LED display in a contemporary commercial space"
//         loading="lazy"
//         decoding="async"
//         className="h-full w-full object-cover transition-transform duration-1000 ease-out motion-safe:hover:scale-[1.04]"
//       />
//     </motion.div>
//   </div>
// </section>


//       {/* SECTION 03 — OUR PRODUCTS */}
//       {/* <section id="our-products" aria-labelledby="our-products-heading" className="w-full bg-white py-16 sm:py-20 lg:py-28">
//         <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.15 }}
//             transition={{ duration: reducedMotion ? 0 : 0.7 }}
//             className="mb-10 text-center sm:mb-14"
//           >
//             <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1266A3]">Explore Our Collection</p>
//             <h2 id="our-products-heading" className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#142B48] sm:text-5xl lg:text-6xl">Our Products</h2>
//             <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[#485C71] sm:text-base">Discover screens designed for remarkable visual experiences.</p>
//           </motion.div>

//           <div
//             ref={productsRef}
//             role="region"
//             aria-roledescription="carousel"
//             aria-label="Screen product collection"
//             tabIndex={0}
//             className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-[#1266A3] [&::-webkit-scrollbar]:hidden sm:gap-6"
//           >
//             {showcaseProducts.map((product, index) => (
//               <article key={product.id} className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
//                 <Link
//                   to="/products"
//                   aria-label={`View ${product.name} in products`}
//                   className="group block h-full overflow-hidden bg-[#142B48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1266A3]"
//                 >
//                   <div className="relative h-[300px] overflow-hidden bg-[#E7EDF4] sm:h-[370px] lg:h-[410px] xl:h-[450px]">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       loading="lazy"
//                       decoding="async"
//                       className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#071422]/65 via-transparent to-transparent" aria-hidden="true" />
//                     <span className="absolute left-5 top-5 border border-white/50 bg-[#071422]/40 px-3 py-2 text-xs tracking-[0.16em] text-white backdrop-blur-sm">0{index + 1}</span>
//                     <div className="absolute inset-0 flex items-center justify-center bg-[#071422]/85 px-7 opacity-0 transition-opacity duration-700 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100">
//                       <div className="max-w-[310px] text-center text-white">
//                         <h3 className="text-2xl font-semibold">{product.name}</h3>
//                         <p className="mt-4 text-sm leading-7 text-white/85">{product.description}</p>
//                         <span className="mt-6 inline-flex items-center gap-2 border-b border-[#77DDF7] pb-2 text-sm text-[#77DDF7]">Explore Screens <ArrowUpRight size={16} aria-hidden="true" /></span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex min-h-[78px] items-center justify-between gap-3 px-5 py-4 transition-colors duration-500 group-hover:bg-[#1266A3] group-focus-visible:bg-[#1266A3] sm:px-6">
//                     <h3 className="text-base font-semibold text-white sm:text-lg">{product.name}</h3>
//                     <ArrowUpRight size={20} className="shrink-0 text-white" aria-hidden="true" />
//                   </div>
//                 </Link>
//               </article>
//             ))}
//           </div>

//           <div className="mt-7 flex items-center justify-between gap-4">
//             <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#64748B]">Swipe or browse</span>
//             <div className="flex items-center gap-2">
//               <button type="button" onClick={() => scrollProducts(-1)} aria-label="Scroll products left" className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#142B48] transition-colors hover:bg-[#142B48] hover:text-white"><ArrowLeft size={19} /></button>
//               <button type="button" onClick={() => scrollProducts(1)} aria-label="Scroll products right" className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#142B48] transition-colors hover:bg-[#142B48] hover:text-white"><ArrowRight size={19} /></button>
//             </div>
//           </div>

//           <div className="mt-10 text-center sm:mt-12">
//             <Link to="/products" className="group inline-flex min-h-12 items-center gap-3 bg-[#142B48] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1266A3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1266A3]">
//               View All Products
//               <ArrowUpRight size={18} className="transition-transform duration-300 motion-safe:group-hover:translate-x-1" aria-hidden="true" />
//             </Link>
//           </div>
//         </div>
//       </section> */}




// {/* SECTION 03 — OUR PRODUCTS */}

// <section
//   id="our-products"
//   aria-labelledby="our-products-heading"
//   className="w-full bg-white py-16 sm:py-20 lg:py-28"
// >
//   <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

//     {/* SECTION HEADING */}
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{ duration: reducedMotion ? 0 : 0.7 }}
//       className="mb-10 text-center sm:mb-14"
//     >
//       <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0047C0]">
//         Explore Our Collection
//       </p>

//       <h2
//         id="our-products-heading"
//         className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#142B48] sm:text-5xl lg:text-6xl"
//       >
//         Our Products
//       </h2>

//       <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[#485C71] sm:text-base">
//         Discover screens designed for remarkable visual experiences.
//       </p>
//     </motion.div>

//     {/* PRODUCT CAROUSEL */}
//     <div
//       ref={productsRef}
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Screen product collection"
//       tabIndex={0}
//       className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-[#0047C0] [&::-webkit-scrollbar]:hidden sm:gap-6"
//     >
//       {showcaseProducts.map((product, index) => (
//         <article
//           key={product.id}
//           className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
//         >
//           <Link
//             to="/products"
//             aria-label={`View ${product.name} in products`}
//             className="group block h-full overflow-hidden bg-[#142B48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
//           >
//             {/* PRODUCT IMAGE */}
//             <div className="relative h-[300px] overflow-hidden bg-[#E7EDF4] sm:h-[370px] lg:h-[410px] xl:h-[450px]">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 loading="lazy"
//                 decoding="async"
//                 className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
//               />

//               {/* IMAGE GRADIENT */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-[#071422]/65 via-transparent to-transparent"
//                 aria-hidden="true"
//               />

//               {/* PRODUCT NUMBER */}
//               <span className="absolute left-5 top-5 border border-white/50 bg-[#071422]/40 px-3 py-2 text-xs tracking-[0.16em] text-white backdrop-blur-sm">
//                 0{index + 1}
//               </span>

//               {/* HOVER OVERLAY */}
//               <div className="absolute inset-0 flex items-center justify-center bg-[#071422]/85 px-7 opacity-0 transition-opacity duration-700 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100">
//                 <div className="max-w-[310px] text-center text-white">
//                   <h3 className="text-2xl font-semibold">
//                     {product.name}
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-white/85">
//                     {product.description}
//                   </p>

//                   <span className="mt-6 inline-flex items-center gap-2 border-b border-[#A9C5FF] pb-2 text-sm font-semibold text-[#A9C5FF]">
//                     Explore Screens

//                     <ArrowUpRight
//                       size={16}
//                       aria-hidden="true"
//                     />
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* PRODUCT NAME BAR */}
//             <div className="flex min-h-[78px] items-center justify-between gap-3 bg-[#0047C0] px-5 py-4 transition-colors duration-500 group-hover:bg-[#003799] group-focus-visible:bg-[#003799] sm:px-6">
//               <h3 className="text-base font-semibold text-white sm:text-lg">
//                 {product.name}
//               </h3>

//               <ArrowUpRight
//                 size={20}
//                 className="shrink-0 text-white"
//                 aria-hidden="true"
//               />
//             </div>
//           </Link>
//         </article>
//       ))}
//     </div>

//     {/* CAROUSEL CONTROLS */}
//     <div className="mt-7 flex items-center justify-between gap-4">
//       <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#64748B]">
//         Swipe or browse
//       </span>

//       <div className="flex items-center gap-2">
//         <button
//           type="button"
//           onClick={() => scrollProducts(-1)}
//           aria-label="Scroll products left"
//           className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#0047C0] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white"
//         >
//           <ArrowLeft size={19} />
//         </button>

//         <button
//           type="button"
//           onClick={() => scrollProducts(1)}
//           aria-label="Scroll products right"
//           className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#0047C0] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white"
//         >
//           <ArrowRight size={19} />
//         </button>
//       </div>
//     </div>

//     {/* VIEW ALL PRODUCTS */}
//     <div className="mt-10 text-center sm:mt-12">
//       <Link
//         to="/products"
//         className="group inline-flex min-h-12 items-center gap-3 bg-[#0047C0] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#003799] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
//       >
//         View All Products

//         <ArrowUpRight
//           size={18}
//           aria-hidden="true"
//           className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
//         />
//       </Link>
//     </div>

//   </div>
// </section>

//       {/* SECTION 04 — EXPERIENCE THE POSSIBILITIES */}
//       {/* <section
//         ref={visionRef}
//         id="display-experience"
//         aria-labelledby="display-experience-title"
//         className="w-full overflow-hidden bg-[#F9FAFC] py-20 sm:py-24 lg:py-28"
//       >
//         <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-14">
//             <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#1266A3]">
//               A New Dimension of Display
//             </p>
//             <h2
//               id="display-experience-title"
//               className="mt-4 text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
//             >
//               Experience More With Every Screen.
//             </h2>
//             <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#485C71] sm:text-base sm:leading-8">
//               Bring your ideas into focus with display experiences made for modern spaces.
//             </p>
//           </div>

//           <motion.div
//             style={reducedMotion ? undefined : { scale: visionScale, opacity: visionOpacity }}
//             className="relative mx-auto w-full origin-center transform-gpu overflow-hidden bg-[#142B48]"
//           >
//             <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/8]">
//               <img
//                 src="/images/hero/outdoor-led.webp"
//                 alt="Large outdoor LED display bringing visual content into an architectural setting"
//                 loading="lazy"
//                 decoding="async"
//                 className="h-full w-full object-cover"
//               />
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061421]/70 via-[#061421]/10 to-transparent"
//               />
//               <div className="absolute bottom-0 left-0 p-6 text-white sm:p-10 lg:p-14">
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A5E9FF] sm:text-xs">
//                   Pingo Screens
//                 </span>
//                 <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
//                   Visuals That Transform Spaces.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section> */}



// {/* SECTION 04 — DISPLAY EXPERIENCE */}

// <section
//   ref={visionRef}
//   id="display-experience"
//   aria-labelledby="display-experience-title"
//   className="w-full overflow-hidden bg-[#F9FAFC] py-20 sm:py-24 lg:py-28"
// >
//   <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

//     {/* SECTION HEADING */}
//     <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-14">

//       <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#0047C0]">
//         A New Dimension of Display
//       </p>

//       <h2
//         id="display-experience-title"
//         className="mt-4 text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
//       >
//         Experience More With Every Screen.
//       </h2>

//       <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#485C71] sm:text-base sm:leading-8">
//         Bring your ideas into focus with display experiences
//         made for modern spaces.
//       </p>
//     </div>

//     {/* SCROLL-RESPONSIVE DISPLAY IMAGE */}
//     <motion.div
//       style={
//         reducedMotion
//           ? undefined
//           : {
//               scale: visionScale,
//               opacity: visionOpacity,
//             }
//       }
//       className="relative mx-auto w-full origin-center transform-gpu overflow-hidden bg-[#142B48]"
//     >
//       <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/8]">

//         {/* DISPLAY IMAGE */}
//         <img
//           src="/images/home/display-experience.webp"
//           alt="Large outdoor LED display bringing visual content into an architectural setting"
//           loading="lazy"
//           decoding="async"
//           className="h-full w-full object-cover"
//         />

//         {/* IMAGE GRADIENT FOR READABILITY */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061421]/70 via-[#061421]/10 to-transparent"
//         />

//         {/* IMAGE CAPTION */}
//         <div className="absolute bottom-0 left-0 p-6 text-white sm:p-10 lg:p-14">

//           <span className="inline-block border-l-2 border-[#0047C0] pl-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white sm:text-xs">
//             Pingo Screens
//           </span>

//           <p className="mt-4 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
//             Visuals That Transform Spaces.
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </section>




//     </main>

//   );

// }







// import { useCallback, useEffect, useRef, useState } from "react";
// import { Link } from "react-router";
// import { motion, useReducedMotion } from "motion/react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ArrowUpRight,
//   Pause,
//   Play,
// } from "lucide-react";

// // ==========================================
// // PINGO SCREENS — HERO SLIDES
// // ==========================================

// const slides = [
//   {
//     id: 1,
//     category: "INDOOR LED DISPLAYS",
//     title: "Transform Every Interior.",
//     description:
//       "Extraordinary visual experiences for premium interiors, commercial spaces, and modern environments.",
//     image: "/images/hero/indoor-led.webp",
//     position: "center",
//   },
//   {
//     id: 2,
//     category: "OUTDOOR LED DISPLAYS",
//     title: "Make Every Impression Count.",
//     description:
//       "Dynamic large-format displays that bring brands, messages, and cityscapes to life.",
//     image: "/images/hero/outdoor-led.webp",
//     position: "center",
//   },
//   {
//     id: 3,
//     category: "TRANSPARENT LED DISPLAYS",
//     title: "Where Vision Meets Architecture.",
//     description:
//       "Discover creative visual possibilities with transparent display experiences.",
//     image: "/images/hero/transparent-led.webp",
//     position: "center",
//   },
//   {
//     id: 4,
//     category: "FINE PITCH LED DISPLAYS",
//     title: "Experience Every Detail.",
//     description:
//       "Remarkable clarity for professional environments where precision matters.",
//     image: "/images/hero/fine-pitch-led.webp",
//     position: "center",
//   },
//   {
//     id: 5,
//     category: "CREATIVE LED DISPLAYS",
//     title: "Beyond the Ordinary.",
//     description:
//       "Immersive, curved, and architectural display experiences that inspire.",
//     image: "/images/hero/creative-led.webp",
//     position: "center",
//   },
// ] as const;

// // ==========================================
// // ANIMATION SETTINGS
// // ==========================================

// const SLIDE_DURATION = 10000;
// const IMAGE_TRANSITION = 2400;
// const TEXT_TRANSITION = 900;

// export default function Home() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [ready, setReady] = useState<number[]>([]);
//   const [contentVisible, setContentVisible] = useState(true);

//   const reducedMotion = Boolean(useReducedMotion());

//   const textTimer = useRef<ReturnType<
//     typeof setTimeout
//   > | null>(null);

//   // ==========================================
//   // PRELOAD HERO IMAGES
//   // ==========================================

//   useEffect(() => {
//     let cancelled = false;

//     slides.forEach((slide, index) => {
//       const image = new Image();

//       const markReady = () => {
//         if (cancelled) return;

//         setReady((previous) =>
//           previous.includes(index)
//             ? previous
//             : [...previous, index]
//         );
//       };

//       const decodeImage = () => {
//         if (typeof image.decode === "function") {
//           image
//             .decode()
//             .then(markReady)
//             .catch(() => {
//               if (image.naturalWidth > 0) {
//                 markReady();
//               }
//             });
//         } else {
//           markReady();
//         }
//       };

//       image.onload = decodeImage;
//       image.src = slide.image;

//       if (
//         image.complete &&
//         image.naturalWidth > 0
//       ) {
//         decodeImage();
//       }
//     });

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // ==========================================
//   // CHANGE SLIDES WITHOUT TEXT MOVEMENT
//   // ==========================================

//   const changeSlide = useCallback(
//     (nextIndex: number) => {
//       const index =
//         (nextIndex + slides.length) %
//         slides.length;

//       if (!ready.includes(index)) return;
//       if (index === active) return;

//       if (textTimer.current) {
//         clearTimeout(textTimer.current);
//       }

//       if (reducedMotion) {
//         setActive(index);
//         setContentVisible(true);
//         return;
//       }

//       // Fade out content at its current position
//       setContentVisible(false);

//       // Change the image and text after fade-out
//       textTimer.current = setTimeout(() => {
//         setActive(index);

//         // Fade in the new content
//         setContentVisible(true);
//       }, TEXT_TRANSITION);
//     },
//     [active, ready, reducedMotion]
//   );

//   const nextSlide = useCallback(() => {
//     for (
//       let offset = 1;
//       offset < slides.length;
//       offset++
//     ) {
//       const next =
//         (active + offset) % slides.length;

//       if (ready.includes(next)) {
//         changeSlide(next);
//         return;
//       }
//     }
//   }, [active, ready, changeSlide]);

//   const previousSlide = useCallback(() => {
//     for (
//       let offset = 1;
//       offset < slides.length;
//       offset++
//     ) {
//       const previous =
//         (active - offset + slides.length) %
//         slides.length;

//       if (ready.includes(previous)) {
//         changeSlide(previous);
//         return;
//       }
//     }
//   }, [active, ready, changeSlide]);

//   // ==========================================
//   // AUTOMATIC SLIDESHOW
//   // ==========================================

//   useEffect(() => {
//     if (paused || reducedMotion) return;
//     if (ready.length < 2) return;

//     const timer = setTimeout(
//       nextSlide,
//       SLIDE_DURATION
//     );

//     return () => clearTimeout(timer);
//   }, [
//     active,
//     paused,
//     reducedMotion,
//     ready,
//     nextSlide,
//   ]);

//   // ==========================================
//   // CLEAN UP TIMERS
//   // ==========================================

//   useEffect(() => {
//     return () => {
//       if (textTimer.current) {
//         clearTimeout(textTimer.current);
//       }
//     };
//   }, []);

//   const current = slides[active];

//   // ==========================================
//   // HOMEPAGE
//   // ==========================================

//   return (
//     <main className="w-full overflow-x-hidden">
//       <section
//         aria-label="Pingo Screens cinematic showcase"
//         className="
//           relative isolate
//           h-[calc(100svh-76px)]
//           min-h-[560px]
//           w-full overflow-hidden
//           bg-[#081320]
//           lg:h-[calc(100svh-84px)]
//         "
//       >
//         {/* =====================================
//             CINEMATIC BACKGROUND
//         ===================================== */}

//         <div className="absolute inset-0 z-0">
//           {slides.map((slide, index) => {
//             const isActive = active === index;

//             return (
//               <div
//                 key={slide.id}
//                 aria-hidden="true"
//                 className={`
//                   absolute inset-0
//                   transition-opacity
//                   ${
//                     reducedMotion
//                       ? "duration-0"
//                       : "duration-[2400ms] ease-in-out"
//                   }
//                   ${
//                     isActive
//                       ? "z-10 opacity-100"
//                       : "z-0 opacity-0"
//                   }
//                 `}
//               >
//                 <motion.img
//                   src={slide.image}
//                   alt=""
//                   draggable={false}
//                   loading="eager"
//                   decoding="async"
//                   initial={false}
//                   animate={{
//                     scale:
//                       isActive && !reducedMotion
//                         ? 1
//                         : 1.075,
//                   }}
//                   transition={{
//                     duration: reducedMotion
//                       ? 0
//                       : SLIDE_DURATION / 1000,
//                     ease: "linear",
//                   }}
//                   style={{
//                     objectPosition: slide.position,
//                   }}
//                   className="
//                     h-full w-full
//                     object-cover
//                     transform-gpu
//                   "
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* =====================================
//             DARK GRADIENT OVERLAYS
//         ===================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute inset-0 z-10
//             bg-gradient-to-r
//             from-[#061421]/85
//             via-[#061421]/45
//             to-[#061421]/10
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute inset-0 z-10
//             bg-gradient-to-t
//             from-[#061421]/75
//             via-transparent
//             to-transparent
//           "
//         />

//         {/* =====================================
//             HERO TEXT
//         ===================================== */}

//         <div
//           className="
//             relative z-20
//             mx-auto flex h-full w-full
//             max-w-[1600px]
//             items-center
//             px-6 sm:px-10
//             lg:px-16 xl:px-24
//           "
//         >
//           {/* Fixed content positioning */}
//           <div
//             className="
//               flex w-full max-w-[850px]
//               flex-col justify-center
//               pb-24
//               sm:pb-20
//               lg:pb-12
//             "
//           >
//             <motion.div
//               initial={false}
//               animate={{
//                 opacity:
//                   contentVisible ? 1 : 0,
//               }}
//               transition={{
//                 duration: reducedMotion
//                   ? 0
//                   : TEXT_TRANSITION / 1000,
//                 ease: "easeInOut",
//               }}
//               className="w-full"
//             >
//               {/* CATEGORY LABEL */}
//               <div className="mb-6 flex items-center gap-4">
//                 <span
//                   className="
//                     h-px w-10
//                     bg-[#79DCFA]
//                   "
//                 />

//                 <span
//                   className="
//                     text-[10px]
//                     font-semibold
//                     tracking-[0.28em]
//                     text-[#91E5FF]
//                     sm:text-xs
//                   "
//                 >
//                   {current.category}
//                 </span>
//               </div>

//               {/* MAIN HEADLINE */}
//               <h1
//                 className="
//                   max-w-[850px]
//                   text-[clamp(2.4rem,5.2vw,5.6rem)]
//                   leading-[1.08]
//                   font-semibold
//                   tracking-[-0.045em]
//                   text-white
//                 "
//               >
//                 {current.title}
//               </h1>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//                   mt-7 max-w-[550px]
//                   text-sm leading-7
//                   font-normal text-white/85
//                   sm:text-base
//                   md:text-lg md:leading-8
//                 "
//               >
//                 {current.description}
//               </p>

//               {/* ACTION BUTTONS */}
//               <div
//                 className="
//                   mt-9 flex flex-wrap
//                   items-center gap-5
//                 "
//               >
//                 <Link
//                   to="/products"
//                   className="
//                     group inline-flex
//                     min-h-12 items-center
//                     gap-3 bg-white
//                     px-7 py-3
//                     text-sm font-semibold
//                     text-[#102C4C]
//                     transition-colors
//                     duration-300
//                     hover:bg-[#DDF6FF]
//                   "
//                 >
//                   Explore Screens

//                   <ArrowUpRight
//                     size={18}
//                     className="
//                       transition-transform
//                       duration-300
//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5
//                     "
//                   />
//                 </Link>

//                 <Link
//                   to="/applications"
//                   className="
//                     inline-flex min-h-12
//                     items-center gap-2
//                     border-b border-white/60
//                     text-sm font-medium
//                     text-white
//                     transition-colors
//                     hover:border-[#91E5FF]
//                     hover:text-[#91E5FF]
//                   "
//                 >
//                   View Applications

//                   <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* =====================================
//             BOTTOM SLIDE CONTROLS
//         ===================================== */}

//         <div className="absolute inset-x-0 bottom-0 z-30">
//           <div
//             className="
//               mx-auto flex w-full
//               max-w-[1600px]
//               flex-col gap-3
//               px-6 pb-5
//               sm:px-10 sm:pb-9
//               lg:flex-row
//               lg:items-end
//               lg:justify-between
//               lg:px-16 xl:px-24
//             "
//           >
//             {/* SLIDE INDICATORS */}
//             <div
//               className="
//                 flex w-full max-w-[390px]
//                 items-center gap-3
//               "
//             >
//               <span className="text-xs font-medium text-white tabular-nums">
//                 0{active + 1}
//               </span>

//               <div className="flex flex-1 gap-2">
//                 {slides.map((slide, index) => (
//                   <button
//                     key={slide.id}
//                     type="button"
//                     disabled={
//                       !ready.includes(index)
//                     }
//                     onClick={() =>
//                       changeSlide(index)
//                     }
//                     aria-label={`Show ${slide.category}`}
//                     aria-current={
//                       active === index
//                         ? "true"
//                         : undefined
//                     }
//                     className="
//                       group flex h-9 flex-1
//                       items-center
//                       disabled:cursor-wait
//                     "
//                   >
//                     <span
//                       className={`
//                         h-[2px] w-full
//                         transition-colors
//                         duration-500
//                         ${
//                           active === index
//                             ? "bg-[#7DE3FF]"
//                             : "bg-white/35 group-hover:bg-white/75"
//                         }
//                       `}
//                     />
//                   </button>
//                 ))}
//               </div>

//               <span className="text-xs text-white/65 tabular-nums">
//                 0{slides.length}
//               </span>
//             </div>

//             {/* SLIDE CONTROLS */}
//             <div
//               className="
//                 flex items-center
//                 justify-between
//                 gap-5
//                 sm:justify-end
//               "
//             >
//               <div className="flex items-center gap-2">

//                 {/* PLAY / PAUSE */}
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setPaused((value) => !value)
//                   }
//                   aria-label={
//                     paused
//                       ? "Play slideshow"
//                       : "Pause slideshow"
//                   }
//                   aria-pressed={paused}
//                   className="
//                     flex h-11 w-11
//                     items-center justify-center
//                     border border-white/35
//                     text-white
//                     transition-colors
//                     hover:border-white
//                     hover:bg-white/15
//                   "
//                 >
//                   {paused || reducedMotion ? (
//                     <Play size={17} />
//                   ) : (
//                     <Pause size={17} />
//                   )}
//                 </button>

//                 {/* PREVIOUS */}
//                 <button
//                   type="button"
//                   onClick={previousSlide}
//                   aria-label="Previous slide"
//                   className="
//                     flex h-11 w-11
//                     items-center justify-center
//                     border border-white/35
//                     text-white
//                     transition-colors
//                     hover:border-white
//                     hover:bg-white/15
//                   "
//                 >
//                   <ArrowLeft size={19} />
//                 </button>

//                 {/* NEXT */}
//                 <button
//                   type="button"
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="
//                     flex h-11 w-11
//                     items-center justify-center
//                     border border-white/35
//                     text-white
//                     transition-colors
//                     hover:border-white
//                     hover:bg-white/15
//                   "
//                 >
//                   <ArrowRight size={19} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }















import { useCallback, useEffect, useRef, useState } from "react";

import { Link } from "react-router";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import {

  ArrowLeft,

  ArrowRight,

  ArrowUpRight,

  Pause,

  Play,

} from "lucide-react";

// PINGO SCREENS — HERO SLIDES

const slides = [

  {

    id: 1,

    category: "INDOOR LED DISPLAYS",

    title: "Transform Every Interior.",

    description:

      "Extraordinary visual experiences for premium interiors, commercial spaces, and modern environments.",

    image: "/images/hero/indoor-led.webp",

    position: "center",

  },

  {

    id: 2,

    category: "OUTDOOR LED DISPLAYS",

    title: "Make Every Impression Count.",

    description:

      "Dynamic large-format displays that bring brands, messages, and cityscapes to life.",

    image: "/images/hero/outdoor-led.webp",

    position: "center",

  },

  {

    id: 3,

    category: "TRANSPARENT LED DISPLAYS",

    title: "Where Vision Meets Architecture.",

    description:

      "Discover creative visual possibilities with transparent display experiences.",

    image: "/images/hero/transparent-led.webp",

    position: "center",

  },

  {

    id: 4,

    category: "FINE PITCH LED DISPLAYS",

    title: "Experience Every Detail.",

    description:

      "Remarkable clarity for professional environments where precision matters.",

    image: "/images/hero/fine-pitch-led.webp",

    position: "center",

  },

  {

    id: 5,

    category: "CREATIVE LED DISPLAYS",

    title: "Beyond the Ordinary.",

    description:

      "Immersive, curved, and architectural display experiences that inspire.",

    image: "/images/hero/creative-led.webp",

    position: "center",

  },

] as const;


// ANIMATION SETTINGS

// SECTION 03 — PRODUCT COLLECTION (edit titles and image paths here)
const showcaseProducts = [
  { id: "control", name: "LED Control Systems", description: "Senders, receiving cards, accessories and control software.", image: "/images/products/control/s20-s20f.webp" },
  { id: "fine-pitch", name: "Fine Pitch Displays", description: "Fine-resolution LED displays for close viewing.", image: "/images/products/fine-pitch/spectra.webp" },
  { id: "indoor", name: "Indoor LED Video Walls", description: "LED technologies for immersive indoor spaces.", image: "/images/products/indoor/vega-series.webp" },
  { id: "outdoor", name: "Outdoor LED Video Walls", description: "High-visibility displays and architectural systems.", image: "/images/products/outdoor/earth-series.webp" },
  { id: "rental", name: "Rental Displays", description: "Event-ready and touring LED configurations.", image: "/images/products/rental/arena-series.webp" },
  { id: "sports", name: "Sports Series", description: "Display systems for stadiums and sports venues.", image: "/images/products/sports/atlas.webp" },
];

const SLIDE_DURATION = 10000;

const TEXT_TRANSITION = 900;

export default function Home() {

  const [active, setActive] = useState(0);

  const [paused, setPaused] = useState(false);

  const [ready, setReady] = useState<number[]>([]);

  const [contentVisible, setContentVisible] = useState(true);



  const reducedMotion = Boolean(useReducedMotion());

  // Product carousel: keep its scroll behavior independent from the hero.
  const productsRef = useRef<HTMLDivElement>(null);

  // Section 04: gradual reveal tied to the section entering the viewport.
  const visionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: visionProgress } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"],
  });
  const visionScale = useTransform(
    visionProgress,
    [0, 0.42, 0.65, 1],
    [0.85, 1, 1, 0.9]
  );
  const visionOpacity = useTransform(
    visionProgress,
    [0, 0.42, 0.65, 1],
    [0.4, 1, 1, 0.55]
  );

  const scrollProducts = (direction: -1 | 1) => {
    const list = productsRef.current;
    const card = list?.firstElementChild as HTMLElement | null;
    if (!list || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(list).gap) || 0;
    list.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };




  const textTimer = useRef<ReturnType<

    typeof setTimeout

  > | null>(null);



  // ==========================================

  // PRELOAD HERO IMAGES

  // ==========================================



  useEffect(() => {

    let cancelled = false;



    slides.forEach((slide, index) => {

      const image = new Image();



      const markReady = () => {

        if (cancelled) return;



        setReady((previous) =>

          previous.includes(index)

            ? previous

            : [...previous, index]

        );

      };



      const decodeImage = () => {

        if (typeof image.decode === "function") {

          image

            .decode()

            .then(markReady)

            .catch(() => {

              if (image.naturalWidth > 0) {

                markReady();

              }

            });

        } else {

          markReady();

        }

      };



      image.onload = decodeImage;

      image.src = slide.image;



      if (

        image.complete &&

        image.naturalWidth > 0

      ) {

        decodeImage();

      }

    });



    return () => {

      cancelled = true;

    };

  }, []);



  // ==========================================

  // CHANGE SLIDES WITHOUT TEXT MOVEMENT

  // ==========================================



  const changeSlide = useCallback(

    (nextIndex: number) => {

      const index =

        (nextIndex + slides.length) %

        slides.length;



      if (!ready.includes(index)) return;

      if (index === active) return;



      if (textTimer.current) {

        clearTimeout(textTimer.current);

      }



      if (reducedMotion) {

        setActive(index);

        setContentVisible(true);

        return;

      }



      // Fade out content at its current position

      setContentVisible(false);



      // Change the image and text after fade-out

      textTimer.current = setTimeout(() => {

        setActive(index);



        // Fade in the new content

        setContentVisible(true);

      }, TEXT_TRANSITION);

    },

    [active, ready, reducedMotion]

  );



  const nextSlide = useCallback(() => {

    for (

      let offset = 1;

      offset < slides.length;

      offset++

    ) {

      const next =

        (active + offset) % slides.length;



      if (ready.includes(next)) {

        changeSlide(next);

        return;

      }

    }

  }, [active, ready, changeSlide]);



  const previousSlide = useCallback(() => {

    for (

      let offset = 1;

      offset < slides.length;

      offset++

    ) {

      const previous =

        (active - offset + slides.length) %

        slides.length;



      if (ready.includes(previous)) {

        changeSlide(previous);

        return;

      }

    }

  }, [active, ready, changeSlide]);



  // ==========================================

  // AUTOMATIC SLIDESHOW

  // ==========================================



  useEffect(() => {

    if (paused || reducedMotion) return;

    if (ready.length < 2) return;



    const timer = setTimeout(

      nextSlide,

      SLIDE_DURATION

    );



    return () => clearTimeout(timer);

  }, [

    active,

    paused,

    reducedMotion,

    ready,

    nextSlide,

  ]);



  // ==========================================

  // CLEAN UP TIMERS

  // ==========================================



  useEffect(() => {

    return () => {

      if (textTimer.current) {

        clearTimeout(textTimer.current);

      }

    };

  }, []);



  const current = slides[active];



  // ==========================================

  // HOMEPAGE

  // ==========================================



  return (

    <main className="w-full overflow-x-hidden">

      <section

        aria-label="Pingo Screens cinematic showcase"

        className="

          relative isolate

          h-[calc(100svh-76px)]

          min-h-[560px]

          w-full overflow-hidden

          bg-[#081320]

          lg:h-[calc(100svh-84px)]

        "

      >

        {/* =====================================

            CINEMATIC BACKGROUND

        ===================================== */}



        <div className="absolute inset-0 z-0">

          {slides.map((slide, index) => {

            const isActive = active === index;



            return (

              <div

                key={slide.id}

                aria-hidden="true"

                className={`

                  absolute inset-0

                  transition-opacity

                  ${

                    reducedMotion

                      ? "duration-0"

                      : "duration-[2400ms] ease-in-out"

                  }

                  ${

                    isActive

                      ? "z-10 opacity-100"

                      : "z-0 opacity-0"

                  }

                `}

              >

                <motion.img

                  src={slide.image}

                  alt=""

                  draggable={false}

                  loading="eager"

                  decoding="async"

                  initial={false}

                  animate={{

                    scale:

                      isActive && !reducedMotion

                        ? 1

                        : 1.075,

                  }}

                  transition={{

                    duration: reducedMotion

                      ? 0

                      : SLIDE_DURATION / 1000,

                    ease: "linear",

                  }}

                  style={{

                    objectPosition: slide.position,

                  }}

                  className="

                    h-full w-full

                    object-cover

                    transform-gpu

                  "

                />

              </div>

            );

          })}

        </div>



        {/* =====================================

            DARK GRADIENT OVERLAYS

        ===================================== */}



        <div

          className="

            pointer-events-none

            absolute inset-0 z-10

            bg-gradient-to-r

            from-[#061421]/85

            via-[#061421]/45

            to-[#061421]/10

          "

        />



        <div

          className="

            pointer-events-none

            absolute inset-0 z-10

            bg-gradient-to-t

            from-[#061421]/75

            via-transparent

            to-transparent

          "

        />



        {/* =====================================

            HERO TEXT

        ===================================== */}



        <div

          className="

            relative z-20

            mx-auto flex h-full w-full

            max-w-[1600px]

            items-center

            px-6 sm:px-10

            lg:px-16 xl:px-24

          "

        >

          {/* Fixed content positioning */}

          <div

            className="

              flex w-full max-w-[850px]

              flex-col justify-center

              pb-24

              sm:pb-20

              lg:pb-12

            "

          >

            <motion.div

              initial={false}

              animate={{

                opacity:

                  contentVisible ? 1 : 0,

              }}

              transition={{

                duration: reducedMotion

                  ? 0

                  : TEXT_TRANSITION / 1000,

                ease: "easeInOut",

              }}

              className="w-full"

            >

              {/* CATEGORY LABEL */}

              <div className="mb-6 flex items-center gap-4">

                <span

                  className="

                    h-px w-10

                    bg-[#79DCFA]

                  "

                />



                <span

                  className="

                    text-[10px]

                    font-semibold

                    tracking-[0.28em]

                    text-[#91E5FF]

                    sm:text-xs

                  "

                >

                  {current.category}

                </span>

              </div>



              {/* MAIN HEADLINE */}

              <h1

                className="

                  max-w-[850px]

                  text-[clamp(2.4rem,5.2vw,5.6rem)]

                  leading-[1.08]

                  font-semibold

                  tracking-[-0.045em]

                  text-white

                "

              >

                {current.title}

              </h1>



              {/* DESCRIPTION */}

              <p

                className="

                  mt-7 max-w-[550px]

                  text-sm leading-7

                  font-normal text-white/85

                  sm:text-base

                  md:text-lg md:leading-8

                "

              >

                {current.description}

              </p>



              {/* ACTION BUTTONS */}

              <div

                className="

                  mt-9 flex flex-wrap

                  items-center gap-5

                "

              >

                <Link

                  to="/products"

                  className="

                    group inline-flex

                    min-h-12 items-center

                    gap-3 bg-white

                    px-7 py-3

                    text-sm font-semibold

                    text-[#102C4C]

                    transition-colors

                    duration-300

                    hover:bg-[#DDF6FF]

                  "

                >

                  Explore Screens



                  <ArrowUpRight

                    size={18}

                    className="

                      transition-transform

                      duration-300

                      group-hover:-translate-y-0.5

                      group-hover:translate-x-0.5

                    "

                  />

                </Link>



                <Link

                  to="/applications"

                  className="

                    inline-flex min-h-12

                    items-center gap-2

                    border-b border-white/60

                    text-sm font-medium

                    text-white

                    transition-colors

                    hover:border-[#91E5FF]

                    hover:text-[#91E5FF]

                  "

                >

                  View Applications



                  <ArrowRight size={17} />

                </Link>

              </div>

            </motion.div>

          </div>

        </div>



        {/* =====================================

            BOTTOM SLIDE CONTROLS

        ===================================== */}



        <div className="absolute inset-x-0 bottom-0 z-30">

          <div

            className="

              mx-auto flex w-full

              max-w-[1600px]

              flex-col gap-3

              px-6 pb-5

              sm:px-10 sm:pb-9

              lg:flex-row

              lg:items-end

              lg:justify-between

              lg:px-16 xl:px-24

            "

          >

            {/* SLIDE INDICATORS */}

            <div

              className="

                flex w-full max-w-[390px]

                items-center gap-3

              "

            >

              <span className="text-xs font-medium text-white tabular-nums">

                0{active + 1}

              </span>



              <div className="flex flex-1 gap-2">

                {slides.map((slide, index) => (

                  <button

                    key={slide.id}

                    type="button"

                    disabled={

                      !ready.includes(index)

                    }

                    onClick={() =>

                      changeSlide(index)

                    }

                    aria-label={`Show ${slide.category}`}

                    aria-current={

                      active === index

                        ? "true"

                        : undefined

                    }

                    className="

                      group flex h-9 flex-1

                      items-center

                      disabled:cursor-wait

                    "

                  >

                    <span

                      className={`

                        h-[2px] w-full

                        transition-colors

                        duration-500

                        ${

                          active === index

                            ? "bg-[#7DE3FF]"

                            : "bg-white/35 group-hover:bg-white/75"

                        }

                      `}

                    />

                  </button>

                ))}

              </div>



              <span className="text-xs text-white/65 tabular-nums">

                0{slides.length}

              </span>

            </div>



            {/* SLIDE CONTROLS */}

            <div

              className="

                flex items-center

                justify-between

                gap-5

                sm:justify-end

              "

            >

              <div className="flex items-center gap-2">



                {/* PLAY / PAUSE */}

                <button

                  type="button"

                  onClick={() =>

                    setPaused((value) => !value)

                  }

                  aria-label={

                    paused

                      ? "Play slideshow"

                      : "Pause slideshow"

                  }

                  aria-pressed={paused}

                  className="

                    flex h-11 w-11

                    items-center justify-center

                    border border-white/35

                    text-white

                    transition-colors

                    hover:border-white

                    hover:bg-white/15

                  "

                >

                  {paused || reducedMotion ? (

                    <Play size={17} />

                  ) : (

                    <Pause size={17} />

                  )}

                </button>



                {/* PREVIOUS */}

                <button

                  type="button"

                  onClick={previousSlide}

                  aria-label="Previous slide"

                  className="

                    flex h-11 w-11

                    items-center justify-center

                    border border-white/35

                    text-white

                    transition-colors

                    hover:border-white

                    hover:bg-white/15

                  "

                >

                  <ArrowLeft size={19} />

                </button>



                {/* NEXT */}

                <button

                  type="button"

                  onClick={nextSlide}

                  aria-label="Next slide"

                  className="

                    flex h-11 w-11

                    items-center justify-center

                    border border-white/35

                    text-white

                    transition-colors

                    hover:border-white

                    hover:bg-white/15

                  "

                >

                  <ArrowRight size={19} />

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SECTION 02 — INTRODUCING PINGO SCREENS */}
      {/* <section
        id="introduction"
        aria-labelledby="pingo-intro-heading"
        className="w-full bg-[#F9FAFC] py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:gap-20 xl:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
            className="max-w-[590px]"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#1266A3]">
              Introducing Pingo Screens
            </p>

            <h2
              id="pingo-intro-heading"
              className="text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
            >
              Beyond Screens.
              <br />
              <span className="text-[#1266A3]">Beyond Imagination.</span>
            </h2>

            <p className="mt-7 max-w-[440px] text-base leading-8 text-[#485C71] md:text-lg">
              Bringing spaces to life through remarkable digital display experiences.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#1266A3] pb-2 text-sm font-semibold text-[#142B48] transition-colors duration-300 hover:text-[#1266A3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1266A3]"
            >
              Discover Pingo Screens
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.9 }}
            className="aspect-[5/4] w-full overflow-hidden bg-[#E2E8F0] lg:aspect-[4/4.5]"
          >
            <img
              src="/images/hero/indoor-led.webp"
              alt="Indoor LED display in a contemporary commercial space"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out motion-safe:hover:scale-[1.04]"
            />
          </motion.div>
        </div>
      </section> */}



{/* SECTION 02 — INTRODUCING PINGO SCREENS */}

<section
  id="introduction"
  aria-labelledby="pingo-intro-heading"
  className="w-full bg-[#F9FAFC] py-16 sm:py-20 lg:py-28"
>
  <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:gap-20 xl:px-20">

    {/* LEFT — BRAND INTRODUCTION */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.8 }}
      className="max-w-[590px]"
    >
      {/* SECTION LABEL */}
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#0047C0]">
        Introducing Pingo Screens
      </p>

      {/* HEADING */}
      <h2
        id="pingo-intro-heading"
        className="text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
      >
        Beyond Screens.
        <br />
        <span className="text-[#0047C0]">
          Beyond Imagination.
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-7 max-w-[440px] text-base leading-8 text-[#485C71] md:text-lg">
        Bringing spaces to life through remarkable digital
        display experiences.
      </p>

      {/* ABOUT LINK */}
      <Link
        to="/about"
        className="group mt-9 inline-flex items-center gap-3 border-b border-[#0047C0] pb-2 text-sm font-semibold text-[#142B48] transition-colors duration-300 hover:text-[#0047C0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
      >
        Discover Pingo Screens

        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="text-[#0047C0] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </Link>
    </motion.div>

    {/* RIGHT — DISPLAY IMAGE */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.9 }}
      className="aspect-[5/4] w-full overflow-hidden bg-[#E2E8F0] lg:aspect-[4/4.5]"
    >
      <img
        src="/images/home/introduction.webp"
        alt="Indoor LED display in a contemporary commercial space"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-1000 ease-out motion-safe:hover:scale-[1.04]"
      />
    </motion.div>
  </div>
</section>


      {/* SECTION 03 — OUR PRODUCTS */}
      {/* <section id="our-products" aria-labelledby="our-products-heading" className="w-full bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reducedMotion ? 0 : 0.7 }}
            className="mb-10 text-center sm:mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1266A3]">Explore Our Collection</p>
            <h2 id="our-products-heading" className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#142B48] sm:text-5xl lg:text-6xl">Our Products</h2>
            <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[#485C71] sm:text-base">Discover screens designed for remarkable visual experiences.</p>
          </motion.div>

          <div
            ref={productsRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="LED product categories"
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-[#1266A3] [&::-webkit-scrollbar]:hidden sm:gap-6"
          >
            {showcaseProducts.map((product, index) => (
              <article key={product.id} className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
                <Link
                  to="/products"
                  aria-label={`View ${product.name} in products`}
                  className="group block h-full overflow-hidden bg-[#142B48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1266A3]"
                >
                  <div className="relative h-[300px] overflow-hidden bg-[#E7EDF4] sm:h-[370px] lg:h-[410px] xl:h-[450px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071422]/65 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-5 border border-white/50 bg-[#071422]/40 px-3 py-2 text-xs tracking-[0.16em] text-white backdrop-blur-sm">0{index + 1}</span>
                    <div className="absolute inset-0 flex items-center justify-center bg-[#071422]/85 px-7 opacity-0 transition-opacity duration-700 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100">
                      <div className="max-w-[310px] text-center text-white">
                        <h3 className="text-2xl font-semibold">{product.name}</h3>
                        <p className="mt-4 text-sm leading-7 text-white/85">{product.description}</p>
                        <span className="mt-6 inline-flex items-center gap-2 border-b border-[#77DDF7] pb-2 text-sm text-[#77DDF7]">Explore Screens <ArrowUpRight size={16} aria-hidden="true" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-h-[78px] items-center justify-between gap-3 px-5 py-4 transition-colors duration-500 group-hover:bg-[#1266A3] group-focus-visible:bg-[#1266A3] sm:px-6">
                    <h3 className="text-base font-semibold text-white sm:text-lg">{product.name}</h3>
                    <ArrowUpRight size={20} className="shrink-0 text-white" aria-hidden="true" />
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#64748B]">Swipe or browse</span>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => scrollProducts(-1)} aria-label="Scroll products left" className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#142B48] transition-colors hover:bg-[#142B48] hover:text-white"><ArrowLeft size={19} /></button>
              <button type="button" onClick={() => scrollProducts(1)} aria-label="Scroll products right" className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#142B48] transition-colors hover:bg-[#142B48] hover:text-white"><ArrowRight size={19} /></button>
            </div>
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <Link to="/products" className="group inline-flex min-h-12 items-center gap-3 bg-[#142B48] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1266A3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1266A3]">
              View All Products
              <ArrowUpRight size={18} className="transition-transform duration-300 motion-safe:group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section> */}




{/* SECTION 03 — OUR PRODUCTS */}

<section
  id="our-products"
  aria-labelledby="our-products-heading"
  className="w-full bg-white py-16 sm:py-20 lg:py-28"
>
  <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

    {/* SECTION HEADING */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.7 }}
      className="mb-10 text-center sm:mb-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0047C0]">
        Explore Our Collection
      </p>

      <h2
        id="our-products-heading"
        className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#142B48] sm:text-5xl lg:text-6xl"
      >
        Our Products
      </h2>

      <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[#485C71] sm:text-base">
        Discover screens designed for remarkable visual experiences.
      </p>
    </motion.div>

    {/* PRODUCT CAROUSEL */}
    <div
      ref={productsRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="LED product categories"
      tabIndex={0}
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-[#0047C0] [&::-webkit-scrollbar]:hidden sm:gap-6"
    >
      {showcaseProducts.map((product, index) => (
        <article
          key={product.id}
          className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
        >
          <Link
            to={`/products?category=${product.id}`}
            aria-label={`Explore ${product.name}`}
            className="group block h-full overflow-hidden bg-[#142B48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
          >
            {/* PRODUCT IMAGE */}
            <div className="relative h-[300px] overflow-hidden bg-[#E7EDF4] sm:h-[370px] lg:h-[410px] xl:h-[450px]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
              />

              {/* IMAGE GRADIENT */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071422]/65 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* PRODUCT NUMBER */}
              <span className="absolute left-5 top-5 border border-white/50 bg-[#071422]/40 px-3 py-2 text-xs tracking-[0.16em] text-white backdrop-blur-sm">
                0{index + 1}
              </span>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#071422]/85 px-7 opacity-0 transition-opacity duration-700 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="max-w-[310px] text-center text-white">
                  <h3 className="text-2xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/85">
                    {product.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 border-b border-[#A9C5FF] pb-2 text-sm font-semibold text-[#A9C5FF]">
                    Explore Screens

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* PRODUCT NAME BAR */}
            <div className="flex min-h-[78px] items-center justify-between gap-3 bg-[#0047C0] px-5 py-4 transition-colors duration-500 group-hover:bg-[#003799] group-focus-visible:bg-[#003799] sm:px-6">
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {product.name}
              </h3>

              <ArrowUpRight
                size={20}
                className="shrink-0 text-white"
                aria-hidden="true"
              />
            </div>
          </Link>
        </article>
      ))}
    </div>

    {/* CAROUSEL CONTROLS */}
    <div className="mt-7 flex items-center justify-between gap-4">
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#64748B]">
        Swipe or browse
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollProducts(-1)}
          aria-label="Scroll products left"
          className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#0047C0] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white"
        >
          <ArrowLeft size={19} />
        </button>

        <button
          type="button"
          onClick={() => scrollProducts(1)}
          aria-label="Scroll products right"
          className="flex h-11 w-11 items-center justify-center border border-[#CBD5E1] text-[#0047C0] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white"
        >
          <ArrowRight size={19} />
        </button>
      </div>
    </div>

    {/* VIEW ALL PRODUCTS */}
    <div className="mt-10 text-center sm:mt-12">
      <Link
        to="/products"
        className="group inline-flex min-h-12 items-center gap-3 bg-[#0047C0] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#003799] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
      >
        View All Products

        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
        />
      </Link>
    </div>

  </div>
</section>

      {/* SECTION 04 — EXPERIENCE THE POSSIBILITIES */}
      {/* <section
        ref={visionRef}
        id="display-experience"
        aria-labelledby="display-experience-title"
        className="w-full overflow-hidden bg-[#F9FAFC] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#1266A3]">
              A New Dimension of Display
            </p>
            <h2
              id="display-experience-title"
              className="mt-4 text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
            >
              Experience More With Every Screen.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#485C71] sm:text-base sm:leading-8">
              Bring your ideas into focus with display experiences made for modern spaces.
            </p>
          </div>

          <motion.div
            style={reducedMotion ? undefined : { scale: visionScale, opacity: visionOpacity }}
            className="relative mx-auto w-full origin-center transform-gpu overflow-hidden bg-[#142B48]"
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/8]">
              <img
                src="/images/hero/outdoor-led.webp"
                alt="Large outdoor LED display bringing visual content into an architectural setting"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061421]/70 via-[#061421]/10 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-10 lg:p-14">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A5E9FF] sm:text-xs">
                  Pingo Screens
                </span>
                <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                  Visuals That Transform Spaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}



{/* SECTION 04 — DISPLAY EXPERIENCE */}

<section
  ref={visionRef}
  id="display-experience"
  aria-labelledby="display-experience-title"
  className="w-full overflow-hidden bg-[#F9FAFC] py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

    {/* SECTION HEADING */}
    <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-14">

      <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#0047C0]">
        A New Dimension of Display
      </p>

      <h2
        id="display-experience-title"
        className="mt-4 text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#142B48]"
      >
        Experience More With Every Screen.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#485C71] sm:text-base sm:leading-8">
        Bring your ideas into focus with display experiences
        made for modern spaces.
      </p>
    </div>

    {/* SCROLL-RESPONSIVE DISPLAY IMAGE */}
    <motion.div
      style={
        reducedMotion
          ? undefined
          : {
              scale: visionScale,
              opacity: visionOpacity,
            }
      }
      className="relative mx-auto w-full origin-center transform-gpu overflow-hidden bg-[#142B48]"
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/8]">

        {/* DISPLAY IMAGE */}
        <img
          src="/images/home/display-experience.webp"
          alt="Large outdoor LED display bringing visual content into an architectural setting"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />

        {/* IMAGE GRADIENT FOR READABILITY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061421]/70 via-[#061421]/10 to-transparent"
        />

        {/* IMAGE CAPTION */}
        <div className="absolute bottom-0 left-0 p-6 text-white sm:p-10 lg:p-14">

          <span className="inline-block border-l-2 border-[#0047C0] pl-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white sm:text-xs">
            Pingo Screens
          </span>

          <p className="mt-4 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Visuals That Transform Spaces.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>




    </main>

  );

}
