"use client";

import { motion } from "framer-motion";
import { FaClock, FaTag, FaArrowRight, FaShieldAlt, FaCode, FaBug, FaNetworkWired } from "react-icons/fa";

const blogPosts = [
    {
        title: "Introduction to Ethical Hacking: Where to Start",
        excerpt: "A comprehensive guide for beginners looking to enter the world of ethical hacking and cybersecurity testing.",
        date: "Feb 15, 2026",
        readTime: "8 min",
        category: "Cybersecurity",
        icon: FaShieldAlt,
        color: "var(--neon-green)",
    },
    {
        title: "Building Secure Web Applications with Next.js",
        excerpt: "Best practices for implementing security measures in modern web applications using Next.js and Node.js.",
        date: "Jan 28, 2026",
        readTime: "12 min",
        category: "Web Development",
        icon: FaCode,
        color: "var(--cyber-blue)",
    },
    {
        title: "Common Vulnerabilities in Web Applications",
        excerpt: "Understanding OWASP Top 10 vulnerabilities and how to protect your applications from common attack vectors.",
        date: "Jan 10, 2026",
        readTime: "10 min",
        category: "Security",
        icon: FaBug,
        color: "var(--accent-red)",
    },
    {
        title: "Network Security Fundamentals for Developers",
        excerpt: "Essential network security concepts every developer should understand to build more secure applications.",
        date: "Dec 20, 2025",
        readTime: "15 min",
        category: "Networking",
        icon: FaNetworkWired,
        color: "var(--cyber-purple)",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Latest <span className="gradient-text">Blog Posts</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                    <p className="text-[var(--text-muted)] mt-4 max-w-md mx-auto">
                        Sharing my knowledge and experiences in cybersecurity and development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 group cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `color-mix(in srgb, ${post.color} 15%, transparent)` }}
                                >
                                    <post.icon size={20} style={{ color: post.color }} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span
                                            className="px-2 py-0.5 rounded-md text-xs font-medium"
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${post.color} 15%, transparent)`,
                                                color: post.color,
                                            }}
                                        >
                                            <FaTag className="inline mr-1" size={8} />
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                                            <FaClock size={10} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--neon-green)] transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-muted)] mb-3 leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                                        <span className="text-sm text-[var(--neon-green)] flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read More <FaArrowRight size={12} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
