// components/Footer.js
import Link from 'next/link';

function Footer() {
  return (
    <footer className='w-full bg-pink-500 md:bg-green-500 lg:bg-red-500 xl:bg-blue-500'>
      <nav>
        <Link href="/">
          Footer
        </Link>
        
        {/* Add more links as needed */}
      </nav>
    </footer>
  );
}

export default Footer;
