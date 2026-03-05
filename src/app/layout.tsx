import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Particles from "@/components/ui/Particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaMono = Fira_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aakash Sapkota | Cyber Security Student & Full Stack Developer | Nepal",
  description:
    "Aakash Sapkota - Cyber Security Student, Full Stack Developer, Ethical Hacking Student, and Security Researcher from Nepal. View my portfolio, skills, projects, and contact information.",
  keywords: [
    "Aakash Sapkota", "Cybersecurity", "Full Stack Developer", "Ethical Hacking",
    "Nepal", "Portfolio", "Web Developer", "Security Researcher", "Penetration Testing",
  ],
  authors: [{ name: "Aakash Sapkota" }],
  openGraph: {
    type: "website",
    url: "https://aakashsapkota.in.net/",
    title: "Aakash Sapkota | Cyber Security Student & Full Stack Developer",
    description:
      "Aakash Sapkota - Cyber Security Student, Full Stack Developer, Ethical Hacking Student, and Security Researcher from Nepal.",
    siteName: "Aakash Sapkota",
    images: [{ url: "https://aakashsapkota.in.net/images/pic.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Sapkota | Cyber Security Student & Full Stack Developer",
    description:
      "Aakash Sapkota - Cyber Security Student, Full Stack Developer, Ethical Hacking Student, and Security Researcher from Nepal.",
    images: ["https://aakashsapkota.in.net/images/pic.png"],
  },
  icons: {
    icon: "/images/pic.png",
    apple: "/images/pic.png",
  },
  other: {
    "google-site-verification": "7sB3_z3-4w2gzEoqD2sgsZt2LEpDeIsfOQ10Eslv8P4",
  },
};

const themeInitScript = `
  (function() {
    try {
      var t = localStorage.getItem('portfolio-theme');
      if (t === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aakash Sapkota",
              jobTitle: ["Cyber Security Student", "Full Stack Developer", "Ethical Hacking Student"],
              description:
                "Aakash Sapkota - Cyber Security Student, Full Stack Developer, and Security Researcher from Nepal.",
              url: "https://aakashsapkota.in.net/",
              image: "https://aakashsapkota.in.net/images/pic.png",
              sameAs: [
                "https://github.com/aakashsapkotaa/",
                "https://www.linkedin.com/in/aakashsapkotaa/",
                "https://www.instagram.com/aakashsapkotaa/",
              ],
              knowsAbout: [
                "Cybersecurity", "Web Development", "Ethical Hacking",
                "Penetration Testing", "Full Stack Development", "Python",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${firaMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="cyber-grid" />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
