
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import HorizontalScrollWrapper from "../components/HorizontalScrollWrapper"; // Import the client component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <HorizontalScrollWrapper>
          {children}
        </HorizontalScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
