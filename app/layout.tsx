import type { Metadata } from "next";
import { Carter_One } from 'next/font/google';
import "./globals.css";

const carterOne = Carter_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-carter-one',
});

export const metadata: Metadata = {
  title: "MiniGame | Quem nunca?",
  description: "Quem Nunca” é um minigame divertido e revelador onde os jogadores confessam situações que já viveram… ou não. Prepare-se para risadas, histórias inesperadas e algumas verdades que talvez fosse melhor deixar escondidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${carterOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
