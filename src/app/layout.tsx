import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import Theme from "./theme.js";
import Header from "./components/header/Header";
import { CartItemsProvider } from "./context/CartItems";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webshop",
  description: "Buy our products online!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>
            <CartItemsProvider>
                <div id="__next">
                  <Header></Header>
                  {children}
                </div>
            </CartItemsProvider>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
