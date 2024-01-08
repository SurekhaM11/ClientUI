"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "@/Header";
import { Footer } from "@/Footer";
import { appStore } from "@/store/appStore";
import { Provider } from "react-redux";
import { Menu } from "@/Menu/Menu";
import { Loader } from "@/Loader";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
          <Header />
          <Menu />
          {children}
          {/* <Loader /> */}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
