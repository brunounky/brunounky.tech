import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Bruno Unky - Desenvolvedor de Software",
  description: "Portfólio do Bruno Unky, Desenvolvedor de Software e Arquiteto de Soluções.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}