'use client'
import { Suspense } from 'react'
import SideBar from '../components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Loading from './loading'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'create next app',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {

  const pathname = usePathname();
  // console.log(pathname);

  return (
    <>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${inter.className} bg-slate-800 py-4 selection:bg-green-400 selection:text-white`}
        >
          <div className='flex flex-row'>
         {!(pathname === '/' ) && <div className='basis-1/4'><SideBar className="fixed"/></div>}
         <Suspense fallback={<Loading/>}>
         <div className='basis-3/4'>{children}</div> 
         </Suspense>
          </div>
        </body>
      </html>
    </>
  );
}
