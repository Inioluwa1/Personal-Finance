import "./globals.css";
import MainSideBar from "./MainSideBar";
import { AuthProvider } from "../context/AuthContext";

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
      <div className="AppContainer">
        <AuthProvider>
          {children}
        </AuthProvider>
      </div>
    </div>
  );
} 
