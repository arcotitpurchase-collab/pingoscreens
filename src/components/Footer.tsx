
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







import type { SVGProps } from "react";

import { Link } from "react-router";

import { motion, useReducedMotion } from "motion/react";

import pingoLogo from "../assets/Pingo (5).png";

// =====================================================

// NAVIGATION — SERVICES REMOVED

// =====================================================

const footerLinks = [

  { name: "Home", path: "/" },

  { name: "Products", path: "/products" },

  { name: "Applications", path: "/applications" },

  { name: "About Us", path: "/about" },

  { name: "Contact", path: "/contact" },

];

// =====================================================

// CUSTOM SVG ICONS — NO LUCIDE DEPENDENCY

// =====================================================

type IconProps = SVGProps<SVGSVGElement>;

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

      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />

      <circle cx="12" cy="12" r="4" />

      <circle

        cx="17.5"

        cy="6.5"

        r="1"

        fill="currentColor"

        stroke="none"

      />

    </svg>

  );

}

function LinkedInIcon(props: IconProps) {

  return (

    <svg

      viewBox="0 0 24 24"

      fill="currentColor"

      aria-hidden="true"

      {...props}

    >

      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.51v5.27Z" />

    </svg>

  );

}

function YouTubeIcon(props: IconProps) {

  return (

    <svg

      viewBox="0 0 24 24"

      fill="currentColor"

      aria-hidden="true"

      {...props}

    >

      <path d="M23 7.1a3 3 0 0 0-2.1-2.13C19.03 4.5 12 4.5 12 4.5s-7.03 0-8.9.47A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12c0 1.64.17 3.28.5 4.9a3 3 0 0 0 2.1 2.13c1.87.47 8.9.47 8.9.47s7.03 0 8.9-.47A3 3 0 0 0 23 16.9c.33-1.62.5-3.26.5-4.9S23.33 8.72 23 7.1ZM9.65 15.55v-7.1L15.9 12l-6.25 3.55Z" />

    </svg>

  );

}

function FacebookIcon(props: IconProps) {

  return (

    <svg

      viewBox="0 0 24 24"

      fill="currentColor"

      aria-hidden="true"

      {...props}

    >

      <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.98A10 10 0 0 0 22 12Z" />

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

// =====================================================

// TEMPORARY SOCIAL MEDIA LINKS

// =====================================================

const socialLinks = [

  { name: "Instagram", url: "#", icon: InstagramIcon },

  { name: "LinkedIn", url: "#", icon: LinkedInIcon },

  { name: "YouTube", url: "#", icon: YouTubeIcon },

  { name: "Facebook", url: "#", icon: FacebookIcon },

];

// =====================================================

// PREMIUM LIGHT FOOTER

// =====================================================

export default function Footer() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <footer className="w-full bg-white px-4 pb-4 pt-5 sm:px-6 lg:px-10 lg:pt-6">
      <div className="mx-auto max-w-[1500px] border-t-[3px] border-[#0047C0] bg-[#F8FAFC]">
        {/* TOP: BRAND LEFT / STATEMENT AND CONTACT RIGHT */}
        <div className="grid gap-6 border-b border-[#DDE5EF] px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:px-12 lg:py-8">
          <motion.div
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.65 }}
            className="flex flex-col items-start"
          >
            <Link to="/" aria-label="Pingo Screens homepage" className="inline-flex items-center">
              <img src={pingoLogo} alt="Pingo Screens" className="h-[48px] w-auto max-w-[170px] object-contain sm:h-[56px]" />
            </Link>
            <p className="mt-3 max-w-[320px] text-sm leading-6 text-[#526779]">
              Creating remarkable visual experiences for the spaces that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.1 }}
            className="lg:justify-self-end"
          >
           
            <h2 className="max-w-[580px] text-[clamp(1.65rem,3vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#142B48]">
              Have a project <span className="text-[#0047C0]">in mind?</span>
            </h2>
            <Link
              to="/contact"
              className="group mt-4 inline-flex min-h-10 items-center gap-3 bg-[#0047C0] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#003799] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047C0]"
            >
              Start a Conversation
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          </motion.div>
        </div>

        {/* MIDDLE: OPEN, HORIZONTAL SITE NAVIGATION */}
        <div className="flex flex-col gap-3 border-b border-[#DDE5EF] px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:py-5">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0047C0]">Explore Pingo</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative text-sm font-semibold text-[#243D53] transition-colors duration-300 hover:text-[#0047C0] focus-visible:text-[#0047C0] sm:text-base"
              >
                {link.name}
                <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0047C0] transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* BOTTOM: COPYRIGHT LEFT / SOCIAL RIGHT */}
        <div className="flex flex-col-reverse gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-4">
          <div className="space-y-0.5 text-xs leading-5 text-[#647788] sm:text-sm">
            <p>© {new Date().getFullYear()} Pingo Screens. All rights reserved.</p>
            
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#526779]">Follow us</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const placeholder = social.url === "#";
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={placeholder ? undefined : "_blank"}
                  rel={placeholder ? undefined : "noopener noreferrer"}
                  onClick={(event) => { if (placeholder) event.preventDefault(); }}
                  aria-label={placeholder ? `${social.name} — Coming soon` : `Pingo Screens on ${social.name}`}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center border border-[#D6DFEA] bg-white text-[#142B48] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0047C0] hover:bg-[#0047C0] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047C0] motion-reduce:transform-none"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

