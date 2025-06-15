import "./globals.css"

export const metadata = {
  title: "Konstruko - Membangun Masa Depan yang Kokoh",
  description: "Perusahaan konstruksi terpercaya dengan standar kualitas tertinggi",
    generator: 'devix'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-montserrat antialiased">{children}</body>
    </html>
  )
}
