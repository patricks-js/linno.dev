import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = Hanken_Grotesk({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-app-sans",
  display: "swap",
});

const fontSerif = Instrument_Serif({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-app-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Patrick Silva",
    template: "%s | Patrick Silva",
  },
  description:
    "Desenvolvedor de software focado em interfaces modernas e sistemas escaláveis.",
  authors: [{ name: "Patrick Silva" }],
  creator: "Patrick Silva",
  keywords: [
    "Patrick Silva",
    "Desenvolvedor de software",
    "Frontend",
    "Backend",
    "TypeScript",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh antialiased font-sans",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
