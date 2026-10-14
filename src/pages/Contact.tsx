// import { useState, type FormEvent } from "react";
// import { Link } from "react-router";
// import { motion, useReducedMotion } from "motion/react";

// type Enquiry = {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   product: string;
//   message: string;
// };

// const emptyForm: Enquiry = {
//   name: "",
//   email: "",
//   phone: "",
//   company: "",
//   product: "",
//   message: "",
// };

// const productOptions = [
//   "Indoor LED Screens",
//   "Outdoor LED Screens",
//   "Transparent LED Screens",
//   "Fine Pitch LED Screens",
//   "Creative LED Displays",
//   "Not sure yet",
// ];

// function Arrow({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       className={className}
//     >
//       <path d="M7 17 17 7M8 7h9v9" />
//     </svg>
//   );
// }

// export default function Contact() {
//   const reduceMotion = useReducedMotion();
//   const [form, setForm] = useState<Enquiry>(emptyForm);
//   const [feedback, setFeedback] = useState("");

//   const change = (key: keyof Enquiry, value: string) => {
//     setForm((current) => ({ ...current, [key]: value }));
//     if (feedback) setFeedback("");
//   };

//   const submit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const subject = `Pingo Screens | ${form.product} enquiry`;
//     const message = [
//       "Hello Pingo Screens,",
//       "",
//       "I would like to discuss a display project.",
//       "",
//       `Name: ${form.name}`,
//       `Email: ${form.email}`,
//       `Phone: ${form.phone || "Not provided"}`,
//       `Company: ${form.company || "Not provided"}`,
//       `Interested in: ${form.product}`,
//       "",
//       "Project details:",
//       form.message,
//     ].join("\n");

//     // The website is frontend-only. This prepares an email; it does not send one.
//     // Replace the empty recipient after an official Pingo email is confirmed.
//     const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
//     setFeedback("An email draft should open. Add the Pingo Screens recipient address and send it from your email app.");
//     window.location.href = url;
//   };

//   const reveal = (delay = 0) => ({
//     initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, amount: 0.18 },
//     transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
//   });

//   const field =
//     "w-full min-w-0 rounded-none border-0 border-b border-[#CDD8E1] bg-transparent px-0 py-3 text-[15px] font-medium text-[#122E44] outline-none transition-colors duration-300 placeholder:font-normal placeholder:text-[#9AAAB7] focus:border-[#106FAD] focus:ring-0";
//   const label =
//     "block text-[11px] font-semibold uppercase tracking-[0.13em] text-[#647C8E]";

