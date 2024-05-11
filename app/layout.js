import { Open_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/Store";
import HeaderMaker from "@/components/header/HeaderMaker";
import FooterMaker from "@/components/footer/FooterMaker";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "HR Production",
  description: "Hamid Shojaei portfolio. Music producer",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <StoreProvider>
        <body className={openSans.className}>
          <HeaderMaker />
          <main>{children}</main>
          <FooterMaker/>
        </body>
      </StoreProvider>
    </html>
  );
}
