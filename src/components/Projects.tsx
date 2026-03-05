"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";
import { projects } from "@/data/projects";

const categories = [
    { label: "All Projects", value: "all" },
    { label: "GitHub Projects", value: "github" },
    { label: "Security Tools", value: "tools" },
    { label: "Web Development", value: "web" },
];

const statusColors: Record<string, string> = {
    Live: "bg-green-500/20 text-green-400 border-green-500/30",
    "In Development": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Security Tool": "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category.includes(activeFilter));

    return (
        <section id="projects" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Projects & <span className="gradient-text">Tools</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveFilter(cat.value)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === cat.value
                                    ? "bg-[var(--neon-green)] text-[var(--dark-bg)] shadow-[0_0_20px_var(--neon-green-dim)]"
                                    : "glass text-[var(--text-muted)] hover:text-[var(--text)]"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card overflow-hidden group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-transparent to-transparent opacity-60" />

                                    {/* Status Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Hover Links */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-[var(--neon-green)] text-[var(--dark-bg)] flex items-center justify-center hover:scale-110 transition-transform"
                                            >
                                                <FaExternalLinkAlt size={14} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full glass text-[var(--text)] flex items-center justify-center hover:scale-110 transition-transform"
                                            >
                                                <FaGithub size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--neon-green)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 rounded-md text-xs glass text-[var(--cyber-blue)]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {(project.stars || project.forks) && (
                                        <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                                            {project.stars && (
                                                <span className="flex items-center gap-1">
                                                    <FaStar className="text-yellow-400" size={12} />
                                                    {project.stars}
                                                </span>
                                            )}
                                            {project.forks && (
                                                <span className="flex items-center gap-1">
                                                    <FaCodeBranch size={12} />
                                                    {project.forks}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
