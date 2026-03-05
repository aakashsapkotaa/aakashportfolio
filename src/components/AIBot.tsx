"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaLock, FaBolt } from "react-icons/fa";

export default function AIBot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating AI Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--neon-green)] to-[var(--cyber-blue)] text-[var(--dark-bg)] flex items-center justify-center shadow-[0_0_30px_var(--neon-green-dim)] hover:shadow-[0_0_50px_var(--neon-green-dim)] hover:scale-110 transition-all duration-300 group"
                aria-label="Open AI Assistant"
            >
                <FaRobot size={22} className="group-hover:animate-bounce" />
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border-2 border-[var(--neon-green)] animate-ping opacity-30" />
                {/* Coming Soon badge */}
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-[var(--cyber-purple)] text-white text-[8px] font-bold uppercase tracking-wider shadow-lg">
                    Soon
                </span>
            </motion.button>

            {/* AI Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Chat Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-[0_0_60px_var(--neon-green-dim)]"
                            style={{ background: "var(--surface)" }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)] bg-gradient-to-r from-[var(--neon-green-dim)] to-transparent">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--neon-green)] to-[var(--cyber-blue)] flex items-center justify-center text-[var(--dark-bg)]">
                                        <FaRobot size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--text)] flex items-center gap-2">
                                            AI Assistant
                                            <span className="px-1.5 py-0.5 rounded-md bg-[var(--cyber-purple)] text-white text-[9px] font-bold uppercase">
                                                Coming Soon
                                            </span>
                                        </h3>
                                        <p className="text-xs text-[var(--text-muted)]">Powered by AI</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--glass-bg)] transition-all"
                                >
                                    <FaTimes size={14} />
                                </button>
                            </div>

                            {/* Coming Soon Content */}
                            <div className="p-6 flex flex-col items-center text-center min-h-[320px] justify-center">
                                {/* Animated Robot */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--neon-green-dim)] to-[var(--cyber-blue-dim)] flex items-center justify-center mb-6 border border-[var(--glass-border)]"
                                >
                                    <FaRobot size={36} className="text-[var(--neon-green)]" />
                                </motion.div>

                                <h4 className="text-lg font-bold text-[var(--text)] mb-2">
                                    AI Assistant
                                </h4>

                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--cyber-purple)] bg-opacity-20 border border-[var(--cyber-purple)] text-[var(--cyber-purple)] text-xs font-semibold mb-4">
                                    <FaBolt size={10} />
                                    Coming Soon
                                </div>

                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-w-[280px]">
                                    An intelligent AI assistant that can answer questions about my cybersecurity projects, skills, and experience — all in real-time.
                                </p>

                                {/* Feature Pills */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {["Project Q&A", "Skill Insights", "Security Tips", "24/7 Available"].map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-2.5 py-1 rounded-lg text-[10px] font-medium glass text-[var(--text-muted)] border border-[var(--glass-border)]"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Lock Notice */}
                                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                                    <FaLock size={10} className="text-[var(--neon-green)]" />
                                    <span>Under development — stay tuned!</span>
                                </div>
                            </div>

                            {/* Disabled Input */}
                            <div className="p-4 border-t border-[var(--border)]">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Ask me anything... (coming soon)"
                                        disabled
                                        className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-[var(--glass-bg)] border border-[var(--border)] text-[var(--text-muted)] cursor-not-allowed opacity-50"
                                    />
                                    <button
                                        disabled
                                        className="w-10 h-10 rounded-xl bg-[var(--neon-green)] bg-opacity-30 flex items-center justify-center text-[var(--neon-green)] cursor-not-allowed opacity-50"
                                    >
                                        <FaPaperPlane size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
