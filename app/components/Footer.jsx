// components/Footer.js
import Link from 'next/link';

function Footer() {
  return (
    <footer className='absolute w-full bottom-auto h-auto bg-pink-500 md:bg-green-500 lg:bg-red-500 xl:bg-blue-500'>
      <nav>
        <h2>Footer</h2>
        <Link href="/">
          
        </Link>
        
        {/* Add more links as needed */}
      </nav>
    </footer>
  );
}

export default Footer;
