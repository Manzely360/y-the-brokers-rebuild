import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Y The Brokers - Premier Real Estate Advisory",
  description:
    "Egypt's leading real estate advisory firm specializing in premium properties, luxury residences, and investment opportunities across New Cairo, North Coast, and commercial developments.",
  keywords:
    "real estate, Egypt, Cairo, New Cairo, North Coast, luxury properties, investment, commercial real estate",
  authors: [{ name: "Y The Brokers" }],
  openGraph: {
    title: "Y The Brokers - Premier Real Estate Advisory",
    description:
      "Egypt's leading real estate advisory firm specializing in premium properties and investment opportunities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-dvh bg-slate-50 text-slate-900 antialiased`}
      >
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: "#f97316",
                  secondary: "#fff",
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
