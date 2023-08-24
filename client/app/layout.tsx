import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glenforest SS Computer Science',
  description: 'Welcome to Glenforest Secondary School\'s Computer Science Club!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" type="image/png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark">{children}</body>
    </html>
  )
}
