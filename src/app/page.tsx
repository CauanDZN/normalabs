'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import normalabs from '../../public/normalabs.png'
import rocket from '../../public/rocket.png'
import { KnowMore } from '@/components/KnowMore'
import { At, MapPin, WhatsappLogo } from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
      <Header />
      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4'>
        <Image src={normalabs} alt='Foto da matrícula' />
        <Image src={rocket} alt='Foto da matrícula' />
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white w-full gap-2'>
        <div className="flex justify-between items-center gap-4 p-20 w-full max-w-6xl 2xl:flex-row flex-col">
          <div>
            <KnowMore />
          </div>
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4 w-full sm:w-auto`}>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba Mais</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Graduação</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Pós</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Matricule-se</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Contatos</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-medium text-white'>Graduação</h1>
            <p className='text-sm font-normal text-white'>Oferecemos cursos EAD com nota máxima no MEC. Estude de forma flexível, com aulas online interativas e suporte técnico disponível 24 horas.</p>
            <div className='w-full flex justify-center'>
              <Image src={rocket} alt='Nota 5' />
            </div>

          </div>
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4 w-full sm:w-auto`}>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Bacharelado</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Licenciatura</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Tecnólogo</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Todos</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 gap-8 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-medium text-gray-900'>Pós-Graduação</h1>
              <p className='text-sm font-normal text-gray-900'>Oferecemos pós-graduação EAD com excelência acadêmica e reconhecimento no mercado. Aulas flexíveis e convenientes, suporte técnico 24 horas.</p>
            </div>

            <div className='flex items-center gap-8 flex-col sm:flex-row justify-around sm:justify-start'>
              <Image src={rocket} alt='Nota 5' />
              <img src={rocket.src} alt="" width={rocket.width} height={rocket.height} />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Pós-Graduação</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Todos os Cursos</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 w-full max-w-6xl 2xl:flex-row flex-col">
          <div>
            <h1 className='text-4xl font-medium text-white'>Matricule-se</h1>
            <p className='text-sm font-normal text-white whitespace-pre-line'>
              Transforme sua vida com a gente. <br />
              Cursos flexíveis, suporte 24 horas e excelência acadêmica.  <br />
              Comece sua jornada de sucesso agora mesmo!
            </p>
          </div>
          <div className='flex flex-row gap-2'>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Matricule-se</button>
          </div>

        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4 gap-2'>
        <div className='flex flex-col p-12 w-full max-w-6xl gap-8'>
          <div>
            <h1 className='text-4xl font-medium text-white'>Contatos</h1>
            <p className='text-sm font-normal text-white'>
              Transforme sua vida com a gente. <br />
              Cursos flexíveis, suporte 24 horas e excelência acadêmica. <br />
              Comece sua jornada de sucesso agora mesmo!</p>
          </div>

          <div className='flex flex-col 2xl:flex-row gap-6 items-center sm:items-start'>
            <div className='flex flex-row gap-2 items-center'>
              <MapPin size={24} color='#FFFFFF' weight='fill' />
              <p className='text-sm text-white'>Business Place, Torre 1, Sala 507 Avenida I Nº57 - Jereissati I CEP: 61900410</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <WhatsappLogo size={24} color='#FFFFFF' weight='fill' />
              <p className='text-sm text-white'>(85) 99151-0315</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <At size={24} color='#FFFFFF' weight='regular' />
              <p className='text-sm text-white'>polo.maracanau@fatecie.edu.br</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