//   return (
//     <main className="w-full overflow-hidden bg-[#FCFDFD]">
//       {/* EDITORIAL HERO */}
//       <section className="grid min-h-[570px] grid-cols-1 lg:min-h-[630px] lg:grid-cols-[52%_48%]">
//         <div className="relative flex items-center bg-[#F2F6F8] px-6 py-20 sm:px-12 lg:px-16 xl:px-[max(5rem,calc((100vw-1400px)/2))]">
//           <div className="relative z-10 max-w-[640px]">
//             <motion.div {...reveal(0)} className="mb-9 flex items-center gap-3">
//               <span className="h-px w-9 bg-[#137FAF]" />
//               <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#126F9F]">Pingo Screens / Contact</span>
//             </motion.div>
//             <motion.h1
//               {...reveal(0.08)}
//               className="text-[clamp(3.5rem,6.6vw,7.6rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#102C43]"
//             >
//               Let's make<br />
//               <span className="text-[#1176AF]">it remarkable.</span>
//             </motion.h1>
//             <motion.p
//               {...reveal(0.16)}
//               className="mt-8 max-w-[440px] text-[16px] leading-[1.9] text-[#536B7F] sm:text-[17px]"
//             >
//               Have a space to transform or an idea worth showing? Tell us what you envision. We'll help you explore the right LED display experience.
//             </motion.p>
//             <motion.div {...reveal(0.23)} className="mt-10">
//               <a
//                 href="#enquiry"
//                 className="group inline-flex items-center gap-4 border-b border-[#126F9F] pb-2.5 text-[14px] font-semibold tracking-[0.02em] text-[#123C56] transition-colors hover:text-[#1176AF]"
//               >
//                 Start your enquiry
//                 <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
//               </a>
//             </motion.div>
//           </div>
//           <span aria-hidden="true" className="pointer-events-none absolute bottom-8 left-6 text-[11px] tracking-[0.2em] text-[#94A7B6] sm:left-12 lg:left-16">01 — YOUR VISION</span>
//         </div>
//         <div className="relative min-h-[330px] overflow-hidden bg-[#15354A] sm:min-h-[440px] lg:min-h-full">
//           <motion.img
//             src="/images/hero/indoor-led.webp"
//             alt="Premium LED display installation in a modern interior"
//             className="absolute inset-0 h-full w-full object-cover"
//             initial={{ scale: reduceMotion ? 1 : 1.08, opacity: reduceMotion ? 1 : 0.65 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true, amount: 0.15 }}
//             transition={{ duration: reduceMotion ? 0 : 1.7, ease: "easeOut" }}
//           />
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061827]/65 via-transparent to-[#061827]/10" />
//           <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6 sm:bottom-11 sm:left-11 sm:right-11">
//             <p className="max-w-[280px] text-[13px] font-medium leading-6 tracking-[0.02em] text-white/90">A brighter perspective on every space.</p>
//             <span className="shrink-0 text-[11px] tracking-[0.2em] text-white/70">PINGO / 2026</span>
//           </div>
//         </div>
//       </section>

//       {/* ENQUIRY */}
//       <section id="enquiry" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
//         <div className="mx-auto grid max-w-[1350px] grid-cols-1 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
//           <motion.div {...reveal(0)}>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-px w-8 bg-[#1176AF]" />
//               <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1176AF]">Project enquiries</span>
//             </div>
//             <h2 className="max-w-[425px] text-[clamp(2.2rem,3.8vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#102C43]">
//               The next great display starts here.
//             </h2>
//             <p className="mt-7 max-w-[380px] text-[15px] leading-8 text-[#687D8C]">
//               From a single feature screen to a full-scale visual installation, share the details that matter to you.
//             </p>
//             <div className="mt-12 border-t border-[#DDE5EA] pt-6">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1377AB]">Explore our collection</p>
//               <Link to="/products" className="group mt-3 inline-flex items-center gap-3 text-[16px] font-medium text-[#183C53] hover:text-[#1176AF]">
//                 View display solutions
//                 <Arrow className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div {...reveal(0.12)} className="relative border-t-[3px] border-[#126D9F] bg-[#F5F8FA] px-6 py-9 sm:px-10 sm:py-12 xl:px-14 xl:py-14">
//             <div className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-[#DCE5EC] pb-7">
//               <div>
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.23em] text-[#1579AC]">Tell us about your project</p>
//                 <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.045em] text-[#102C43] sm:text-[34px]">Let's talk displays.</h2>
//               </div>
//               <span className="text-[12px] text-[#7E91A1]">* Required fields</span>
//             </div>
//             <form onSubmit={submit} className="space-y-8">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
//                 <div>
//                   <label htmlFor="pingo-name" className={label}>Full name *</label>
//                   <input id="pingo-name" autoComplete="name" required maxLength={100} value={form.name} onChange={(e) => change("name", e.target.value)} className={field} placeholder="Your name" />
//                 </div>
//                 <div>
//                   <label htmlFor="pingo-email" className={label}>Email address *</label>
//                   <input id="pingo-email" type="email" autoComplete="email" required maxLength={150} value={form.email} onChange={(e) => change("email", e.target.value)} className={field} placeholder="you@company.com" />
//                 </div>
//                 <div>
//                   <label htmlFor="pingo-phone" className={label}>Phone number</label>
//                   <input id="pingo-phone" type="tel" autoComplete="tel" maxLength={30} value={form.phone} onChange={(e) => change("phone", e.target.value)} className={field} placeholder="+91" />
//                 </div>
//                 <div>
//                   <label htmlFor="pingo-company" className={label}>Company</label>
//                   <input id="pingo-company" autoComplete="organization" maxLength={150} value={form.company} onChange={(e) => change("company", e.target.value)} className={field} placeholder="Company name" />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="pingo-product" className={label}>Interested in *</label>
//                 <select id="pingo-product" required value={form.product} onChange={(e) => change("product", e.target.value)} className={`${field} cursor-pointer`}>
//                   <option value="" disabled>Select a display solution</option>
//                   {productOptions.map((item) => <option key={item} value={item}>{item}</option>)}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="pingo-message" className={label}>Your project details *</label>
//                 <textarea id="pingo-message" required rows={4} maxLength={3000} value={form.message} onChange={(e) => change("message", e.target.value)} className={`${field} resize-y`} placeholder="Tell us a little about the space, the idea and what you're looking for..." />
//               </div>
//               <div className="flex flex-col items-start gap-4 pt-1">
//                 <button type="submit" className="group inline-flex min-h-[56px] w-full items-center justify-between gap-9 bg-[#123C56] px-6 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#126F9F] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#126F9F] sm:w-auto sm:min-w-[235px]">
//                   Prepare enquiry
//                   <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
//                 </button>
//                 <p className="max-w-[490px] text-[12px] leading-6 text-[#7B8D9C]">This opens a prefilled email draft. No information is sent from this website; add the recipient address in your email app before sending.</p>
//               </div>
//               {feedback && <p role="status" className="border-l-2 border-[#126F9F] bg-white px-4 py-3 text-[13px] leading-6 text-[#2C526A]">{feedback}</p>}
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }










