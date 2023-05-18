import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DB notes",
  description: "Store your notes in the pocketbase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* global components like a header, navbar or footer */}
        {children}
      </body>
    </html>
  );
}
