"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <Link href={'/'}> <div className='flex gap-1'><img className='md:w-7 w-5' src="/link.svg" alt="" /><h1 className='md:text-2xl text-xl font-bold'>BitLinks</h1></div> </Link>
      <img
        onClick={toggleNav}
        className='w-7 sm:hidden visible cursor-pointer'
        src="/hamburger.svg"
        alt="menu"
      />
      {isMobileMenuOpen && (
        <ul className='absolute top-[6%] right-0 w-[35%] bg-gray-800 flex flex-col items-center gap-4 py-4 sm:hidden z-50 rounded-bl-2xl'>
          <Link onClick={toggleNav} href='/'><li>Home</li></Link>
          <Link onClick={toggleNav} href='/about'><li>About</li></Link>
          <Link onClick={toggleNav} href='/generate'><li>Try Now</li></Link>
          <Link onClick={toggleNav} href='https://github.com/sai-teja-chary/bitlinks' target='_blank'>
            <li>
              <button className='bg-white text-gray-800 px-2 py-1 rounded-md cursor-pointer'>
                GitHub
              </button>
            </li>
          </Link>
        </ul>
      )}
      <ul className='hidden sm:flex md:gap-6 gap-3 justify-center items-center font-bold '>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/about'}><li>About</li></Link>
        <Link href={'/generate'}><li>Try Now</li></Link>
        <Link href={'https://github.com/sai-teja-chary/bitlinks'} target='_blank'><li><button className='bg-white text-gray-800 px-2 py-1 rounded-md cursor-pointer'>Github</button></li></Link>
      </ul>

    </nav >
  )
}

export default Navbar
