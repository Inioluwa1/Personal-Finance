import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/Components/Sidebar";
import {UIProvider} from './context/UIContext'

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
          <UIProvider>
            <div className="ContentContainer">
              {children}
            </div>
          </UIProvider>
        </div>
      </body>
    </html>
  );
}
