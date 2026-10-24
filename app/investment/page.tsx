// app/investment/page.tsx
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function InvestmentPage() {
  return (
    <main className="flex flex-col items-center">
      {/* <div className="w-7/8 justify-items-center md:grid md:grid-cols-2 mt-2 md:mt-48 3xl:mt-60">
        <div className="w-full md:ml-8 md:bg-white md:max-w-xl md:mt-8">
          <Image
            src="/invest/m-op.jpg"
            className="md:min-w-xl md:-translate-x-6 md:-translate-y-6"
            alt=""
            width={2000}
            height={20}
          />
        </div>
        <div className="md:order-first md:leading-8 md:p-10 p-4">
          <h2 className="text-3xl text-center mb-4 md:text-left">Investment</h2>
          <p>
            You deserve a unique, tailored approach to your photo session, no
            matter the ocassion. Kids grow and change so fast- each age and
            stage is so unique.
          </p>
          <p className="mt-4">
            Please contact me with any questions about what session is right for
            you.
          </p>
          <div className="mt-8 font-normal flex flex-row flex-wrap gap-6">
            <Link href="#seniors">Seniors &darr;</Link>
            <Link href="#families">Families &darr;</Link>
            <Link href="#babies">Babies &darr;</Link>
            <Link href="#weddings">Weddings &darr;</Link>
            <Link href="#other">Other &darr;</Link>
          </div>
        </div>
      </div> */}
      <div className="w-full md:max-w-[2000px] md:mt-48 md:grid md:grid-cols-3 md:gap-4 md:p-4 md:mb-8">
        <div className="w-full md:w-7/8 md:ml-12 2xl:bg-white md:order-last">
          <Image
            src="/invest/m-op.jpg"
            className="md:-translate-x-6 md:translate-y-6"
            alt=""
            width={2000}
            height={20}
          />
        </div>
        <div className="w-full h-auto col-span-2 leading-8 p-8">
          <h2 className="text-3xl text-center mb-4 md:text-left">Investment</h2>
          <p>
            You deserve a unique, tailored approach to your photo session, no
            matter the ocassion. Kids grow and change so fast- each age and
            stage is so unique.
          </p>
          <p className="mt-4">
            Please contact me with any questions about what session is right for
            you.
          </p>
          <div className="mt-20 font-normal flex flex-row flex-wrap gap-6">
            <Link href="#seniors">Seniors &darr;</Link>
            <Link href="#families">Families &darr;</Link>
            <Link href="#babies">Babies &darr;</Link>
            <Link href="#weddings">Weddings &darr;</Link>
            <Link href="#other">Other &darr;</Link>
          </div>
        </div>
      </div>

      <div
        id="seniors"
        className="flex flex-col mt-10 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8 max-w-[2000px]">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/2-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Seniors</h2>
            <h3 className="text-xl mb-2">Classic Package</h3>
            <li className="ml-8">45 minute session</li>
            <li className="ml-8">One location, two outfit limit</li>
            <li className="ml-8">15 digital images in your online gallery</li>
            <li className="ml-8 mb-2">Yearbook headshot of your choice</li>
            <h4 className="italic">Package Price: $475</h4>

            <h3 className="text-xl mt-6 mb-2">Epic Package</h3>
            <li className="ml-8">2 hour session</li>
            <li className="ml-8">Multiple locations, unlimited outfits</li>
            <li className="ml-8">50 digital images in your online gallery</li>
            <li className="ml-8 mb-2">Yearbook headshot of your choice</li>
            <h4 className="italic">Package Price: $675</h4>

            <h3 className="text-xl mt-6 mb-2">Family Add-On</h3>
            <li className="ml-8">20 minute session add-on</li>
            <li className="ml-8">Must be done same-day as main session</li>
            <li className="ml-8 mb-2">10+ digital images</li>
            <h4 className="italic">Package Price: +$300</h4>

            {/* <Link className="text-md font-normal mt-4 underline" href="/">
              Download Guide
            </Link> */}
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full hidden md:block"
            src="/invest/7.jpg"
            alt=""
            width={420}
            height={20}
          />
        </div>
      </div>

      <div
        id="families"
        className="flex flex-col mt-10 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8 max-w-[2000px]">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/3-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Families</h2>
            <p>
              I love to capture outdoor family sessions, whether it's a sunny
              afternoon or an evening sunset. I travel to locations in the Fox
              Valley and would love to recommend my favorite spots for your
              shoot. Family sessions are approximately 1 hour long. Outfit
              changes are not a problem!
            </p>
            <li className="mt-2 ml-8">Location of your choice</li>
            <li className="ml-8">no. of images, online gallery</li>
            <h4 className="italic mt-2">Package Price: $400</h4>
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full hidden md:block"
            src="/invest/5.jpg"
            alt=""
            width={420}
            height={20}
          />
        </div>
      </div>

      <div
        id="babies"
        className="flex flex-col mt-10 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8 max-w-[2000px]">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/1-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Babies</h2>
            <p>
              There is nothing quite like a sleepy newborn session. These can be
              done in the natural light of your home, or in my studio.
              Generally, newborn sessions are best within the first 10 days
              after birth. Siblings are welcome! I would love to include your
              big and little ones.
            </p>
            <li className="ml-8 mt-2">60 images in your online gallery</li>
            <h4 className="italic mt-2">Package Price: $400</h4>
            <p className="mt-4">
              I also offer maternity sessions in home, studio, or outdoors.
              Reach out with your details, I would love to work with you!
            </p>
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full hidden md:block"
            src="/invest/maternity.jpg"
            alt=""
            width={420}
            height={20}
          />
        </div>
      </div>

      <div
        id="weddings"
        className="flex flex-col mt-10 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8 max-w-[2000px]">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/4.jpg"
            alt=""
            width={700}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Weddings</h2>
            <h3 className="text-xl mb-2">Your Photography Experience</h3>
            <p>
              Your wedding photography investment includes a blend of artistic,
              photojournalistic, and classic portrait styles, ensuring that
              every meaningful detail, emotion, and moment of your day is
              beautifully preserved. My goal is to create timeless images that
              tell the story of your wedding day while providing an enjoyable
              and stress-free experience from the engagement session to the
              final gallery delivery.
            </p>
            <h3 className="text-xl mt-4 mb-2">The Classic Wedding:</h3>
            <p className="ml-4 w-7/8">
              I will arrive approximately 2 hours prior to the ceremony to
              capture all of the special getting-ready moments, including the
              dress, shoes, jewelry, and other meaningful details. These images
              will be primarily candid in nature, with a few posed portraits
              taken beforehand to allow for a smoother timeline between the
              ceremony and reception.
            </p>
            <li className="ml-8">Two hours pre-ceremony coverage</li>
            <li className="ml-8">Full ceremony coverage</li>
            <li className="ml-8">
              Formal family portraits following the ceremony
            </li>
            <li className="ml-8">Bride, groom, and wedding party portraits</li>
            <li className="ml-8">
              Travel to an additional location for creative portraits
            </li>
            <li className="ml-8">A secondary photographer</li>
            <li className="ml-8">Complimentary engagement session</li>
            <li className="ml-8 mb-2">
              High-resolution digital images delivered on a USB drive, along
              with a password-protected online gallery for sharing and
              downloading images.
            </li>

            <h4 className="italic mb-2">Package Price: $2000 + tax</h4>
            <h3 className="text-xl mt-4 mb-2">The Epic Wedding:</h3>
            <p className="ml-4 w-7/8">
              This package includes everything in the Classic Wedding package,
              plus approximately 2 hours of reception coverage. Additional
              reception coverage includes:
            </p>
            <li className="ml-8">Reception venue details and decor</li>
            <li className="ml-8 ">Cake cutting, toasts, and speeches</li>
            <li className="ml-8">First dances</li>
            <li className="ml-8 mb-2">
              Special moments and candid reception photographs
            </li>
            <h4 className="italic mb-4">Package Price: $2400 + tax</h4>

            {/* <Link className="text-md font-normal mt-4 underline" href="/">
              Download Full Guide
            </Link> */}

            <Link href="/contact">
              <span className="text-md italic">
                Inquire about a destination wedding &rarr;
              </span>
            </Link>
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/yang5.jpg"
            alt=""
            width={700}
            height={20}
          />
        </div>
      </div>

      <div
        id="other"
        className="flex flex-col items-center w-7/8 md:w-6/8 h-100 mt-6 mb-8"
      >
        <h2 className="text-3xl text-center mt-8 mb-4">Other Sessions</h2>
        <p>
          For details about specialty sessions, please get in touch through the
          contact form.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-4 md:pl-20 md:pr-20 text-center text-xl w-full">
            <h3 className="mt-2 md:mt-0">Seasonal Minis</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
          <div className="bg-white p-4 md:pl-20 md:pr-20 text-center text-xl w-full">
            <h3>Business Headshots</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
          <div className="bg-white p-4 md:pl-8 md:pr-8 text-center text-xl w-full">
            <h3>Graduations</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
          <div className="bg-white p-4 md:pl-8 md:pr-8 text-center text-xl w-full">
            <h3>Prom</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
