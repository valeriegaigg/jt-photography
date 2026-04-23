import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../nav/Hamburger';


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
      
      <div className="hidden md:flex flex-col items-center mt-5 relative z-10">
        <img
          src="/jtlogo1.png"
          alt="Jennifer Tabbert Photography logo"
          style={{
              width: "35%",
              height: "auto",
            }}
          /> 
        <nav className='flex gap-8 mt-6 font-italiana text-xl'>
            <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/portfolio">
          Portfolio
        </Link>
        
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
