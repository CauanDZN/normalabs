'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import normalabs from '../../public/normalabs.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-center items-center px-4 py-2 bg-gray-100 w-full">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <div className="flex items-center p-4">
          <a href="/">
            <Image src={normalabs} alt="Logo" width={225} />
          </a>
        </div>

        <nav className='hidden lg:block'>
          <ul className="flex">
            <li className="mx-2">
              <a href="/graduacao">Graduação</a>
            </li>
            <li className="mx-2">
              <a href="/pos">Pós-Graduação</a>
            </li>
            <li className="mx-2">
              <a href="/matricule-se">Matricule-se</a>
            </li>
            <li className="mx-2">
              <a href="/saiba-mais">Saiba Mais</a>
            </li>
            <li className="mx-2">
              <a href="/contatos">Contatos</a>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
        
        

        <nav
          className={`${isMenuOpen ? 'flex' : 'hidden'} bg-gray-300 flex-1 p-2 gap-1 lg:hidden absolute top-24 right-0 h-[calc(100%-6rem)] w-full justify-center`}
        >
          <ul className="flex flex-col text-center">
            <li className="mx-2 p-2 hover:underline">
              <a href="/graduacao">Graduação</a>
            </li>
            <li className="mx-2 p-2 hover:underline">
              <a href="/pos">Pós-Graduação</a>
            </li>
            <li className="mx-2 p-2 hover:underline">
              <a href="/matricule-se">Matricule-se</a>
            </li>
            <li className="mx-2 p-2 hover:underline">
              <a href="/saiba-mais">Saiba Mais</a>
            </li>
            <li className="mx-2 p-2 hover:underline">
              <a href="/contatos">Contatos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;