
// import type { SVGProps } from "react";
// import { Link } from "react-router";
// import { motion, useReducedMotion } from "motion/react";

// import pingoLogo from "../assets/Pingo (5).png";

// // =====================================================
// // NAVIGATION — SERVICES REMOVED
// // =====================================================

// const footerLinks = [
//   { name: "Home", path: "/" },
//   { name: "Products", path: "/products" },
//   { name: "Applications", path: "/applications" },
//   { name: "About Us", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// // =====================================================
// // CUSTOM SVG ICONS — NO LUCIDE DEPENDENCY
// // =====================================================

// type IconProps = SVGProps<SVGSVGElement>;

// function InstagramIcon(props: IconProps) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
//       <circle cx="12" cy="12" r="4" />
//       <circle
//         cx="17.5"
//         cy="6.5"
//         r="1"
//         fill="currentColor"
//         stroke="none"
//       />
//     </svg>
//   );
// }

// function LinkedInIcon(props: IconProps) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.51v5.27Z" />
//     </svg>
//   );
// }

// function YouTubeIcon(props: IconProps) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M23 7.1a3 3 0 0 0-2.1-2.13C19.03 4.5 12 4.5 12 4.5s-7.03 0-8.9.47A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12c0 1.64.17 3.28.5 4.9a3 3 0 0 0 2.1 2.13c1.87.47 8.9.47 8.9.47s7.03 0 8.9-.47A3 3 0 0 0 23 16.9c.33-1.62.5-3.26.5-4.9S23.33 8.72 23 7.1ZM9.65 15.55v-7.1L15.9 12l-6.25 3.55Z" />
//     </svg>
//   );
// }

// function FacebookIcon(props: IconProps) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.98A10 10 0 0 0 22 12Z" />
//     </svg>
//   );
// }

// function ArrowIcon(props: IconProps) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M7 17 17 7M8 7h9v9" />
//     </svg>
//   );
// }

// // =====================================================
// // TEMPORARY SOCIAL MEDIA LINKS
// // =====================================================

// const socialLinks = [
//   { name: "Instagram", url: "#", icon: InstagramIcon },
//   { name: "LinkedIn", url: "#", icon: LinkedInIcon },
//   { name: "YouTube", url: "#", icon: YouTubeIcon },
//   { name: "Facebook", url: "#", icon: FacebookIcon },
// ];

// // =====================================================
// // PREMIUM LIGHT FOOTER
// // =====================================================

// export default function Footer() {
//   const reducedMotion = useReducedMotion();

//   const reveal = (delay = 0) => ({
//     initial: {
//       opacity: reducedMotion ? 1 : 0,
//       y: reducedMotion ? 0 : 18,
//     },
//     whileInView: {
//       opacity: 1,
//       y: 0,
//     },
//     viewport: {
//       once: true,
//       amount: 0.2,
//     },
//     transition: {
//       duration: reducedMotion ? 0 : 0.7,
//       delay: reducedMotion ? 0 : delay,
//       ease: "easeOut" as const,
//     },
//   });

//   return (
//     <footer className="w-full bg-white px-4 pb-6 pt-8 sm:px-6 lg:px-10 lg:pt-10">

//       {/* PREMIUM FLOATING LIGHT FOOTER */}
//       <motion.div
//         initial={{
//           opacity: reducedMotion ? 1 : 0,
//           y: reducedMotion ? 0 : 18,
//         }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.12 }}
//         transition={{
//           duration: reducedMotion ? 0 : 0.85,
//           ease: "easeOut",
//         }}
//         className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[20px] border border-[#E4EBF1] bg-[#F8FAFC] text-[#1A354D] shadow-[0_18px_50px_rgba(31,65,94,0.07)]"
//       >

//         {/* SUBTLE ACCENT */}
//         <div
//           aria-hidden="true"
//           className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#1266A3] via-[#5AB7DD] to-transparent"
//         />

