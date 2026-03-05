"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { socialLinks } from "@/data/social";

const socials = [
    { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
    { icon: FaTelegram, href: socialLinks.telegram, label: "Telegram" },
];

export default function Footer() {
    return (
        <footer className="relative py-10 border-t border-[var(--border)] snap-start">
            <div className="section-container">
                <div className="flex flex-col items-center gap-5">
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={s.label}
                                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-green)] hover:shadow-[0_0_10px_var(--neon-green-dim)] transition-all duration-300"
                            >
                                <s.icon size={16} />
                            </a>
                        ))}
                    </div>

                    <p className="text-sm text-[var(--text-muted)]">
                        © {new Date().getFullYear()} Aakash Sapkota.
                    </p>
                </div>
            </div>
        </footer>
    );
}
