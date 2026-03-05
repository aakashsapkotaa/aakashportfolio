"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCode, FaTerminal, FaNetworkWired } from "react-icons/fa";

const highlights = [
    { icon: FaShieldAlt, title: "Cybersecurity", items: ["Ethical Hacking", "Network Security", "Penetration Testing", "Vulnerability Assessment"] },
    { icon: FaCode, title: "Development", items: ["Python", "C Programming", "Web Development", "Linux Administration"] },
];

const stats = [
    { icon: FaShieldAlt, label: "Security Audits", value: "10+" },
    { icon: FaTerminal, label: "Tools Built", value: "5+" },
    { icon: FaNetworkWired, label: "Networks Analyzed", value: "20+" },
    { icon: FaCode, label: "Lines of Code", value: "50K+" },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 rounded-full bg-[var(--neon-green)]" />
                                <span className="text-[var(--neon-green)] font-mono text-sm">// about.tsx</span>
                            </div>
                            <p className="text-[var(--text)] leading-relaxed text-lg mb-6">
                                I&apos;m a dedicated cybersecurity student at <span className="text-[var(--neon-green)] font-semibold">Sapthagiri NPS University</span>, passionate about ethical hacking, network security, and web development.
                            </p>
                            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                                With a strong foundation in programming languages like Python, C, and web technologies, I create secure and innovative digital solutions. I believe in the power of combining development expertise with security knowledge to build resilient systems.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Problem Solver", "Team Leader", "Quick Learner", "Security-First"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium glass text-[var(--neon-green)] border border-[var(--neon-green-dim)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Categories */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {highlights.map((cat) => (
                            <div key={cat.title} className="glass-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--neon-green-dim)] flex items-center justify-center text-[var(--neon-green)]">
                                        <cat.icon size={18} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[var(--text)]">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1.5 rounded-lg text-sm glass text-[var(--text-muted)] hover:text-[var(--neon-green)] hover:border-[var(--neon-green-dim)] transition-all duration-300 cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="glass-card p-6 text-center group"
                        >
                            <s.icon className="mx-auto text-2xl text-[var(--neon-green)] mb-3 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                            <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
