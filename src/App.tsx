
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Applications from "./pages/Applications";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />
    </>
  );
}
