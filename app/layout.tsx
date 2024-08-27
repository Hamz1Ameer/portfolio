import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ameer Hamza - Frontend Developer and MERN Stack Enthusiast",
  description: "I'm Ameer Hamza, a Frontend Developer with 3 years of experience specializing in the MERN stack. I excel in creating responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS. My work at Innovapath IT Solutions showcases my ability to bring designs to life, ensuring optimal performance and scalability. Explore my projects to see my commitment to clean code and innovative solutions. Let's connect to build something impactful together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