//         {/* MAIN CONTENT */}
//         <div className="relative grid grid-cols-1 gap-12 px-8 pb-12 pt-12 sm:grid-cols-2 sm:px-12 lg:grid-cols-[1.35fr_0.8fr_1fr] lg:gap-16 lg:px-20 lg:pb-14 lg:pt-14 xl:px-24">

//           {/* BRAND */}
//           <motion.div {...reveal(0.05)} className="flex flex-col items-start">

//             <Link
//               to="/"
//               aria-label="Pingo Screens homepage"
//               className="inline-flex items-center"
//             >
//               <img
//                 src={pingoLogo}
//                 alt="Pingo Screens"
//                 className="h-[76px] w-auto max-w-[210px] object-contain"
//               />
//             </Link>

//             <p className="mt-7 max-w-[300px] text-[17px] leading-[1.7] tracking-[-0.01em] text-[#526779]">
//               Beyond Screens.
//               <br />
//               <span className="font-medium text-[#1266A3]">
//                 Beyond Imagination.
//               </span>
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="mt-8 flex items-center gap-3">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;
//                 const placeholder = social.url === "#";

//                 return (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     target={placeholder ? undefined : "_blank"}
//                     rel={placeholder ? undefined : "noopener noreferrer"}
//                     onClick={(event) => {
//                       if (placeholder) event.preventDefault();
//                     }}
//                     aria-label={
//                       placeholder
//                         ? `${social.name} — Coming soon`
//                         : `Pingo Screens on ${social.name}`
//                     }
//                     title={social.name}
//                     className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E5ED] bg-white text-[#183850] shadow-[0_4px_12px_rgba(31,65,94,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1266A3] hover:bg-[#1266A3] hover:text-white focus-visible:border-[#1266A3] focus-visible:bg-[#1266A3] focus-visible:text-white motion-reduce:transform-none"
//                   >
//                     <Icon className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" />
//                   </a>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* NAVIGATION */}
//           <motion.div {...reveal(0.15)}>
//             <div className="mb-8 flex items-center gap-3">
//               <span className="h-px w-7 bg-[#1266A3]" />

//               <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1266A3]">
//                 Explore
//               </h3>
//             </div>

//             <nav
//               aria-label="Footer navigation"
//               className="grid grid-cols-2 gap-x-7 gap-y-5 sm:grid-cols-1"
//             >
//               {footerLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="group inline-flex w-fit items-center text-[18px] font-medium tracking-[-0.015em] text-[#243D53] transition-colors duration-300 hover:text-[#1266A3] focus-visible:text-[#1266A3]"
//                 >
//                   <span className="relative">
//                     {link.name}

//                     <span
//                       aria-hidden="true"
//                       className="absolute -bottom-1 left-0 h-px w-0 bg-[#1266A3] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
//                     />
//                   </span>
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>

//           {/* CONTACT */}
//           <motion.div
//             {...reveal(0.25)}
//             className="sm:col-span-2 lg:col-span-1"
//           >
//             <div className="mb-8 flex items-center gap-3">
//               <span className="h-px w-7 bg-[#1266A3]" />

//               <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1266A3]">
//                 Connect
//               </h3>
//             </div>

//             <h3 className="max-w-[340px] text-[clamp(1.75rem,2.4vw,2.6rem)] font-semibold leading-[1.2] tracking-[-0.035em] text-[#1A354D]">
//               Have a project
//               <br />
//               in mind?
//             </h3>

//             <p className="mt-5 max-w-[300px] text-[16px] leading-8 text-[#647788]">
//               Let's make your vision stand out.
//             </p>

//             <Link
//               to="/contact"
//               className="group mt-7 inline-flex items-center gap-3 border-b border-[#1266A3]/50 pb-3 text-[17px] font-semibold text-[#1266A3] transition-colors duration-300 hover:text-[#0C4D7E]"
//             >
//               Contact Us

