import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '@/contexts/UserContext'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eimports',
  description: 'Gerenciador de Vendas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <UserContextProvider>
        <body className={roboto.className}>{children}</body>
      </UserContextProvider>
    </html>
  )
}
