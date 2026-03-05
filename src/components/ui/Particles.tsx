"use client";

import { useEffect, useState } from "react";

interface ParticleData {
    left: string;
    duration: string;
    delay: string;
}

export default function Particles() {
    const [particles, setParticles] = useState<ParticleData[]>([]);

    useEffect(() => {
        setParticles(
            Array.from({ length: 15 }, () => ({
                left: `${Math.random() * 100}%`,
                duration: `${8 + Math.random() * 12}s`,
                delay: `${Math.random() * 8}s`,
            }))
        );
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        left: p.left,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}