//               <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
//             </Link>
//           </motion.div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="relative border-t border-[#DFE7ED] px-8 py-5 sm:px-12 lg:px-20 xl:px-24">
//           <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
//             <p className="text-[12px] text-[#718397] sm:text-[13px]">
//               © {new Date().getFullYear()} Pingo Screens.
//               All rights reserved.
//             </p>

//             <p className="text-[12px] text-[#718397] sm:text-[13px]">
//               Beyond Screens. Beyond Imagination.
//             </p>
//           </div>
//         </div>

//       </motion.div>
//     </footer>
//   );
// }







// import type { SVGProps } from "react";

// import { Link } from "react-router";

// import { motion, useReducedMotion } from "motion/react";

// import pingoLogo from "../assets/Pingo (5).png";


// const footerLinks = [

//   { name: "Home", path: "/" },

//   { name: "Products", path: "/products" },

//   { name: "Applications", path: "/applications" },

//   { name: "About Us", path: "/about" },

//   { name: "Contact", path: "/contact" },

// ];


// type IconProps = SVGProps<SVGSVGElement>;

// function InstagramIcon(props: IconProps) {

//   return (

//     <svg

//       viewBox="0 0 24 24"

//       fill="none"

//       stroke="currentColor"

//       strokeWidth="1.8"

//       strokeLinecap="round"

//       strokeLinejoin="round"

//       aria-hidden="true"

//       {...props}

//     >

//       <rect x="2.5" y="2.5" width="19" height="19" rx="5" />

//       <circle cx="12" cy="12" r="4" />

//       <circle

//         cx="17.5"

//         cy="6.5"

//         r="1"

//         fill="currentColor"

//         stroke="none"

//       />

//     </svg>

//   );

// }

// function LinkedInIcon(props: IconProps) {

//   return (

//     <svg

//       viewBox="0 0 24 24"

//       fill="currentColor"

//       aria-hidden="true"

//       {...props}

//     >

//       <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.51v5.27Z" />

//     </svg>

//   );

// }

// function YouTubeIcon(props: IconProps) {

//   return (

//     <svg

//       viewBox="0 0 24 24"

//       fill="currentColor"

//       aria-hidden="true"

//       {...props}

//     >

//       <path d="M23 7.1a3 3 0 0 0-2.1-2.13C19.03 4.5 12 4.5 12 4.5s-7.03 0-8.9.47A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12c0 1.64.17 3.28.5 4.9a3 3 0 0 0 2.1 2.13c1.87.47 8.9.47 8.9.47s7.03 0 8.9-.47A3 3 0 0 0 23 16.9c.33-1.62.5-3.26.5-4.9S23.33 8.72 23 7.1ZM9.65 15.55v-7.1L15.9 12l-6.25 3.55Z" />

//     </svg>

//   );

// }

// function FacebookIcon(props: IconProps) {

//   return (

//     <svg

//       viewBox="0 0 24 24"

//       fill="currentColor"

//       aria-hidden="true"

//       {...props}

//     >

//       <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.98A10 10 0 0 0 22 12Z" />

//     </svg>

//   );

// }

// function ArrowIcon(props: IconProps) {

//   return (

//     <svg

//       viewBox="0 0 24 24"

//       fill="none"

//       stroke="currentColor"

//       strokeWidth="1.8"

//       strokeLinecap="round"

//       strokeLinejoin="round"

//       aria-hidden="true"

//       {...props}

//     >

//       <path d="M7 17 17 7M8 7h9v9" />

//     </svg>

//   );

// }


// const socialLinks = [

//   { name: "Instagram", url: "#", icon: InstagramIcon },

//   { name: "LinkedIn", url: "#", icon: LinkedInIcon },

//   { name: "YouTube", url: "#", icon: YouTubeIcon },

//   { name: "Facebook", url: "#", icon: FacebookIcon },

// ];


// export default function Footer() {
//   const reducedMotion = Boolean(useReducedMotion());

