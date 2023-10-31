// import Navigation from "./components/navigation/index";

import { Teko } from "next/font/google";
import "./global.css";

const teko = Teko({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "No Hassle Roof Repair",
  description: "A website for No Hassle Roof Repair.",
  keywords:
    "Roofing services, Roof repair, Roof installation, Roofing contractors, Roof maintenance, Residential roofing, Commercial roofing, Roof inspection, Roof replacement, Emergency roof repair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={teko.className}>
        {/* <Navigation /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
