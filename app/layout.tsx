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

  keywords: [
    "quem nunca",
    "jogo quem nunca",
    "minigame divertido",
    "jogo para amigos",
    "party game online",
    "jogo de perguntas",
    "jogo engraçado",
  ],

  authors: [{ name: "Cláudio Alves" }],

  openGraph: {
    title: "Quem Nunca? | Minigame divertido",
    description:
      "Jogue “Quem Nunca?” com seus amigos e descubra histórias inesperadas. Perfeito para festas e momentos descontraídos.",
    url: "https://minigame-quem-nunca.netlify.app/",
    siteName: "MiniGame",
    images: [
      {
        url: "./image/baseCerveja.jpg",
        width: 1200,
        height: 630,
        alt: "Jogo Quem Nunca",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Quem Nunca? | Minigame divertido",
    description:
      "Descubra segredos e dê boas risadas com o jogo “Quem Nunca?”.",
    images: ["./image/baseCerveja.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
