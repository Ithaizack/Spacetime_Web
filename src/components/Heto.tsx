import Image from "next/image";
import Link from "next/link";
import Nlwlogo from '../assets/nlw-spacetime-logo.svg'

export function Hero(){
  return(
      <div>
        <Image className='mb-2' src={Nlwlogo} alt='NLW Spacetime' />

        <div className="max-w-[420px] space-y-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-50">
            Sua cápsula do tempo
          </h1>
          <p className="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
             com o mundo!
          </p>
        </div>
        <Link
          className="mt-3 inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          href="/Memories/New"
        >
          CADASTRAR LEMBRANÇA
        </Link>
      </div>
  )
}