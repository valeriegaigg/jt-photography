import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../nav/Hamburger';


function Header() {
  return (
    <header className="p-4 flex flex-col w-full h-30 items-center content-center md:bg-pink-300">
      <Image
          className='w-xs'
          src="/jtlogo1.png"
          alt="Jennifer Tabbert Photography logo"
          width={400}
          height={65.6}
          priority /> 

          <Hamburger />

      <nav className="hidden flex gap-8 justify-center items-center font-italiana text-xl">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/">
          Portfolio
        </Link>
        <Image
          src="/jtlogo1.png"
          alt="Jennifer Tabbert Photography logo"
          width={400}
          height={65.6}
          priority />
        <Link href="/">
          Investment
        </Link>
        <Link href="/">
          Contact 
        </Link>
        <Link href="/">
          Login 
        </Link>
        
      </nav>
    </header>
  );
}

export default Header;
