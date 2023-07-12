import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./globals.css";
import "primeicons/primeicons.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//icons
// import "primeicons/primeicons.css";
const openSans = Open_Sans({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "IEES",
  description:
    "We provide you the best in market engineering services. No more headaches or delays. Our services are tailored for your needs. Pay only for what you need and expand even more at any time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <div className="layout">
          <Header />
          <div className="page">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
