"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = ["Synopsis", "Cast", "Gallery", "Locations", "Press", "Tech"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-400 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-poppins font-extrabold text-sm tracking-widest text-gold-light hover:text-gold transition-colors"
      >
        ML
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-poppins text-xs font-medium tracking-widest uppercase text-muted hover:text-gold-light transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Country badge */}
      <div className="text-xs font-semibold tracking-widest text-cyan uppercase">
        ZW · 2026
      </div>
    </motion.nav>
  );
}
