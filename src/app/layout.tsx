import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gb-tech.vercel.app"),
  title: "Storyful | Reputation intelligence and verified video",
  description:
    "Storyful helps leaders understand risk, protect reputation, and find verified video for the stories that matter.",
  openGraph: {
    title: "Storyful | Reputation intelligence and verified video",
    description: "Verified. Contextualized. Decision-grade.",
    images: ["/images/source/deciphering.avif"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
