import './styles/global.css'

export const metadata = {
  title: 'Links',
  description: 'App de links',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
