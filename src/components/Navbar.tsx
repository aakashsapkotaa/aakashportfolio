"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map((l) => l.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "py-3 glass shadow-lg shadow-[var(--neon-green-dim)]"
                    : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => handleNav("#home")} className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-[var(--neon-green)] bg-opacity-10 border border-[var(--neon-green-dim)] flex items-center justify-center group-hover:shadow-[0_0_20px_var(--neon-green-dim)] transition-all duration-300">
                            <span className="text-[var(--neon-green)] font-mono text-lg font-bold">$</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-1">
                            <span className="font-mono text-sm font-bold text-[var(--neon-green)]">bash</span>
                            <span className="text-[var(--text-muted)] font-mono text-sm">@aakash</span>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNav(link.href)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${activeSection === link.href.slice(1)
                                    ? "text-[var(--neon-green)]"
                                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[var(--neon-green)] rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-green)] hover:shadow-[0_0_15px_var(--neon-green-dim)] transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-green)] transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-[72px] left-4 right-4 z-40 glass rounded-2xl p-4 md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNav(link.href)}
                                    className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${activeSection === link.href.slice(1)
                                        ? "text-[var(--neon-green)] bg-[var(--neon-green-dim)]"
                                        : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--glass-bg)]"
                                        }`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
