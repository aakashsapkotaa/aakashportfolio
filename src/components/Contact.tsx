"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaFilePdf, FaPaperPlane,
    FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaUser, FaComment,
    FaShieldAlt,
} from "react-icons/fa";
import { socialLinks, personalInfo } from "@/data/social";

const contactCards = [
    {
        icon: FaEnvelope,
        title: "Email",
        detail: socialLinks.email,
        action: { label: "Send Email", href: `mailto:${socialLinks.email}` },
    },
    {
        icon: FaMapMarkerAlt,
        title: "Location",
        detail: personalInfo.location,
        sub: "UTC +5:45 • Available for remote work",
    },
    {
        icon: FaCalendarAlt,
        title: "Availability",
        detail: "Open to new opportunities",
        status: true,
    },
    {
        icon: FaFilePdf,
        title: "Resume",
        detail: "Download my CV",
        action: { label: "Download CV", href: personalInfo.resumeUrl, download: true },
    },
];

const socials = [
    { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
    { icon: FaTelegram, href: socialLinks.telegram, label: "Telegram" },
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate sending
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyber-blue)] mx-auto rounded-full" />
                    <p className="text-[var(--text-muted)] mt-4 max-w-md mx-auto">
                        Let&apos;s discuss your next cybersecurity project or collaboration opportunity
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {contactCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[var(--neon-green-dim)] flex items-center justify-center text-[var(--neon-green)] flex-shrink-0">
                                        <card.icon size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[var(--text)] text-sm">{card.title}</h3>
                                        <p className="text-sm text-[var(--text-muted)] mt-0.5">{card.detail}</p>
                                        {card.sub && <p className="text-xs text-[var(--text-muted)] mt-1">{card.sub}</p>}
                                        {card.status && (
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="status-dot" />
                                                <span className="text-xs text-[var(--neon-green)]">Available for hire</span>
                                            </div>
                                        )}
                                        {card.action && (
                                            <a
                                                href={card.action.href}
                                                {...(card.action.download ? { download: "Aakash_Sapkota_CV.pdf" } : { target: "_blank", rel: "noopener noreferrer" })}
                                                className="inline-flex items-center gap-1.5 mt-2 text-xs text-[var(--neon-green)] hover:underline"
                                            >
                                                <FaPaperPlane size={10} />
                                                {card.action.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-3 pt-4"
                        >
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.label}
                                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-green)] hover:shadow-[0_0_15px_var(--neon-green-dim)] transition-all duration-300 hover:scale-110"
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-card p-8">
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-[var(--text)]">Send me a message</h3>
                                <p className="text-sm text-[var(--text-muted)]">I&apos;ll get back to you within 24 hours</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-name" className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
                                            <FaUser size={12} /> Your Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            minLength={2}
                                            value={formState.name}
                                            onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 rounded-xl glass border border-[var(--border)] text-[var(--text)] text-sm bg-transparent focus:border-[var(--neon-green)] focus:shadow-[0_0_10px_var(--neon-green-dim)] outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
                                            <FaEnvelope size={12} /> Your Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-xl glass border border-[var(--border)] text-[var(--text)] text-sm bg-transparent focus:border-[var(--neon-green)] focus:shadow-[0_0_10px_var(--neon-green-dim)] outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
                                        <FaComment size={12} /> Your Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        minLength={10}
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 rounded-xl glass border border-[var(--border)] text-[var(--text)] text-sm bg-transparent focus:border-[var(--neon-green)] focus:shadow-[0_0_10px_var(--neon-green-dim)] outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--neon-green)] text-[var(--dark-bg)] font-semibold hover:shadow-[0_0_30px_var(--neon-green-dim)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        {status === "sending" ? (
                                            <><span className="animate-spin">⟳</span> Sending...</>
                                        ) : status === "sent" ? (
                                            <>✓ Sent!</>
                                        ) : (
                                            <><FaPaperPlane /> Send Message</>
                                        )}
                                    </button>
                                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                                        <FaShieldAlt size={10} />
                                        Secure & private
                                    </span>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
