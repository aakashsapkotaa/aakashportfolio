export interface ExperienceItem {
    title: string;
    badge: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
    icon: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    specialization: string;
    period: string;
    description: string;
    highlights: string[];
}

export interface CertificationItem {
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
}

export interface AchievementItem {
    title: string;
    date: string;
    description: string;
    icon: string;
}

export const experiences: ExperienceItem[] = [
    {
        title: "Cybersecurity Student & Researcher",
        badge: "Current",
        company: "Sapthagiri Institute of Technology",
        period: "2023 - Present",
        description:
            "Pursuing BCA in Cybersecurity with focus on ethical hacking, network security, and penetration testing. Conducting research on emerging cybersecurity threats and developing defensive strategies.",
        tags: ["Network Security", "Ethical Hacking", "Penetration Testing", "Vulnerability Assessment"],
        icon: "shield",
    },
    {
        title: "Full-Stack Developer & Security Specialist",
        badge: "Freelance",
        company: "Independent Consultant",
        period: "2022 - Present",
        description:
            "Developing secure web applications with focus on cybersecurity best practices. Implementing OWASP security guidelines, conducting security audits, and providing penetration testing services.",
        tags: ["Web Security", "OWASP Guidelines", "Security Auditing", "Client Consultation"],
        icon: "code",
    },
    {
        title: "Chairman & Technical Lead",
        badge: "Leadership",
        company: "Mr Production - Student Organization",
        period: "2023 - Present",
        description:
            "Leading a prestigious student organization promoting computing education and research. Organizing cybersecurity workshops, hackathons, and technical events.",
        tags: ["Team Leadership", "Event Organization", "Student Mentoring", "Technical Workshops"],
        icon: "users",
    },
    {
        title: "Startup Founder & E-Learning Platform Developer",
        badge: "Entrepreneur",
        company: "Innovative E-Learning Platform",
        period: "2022 - Present",
        description:
            "Founded and developed an e-learning platform offering high-end topics simplified for young minds. Created engaging educational content and implemented gamification elements.",
        tags: ["Platform Development", "Content Creation", "User Experience", "Business Strategy"],
        icon: "rocket",
    },
];

export const education: EducationItem[] = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Sapthagiri Institute of Technology",
        specialization: "Cybersecurity & Network Security",
        period: "2023 - Present",
        description:
            "Comprehensive program covering cybersecurity fundamentals, ethical hacking, network protocols, and secure software development.",
        highlights: ["GPA: 3.8/4.0", "Dean's List", "Security Research"],
    },
    {
        degree: "Computer Science Stream",
        institution: "Oxford Secondary School",
        specialization: "Computer Science & Mathematics",
        period: "2021 - 2024",
        description:
            "Completed higher secondary education with focus on computer science, mathematics, and programming fundamentals.",
        highlights: ["Computer Science", "Mathematics", "Programming"],
    },
    {
        degree: "Secondary Education",
        institution: "SSCA (Secondary School Certificate Authority)",
        specialization: "General Education",
        period: "2020",
        description: "Completed secondary education with distinction. Developed strong foundation in science, mathematics, and computer applications.",
        highlights: ["Distinction", "Science", "Mathematics"],
    },
];

export const certifications: CertificationItem[] = [
    {
        title: "Ethical Hacking Fundamentals",
        issuer: "Cybersecurity Institute",
        date: "2024",
        description:
            "Comprehensive course covering ethical hacking methodologies, penetration testing techniques, and security assessment frameworks.",
        skills: ["Penetration Testing", "Vulnerability Assessment", "Security Frameworks"],
    },
    {
        title: "Network Security Specialist",
        issuer: "Network Security Academy",
        date: "2023",
        description:
            "Advanced network security certification covering firewall configuration, intrusion detection, and network monitoring techniques.",
        skills: ["Firewall Management", "Intrusion Detection", "Network Monitoring"],
    },
    {
        title: "Python for Cybersecurity",
        issuer: "Python Security Institute",
        date: "2023",
        description:
            "Specialized Python programming for cybersecurity applications including automation, tool development, and security testing.",
        skills: ["Python Security", "Automation", "Tool Development"],
    },
];

export const achievements: AchievementItem[] = [
    {
        title: "Cybersecurity Competition Winner",
        date: "2024",
        description:
            "Won first place in regional cybersecurity competition demonstrating advanced penetration testing and network security skills.",
        icon: "trophy",
    },
    {
        title: "Academic Excellence Award",
        date: "2023",
        description:
            "Received academic excellence award for outstanding performance in cybersecurity and computer science courses.",
        icon: "medal",
    },
    {
        title: "Student Leadership Recognition",
        date: "2023",
        description:
            "Recognized for exceptional leadership in student organizations and contribution to technical community development.",
        icon: "star",
    },
    {
        title: "Innovation Award",
        date: "2022",
        description:
            "Awarded for innovative e-learning platform development and contribution to educational technology advancement.",
        icon: "award",
    },
];
