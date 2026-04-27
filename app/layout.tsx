import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Exile",
    template: "%s | Exile",
  },
  description: "Independent education OS for students planning global admissions and visa journeys.",
  icons: {
    icon: "/nav.png",
    shortcut: "/nav.png",
    apple: "/nav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#080808]">
      <body className="antialiased bg-[#080808]">
                 <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
