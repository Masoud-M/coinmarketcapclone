import { GlobalContextProvider } from "./Context/MainContext";
import Provider from "./Provider";

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinMarketCap Clone",
  description: "CoinMarketCap Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Provider>{children}</Provider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
