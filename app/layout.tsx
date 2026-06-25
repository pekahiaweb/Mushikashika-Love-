import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mushikashika Love — A Film by Andrew Pekahia Muroyiwa",
  description:
    "A South African woman arrives in Harare to meet her online boyfriend, only to find he's a ruthless crime boss. Stranded and robbed, she's rescued by a struggling taxi driver who helps her take him down. A Zimbabwean romantic thriller.",
  keywords: [
    "Zimbabwe",
    "Harare",
    "romantic thriller",
    "mushikashika",
    "African film",
    "crime drama",
    "Andrew Pekahia",
    "Zimbabwean cinema",
    "SSADZA Fund",
  ],
  openGraph: {
    title: "Mushikashika Love",
    description: "Harare has teeth. But it also has a heart.",
    type: "website",
    locale: "en_ZW",
    siteName: "Mushikashika Love",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushikashika Love",
    description: "Harare has teeth. But it also has a heart.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-midnight text-cream overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
