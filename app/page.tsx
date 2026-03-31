import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full">
        <Image
          className="w-full md:hidden"
          src="/jt-homebanner-large-mobile.jpg"
          alt="Family walking in snow"
          width={500}
          height={20}
        />
        <Image
          className="hidden md:block -translate-y-40 w-full"
          src="/jt-homebanner-large.jpg"
          alt="Family walking in snow"
          width={1000}
          height={20}
        />
      </div>
      <div className="content text-center p-4 mt-4 md:-mt-35">
        <h1 className="text-sm m-1 ">Appleton, WI Photographer</h1>
        <h2 className="text-3xl font-italiana">
          Making memories to last a lifetime...
        </h2>
        <p className="p-4 leading-7 md:w-xl">
          {" "}
          Your photography session is all about you, your family, and your
          memories. Be your true self. Show your fun, quirky personality. Do the
          things that make you happy. Laugh loudly. Hug tightly.
        </p>
      </div>
      <div className="mt-8 -ml-6 flex flex-col max-w-7/8 text-center md:flex-row md:w-full">
        <div className="max-w-2xs bg-white max-h-sm md:max-w-lg">
          <Image
            className="min-w-2xs translate-x-6 -translate-y-6  md:min-w-lg"
            src="/location.jpg"
            alt="Family walking in field"
            width={400}
            height={20}
          />
        </div>
        <div className="ml-5 mt-4 p-2 md:mt-65 md:ml-25">
          <h2 className="text-2xl">Families</h2>
          <span className="text-sm italic">View Gallery</span>
        </div>
      </div>

      <div className="mt-12 -ml-6 flex flex-col max-w-7/8 text-center md:flex-row-reverse md:w-full">
        <div className="max-w-2xs bg-white max-h-sm md:max-w-lg">
          <Image
            className="min-w-2xs translate-x-6 -translate-y-6  md:min-w-lg"
            src="/seniorpost.jpg"
            alt="Football player in field"
            width={400}
            height={20}
          />
        </div>
        <div className="mt-4 p-2 md:mt-65 md:mr-20">
          <h2 className="text-2xl">Seniors</h2>
          <span className="text-sm italic">View Gallery</span>
        </div>
      </div>

      <div className="mt-10 -ml-6 flex flex-col max-w-7/8 text-center md:flex-row md:w-full md:mt-15">
        <div className="max-w-2xs bg-white max-h-sm md:max-w-lg">
          <Image
            className="min-w-2xs translate-x-6 -translate-y-6  md:min-w-lg"
            src="/babiespost.jpg"
            alt="Newborn baby"
            width={400}
            height={20}
          />
        </div>
        <div className="ml-5 mt-4 p-2 md:mt-65 md:ml-25">
          <h2 className="text-2xl">Babies</h2>
          <span className="text-sm italic">View Gallery</span>
        </div>
      </div>
      <Link href="/portfolio" className="p-4 md:mt-5 underline">
        <span className="text-md italic">Explore my portfolio &rarr;</span>
      </Link>

      <div className="flex flex-col max-w-7/8 mt-6 items-center md:flex-row-reverse">
        <div className="w-4/5 relative z-2 md:w-300">
          <Image
            className="mt-6"
            src="/aboutJen.jpg"
            alt="Portrait"
            width={400}
            height={20}
          />
        </div>

        <div className="flex flex-col items-center leading-8 bg-white p-6 z-1 -mt-5 md:h-130 md:mt-5 md:ml-15">
          <h2 className="text-2xl text-center mt-4 md:mt-8">
            Hola friends! I'm Jen Tabbert
          </h2>
          <div className="text-left indent-5 p-2 mt-2 md:w-3/4 ">
            <p>
              I have always loved photography, and I am truly blessed to have a
              job that allows me to be creative and use the talents and
              abilities that God has blessed me with. As a mother of five, I
              know how fast our tiny ones grow, and how sweet, precious & spunky
              each child is.
            </p>
            <p className="mt-2">
              Photos are a great way to capture the special moments and stages
              in our lives and create a treasure that we can keep long after
              your baby is grown. I strive to create images that will reflect
              who a child really is, inside as well as out.
            </p>
          </div>
          <Link href="/about" className="p-4 md:mt-6 underline">
            <span className="text-md italic">More about me &rarr;</span>
          </Link>
        </div>
      </div>

      <div className="-mt-15 w-full text-center md:mt-0">
        <Image
          className="translate-x-57 translate-y-50 md:translate-y-30 md:translate-x-0 md:w-70 md:float-right"
          src="/photo8.jpg"
          alt=""
          width={175}
          height={20}
        />
        <div className="-translate-y-45  md:translate-y-55 md:ml-73">
          <h2 className="text-2xl p-6 mb-2">
            If you see beauty the way I do, let's work together!
          </h2>
          <Link href="/" className="p-4 bg-white">
            <span className="text-md italic">Contact me</span>
          </Link>
        </div>

        <div>
          <Image
            className="-translate-y-25 md:-translate-y-15 md:w-80"
            src="/download (15).jpg"
            alt=""
            width={175}
            height={20}
          />
          <Image
            className="translate-x-35 -translate-y-35 md:translate-x-60 md:-translate-y-35 md:w-55"
            src="/photo12.jpg"
            alt=""
            width={160}
            height={20}
          />
        </div>
      </div>
    </main>
  );
}
