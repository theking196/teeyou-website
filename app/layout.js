import './globals.css'

export const metadata = {
  title: 'Teeyou Hair - Premium Wigs Nigeria',
  description: 'Your trusted source for premium quality wigs in Nigeria. Beauty & Grace in every strand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
