import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Bruno Unky - Desenvolvedor de Software",
  description: "Portfólio de Bruno Unky, Desenvolvedor de Software e Arquiteto de Soluções.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}