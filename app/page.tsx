import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full">
        <Image
          className="sm:hidden"
          src="/jt-homebanner-large-mobile.jpg"
          alt="Family walking in snow"
          width={1920}
          height={900}
          priority
        />
        <Image
          className="hidden"
          src="/jt-homebanner-large.jpg"
          alt="Family walking in snow"
          width={1920}
          height={900}
          priority
        />
      </div>

      <div className="content text-center">
        <h1 className="text-sm m-1 ">Appleton, WI Photographer</h1>
        <h2 className="text-3xl font-italiana">
          Making memories to last a lifetime...
        </h2>
        <p className="p-4">
          {" "}
          Your photography session is all about you, your family, and your
          memories. Be your true self. Show your fun, quirky personality. Do the
          things that make you happy. Laugh loudly. Hug tightly.
        </p>
      </div>

      <div className="mt-5 mr-5 max-w-7/8 flex flex-col text-center">
        <div className="w-full bg-white h-50">
          <Image
            className="translate-x-5 -translate-y-5 "
            src="/location.jpg"
            alt="Family walking in field"
            width={300}
            height={20}
          />
        </div>
        <h2 className="mt-2 text-xl">Families</h2>
        <span className="text-sm italic">View Gallery</span>
      </div>

      <div className="mt-10 mr-5 max-w-7/8 flex flex-col text-center">
        <div className="w-full bg-white h-50">
          <Image
            className="translate-x-5 -translate-y-5 "
            src="/seniorpost.jpg"
            alt="Football player in field"
            width={300}
            height={20}
          />
        </div>
        <h2 className="mt-2 text-xl">Seniors</h2>
        <span className="text-sm italic">View Gallery</span>
      </div>

      <div className="mt-10 mr-5 max-w-7/8 flex flex-col text-center">
        <div className="w-full bg-white h-50">
          <Image
            className="translate-x-5 -translate-y-5 "
            src="/babiespost.jpg"
            alt="Newborn baby"
            width={300}
            height={20}
          />
        </div>
        <h2 className="mt-2 text-xl">Newborns</h2>
        <span className="text-sm italic">View Gallery</span>
      </div>

      <div>
        <div className="w-full bg-white h-50"></div>
      </div>
    </main>
  );
}
