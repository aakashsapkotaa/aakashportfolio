"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaEye, FaPaperPlane, FaDownload, FaShieldAlt, FaLock } from "react-icons/fa";
import { SiPython, SiJavascript, SiReact } from "react-icons/si";
import { personalInfo } from "@/data/social";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="cyber-grid" />
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--neon-green)] rounded-full opacity-5 blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--cyber-blue)] rounded-full opacity-5 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cyber-purple)] rounded-full opacity-[0.02] blur-[150px]" />
            </div>

            <div className="section-container relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--neon-green)] mb-6"
                        >
                            <span className="status-dot" />
                            <span>Available for opportunities</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            <span className="text-[var(--text-muted)] text-lg sm:text-xl block mb-2">Hello, I&apos;m 👋</span>
                            <span className="gradient-text">{personalInfo.name}</span>
                        </h1>

                        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-12">
                            <span className="text-[var(--text-muted)]">I&apos;m a </span>
                            <TypeAnimation
                                sequence={[
                                    "Cybersecurity Student",
                                    2000,
                                    "Full Stack Developer",
                                    2000,
                                    "Ethical Hacking Enthusiast",
                                    2000,
                                    "Security Researcher",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-[var(--neon-green)]"
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                            Passionate about building secure digital solutions and exploring the frontiers of cybersecurity from {personalInfo.location}.
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projects"
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--neon-green)] text-[var(--dark-bg)] font-semibold hover:shadow-[0_0_30px_var(--neon-green-dim)] transition-all duration-300 hover:scale-105"
                            >
                                <FaEye className="group-hover:animate-pulse" />
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl glass border border-[var(--neon-green-dim)] text-[var(--neon-green)] font-semibold hover:shadow-[0_0_30px_var(--neon-green-dim)] transition-all duration-300 hover:scale-105"
                            >
                                <FaPaperPlane className="group-hover:animate-bounce" />
                                Get In Touch
                            </a>
                            <a
                                href={personalInfo.resumeUrl}
                                download="Aakash_Sapkota_CV.pdf"
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl glass text-[var(--text-muted)] hover:text-[var(--cyber-blue)] font-semibold hover:border-[var(--cyber-blue-dim)] transition-all duration-300 hover:scale-105"
                            >
                                <FaDownload />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-8 mt-10 justify-center lg:justify-start"
                        >
                            {[
                                { value: "5+", label: "Projects" },
                                { value: "2+", label: "Years Experience" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="relative flex-shrink-0"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Glow Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--neon-green)] via-[var(--cyber-blue)] to-[var(--cyber-purple)] p-[3px] animate-spin" style={{ animationDuration: "8s" }}>
                                <div className="w-full h-full rounded-full bg-[var(--bg)]" />
                            </div>

                            {/* Image */}
                            <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-[var(--dark-border)]">
                                <Image
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-transparent to-transparent opacity-40" />
                            </div>

                            {/* Scan Line */}
                            <div className="absolute inset-3 rounded-full overflow-hidden pointer-events-none">
                                <div className="scan-line" />
                            </div>

                            {/* Security Badge */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute bottom-4 right-4 glass px-3 py-1.5 rounded-full flex items-center gap-2 text-xs text-[var(--neon-green)]"
                            >
                                <FaLock size={10} />
                                <span>Secure</span>
                            </motion.div>

                            {/* Floating Icons */}
                            {[
                                { Icon: SiPython, pos: "top-4 -left-4", delay: 0 },
                                { Icon: SiJavascript, pos: "-top-4 right-12", delay: 1 },
                                { Icon: FaShieldAlt, pos: "bottom-12 -left-6", delay: 2 },
                                { Icon: SiReact, pos: "top-1/3 -right-6", delay: 1.5 },
                            ].map(({ Icon, pos, delay }, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay }}
                                    className={`absolute ${pos} w-10 h-10 glass rounded-xl flex items-center justify-center text-[var(--neon-green)] text-lg`}
                                >
                                    <Icon />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 rounded-full bg-[var(--neon-green)]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
