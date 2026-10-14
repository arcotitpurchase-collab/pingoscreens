
// import { useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router";
// import { Menu, X } from "lucide-react";

// import pingoLogo from "../assets/Pingo (5).png";

// const navigation = [
//   { name: "Home", path: "/" },
//   { name: "Products", path: "/products" },
//   { name: "Applications", path: "/applications" },
// //   { name: "Services", path: "/services" },
//   { name: "About Us", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 15);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!mobileOpen) return;

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setMobileOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [mobileOpen]);

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
//         scrolled
//           ? "border-[#E6ECF2] shadow-[0_6px_30px_rgba(16,44,76,0.08)]"
//           : "border-[#EEF1F5] shadow-[0_2px_12px_rgba(16,44,76,0.025)]"
//       }`}
//     >
//       <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center px-5 sm:px-8 lg:h-[84px] lg:px-10 xl:px-16">

//         {/* LOGO - 40% */}
//         <div className="flex min-w-0 flex-1 items-center lg:w-[40%] lg:flex-none">
//           <NavLink
//             to="/"
//             aria-label="Pingo Screens homepage"
//             className="inline-flex shrink-0 items-center"
//           >
//             <img
//               src={pingoLogo}
//               alt="Pingo Screens"
//               className="h-12 w-auto max-w-[190px] object-contain sm:h-14 lg:h-[62px]"
//               loading="eager"
//             />
//           </NavLink>
//         </div>

//         {/* DESKTOP NAVIGATION - 60% */}
//         <nav
//           aria-label="Main navigation"
//           className="hidden w-[60%] items-center justify-between gap-2 lg:flex"
//         >
//           {navigation.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               end={item.path === "/"}
//               className={({ isActive }) =>
//                 `group relative inline-flex shrink-0 items-center py-4 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 xl:text-[15px] ${
//                   isActive
//                     ? "text-[#087EA4]"
//                     : "text-[#102C4C] hover:text-[#087EA4]"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <span>{item.name}</span>

//                   <span
//                     className={`absolute bottom-2 left-0 h-[2px] bg-[#087EA4] transition-all duration-300 ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           type="button"
//           aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
//           aria-expanded={mobileOpen}
//           aria-controls="pingo-mobile-menu"
//           onClick={() => setMobileOpen((open) => !open)}
//           className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E2E8F0] text-[#102C4C] transition-colors duration-300 hover:border-[#087EA4] hover:bg-[#F2F8FB] lg:hidden"
//         >
//           {mobileOpen ? (
//             <X size={23} strokeWidth={1.8} />
//           ) : (
//             <Menu size={23} strokeWidth={1.8} />
//           )}
//         </button>
//       </div>

//       {/* MOBILE NAVIGATION */}
//       {mobileOpen && (
//         <nav
//           id="pingo-mobile-menu"
//           aria-label="Mobile navigation"
//           className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#E6ECF2] bg-white px-6 py-6 shadow-[0_15px_35px_rgba(16,44,76,0.12)] lg:hidden"
//         >
//           <div className="flex flex-col">
//             {navigation.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 end={item.path === "/"}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) =>
//                   `border-b border-[#EDF1F5] py-4 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
//                     isActive
//                       ? "text-[#087EA4]"
//                       : "text-[#102C4C] hover:text-[#087EA4]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }














// import { useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router";
// import { Menu, X } from "lucide-react";

// import pingoLogo from "../assets/Pingo (5).png";


// const BRAND_BLUE = "#0047C0";


// const navigation = [
//   { name: "Home", path: "/" },
//   { name: "Products", path: "/products" },
//   { name: "Applications", path: "/applications" },
//   { name: "About Us", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   // Close mobile navigation when the page changes.
//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   // Update header shadow based on scroll position.
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 15);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close mobile navigation when Escape is pressed.
//   useEffect(() => {
//     if (!mobileOpen) return;

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setMobileOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [mobileOpen]);

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
//         scrolled
//           ? "border-[#E6ECF2] shadow-[0_6px_30px_rgba(16,44,76,0.08)]"
//           : "border-[#EEF1F5] shadow-[0_2px_12px_rgba(16,44,76,0.025)]"
//       }`}
//     >
//       <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center px-5 sm:px-8 lg:h-[84px] lg:px-10 xl:px-16">

//         {/* =====================================
//             LOGO — 40%
//         ===================================== */}

