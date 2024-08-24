import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={(inter.className, "overflow-y-hidden")}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
