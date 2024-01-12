import { Work_Sans } from 'next/font/google'
import './globals.css'
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Nav } from '@/components/navbar/navbar';


const work = Work_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});


export const metadata = {
  title: 'One Jamat',
  description: 'One jamat Software companies... continue',

  keywords: ['keyword1', 'keywords2'],
  author: 'Ali Shan',
  robots: 'index, follow',
  images: [
    {
      // url: ,
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={work.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
