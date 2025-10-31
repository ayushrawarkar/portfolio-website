import './globals.css'

export const metadata = {
  title: 'Portfolio Templates',
  description: 'Professional portfolio templates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}