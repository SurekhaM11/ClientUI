"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { appStore } from "@/store/appStore";
import { Provider, useSelector } from "react-redux";
import LayoutWrapper from "./LayoutWrapper";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
