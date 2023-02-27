import './styles/global.css'

export const metadata = {
  title: 'Links',
  description: 'App de links',
  icons: 'https://img.icons8.com/material-sharp/256/06b6d4/resume.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
