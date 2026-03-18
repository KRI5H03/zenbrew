"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";

const links = [
  {
    href: "/",
    name: "home",
  },
  {
    href: "/",
    name: "explore",
  },
  {
    href: "/",
    name: "about",
  },
  {
    href: "/",
    name: "menu",
  },
  {
    href: "/",
    name: "contact",
  },
];

const letterAnimaton = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.6, 0, 0.23, 1] as const, delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, 0, 0.23, 1] as const, delay: i[1] },
  }),
};

const getLetter = (name: string) => {
  const letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnimaton}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const NavbarList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {getLetter(link.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
