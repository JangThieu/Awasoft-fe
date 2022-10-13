import Example from "components/Example";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";
import Milestones from "components/Milestones";
import Portfolio from "components/Portfolio";
import Technology from "components/Technology";
import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import Skills from "components/Skills";
import Testimonials from "components/Testimonials";
import Video from "components/Video";
import React from "react";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Maps } from "components/Maps";
import 'tippy.js/dist/tippy.css';

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Example />
      <Video />
      <Technology />
      <Testimonials />
      <Skills />
      <ToastContainer />
      <Contact />
      {/* <Maps/> */}
      <Footer />
    </motion.div>
  );
}
