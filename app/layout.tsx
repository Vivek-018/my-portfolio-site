import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Cinzel } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import VisitorCounter from "@/components/visitor-counter"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Vivek Kumar | Software Engineer",
  description: "Professional portfolio of Vivek Kumar - Software Engineer, Developer, Problem Solver",
  generator: 'VK'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${notoSerifJP.variable} ${cinzel.variable} bg-slate-900 text-slate-200 min-h-screen flex flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Chatbot />
        <VisitorCounter />
      </body>
    </html>
  )
}
