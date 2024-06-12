import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LAYOUT_STYLES } from "./lib/constants";
import FavoritesContextProvider from "./lib/context/favorites-context";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviesApp",
  description: "Your guide to discovering movies",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main mb-20`}>
        <FavoritesContextProvider>
          <Header className={`${LAYOUT_STYLES}`} />

          {children}

          <Footer />
        </FavoritesContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
