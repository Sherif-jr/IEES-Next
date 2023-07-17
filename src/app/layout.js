import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "public/css/primeTheme.css";
import "./globals.css";
import "primeicons/primeicons.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/UI/Buttons/ScrollToTop";
import SSgoogleAnalytics from "@/libs/GoogleAnalytics";
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
        <SSgoogleAnalytics />
        <div className="layout">
          <Header />
          <div className="page">{children}</div>
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
