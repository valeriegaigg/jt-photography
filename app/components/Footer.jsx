// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

function Footer() {

  return (
    <footer className='text-center text-sm justify-center pt-6 pb-6 w-full bottom-auto h-auto bg-white'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex justify-center md:ml-8 gap-3 mr-0'>
          <Image src="/Asset 3.png"
            alt="Instagram Icon"
            width={25}
            height={30} />
          <Link className='underline' href="https://www.instagram.com/jennifertabbertphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >@jennifertabbertphotography</Link>
        </div>
        <div className='flex flex-wrap justify-center mt-4 md:mt-0 md:mr-8 gap-6 md:gap-8'>
          <Link href="/">Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/portfolio" >Portfolio</Link>
          <Link href="/investment" >Investment</Link>
          <Link href="/contact" >Contact</Link>
        </div>
        
      </div>
      
      <p className='text-xs md:text-right md:mr-8 pt-5'>&copy;Jennifer Tabbert Photography 2026</p>
      
    </footer>
  );
}

export default Footer;
