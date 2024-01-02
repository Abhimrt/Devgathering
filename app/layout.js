import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Dev Gathering '24 || 32hrs Hackathon ",
  description: `MLSA MIET is thrilled to announce "Dev Gathering '24," a cutting-edge Hackathon set to take place in March 2024.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
