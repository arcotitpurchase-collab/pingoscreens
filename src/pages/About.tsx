// import { Link } from "react-router";
// import { motion, useReducedMotion } from "motion/react";
// import type { SVGProps } from "react";

// type IconProps = SVGProps<SVGSVGElement>;

// function InnovationIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M9 18h6m-5 3h4"/><path d="M8.1 14.7a7 7 0 1 1 7.8 0c-1 .8-1.5 1.8-1.5 3H9.6c0-1.2-.5-2.2-1.5-3Z"/><path d="M12 7v4m-2-2h4"/></svg>;
// }
// function PrecisionIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3"/></svg>;
// }
// function TrustIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M12 2 4 5.5v6c0 5.1 3.1 8.4 8 10.5 4.9-2.1 8-5.4 8-10.5v-6L12 2Z"/><path d="m8.5 12 2.4 2.4 4.7-5"/></svg>;
// }
// function ExperienceIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/><path d="M19 2v4M17 4h4"/></svg>;
// }
// function EyeIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M2 12s3.7-6.5 10-6.5S22 12 22 12s-3.7 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;
// }
// function CompassIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>;
// }
// function ArrowIcon(props: IconProps) {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>;
// }

// const values = [
//   { title: "Innovation", caption: "New possibilities", icon: InnovationIcon },
//   { title: "Precision", caption: "Thoughtful detail", icon: PrecisionIcon },
//   { title: "Reliability", caption: "Built on trust", icon: TrustIcon },
//   { title: "Experience", caption: "Lasting impact", icon: ExperienceIcon },
// ];

// export default function About() {
//   const reduceMotion = useReducedMotion();
//   const reveal = (delay = 0) => ({
//     initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, amount: 0.12 },
//     transition: { duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
//   });

