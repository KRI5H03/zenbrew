"use client";

import { motion } from "framer-motion";
import React from "react";
import NavbarList from "./NavbarList";

const heightAnimation = {
  initial: {
    height: 0,
  },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] as const },
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] as const },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-[50] -top-full w-full"
    >
      <div className="container mx-auto h-full flex items-center justify-center ">
        <NavbarList/>
      </div>
    </motion.nav>
  );
};

export default Navbar;