//   return (
//     <footer className="w-full bg-white px-4 pb-4 pt-5 sm:px-6 lg:px-10 lg:pt-6">
//       <div className="mx-auto max-w-[1500px] border-t-[3px] border-[#0047C0] bg-[#F8FAFC]">
//         {/* TOP: BRAND LEFT / STATEMENT AND CONTACT RIGHT */}
//         <div className="grid gap-6 border-b border-[#DDE5EF] px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:px-12 lg:py-8">
//           <motion.div
//             initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: reducedMotion ? 0 : 0.65 }}
//             className="flex flex-col items-start"
//           >
//             <Link to="/" aria-label="Pingo Screens homepage" className="inline-flex items-center">
//               <img src={pingoLogo} alt="Pingo Screens" className="h-[48px] w-auto max-w-[170px] object-contain sm:h-[56px]" />
//             </Link>
//             <p className="mt-3 max-w-[320px] text-sm leading-6 text-[#526779]">
//               Creating remarkable visual experiences for the spaces that matter.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.1 }}
//             className="lg:justify-self-end"
//           >
           
//             <h2 className="max-w-[580px] text-[clamp(1.65rem,3vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#142B48]">
//               Have a project <span className="text-[#0047C0]">in mind?</span>
//             </h2>
//             <Link
//               to="/contact"
//               className="group mt-4 inline-flex min-h-10 items-center gap-3 bg-[#0047C0] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#003799] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
//             >
//               Start a Conversation
//               <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
//             </Link>
//           </motion.div>
//         </div>

//         {/* MIDDLE: OPEN, HORIZONTAL SITE NAVIGATION */}
//         <div className="flex flex-col gap-3 border-b border-[#DDE5EF] px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:py-5">
//           <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0047C0]">Explore Pingo</p>
//           <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
//             {footerLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="group relative text-sm font-semibold text-[#243D53] transition-colors duration-300 hover:text-[#0047C0] focus-visible:text-[#0047C0] sm:text-base"
//               >
//                 {link.name}
//                 <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0047C0] transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* BOTTOM: COPYRIGHT LEFT / SOCIAL RIGHT */}
//         <div className="flex flex-col-reverse gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-4">
//           <div className="space-y-0.5 text-xs leading-5 text-[#647788] sm:text-sm">
//             <p>© {new Date().getFullYear()} Pingo Screens. All rights reserved.</p>
            
//           </div>
//           <div className="flex flex-wrap items-center gap-2">
//             <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#526779]">Follow us</span>
//             {socialLinks.map((social) => {
//               const Icon = social.icon;
//               const placeholder = social.url === "#";
//               return (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target={placeholder ? undefined : "_blank"}
//                   rel={placeholder ? undefined : "noopener noreferrer"}
//                   onClick={(event) => { if (placeholder) event.preventDefault(); }}
//                   aria-label={placeholder ? `${social.name} — Coming soon` : `Pingo Screens on ${social.name}`}
//                   title={social.name}
//                   className="flex h-9 w-9 items-center justify-center border border-[#D6DFEA] bg-white text-[#142B48] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] motion-reduce:transform-none"
//                 >
//                   <Icon className="h-[18px] w-[18px]" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





import type { SVGProps } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import pingoLogo from "../assets/Pingo (5).png";

// --------------------------------------------------
// NAVIGATION
// --------------------------------------------------

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Applications", path: "/applications" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

type IconProps = SVGProps<SVGSVGElement>;

// --------------------------------------------------
// ICONS
// --------------------------------------------------

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.15" />
      <circle cx="17.55" cy="6.45" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.98A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.51v5.27Z" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.78 2H22l-7.03 8.03L23.24 22h-6.48l-5.07-6.63L5.88 22H2.65l7.52-8.59L2.24 2h6.64l4.58 6.05L18.78 2Zm-1.13 17.9h1.79L7.9 3.99H5.98L17.65 19.9Z" />
    </svg>
  );
}

