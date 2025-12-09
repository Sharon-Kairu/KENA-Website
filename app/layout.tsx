import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Responsivenav from "./components/navigation/Responsivenav";
import Footer from "./components/footer/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ClientOnly from "./components/ClientOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kenadrivingschool.com"),
  title: "Kena Driving School | Computer College & AI Training in Kenya",
  description:
    "Kena Driving School offers NTSA-approved driving lessons, computer college courses, and modern AI classes for video and image generation. Enroll today at Kena Driving School & Computer College in Kenya.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.kenadrivingschool.com",
    title: "Kena Driving School | Computer College & AI Training in Kenya",
    description:
      "Learn to drive with NTSA-certified instructors at Kena Driving School and advance your digital skills with AI classes for video generation, image generation, and computer training.",
    images: [
      {
        url: "https://www.kenadrivingschool.com/logo2.png",
        width: 1200,
        height: 630,
        alt: "Kena Driving School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kena Driving School | Driving Lessons, Computer Courses & AI Training",
    description:
      "Kena Driving School offers driving lessons, computer college programs, and AI courses for image and video generation. Advance your skills today.",
    images: ["https://www.kenadrivingschool.com/logo2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ⭐ Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TPPNF8NT');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* ⭐ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPPNF8NT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Navigation */}
        <ClientOnly>
          <Responsivenav />
        </ClientOnly>

        <main className="pt-18 lg:pt-24">
          {children}
          <WhatsappButton />
        </main>

        <Footer />
      </body>
    </html>
  );
}
