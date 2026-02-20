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
  return <div className='p-1 sm:hidden'>
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
      <Link href="/">Home</Link><br />
      <Link href="/">Home</Link><br />
    </div>
    <div className='fixed absolute top-160 left-0 w-screen h-20 bg-background'></div>
      </div>}
    
    </div>;
  
}