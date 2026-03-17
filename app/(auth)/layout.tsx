import "./globals.css";
import Image from "next/image"
import MainSideBar from "./MainSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="AuthenticationPage">
      <div className="MainSideBar" >
        <MainSideBar />
      </div>
      <div className="MobileImageContainer">
        <Image src="assets/images/logo-large.svg" alt="Finance logo" width={100} height={50} className="MobileImage" />
      </div>
      <div className="AppContainer">
        {children}
      </div>
    </div>
  );
} 
