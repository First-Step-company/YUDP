import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "YUDP STORE",
  description: "YUDP store is a store for all your needs of digital products",
  keywords:
  "yudp,Yudp,digital,digital products Abdo raquibi,raquibi,Raquibi,Abderrahmane Raquibi,Abderahmane,abderahmane, Full-Stack Web Developer, Web Development, Portfolio, Frontend Developer, Backend Developer, PHP, Laravel, React, Next.js, Node.js, JavaScript, Tailwind Css, Bootstrap",
openGraph: {
  title: "YUDP is a platform to sell and buy digital products",
  description:
    "",
  url: "https://yudp.shop",
  type: "website",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