function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 3.5 5.95 3.5 9.24c0 2.42.91 4.57 2.88 5.37.32.13.61 0 .7-.35l.27-1.09c.09-.35.06-.48-.2-.79-.57-.68-.93-1.56-.93-2.81 0-3.62 2.71-6.87 7.05-6.87 3.84 0 5.95 2.35 5.95 5.49 0 4.13-1.83 7.61-4.54 7.61-1.5 0-2.62-1.24-2.26-2.76.43-1.82 1.27-3.78 1.27-5.09 0-1.17-.63-2.15-1.93-2.15-1.53 0-2.75 1.58-2.75 3.69 0 1.35.46 2.26.46 2.26l-1.84 7.8c-.55 2.32-.08 5.17-.04 5.46.02.17.25.21.35.08.15-.2 2.05-2.54 2.69-4.88.18-.66 1.04-4.08 1.04-4.08.51.98 2.01 1.84 3.6 1.84 4.74 0 7.95-4.32 7.95-10.1C23.22 5.67 18.85 2 12 2Z" />
    </svg>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.58 6.19a2.76 2.76 0 0 0-1.94-1.95C17.92 3.78 12 3.78 12 3.78s-5.92 0-7.64.46a2.76 2.76 0 0 0-1.94 1.95A28.82 28.82 0 0 0 2 12a28.82 28.82 0 0 0 .42 5.81 2.76 2.76 0 0 0 1.94 1.95c1.72.46 7.64.46 7.64.46s5.92 0 7.64-.46a2.76 2.76 0 0 0 1.94-1.95A28.82 28.82 0 0 0 22 12a28.82 28.82 0 0 0-.42-5.81ZM10 8.5v7l6-3.5-6-3.5Z" />
    </svg>
  );
}

function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 488 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4Z" />
    </svg>
  );
}

function ThreadsIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.25c-4.98 0-8.25 3.46-8.25 8.63 0 5.35 3.3 8.87 8.42 8.87 4.48 0 7.62-2.67 7.62-6.55 0-3.26-2.02-5.28-5.47-5.52-3.44-.24-5.84 1.42-5.84 4.08 0 2.1 1.63 3.55 3.92 3.55 2.74 0 4.64-1.91 4.64-4.74 0-4.05-2.13-6.56-5.86-6.56-2.26 0-4.14.86-5.47 2.42" />
      <path d="M15.62 10.13c1.4.78 2.23 2.08 2.23 3.73 0 2.38-1.86 4.22-4.61 4.22" />
    </svg>
  );
}

function ArrowIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

// --------------------------------------------------
// SOCIAL LINKS
// --------------------------------------------------

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/__aniplgroup__/",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    url: "#",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: LinkedInIcon,
  },
  {
    name: "X",
    url: "https://x.com/ANInnovations",
    icon: XIcon,
  },
  {
    name: "Pinterest",
    url: "https://in.pinterest.com/aniplgroup/",
    icon: PinterestIcon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@aniplgroup",
    icon: YouTubeIcon,
  },
  {
    name: "Google",
    url: "https://myaccount.google.com/?utm_source=OGB&utm_medium=app",
    icon: GoogleIcon,
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@__aniplgroup__",
    icon: ThreadsIcon,
  },
];

// --------------------------------------------------
// FOOTER COMPONENT
// --------------------------------------------------

