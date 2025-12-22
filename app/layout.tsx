import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AlphaSoft - Soluciones de Software Innovadoras",
  description:
    "Transformamos ideas en experiencias digitales extraordinarias. Desarrollo web, aplicaciones, chatbots inteligentes y automatizaciones.",
  keywords: [
    "desarrollo web",
    "software",
    "aplicaciones",
    "chatbots",
    "automatizaciones",
    "AlphaSoft",
  ],
  authors: [{ name: "AlphaSoft" }],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "AlphaSoft - Soluciones de Software Innovadoras",
    description:
      "Transformamos ideas en experiencias digitales extraordinarias.",
    type: "website",
    images: ["/logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
