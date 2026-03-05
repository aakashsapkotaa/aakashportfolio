"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaShieldAlt, FaCode, FaUsers, FaRocket, FaGraduationCap,
    FaLaptopCode, FaCertificate, FaTrophy, FaMedal, FaStar, FaAward,
    FaNetworkWired,
} from "react-icons/fa";
import { experiences, education, certifications, achievements } from "@/data/experience";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    shield: FaShieldAlt,
    code: FaCode,
    users: FaUsers,
    rocket: FaRocket,
    trophy: FaTrophy,
    medal: FaMedal,
    star: FaStar,
    award: FaAward,
};

const tabs = [
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Achievements", id: "achievements" },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <section id="experience" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-[var(--neon-green)] text-[var(--dark-bg)] shadow-[0_0_20px_var(--neon-green-dim)]"
                                    : "glass text-[var(--text-muted)] hover:text-[var(--text)]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {/* Experience Tab */}
                    {activeTab === "experience" && (
                        <motion.div
                            key="experience"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="relative"
                        >
                            {/* Timeline line */}
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-green)] via-[var(--cyber-blue)] to-transparent" />

                            {experiences.map((exp, i) => {
                                const Icon = iconMap[exp.icon] || FaCode;
                                return (
                                    <motion.div
                                        key={exp.title}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`relative mb-10 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                                            } ml-12 md:ml-0`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute -left-[33px] md:left-auto md:-right-[23px] top-6 w-4 h-4 rounded-full bg-[var(--neon-green)] border-4 border-[var(--bg)] shadow-[0_0_10px_var(--neon-green)]"
                                            style={i % 2 !== 0 ? { left: "-23px", right: "auto" } : undefined}
                                        />

                                        <div className="glass-card p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-[var(--neon-green-dim)] flex items-center justify-center text-[var(--neon-green)]">
                                                        <Icon size={16} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-[var(--text)]">{exp.title}</h3>
                                                        <p className="text-sm text-[var(--text-muted)]">{exp.company}</p>
                                                    </div>
                                                </div>
                                                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--neon-green-dim)] text-[var(--neon-green)] border border-[var(--neon-green-dim)] whitespace-nowrap">
                                                    {exp.badge}
                                                </span>
                                            </div>
                                            <p className="text-xs text-[var(--cyber-blue)] mb-3 font-mono">{exp.period}</p>
                                            <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{exp.description}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.tags.map((tag) => (
                                                    <span key={tag} className="px-2 py-0.5 rounded-md text-xs glass text-[var(--text-muted)]">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* Education Tab */}
                    {activeTab === "education" && (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {education.map((edu, i) => {
                                const icons = [FaGraduationCap, FaLaptopCode, FaCertificate];
                                const Icon = icons[i] || FaGraduationCap;
                                return (
                                    <motion.div
                                        key={edu.degree}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass-card p-6"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[var(--neon-green-dim)] flex items-center justify-center text-[var(--neon-green)] mb-4">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="font-semibold text-[var(--text)] mb-1">{edu.degree}</h3>
                                        <p className="text-sm text-[var(--cyber-blue)] mb-1">{edu.institution}</p>
                                        <p className="text-xs text-[var(--text-muted)] mb-1">{edu.specialization}</p>
                                        <p className="text-xs text-[var(--text-muted)] font-mono mb-3">{edu.period}</p>
                                        <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{edu.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {edu.highlights.map((h) => (
                                                <span key={h} className="px-2 py-0.5 rounded-md text-xs bg-[var(--neon-green-dim)] text-[var(--neon-green)]">{h}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* Certifications Tab */}
                    {activeTab === "certifications" && (
                        <motion.div
                            key="certifications"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {certifications.map((cert, i) => {
                                const icons = [FaShieldAlt, FaNetworkWired, FaCode];
                                const Icon = icons[i] || FaCertificate;
                                return (
                                    <motion.div
                                        key={cert.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass-card p-6"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[var(--cyber-blue-dim)] flex items-center justify-center text-[var(--cyber-blue)] mb-4">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="font-semibold text-[var(--text)] mb-1">{cert.title}</h3>
                                        <p className="text-sm text-[var(--cyber-blue)] mb-1">{cert.issuer}</p>
                                        <p className="text-xs text-[var(--text-muted)] font-mono mb-3">{cert.date}</p>
                                        <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{cert.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {cert.skills.map((s) => (
                                                <span key={s} className="px-2 py-0.5 rounded-md text-xs glass text-[var(--cyber-blue)]">{s}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* Achievements Tab */}
                    {activeTab === "achievements" && (
                        <motion.div
                            key="achievements"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {achievements.map((ach, i) => {
                                const Icon = iconMap[ach.icon] || FaStar;
                                return (
                                    <motion.div
                                        key={ach.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass-card p-6 flex gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[var(--text)] mb-1">{ach.title}</h3>
                                            <p className="text-xs text-[var(--cyber-blue)] font-mono mb-2">{ach.date}</p>
                                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{ach.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
