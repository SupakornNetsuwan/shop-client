import "@/core/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/core/components/ui/toaster";
import Providers from "@/core/providers/Providers";
import JotaiProvider from "@/core/providers/JotaiProvider";
import NextAuthProvider from "@/core/providers/NextAuthProvider";
import ReactQueryProvider from "@/core/providers/ReactQueryProvider";
import Navbar from "@/core/components/Navbar";
import TooltipProvider from "@/core/providers/TooltipProvider";

export const metadata: Metadata = {
  title: "Adorable shop",
  description: "Your next cute accessories gadget 💐",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers
          providers={[
            <NextAuthProvider key="NextAuthProvider" />,
            <ReactQueryProvider key="ReactQueryProvider" />,
            <JotaiProvider key="JotaiProvider" />,
            <TooltipProvider key="TooltipProvider" />,
            <ReactQueryProvider key="QueryProvider" />,
          ]}
        >
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
