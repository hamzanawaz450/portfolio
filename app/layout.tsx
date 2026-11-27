import Header from "@/components/header";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ScrollProgress from "@/components/scroll-progress";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] });

const SITE_URL = "https://hamzadev-portfolio.vercel.app";
const TITLE = "Hamza Nawaz – Full-Stack Developer | MSc Data Science, Milano-Bicocca";
const DESCRIPTION =
  "Hamza Nawaz is a full-stack developer from Pakistan building web apps and AI chatbots with React, Next.js and Node.js, currently studying for an MSc in Data Science at the University of Milano-Bicocca in Milan.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hamza Nawaz – Full-Stack Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Hamza Nawaz",
    images: [{ url: "/Profile%20Picture.jpeg", alt: "Hamza Nawaz" }],
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Hamza Nawaz – Full-Stack Developer",
    description: DESCRIPTION,
    images: ["/Profile%20Picture.jpeg"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamza Nawaz",
  jobTitle: "Full-Stack Developer",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/Profile%20Picture.jpeg`,
  email: "mailto:hamza.nawaz.malik450@gmail.com",
  nationality: { "@type": "Country", name: "Pakistan" },
  address: { "@type": "PostalAddress", addressLocality: "Milan", addressCountry: "IT" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Milano-Bicocca" },
  knowsAbout: [
    "Full-stack web development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Flask",
    "AI chatbots",
    "Vector databases",
    "Data Science",
  ],
  sameAs: ["https://www.linkedin.com/in/hamza-nawaz-8b7204282/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${display.variable} font-sans bg-white pt-16 text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-200`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