//         <div className="flex min-w-0 flex-1 items-center lg:w-[40%] lg:flex-none">
//           <NavLink
//             to="/"
//             aria-label="Pingo Screens homepage"
//             className="inline-flex shrink-0 items-center"
//           >
//             <img
//               src={pingoLogo}
//               alt="Pingo Screens"
//               className="h-12 w-auto max-w-[190px] object-contain sm:h-14 lg:h-[62px]"
//               loading="eager"
//             />
//           </NavLink>
//         </div>

//         {/* =====================================
//             DESKTOP NAVIGATION — 60%
//         ===================================== */}

//         <nav
//           aria-label="Main navigation"
//           className="hidden w-[60%] items-center justify-between gap-2 lg:flex"
//         >
//           {navigation.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               end={item.path === "/"}
//               className={({ isActive }) =>
//                 `group relative inline-flex shrink-0 items-center py-4 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 xl:text-[15px] ${
//                   isActive
//                     ? "text-[#0047C0]"
//                     : "text-[#102C4C] hover:text-[#0047C0]"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <span>{item.name}</span>

//                   {/* ACTIVE / HOVER UNDERLINE */}
//                   <span
//                     className={`absolute bottom-2 left-0 h-[2px] bg-[#0047C0] transition-all duration-300 ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* =====================================
//             MOBILE MENU BUTTON
//         ===================================== */}

//         <button
//           type="button"
//           aria-label={
//             mobileOpen ? "Close navigation" : "Open navigation"
//           }
//           aria-expanded={mobileOpen}
//           aria-controls="pingo-mobile-menu"
//           onClick={() => setMobileOpen((open) => !open)}
//           className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E2E8F0] text-[#102C4C] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#F1F5FF] hover:text-[#0047C0] lg:hidden"
//         >
//           {mobileOpen ? (
//             <X size={23} strokeWidth={1.8} />
//           ) : (
//             <Menu size={23} strokeWidth={1.8} />
//           )}
//         </button>
//       </div>

//       {/* =====================================
//           MOBILE NAVIGATION
//       ===================================== */}

//       {mobileOpen && (
//         <nav
//           id="pingo-mobile-menu"
//           aria-label="Mobile navigation"
//           className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#E6ECF2] bg-white px-6 py-6 shadow-[0_15px_35px_rgba(16,44,76,0.12)] lg:hidden"
//         >
//           <div className="flex flex-col">
//             {navigation.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 end={item.path === "/"}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) =>
//                   `border-b border-[#EDF1F5] py-4 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
//                     isActive
//                       ? "text-[#0047C0]"
//                       : "text-[#102C4C] hover:text-[#0047C0]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

















import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

import pingoLogo from "../assets/Pingo (5).png";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Applications", path: "/applications" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
        scrolled
          ? "border-[#E6ECF2] shadow-[0_6px_30px_rgba(16,44,76,0.08)]"
          : "border-[#EEF1F5] shadow-[0_2px_12px_rgba(16,44,76,0.025)]"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center px-5 sm:px-8 lg:h-[84px] lg:px-10 xl:px-16">
        <div className="flex min-w-0 flex-1 items-center lg:w-[40%] lg:flex-none">
          <NavLink to="/" aria-label="Pingo Screens homepage" className="inline-flex shrink-0 items-center">
            <img
              src={pingoLogo}
              alt="Pingo Screens"
              className="h-12 w-auto max-w-[190px] object-contain sm:h-14 lg:h-[62px]"
              loading="eager"
            />
          </NavLink>
        </div>

        <nav aria-label="Main navigation" className="hidden w-[60%] items-center justify-between gap-2 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group relative inline-flex shrink-0 items-center py-4 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-300 xl:text-[15px] ${
                  isActive ? "text-[#0047C0]" : "text-[#102C4C] hover:text-[#0047C0]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-2 left-0 h-[2px] bg-[#0047C0] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="pingo-mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E2E8F0] text-[#102C4C] transition-colors duration-300 hover:border-[#0047C0] hover:bg-[#F1F5FF] hover:text-[#0047C0] lg:hidden"
        >
          {mobileOpen ? <X size={23} strokeWidth={1.8} /> : <Menu size={23} strokeWidth={1.8} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="pingo-mobile-menu"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#E6ECF2] bg-white px-6 py-6 shadow-[0_15px_35px_rgba(16,44,76,0.12)] lg:hidden"
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `border-b border-[#EDF1F5] py-4 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? "text-[#0047C0]" : "text-[#102C4C] hover:text-[#0047C0]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
