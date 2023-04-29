'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import normalabs from '../../public/normalabs.png'
import normalabsbranco from '../../public/normalabs-branco-total.png'
import equipe from '../../public/equipe.png'
import rocket from '../../public/rocket.png'
import { At, InstagramLogo, LinkedinLogo, MapPin, WhatsappLogo } from '@phosphor-icons/react'
import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <>
      <Header />
      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4'>
        <Image src={normalabsbranco} alt='Foto da matrícula' width={300} />
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white w-full gap-2'>
        <div className="flex justify-between items-center gap-4 p-20 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4 w-full sm:w-auto`}>
            <div className='items-center w-full'>
              <ReactPlayer url='https://www.youtube.com/watch?v=gA6xGM9wpHo' />
            </div>
          </div>
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4 w-full sm:w-auto`}>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba Mais</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-medium text-white'>Equipe</h1>
            <p className='text-sm font-normal text-white'>
            Nossa equipe foi criada em 2021, com o intuito de impulsionar a organização com a transformação digital. Nosso core é o trabalho em equipe e as metodologias ágeis que nos permitem inovar de forma coerente e rápida. 
            Atualmente, nosso time é dividido em três equipes, temos os Analistas de Negócios, os Desenvolvedores e a Qualidade. 
            Todas são essenciais para que tudo consiga ocorrer da melhor maneira possível.
            </p>
            <div className='w-full flex'>
              <Image src={equipe} alt='Nota 5' width={500} className='border' />
            </div>

          </div>
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4 w-full sm:w-auto`}>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba mais</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 gap-8 w-full max-w-6xl 2xl:flex-row-reverse flex-col">
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-medium text-gray-900'>Analistas</h1>
              <p className='text-sm font-normal text-gray-900'>
              Nossos Analistas são responsáveis pelo contato com o cliente, são eles que vivenciam a dor do cliente e junto dele encontram formas de solucionar essas dores.
              </p>
            </div>

            <div className='flex items-center gap-8 flex-col sm:flex-row justify-around sm:justify-start'>
              <Image src={rocket} alt='Rocket' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba mais</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4 gap-2'>
        <div className='flex flex-col p-12 w-full max-w-6xl gap-8'>
          <div>
            <h1 className='text-4xl font-medium text-white'>Contatos</h1>
            <p className='text-sm font-normal text-white'>
              Transforme sua vida com a gente. <br />
              Comece sua jornada de sucesso agora mesmo!</p>
          </div>

          <div className='flex flex-col 2xl:flex-row gap-6 items-center sm:items-start'>
            <div className='flex flex-row gap-2 items-center'>
              <MapPin size={24} color='#FFFFFF' weight='fill' />
              <p className='text-sm text-white'>Av. Antônio Sales 3410, Escritório Central, Fortaleza, Ceará 60135-102, BR</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <LinkedinLogo size={24} color='#FFFFFF' weight='fill' />
              <p className='text-sm text-white'>Normalabs Hub</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <At size={24} color='#FFFFFF' weight='regular' />
              <p className='text-sm text-white'>normalabs.analise@normatel.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
