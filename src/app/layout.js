import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsappButton from "@/utils/FloatingWhatsappButton";

export const metadata = {
  title: "Astral Neutraceuticals",
  description: "Empowering Health Through Nature.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Astral Neutraceuticals",
    description: "Empowering animal health through nature.",
    url: "https://www.astralneutraceuticals.com",
    siteName: "Astral Neutraceuticals",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Astral Neutraceuticals",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingWhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
