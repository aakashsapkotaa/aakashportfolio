"use client";

import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaChartBar, FaFire, FaCalendarAlt, FaCube, FaCode } from "react-icons/fa";
import { personalInfo } from "@/data/social";

const username = personalInfo.githubUsername;

const stats = [
    { icon: FaCube, label: "Public Repos", value: "15+", color: "var(--neon-green)" },
    { icon: FaStar, label: "Total Stars", value: "20+", color: "#fbbf24" },
    { icon: FaCodeBranch, label: "Total Forks", value: "10+", color: "var(--cyber-blue)" },
    { icon: FaChartBar, label: "Contributions", value: "200+", color: "var(--cyber-purple)" },
];

const languages = [
    { name: "Python", pct: 40, color: "#3572A5" },
    { name: "JavaScript", pct: 25, color: "#f1e05a" },
    { name: "HTML/CSS", pct: 15, color: "#e34c26" },
    { name: "C", pct: 10, color: "#555555" },
    { name: "TypeScript", pct: 10, color: "#3178c6" },
];

const activity = [
    { icon: FaFire, label: "Current Streak", value: "Active", color: "var(--accent-red)" },
    { icon: FaCalendarAlt, label: "Total Commits", value: "500+", color: "var(--neon-green)" },
    { icon: FaCode, label: "Lines of Code", value: "50K+", color: "var(--cyber-blue)" },
    { icon: FaGithub, label: "Since", value: "2023", color: "var(--text-muted)" },
];

export default function GitHubStats() {
    return (
        <section id="github-stats" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        GitHub <span className="gradient-text">Statistics</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                    <p className="text-[var(--text-muted)] mt-4 max-w-md mx-auto">
                        My open-source contributions and coding activity
                    </p>
                </motion.div>

                {/* Main Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
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
                            <s.icon
                                className="mx-auto text-3xl mb-3 group-hover:scale-110 transition-transform"
                                style={{ color: s.color }}
                            />
                            <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                            <div className="text-xs text-[var(--text-muted)]">{s.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Top Languages */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-5 flex items-center gap-2">
                            <FaCode className="text-[var(--neon-green)]" />
                            Top Languages
                        </h3>
                        {/* Language Bar */}
                        <div className="flex h-3 rounded-full overflow-hidden mb-5">
                            {languages.map((lang) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.pct}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full"
                                    style={{ backgroundColor: lang.color }}
                                    title={`${lang.name}: ${lang.pct}%`}
                                />
                            ))}
                        </div>
                        {/* Language Legend */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {languages.map((lang) => (
                                <div key={lang.name} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                    <span className="text-sm text-[var(--text-muted)]">{lang.name}</span>
                                    <span className="text-xs text-[var(--text-muted)] opacity-60">{lang.pct}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Activity Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-5 flex items-center gap-2">
                            <FaChartBar className="text-[var(--neon-green)]" />
                            Activity Overview
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {activity.map((a, i) => (
                                <motion.div
                                    key={a.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center group hover:border-[var(--neon-green-dim)] transition-all"
                                >
                                    <a.icon
                                        className="mx-auto text-xl mb-2 group-hover:scale-110 transition-transform"
                                        style={{ color: a.color }}
                                    />
                                    <div className="text-lg font-bold text-[var(--text)]">{a.value}</div>
                                    <div className="text-xs text-[var(--text-muted)]">{a.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Contribution Heat Simulation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-5 mb-8"
                >
                    <h3 className="text-sm font-semibold text-[var(--text)] mb-3 flex items-center gap-2">
                        <FaCalendarAlt className="text-[var(--neon-green)]" size={12} />
                        Contribution Activity
                    </h3>
                    <div className="grid grid-cols-16 gap-[3px]">
                        {Array.from({ length: 48 }).map((_, i) => {
                            const levels = [0, 0, 0, 1, 1, 1, 2, 2, 3, 4];
                            const level = levels[Math.floor(Math.abs(Math.sin(i * 3.7) * 10))];
                            const colors = [
                                "bg-[var(--dark-border)]",
                                "bg-[#0e4429]",
                                "bg-[#006d32]",
                                "bg-[#26a641]",
                                "bg-[#39d353]",
                            ];
                            return (
                                <div
                                    key={i}
                                    className={`w-full aspect-square rounded-[2px] ${colors[level]} hover:ring-1 hover:ring-[var(--neon-green)] transition-all cursor-default`}
                                />
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-[var(--text-muted)]">
                        <span>Less</span>
                        {["bg-[var(--dark-border)]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"].map((c, i) => (
                            <div key={i} className={`w-2.5 h-2.5 rounded-[2px] ${c}`} />
                        ))}
                        <span>More</span>
                    </div>
                </motion.div>

                <div className="text-center">
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-[var(--neon-green)] hover:shadow-[0_0_20px_var(--neon-green-dim)] transition-all duration-300 hover:scale-105"
                    >
                        <FaGithub />
                        View Full Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
