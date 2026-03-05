import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
    SiFlask, SiTailwindcss, SiLinux, SiGit,
    SiDocker, SiMongodb, SiPostgresql,
} from "react-icons/si";
import {
    FaShieldAlt, FaBug, FaNetworkWired, FaTerminal, FaDatabase, FaCode,
    FaLock, FaServer, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface Skill {
    name: string;
    icon: IconType;
    level: number; // 0-100
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, level: 85 },
            { name: "Next.js", icon: SiNextdotjs, level: 80 },
            { name: "TypeScript", icon: SiTypescript, level: 75 },
            { name: "JavaScript", icon: SiJavascript, level: 90 },
            { name: "HTML5", icon: FaHtml5, level: 95 },
            { name: "CSS3", icon: FaCss3Alt, level: 90 },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, level: 80 },
            { name: "Python", icon: SiPython, level: 90 },
            { name: "Flask", icon: SiFlask, level: 75 },
            { name: "MongoDB", icon: SiMongodb, level: 70 },
            { name: "PostgreSQL", icon: SiPostgresql, level: 65 },
            { name: "REST APIs", icon: FaServer, level: 80 },
            { name: "Databases", icon: FaDatabase, level: 75 },
        ],
    },
    {
        title: "Cybersecurity",
        skills: [
            { name: "Ethical Hacking", icon: FaShieldAlt, level: 85 },
            { name: "Penetration Testing", icon: FaBug, level: 80 },
            { name: "Network Security", icon: FaNetworkWired, level: 85 },
            { name: "Vulnerability Assessment", icon: FaLock, level: 80 },
            { name: "Wireshark", icon: FaNetworkWired, level: 75 },
            { name: "Linux Admin", icon: SiLinux, level: 85 },
            { name: "Terminal/CLI", icon: FaTerminal, level: 90 },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, level: 85 },
            { name: "Docker", icon: SiDocker, level: 65 },
            { name: "Linux", icon: SiLinux, level: 85 },
            { name: "VS Code", icon: FaCode, level: 90 },
            { name: "Nmap", icon: FaNetworkWired, level: 80 },
            { name: "Metasploit", icon: FaTerminal, level: 75 },
            { name: "Burp Suite", icon: FaBug, level: 70 },
        ],
    },
];