export default function Footer() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <footer className="w-full bg-white px-4 pb-4 pt-6 sm:px-6 lg:px-10 lg:pt-10">
      <div className="mx-auto max-w-[1500px] overflow-hidden bg-[#F8FAFC]">

        {/* ======================================
            TOP CTA SECTION
        ====================================== */}

        <div className="relative overflow-hidden bg-[#071B33] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">

          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-60 w-60 rounded-full border border-white/10"
          />

          <motion.div
            initial={{
              opacity: reducedMotion ? 1 : 0,
              y: reducedMotion ? 0 : 18,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7FAEFF]">
                LET'S BUILD SOMETHING REMARKABLE
              </p>

              <h2 className="max-w-[650px] text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white">
                Have a project{" "}
                <span className="text-[#6EA6FF]">in mind?</span>
              </h2>

              <p className="mt-4 max-w-[480px] text-sm leading-7 text-[#B9C9DB]">
                From immersive LED displays to impactful visual
                experiences, we're ready to bring your vision to life.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 self-start bg-[#0047C0] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1263E5] md:self-center"
            >
              Start a Conversation

              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* ======================================
            MAIN FOOTER CONTENT
        ====================================== */}

        <div className="grid gap-10 border-b border-[#DDE5EF] px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.7fr_1fr] lg:gap-14 lg:px-14 lg:py-14">

          {/* COLUMN 1: BRAND */}

          <motion.div
            initial={{
              opacity: reducedMotion ? 1 : 0,
              y: reducedMotion ? 0 : 16,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
          >
            <Link
              to="/"
              aria-label="Pingo Screens homepage"
              className="inline-flex items-center"
            >
              <img
                src={pingoLogo}
                alt="Pingo Screens"
                className="h-[60px] w-auto max-w-[190px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[330px] text-sm leading-7 text-[#526779]">
              Creating remarkable visual experiences for the spaces
              that matter. Innovative LED display solutions designed
              to inspire, engage, and transform environments.
            </p>

            {/* SOCIAL MEDIA */}

            <div className="mt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#142B48]">
                Follow Us
              </p>

              <div className="flex max-w-[360px] flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  const placeholder = social.url === "#";

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={placeholder ? undefined : "_blank"}
                      rel={placeholder ? undefined : "noopener noreferrer"}
                      onClick={(event) => {
                        if (placeholder) event.preventDefault();
                      }}
                      aria-label={
                        placeholder
                          ? `${social.name} — Coming soon`
                          : `Follow us on ${social.name}`
                      }
                      title={social.name}
                      className="group flex h-10 w-10 items-center justify-center border border-[#D6DFEA] bg-white text-[#243D53] transition-all duration-300 hover:-translate-y-1 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] motion-reduce:transform-none"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: QUICK LINKS */}

          <motion.div
            initial={{
              opacity: reducedMotion ? 1 : 0,
              y: reducedMotion ? 0 : 16,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : 0.1,
            }}
          >
            <h3 className="mb-6 text-base font-semibold text-[#142B48]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-4"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#526779] transition-colors duration-300 hover:text-[#0047C0]"
                >
                  <span className="h-1 w-1 bg-[#0047C0] opacity-0 transition-opacity group-hover:opacity-100" />

                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* COLUMN 3: CONTACT */}

          <motion.div
            initial={{
              opacity: reducedMotion ? 1 : 0,
              y: reducedMotion ? 0 : 16,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : 0.2,
            }}
          >
            <h3 className="mb-6 text-base font-semibold text-[#142B48]">
              Let's Connect
            </h3>

            {/* EMAIL */}

            <a
              href="mailto:info@aniplgroup.com"
              className="group block border-b border-[#DDE5EF] pb-6"
            >
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#647788]">
                01 / Email
              </span>

              <span className="flex items-center justify-between gap-3 text-sm font-semibold text-[#142B48] transition-colors group-hover:text-[#0047C0] sm:text-base">
                pingoscreens@gmail.com

                <ArrowIcon className="h-5 w-5 shrink-0 text-[#0047C0] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </a>

            {/* OFFICE */}

            <div className="pt-6">
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#647788]">
                02 / Office
              </span>

              <address className="max-w-[300px] text-sm not-italic leading-7 text-[#526779]">
                Mega Hills, Madhapur,
                <br />
                Hyderabad, Telangana 500081
              </address>
            </div>
          </motion.div>
        </div>

        {/* ======================================
            BOTTOM COPYRIGHT
        ====================================== */}

        <div className="flex flex-col gap-3 px-6 py-5 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
          <p className="text-xs text-[#647788] sm:text-sm">
            © {new Date().getFullYear()} Pingo Screens.
            All rights reserved.
          </p>

          <p className="text-xs text-[#647788]">
            A visual technology brand.
          </p>
        </div>

      </div>
    </footer>
  );
}