//   return (
//     <main className="w-full overflow-hidden bg-white">
//       {/* HERO — wide cinematic image */}
//       <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#091929] sm:min-h-[520px] lg:min-h-[610px]">
//         <img src="/images/hero/creative-led.webp" alt="Architectural LED display experience" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,14,25,0.90)_0%,rgba(4,14,25,0.60)_48%,rgba(4,14,25,0.12)_100%),linear-gradient(0deg,rgba(4,14,25,0.38),transparent_55%)]" />
//         <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
//           <motion.div {...reveal(0)} className="max-w-[940px]">
//             <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#99E1F5] sm:text-xs"><span className="h-px w-9 bg-[#99E1F5]" /> About Pingo Screens</p>
//             <h1 className="text-[clamp(3rem,6.5vw,6.75rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">Beyond screens.<br/><span className="text-[#A8E6F7]">Beyond imagination.</span></h1>
//             <p className="mt-6 max-w-[660px] text-[15px] leading-8 text-[#E5EDF3] sm:text-lg">Digital displays that enrich architecture, engage audiences, and turn everyday spaces into visual experiences.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* STORY — deliberate typography + three image capsules */}
//       <section className="relative bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
//         <div className="mx-auto max-w-[1320px]">
//           <motion.div {...reveal(0)} className="mb-12 text-center sm:mb-16">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1375A6]">Who we are</p>
//             <h2 className="mt-3 text-[clamp(2.4rem,4.2vw,4.25rem)] font-semibold tracking-[-0.05em] text-[#132B40]">Our Story<span className="text-[#1386BD]">.</span></h2>
//             <span className="mx-auto mt-4 block h-px w-20 bg-[#AECADB]" />
//           </motion.div>
//           <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
//             <motion.div {...reveal(0.05)} className="mx-auto max-w-[540px] text-center lg:mx-0 lg:text-left">
//               <p className="text-[clamp(1.55rem,2.65vw,2.45rem)] font-medium leading-[1.45] tracking-[-0.035em] text-[#18354B]">We believe that a screen should do more than display content. It should make people <span className="text-[#127CB0]">stop, look, and feel something.</span></p>
//               <p className="mx-auto mt-7 max-w-[490px] text-[15px] leading-[1.95] text-[#607486] sm:text-base lg:mx-0">Pingo Screens brings together contemporary LED displays and considered visual design. From immersive indoor spaces to remarkable outdoor and transparent installations, we focus on how every display becomes part of the environment.</p>
//               <Link to="/products" className="group mt-9 inline-flex items-center gap-3 border-b border-[#1377AA] pb-3 text-[14px] font-semibold text-[#126B9C] transition-colors duration-300 hover:text-[#0D3F62]">Discover our screens <ArrowIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></Link>
//             </motion.div>
//             <motion.div {...reveal(0.15)} className="grid min-w-0 grid-cols-3 items-center gap-2 sm:gap-4 lg:gap-5">
//               <div className="h-[235px] overflow-hidden rounded-[75px] sm:h-[335px] sm:rounded-[100px] lg:h-[380px]"><img src="/images/hero/indoor-led.webp" alt="Indoor LED screen experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none" /></div>
//               <div className="h-[300px] overflow-hidden rounded-[75px] sm:h-[440px] sm:rounded-[100px] lg:h-[490px]"><img src="/images/hero/outdoor-led.webp" alt="Outdoor LED screen experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none" /></div>
//               <div className="h-[235px] overflow-hidden rounded-[75px] sm:h-[335px] sm:rounded-[100px] lg:h-[380px]"><img src="/images/hero/transparent-led.webp" alt="Transparent LED screen experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none" /></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* VALUES + CONNECTED VISION/MISSION */}
//       <section className="relative overflow-hidden bg-[#F2F7FA] px-5 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 lg:py-28">
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.19]" style={{ backgroundImage: "radial-gradient(#BCD5E5 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
//         <div className="relative mx-auto max-w-[1240px]">
//           <motion.div {...reveal(0)} className="mb-12 text-center sm:mb-14">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1375A6]">What guides us</p>
//             <h2 className="mt-4 text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1.13] tracking-[-0.05em] text-[#152E43]">Our Identity,<br/><span className="text-[#137CAD]">Vision &amp; Values.</span></h2>
//           </motion.div>
//           <motion.div {...reveal(0.08)} className="relative z-10 mx-auto grid max-w-[1070px] grid-cols-2 gap-y-8 rounded-[24px] bg-[#176C9B] px-5 py-9 shadow-[0_20px_50px_rgba(21,98,145,0.15)] sm:grid-cols-4 sm:px-8 sm:py-11 lg:px-12">
//             {values.map(({ title, caption, icon: Icon }) => (
//               <div key={title} className="flex flex-col items-center px-2 text-center">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 sm:h-16 sm:w-16"><Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" /></div>
//                 <h3 className="mt-4 text-[15px] font-semibold text-white sm:text-[17px]">{title}</h3>
//                 <p className="mt-1 text-[11px] tracking-[0.02em] text-[#D8EFFA] sm:text-xs">{caption}</p>
//               </div>
//             ))}
//           </motion.div>
//           <motion.div {...reveal(0.16)} className="relative mx-auto -mt-7 max-w-[1190px] rounded-[26px] border border-[#E1EAF0] bg-white px-7 pb-12 pt-20 shadow-[0_14px_55px_rgba(36,74,103,0.055)] sm:px-12 lg:px-16 lg:pb-16 lg:pt-24">
//             <div className="grid gap-10 md:grid-cols-2 md:gap-0">
//               <div className="md:border-r md:border-[#DEE7ED] md:pr-10 lg:pr-16">
//                 <div className="flex items-center gap-4"><EyeIcon className="h-8 w-8 shrink-0 text-[#176C9B]"/><h3 className="text-[26px] font-semibold tracking-[-0.035em] text-[#162F43] sm:text-[30px]">Our Vision</h3></div>
//                 <p className="mt-5 max-w-[440px] text-[15px] leading-[1.9] text-[#5D7384] sm:text-base">To create visually compelling environments where technology and design come together to make communication more engaging and memorable.</p>
//               </div>
//               <div className="border-t border-[#DEE7ED] pt-9 md:border-t-0 md:pl-10 md:pt-0 lg:pl-16">
//                 <div className="flex items-center gap-4"><CompassIcon className="h-8 w-8 shrink-0 text-[#176C9B]"/><h3 className="text-[26px] font-semibold tracking-[-0.035em] text-[#162F43] sm:text-[30px]">Our Mission</h3></div>
//                 <p className="mt-5 max-w-[440px] text-[15px] leading-[1.9] text-[#5D7384] sm:text-base">To help organizations transform spaces with considered LED display solutions that bring ideas into focus and make a meaningful impression.</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* MINIMAL OUTRO */}
//       <section className="bg-white px-6 py-20 text-center sm:px-10 sm:py-24">
//         <motion.div {...reveal(0)} className="mx-auto max-w-[890px]">
//           <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1375A6]">Create with Pingo</p>
//           <h2 className="mt-5 text-[clamp(2.2rem,4.5vw,4.5rem)] font-semibold leading-[1.13] tracking-[-0.055em] text-[#152E43]">Ready to make an <span className="text-[#147BAC]">impression?</span></h2>
//           <Link to="/contact" className="group mt-9 inline-flex items-center gap-3 bg-[#153A55] px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#176C9B]">Get in touch <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// }






import { Link } from "react-router";

import { motion, useReducedMotion } from "motion/react";

import type { SVGProps } from "react";



type IconProps = SVGProps<SVGSVGElement>;



function InnovationIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M9 18h6m-5 3h4"/><path d="M8.1 14.7a7 7 0 1 1 7.8 0c-1 .8-1.5 1.8-1.5 3H9.6c0-1.2-.5-2.2-1.5-3Z"/><path d="M12 7v4m-2-2h4"/></svg>;

}

function PrecisionIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3"/></svg>;

}

function TrustIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M12 2 4 5.5v6c0 5.1 3.1 8.4 8 10.5 4.9-2.1 8-5.4 8-10.5v-6L12 2Z"/><path d="m8.5 12 2.4 2.4 4.7-5"/></svg>;

}

function ExperienceIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/><path d="M19 2v4M17 4h4"/></svg>;

}

function EyeIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M2 12s3.7-6.5 10-6.5S22 12 22 12s-3.7 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;

}

function CompassIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>;

}

function ArrowIcon(props: IconProps) {

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>;

}



const values = [

  { title: "Innovation", caption: "New possibilities", icon: InnovationIcon },

  { title: "Precision", caption: "Thoughtful detail", icon: PrecisionIcon },

  { title: "Reliability", caption: "Built on trust", icon: TrustIcon },

  { title: "Experience", caption: "Lasting impact", icon: ExperienceIcon },

];



export default function About() {

  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({

    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },

    whileInView: { opacity: 1, y: 0 },

    viewport: { once: true, amount: 0.12 },

    transition: { duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },

  });



  return (

    <main className="w-full overflow-hidden bg-white">

      {/* HERO — wide cinematic image */}

      <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#091929] sm:min-h-[520px] lg:min-h-[610px]">

        <img src="/images/about/about-banner.webp" alt="Architectural LED display experience" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,14,25,0.90)_0%,rgba(4,14,25,0.60)_48%,rgba(4,14,25,0.12)_100%),linear-gradient(0deg,rgba(4,14,25,0.38),transparent_55%)]" />

        <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">

          <motion.div {...reveal(0)} className="max-w-[940px]">

            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#BFD3FF] sm:text-xs"><span className="h-px w-9 bg-[#BFD3FF]" /> About Pingo Screens</p>

            <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">Beyond screens.<br/><span className="text-[#BFD3FF]">Beyond imagination.</span></h1>

            <p className="mt-6 max-w-[660px] text-base font-normal leading-8 text-[#E5EDF3] sm:text-lg">Digital displays that enrich architecture, engage audiences, and turn everyday spaces into visual experiences.</p>

          </motion.div>

        </div>

      </section>



      {/* STORY — deliberate typography + three image capsules */}

      <section className="relative bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1320px]">

          <motion.div {...reveal(0)} className="mb-12 text-center sm:mb-16">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Who we are</p>

            <h2 className="mt-3 text-[clamp(2.25rem,4vw,4rem)] font-semibold tracking-[-0.05em] text-[#142B48]">Our Story<span className="text-[#0047C0]">.</span></h2>

            <span className="mx-auto mt-4 block h-px w-20 bg-[#B8C9F4]" />

          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">

            <motion.div {...reveal(0.05)} className="mx-auto max-w-[540px] text-center lg:mx-0 lg:text-left">

              <p className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.45] tracking-[-0.035em] text-[#142B48]">We believe that a screen should do more than display content. It should make people <span className="text-[#0047C0]">stop, look, and feel something.</span></p>

              <p className="mx-auto mt-7 max-w-[490px] text-base font-normal leading-8 text-[#607486] sm:text-base lg:mx-0">Pingo Screens brings together contemporary LED displays and considered visual design. From immersive indoor spaces to remarkable outdoor and transparent installations, we focus on how every display becomes part of the environment.</p>

              <Link to="/products" className="group mt-9 inline-flex items-center gap-3 border-b border-[#0047C0] pb-3 text-sm font-semibold text-[#0047C0] transition-colors duration-300 hover:text-[#003799]">Discover our screens <ArrowIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></Link>

            </motion.div>

            <motion.div {...reveal(0.15)} className="grid min-w-0 grid-cols-3 items-center gap-2 sm:gap-4 lg:gap-5">

              <div className="h-[235px] overflow-hidden rounded-[75px] sm:h-[335px] sm:rounded-[100px] lg:h-[380px]"><img src="/images/about/story-indoor.webp" alt="Indoor LED screen experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none" /></div>

              <div className="h-[300px] overflow-hidden rounded-[75px] sm:h-[440px] sm:rounded-[100px] lg:h-[490px]"><img src="/images/about/story-outdoor.webp" alt="Outdoor LED screen experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none" /></div>

              <div className="h-[235px] overflow-hidden rounded-[75px] sm:h-[335px] sm:rounded-[100px] lg:h-[380px]"><img src="/images/about/story-transparent.webp" alt="Transparent LED screen experience" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none" /></div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* VALUES + CONNECTED VISION/MISSION */}

      <section className="relative overflow-hidden bg-[#F5F7FF] px-5 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 lg:py-28">

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.19]" style={{ backgroundImage: "radial-gradient(#C6D5FF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative mx-auto max-w-[1240px]">

          <motion.div {...reveal(0)} className="mb-12 text-center sm:mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">What guides us</p>

            <h2 className="mt-4 text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1.13] tracking-[-0.05em] text-[#142B48]">Our Identity,<br/><span className="text-[#0047C0]">Vision & Values.</span></h2>

          </motion.div>

          <motion.div {...reveal(0.08)} className="relative z-10 mx-auto grid max-w-[1070px] grid-cols-2 gap-y-8 rounded-[24px] bg-[#0047C0] px-5 py-9 shadow-[0_20px_50px_rgba(0,71,192,0.15)] sm:grid-cols-4 sm:px-8 sm:py-11 lg:px-12">

            {values.map(({ title, caption, icon: Icon }) => (

              <div key={title} className="flex flex-col items-center px-2 text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 sm:h-16 sm:w-16"><Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" /></div>

                <h3 className="mt-4 text-base font-semibold text-white sm:text-base">{title}</h3>

                <p className="mt-1 text-xs tracking-normal text-[#E1E9FF] sm:text-xs">{caption}</p>

              </div>

            ))}

          </motion.div>

          <motion.div {...reveal(0.16)} className="relative mx-auto -mt-7 max-w-[1190px] rounded-[26px] border border-[#E1EAF0] bg-white px-7 pb-12 pt-20 shadow-[0_14px_55px_rgba(36,74,103,0.055)] sm:px-12 lg:px-16 lg:pb-16 lg:pt-24">

            <div className="grid gap-10 md:grid-cols-2 md:gap-0">

              <div className="md:border-r md:border-[#DEE7ED] md:pr-10 lg:pr-16">

                <div className="flex items-center gap-4"><EyeIcon className="h-8 w-8 shrink-0 text-[#0047C0]"/><h3 className="text-[clamp(1.5rem,2.4vw,1.875rem)] font-semibold tracking-[-0.035em] text-[#142B48] ">Our Vision</h3></div>

                <p className="mt-5 max-w-[440px] text-base font-normal leading-8 text-[#5D7384] sm:text-base">To create visually compelling environments where technology and design come together to make communication more engaging and memorable.</p>

              </div>

              <div className="border-t border-[#DEE7ED] pt-9 md:border-t-0 md:pl-10 md:pt-0 lg:pl-16">

                <div className="flex items-center gap-4"><CompassIcon className="h-8 w-8 shrink-0 text-[#0047C0]"/><h3 className="text-[clamp(1.5rem,2.4vw,1.875rem)] font-semibold tracking-[-0.035em] text-[#142B48] ">Our Mission</h3></div>

                <p className="mt-5 max-w-[440px] text-base font-normal leading-8 text-[#5D7384] sm:text-base">To help organizations transform spaces with considered LED display solutions that bring ideas into focus and make a meaningful impression.</p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>



      {/* MINIMAL OUTRO */}

      <section className="bg-white px-6 py-20 text-center sm:px-10 sm:py-24">

        <motion.div {...reveal(0)} className="mx-auto max-w-[890px]">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Create with Pingo</p>

          <h2 className="mt-5 text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1.13] tracking-[-0.055em] text-[#142B48]">Ready to make an <span className="text-[#0047C0]">impression?</span></h2>

          <Link to="/contact" className="group mt-9 inline-flex items-center gap-3 bg-[#0047C0] px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#003799]">Get in touch <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></Link>

        </motion.div>

      </section>

    </main>

  );

}
