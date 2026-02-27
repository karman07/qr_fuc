import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Links - Your Business Profile",
  description: "Connect with us through our social links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}