import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lebanon Travel Safety Report — August 2026',
  description: 'Safety report for Australian families visiting Northern Lebanon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  )
}
