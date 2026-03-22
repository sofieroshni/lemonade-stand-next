import Header from './components/Header'
import Footer from './components/Footer'
import { Providers } from './providers'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <Header></Header>
          {children}
<Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}