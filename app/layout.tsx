import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/Components/Sidebar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Personal Finance",
  description: "Your personal finance tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="ApplicationContainer">
          <Sidebar />
          <Providers>
              <div className="ContentContainer">
                {children}
              </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
