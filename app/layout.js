import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shing @ Personal Portfolio",
  description: "Gives you the reasons to hire me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="./profile-pic.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
