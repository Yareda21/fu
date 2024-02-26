import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Bootcamp",
  description: "Coding Excellence!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
