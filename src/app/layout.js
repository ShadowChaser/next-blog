import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { ThemeContextProvider } from '@/context/ThemeContext';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best Anime Blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
        <div className='container'>
          <div className='wrapper'>
          <Navbar/>
          {children}
          <Footer/>
          </div>
        </div>  
        </ThemeContextProvider>
        </body>
    </html>
  )
}