import { useState, type FormEvent } from "react";

import { motion, useReducedMotion } from "motion/react";



type Enquiry = {

  name: string;

  email: string;

  phone: string;

  company: string;

  product: string;

  message: string;

};



const emptyForm: Enquiry = {

  name: "",

  email: "",

  phone: "",

  company: "",

  product: "",

  message: "",

};



const productOptions = [

  "Indoor LED Screens",

  "Outdoor LED Screens",

  "Transparent LED Screens",

  "Fine Pitch LED Screens",

  "Creative LED Displays",

  "Not sure yet",

];



function Arrow({ className = "" }: { className?: string }) {

  return (

    <svg

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      strokeWidth="1.6"

      strokeLinecap="round"

      strokeLinejoin="round"

      aria-hidden="true"

      className={className}

    >

      <path d="M7 17 17 7M8 7h9v9" />

    </svg>

  );

}



export default function Contact() {

  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState<Enquiry>(emptyForm);

  const [feedback, setFeedback] = useState("");



  const change = (key: keyof Enquiry, value: string) => {

    setForm((current) => ({ ...current, [key]: value }));

    if (feedback) setFeedback("");

  };



  const submit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const subject = `Pingo Screens | ${form.product} enquiry`;

    const message = [

      "Hello Pingo Screens,",

      "",

      "I would like to discuss a display project.",

      "",

      `Name: ${form.name}`,

      `Email: ${form.email}`,

      `Phone: ${form.phone || "Not provided"}`,

      `Company: ${form.company || "Not provided"}`,

      `Interested in: ${form.product}`,

      "",

      "Project details:",

      form.message,

    ].join("\n");



    // The website is frontend-only. This prepares an email; it does not send one.

    // Replace the empty recipient after an official Pingo email is confirmed.

    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    setFeedback("An email draft should open. Add the Pingo Screens recipient address and send it from your email app.");

    window.location.href = url;

  };



  const reveal = (delay = 0) => ({

    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },

    whileInView: { opacity: 1, y: 0 },

    viewport: { once: true, amount: 0.18 },

    transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },

  });



  const field =

    "w-full min-w-0 rounded-none border-0 border-b border-[#CDD8E1] bg-transparent px-0 py-2 text-sm font-normal text-[#122E44] outline-none transition-colors duration-300 placeholder:font-normal placeholder:text-[#9AAAB7] focus:border-[#0047C0] focus:ring-0";

  const label =

    "block text-[11px] font-medium uppercase tracking-[0.10em] text-[#647C8E]";



  return (

    <main className="w-full overflow-hidden bg-[#FCFDFD]">

      {/* EDITORIAL HERO */}

      <section className="grid min-h-[570px] grid-cols-1 lg:min-h-[630px] lg:grid-cols-[52%_48%]">

        <div className="relative flex items-center bg-[#F2F6F8] px-6 py-20 sm:px-12 lg:px-16 xl:px-[max(5rem,calc((100vw-1400px)/2))]">

          <div className="relative z-10 max-w-[640px]">

            <motion.div {...reveal(0)} className="mb-9 flex items-center gap-3">

              <span className="h-px w-9 bg-[#0047C0]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Pingo Screens / Contact</span>

            </motion.div>

            <motion.h1

              {...reveal(0.08)}

              className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#102C43]"

            >

              Let's make<br />

              <span className="text-[#0047C0]">it remarkable.</span>

            </motion.h1>

            <motion.p

              {...reveal(0.16)}

              className="mt-8 max-w-[440px] text-base font-normal leading-8 text-[#536B7F]"

            >

              Tell us about your project and explore the right LED display solution for your space.

            </motion.p>

            <motion.div {...reveal(0.23)} className="mt-10">

              <a

                href="#enquiry"

                className="group inline-flex items-center gap-4 border-b border-[#0047C0] pb-2.5 text-sm font-semibold tracking-normal text-[#123C56] transition-colors hover:text-[#0047C0]"

              >

                Start your enquiry

                <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />

              </a>

            </motion.div>

          </div>

        </div>

        <div className="relative min-h-[330px] overflow-hidden bg-[#15354A] sm:min-h-[440px] lg:min-h-full">

          <motion.img

            src="/images/contact/contact-banner.webp"

            alt="Premium LED display installation in a modern interior"

            className="absolute inset-0 h-full w-full object-cover"

            initial={{ scale: reduceMotion ? 1 : 1.08, opacity: reduceMotion ? 1 : 0.65 }}

            whileInView={{ scale: 1, opacity: 1 }}

            viewport={{ once: true, amount: 0.15 }}

            transition={{ duration: reduceMotion ? 0 : 1.7, ease: "easeOut" }}

          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061827]/65 via-transparent to-[#061827]/10" />

        </div>

      </section>



      {/* ENQUIRY */}

      <section id="enquiry" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

        <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-20">

          <motion.div {...reveal(0)}>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-[#0047C0]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0047C0]">Project enquiries</span>

            </div>

            <h2 className="max-w-[425px] text-[clamp(2.25rem,3.8vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#102C43]">

              The next great display starts here.

            </h2>

            <p className="mt-7 max-w-[380px] text-base font-normal leading-8 text-[#536B7F]">

              Share your requirements, and we’ll help you find the right display.

            </p>

          </motion.div>



          {/* The form panel aligns with the top of the left enquiry content. */}

          <motion.div {...reveal(0.12)} className="min-w-0">

            <form onSubmit={submit} className="w-full space-y-5 border-t-[3px] border-[#0047C0] bg-[#F5F8FA] px-5 py-6 sm:px-8 sm:py-8 xl:px-10">

              <p className="text-xs font-normal text-[#647C8E]">Fields marked * are required.</p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">

                <div>

                  <label htmlFor="pingo-name" className={label}>Full name *</label>

                  <input id="pingo-name" autoComplete="name" required maxLength={100} value={form.name} onChange={(e) => change("name", e.target.value)} className={field} placeholder="Your name" />

                </div>

                <div>

                  <label htmlFor="pingo-email" className={label}>Email address *</label>

                  <input id="pingo-email" type="email" autoComplete="email" required maxLength={150} value={form.email} onChange={(e) => change("email", e.target.value)} className={field} placeholder="you@company.com" />

                </div>

                <div>

                  <label htmlFor="pingo-phone" className={label}>Phone number</label>

                  <input id="pingo-phone" type="tel" autoComplete="tel" maxLength={30} value={form.phone} onChange={(e) => change("phone", e.target.value)} className={field} placeholder="+91" />

                </div>

                <div>

                  <label htmlFor="pingo-company" className={label}>Company</label>

                  <input id="pingo-company" autoComplete="organization" maxLength={150} value={form.company} onChange={(e) => change("company", e.target.value)} className={field} placeholder="Company name" />

                </div>

              </div>

              <div>

                <label htmlFor="pingo-product" className={label}>Interested in *</label>

                <select id="pingo-product" required value={form.product} onChange={(e) => change("product", e.target.value)} className={`${field} cursor-pointer`}>

                  <option value="" disabled>Select a display solution</option>

                  {productOptions.map((item) => <option key={item} value={item}>{item}</option>)}

                </select>

              </div>

              <div>

                <label htmlFor="pingo-message" className={label}>Your project details *</label>

                <textarea id="pingo-message" required rows={3} maxLength={3000} value={form.message} onChange={(e) => change("message", e.target.value)} className={`${field} resize-y`} placeholder="Tell us a little about the space, the idea and what you're looking for..." />

              </div>

              <div className="flex flex-col items-start gap-2 pt-0">

                <button type="submit" className="group inline-flex min-h-[46px] w-full items-center justify-between gap-7 bg-[#0047C0] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#003799] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0047C0] sm:w-auto sm:min-w-[205px]">

                  Prepare enquiry

                  <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />

                </button>

                <p className="max-w-[490px] text-xs font-normal leading-6 text-[#7B8D9C]">Opens an email draft. Add the recipient address and send from your email app.</p>

              </div>

              {feedback && <p role="status" className="border-l-2 border-[#0047C0] bg-white px-4 py-3 text-sm leading-6 text-[#2C526A]">{feedback}</p>}

            </form>

          </motion.div>

        </div>

      </section>

    </main>

  );

}
