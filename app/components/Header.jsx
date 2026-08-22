import Image from 'next/image';
import Link from 'next/link';
import Hamburger from './Hamburger';



function Header() {
  return (
    <header>
      <div className='flex flex-col items-center p-2 mt-4 md:hidden'>
      <img
          src="/jtlogo1.png"
          alt="Jennifer Tabbert Photography logo"
          style={{
              width: "85%",
              height: "auto",
            }}
          /> 

        <Hamburger />
      </div>
      
      <div className="hidden md:flex flex-col items-center mt-8 absolute left-1/4 w-1/2 z-10">
        <img
          src="/jtlogo1.png"
          alt="Jennifer Tabbert Photography logo"
          className="max-w-[500px] max-h-[200px]"
          style={{
              width: "75%",
              height: "auto",
            }}
          /> 
        <nav className='flex gap-12 mt-6 font-italiana text-xl'>
            <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <div className='portfolio cursor-pointer'>
          Portfolio
          <div id='drop' className='hidden justify-center text-[16px] leading-7 flex-col font-montserrat'>
            <Link href="/family">
              Family
            </Link>
            <Link href="/seniorgirl">
              Senior Girl
            </Link>
            <Link href="/seniorboy">
              Senior Boy
            </Link>
            <Link href="/wedding">
              Wedding
            </Link>
            <Link href="/baby">
              Baby
            </Link>
        </div>
        </div>
        <Link href="/investment">
          Investment
        </Link>
        <Link href="/contact">
          Contact 
        </Link>
        </nav>

        
            
      
      </div>
      
      
    </header>
  );
}

export default Header;
