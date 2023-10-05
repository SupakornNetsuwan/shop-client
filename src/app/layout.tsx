import "@/core/styles/globals.css";
import type { Metadata } from "next";
import Providers from "@/core/providers/Providers";
import JotaiProvider from "@/core/providers/JotaiProvider";

export const metadata: Metadata = {
  title: "Adorable shop",
  description: "Your next cute accessories gadget 💐",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers providers={[<JotaiProvider key="JotaiProvider" />]}>{children}</Providers>
      </body>
    </html>
  );
}
