import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Food Order App",
  description: "Order your favorite food from your favorite restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <Header/>
          {children}
          <footer className=" border-t p-8 text-gray-500 mt-16 text-center">
            &copy; 2023 EATILICIOUS. All rights reserved.
          </footer>
        </main>
      </body>
    </html>
  );
}
