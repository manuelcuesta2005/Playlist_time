import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Playlist Time',
  description: 'me gustaria hacer un reproductor de musica y le añadiria una seccion de playlist en el que el usuario escoge sus 5 canciones favoritas, y con esas 5 canciones, crear una playlist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
