import "@/core/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/core/components/ui/toaster";
import Providers from "@/core/providers/Providers";
import JotaiProvider from "@/core/providers/JotaiProvider";
import NextAuthProvider from "@/core/providers/NextAuthProvider";
import ReactQueryProvider from "@/core/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Adorable shop",
  description: "Your next cute accessories gadget 💐",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers
          providers={[
            <NextAuthProvider key="NextAuthProvider" />,
            <ReactQueryProvider key="ReactQueryProvider" />,
            <JotaiProvider key="JotaiProvider" />,
          ]}
        >
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
