'use client';
import {Divide as Hamburger} from 'hamburger-react';
import { useState } from 'react';
import Link from 'next/link';


export default function HamburgerComponent(){
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setTimeout(() => {
    setOpen(false);
  }, 100); 
    
  };
  return <div className='p-1 md:hidden'>
    <Hamburger 
    size={28}
    distance='md'
    toggled={open}
    toggle={setOpen}
    />

    

    {open && <div className='fixed absolute top-0 left-0 w-screen h-screen p-4 bg-background'>
      <header className='flex justify-end'>
        <Hamburger 
        size={28}
        distance='md'
        toggled={open}
        toggle={setOpen}
    /></header>
    <div className='text-center leading-15 text-lg'>
      <Link  href="/" onClick={closeMenu}>Home</Link><br />
      <Link href="/about" onClick={closeMenu}>About</Link><br />
      <div onClick={closeMenu} className='portfolio cursor-pointer -mb-15'>
          Portfolio:
          <div id='drop' className='hidden justify-center text-[16px] leading-10 flex-col '>
            <Link href="/about">
              Family
            </Link>
            <Link href="/seniorgirl">
              Senior Girl
            </Link>
            <Link href="/about">
              Senior Boy
            </Link>
            <Link href="/about">
              Wedding
            </Link>
            <Link href="/about">
              Baby
            </Link>
        </div>
        </div>
      <br />
      <Link href="/investment" onClick={closeMenu}>Investment</Link><br />
      <Link href="/contact" onClick={closeMenu}>Contact</Link><br />
    </div>
    <div className='fixed absolute top-160 left-0 w-screen h-20 bg-background'></div>
      </div>}
    
    </div>;
  
}