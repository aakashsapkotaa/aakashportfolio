"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="skills" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                    <p className="text-[var(--text-muted)] mt-4 max-w-md mx-auto">
                        Technologies and tools I work with across cybersecurity and development
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {skillCategories.map((cat, i) => (
                        <button
                            key={cat.title}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === i
                                    ? "bg-[var(--neon-green)] text-[var(--dark-bg)] shadow-[0_0_20px_var(--neon-green-dim)]"
                                    : "glass text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--neon-green-dim)]"
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </motion.div>

                {/* Skill Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {skillCategories[activeTab].skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-5 group text-center"
                            >
                                <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--neon-green-dim)] flex items-center justify-center mb-4 group-hover:shadow-[0_0_25px_var(--neon-green-dim)] transition-all duration-300 group-hover:scale-110">
                                    <skill.icon className="text-2xl text-[var(--neon-green)]" />
                                </div>
                                <h3 className="text-sm font-semibold text-[var(--text)] mb-3">{skill.name}</h3>
                                <div className="w-full h-1.5 rounded-full bg-[var(--dark-border)] overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.05 }}
                                        className="h-full rounded-full bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)]"
                                    />
                                </div>
                                <span className="text-xs text-[var(--text-muted)] mt-2 inline-block">{skill.level}%</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
