import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Action +',
  description: 'Physiotherapy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="containerLayout py-3 ">
          <div className='container'>
          <Navbar />
          {children}
          <Footer />
          </div>
        


          
        </div>

      </body>

    </html>
  )
}
