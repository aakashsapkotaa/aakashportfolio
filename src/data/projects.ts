export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github?: string;
    live?: string;
    category: string[];
    status: "Live" | "In Development" | "Completed" | "Security Tool";
    stars?: string;
    forks?: string;
}

export const projects: Project[] = [
    {
        title: "Cybersecurity Portfolio",
        description:
            "Advanced portfolio website with interactive terminal and cybersecurity theme. Features matrix rain effects, holographic elements, and professional navigation.",
        image: "/images/3.1.png",
        tech: ["HTML5", "CSS3", "JavaScript", "PWA"],
        github: "https://github.com/aakashsapkotaa/Portfolio-aakash",
        live: "https://aakashsapkota.in.net",
        category: ["github", "web"],
        status: "Live",
    },
    {
        title: "Network Security Scanner",
        description:
            "Python-based network scanning and security assessment tool with port scanning, vulnerability detection, and security reporting capabilities.",
        image: "/images/3.1.png",
        tech: ["Python", "Network Security", "Linux", "Nmap"],
        github: "https://github.com/aakashsapkotaa/network-security-tool",
        category: ["github", "tools"],
        status: "In Development",
    },
    {
        title: "Startup Landing Page",
        description:
            "Modern landing page for startup showcasing services and offerings with responsive design and modern UI/UX principles.",
        image: "/images/3.1.png",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        github: "https://github.com/aakashsapkotaa/startup-website",
        category: ["github", "web"],
        status: "Live",
    },
    {
        title: "YouTube Playlist Downloader",
        description:
            "Python Flask web application for downloading YouTube playlists with support for multiple formats and quality options.",
        image: "/images/3.1.png",
        tech: ["Python", "Flask", "YouTube API", "Web Scraping"],
        github: "https://github.com/aakashsapkotaa/youtube-downloader",
        category: ["github", "tools"],
        status: "Completed",
    },
    {
        title: "Nmap Security Scanner",
        description:
            "Professional network discovery and security auditing tool. Used for network inventory, managing service upgrade schedules, and monitoring host or service uptime.",
        image: "/images/3.1.png",
        tech: ["C++", "Network Security", "Port Scanning", "Linux/Windows"],
        github: "https://github.com/nmap/nmap",
        live: "https://nmap.org/",
        category: ["tools"],
        status: "Security Tool",
        stars: "8.2k",
        forks: "2.1k",
    },
    {
        title: "Metasploit Framework",
        description:
            "Advanced penetration testing platform that enables you to find, exploit, and validate vulnerabilities. Industry standard for security testing.",
        image: "/images/3.1.png",
        tech: ["Ruby", "Penetration Testing", "Exploit Development", "Cross-Platform"],
        github: "https://github.com/rapid7/metasploit-framework",
        live: "https://www.metasploit.com/",
        category: ["tools"],
        status: "Security Tool",
        stars: "32.1k",
        forks: "14.8k",
    },
    {
        title: "Burp Suite Professional",
        description:
            "Leading web application security testing platform. Used by security professionals worldwide for web application penetration testing.",
        image: "/images/3.1.png",
        tech: ["Java", "Web Security", "Proxy Interception", "Vulnerability Scanner"],
        live: "https://portswigger.net/burp",
        category: ["tools"],
        status: "Security Tool",
    },
    {
        title: "Wireshark Network Analyzer",
        description:
            "World's foremost and widely-used network protocol analyzer. Deep inspection of hundreds of protocols, live capture and offline analysis.",
        image: "/images/3.1.png",
        tech: ["C/C++", "Network Analysis", "Protocol Decoding", "Cross-Platform"],
        github: "https://github.com/wireshark/wireshark",
        live: "https://www.wireshark.org/",
        category: ["tools"],
        status: "Security Tool",
        stars: "5.8k",
        forks: "1.9k",
    },
];
