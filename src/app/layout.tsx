import { Hero } from '@/components/Heto'
import { SingIn } from '@/components/SingIn'
import { Profile } from '@/components/profile'
import { Ternary } from '@/components/ternary'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright'

const Roboto = Roboto_Flex({subsets: ['latin'], variable: '--font-Roboto'})
const BaiJamjuree = Bai_Jamjuree({subsets: ['latin'], weight: '700', variable: '--font-BaiJamjuree'})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('Tokem')
  console.log(isAuthenticated)
  return (
      <html lang="en">
        <body className={`${Roboto.variable} ${BaiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
          <main className='grid bg-[url(../assets/bg-stars.svg)] bg-cover grid-cols-2 min-h-screen'>
            {/* Colum left */}
            <div className='relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10'>
              {/* Colum left */}
              <div className='absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full blur-full  bg-purple-700 opacity-50'/>
              
              {/* Stripes */}
              <div className='absolute bottom-0 right-2 top-0  w-2 bg-stripes'/>
              
              {/* Sing in */}
              <Ternary Condition={!isAuthenticated} >
                <SingIn />
              </Ternary>

              <Ternary Condition={isAuthenticated} >
                <Profile />
              </Ternary>

              {/* Hero */}
              <Hero />

              {/* Copyright.tsx */}
              <Copyright />

            </div>

            {/* Colum Right */}
            <div className='flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover'>
              {children}
            </div>
          </main>
        </body>
    </html>
  )
}
