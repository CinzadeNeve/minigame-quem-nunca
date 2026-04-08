import type { Metadata, Viewport } from "next";
import { Carter_One } from 'next/font/google';
import "./globals.css";

const carterOne = Carter_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-carter-one',
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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

  applicationName: "MiniGame | Quem nunca?",

  manifest: `${baseUrl}/manifest.json`,

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MiniGame | Quem nunca?",
  },

  formatDetection: {
    telephone: false,
  },

  icons: {
    icon: [
      { url: `${baseUrl}/icons/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${baseUrl}/icons/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: `${baseUrl}/icons/touch-icon-iphone.png` },
      { url: `${baseUrl}/icons/touch-icon-ipad.png`, sizes: "152x152" },
      { url: `${baseUrl}/icons/touch-icon-iphone-retina.png`, sizes: "180x180" },
      { url: `${baseUrl}/icons/touch-icon-ipad-retina.png`, sizes: "167x167" },
    ],
    shortcut: [`${baseUrl}/favicon.ico`],
    other: [
      {
        rel: "mask-icon",
        url: `${baseUrl}/icons/safari-pinned-tab.svg`,
        color: "#5bbad5",
      },
    ],
  },

  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2B5797",
    "msapplication-tap-highlight": "no",
    "msapplication-config": "/icons/browserconfig.xml",
  },


  openGraph: {
    title: "Quem Nunca? | Minigame divertido",
    description:
      "Jogue “Quem Nunca?” com seus amigos e descubra histórias inesperadas. Perfeito para festas e momentos descontraídos.",
    url: "https://minigame-quem-nunca.netlify.app/",
    siteName: "MiniGame",
    images: [
      {
        url: `${baseUrl}/image/baseCerveja.jpg`,
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
    images: [`${baseUrl}/image/baseCerveja.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export const viewport: Viewport = {
  themeColor: "#FBD373",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
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
