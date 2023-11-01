import Image from "next/image";

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div className="mx-auto">
      <div className="relative bg-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="p-4 md:p-0 flex flex-col justify-start items-start gap-6">
            <h1 className="text-blue-950 text-4xl md:text-6xl font-semibold font-['Lexend'] capitalize">
              The best place for <br /> your doctor <br /> Find now
            </h1>
            <p className="opacity-75 text-slate-500 text-base font-normal font-['Lexend'] leading-7">
              some more meow mwow meow
            </p>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 relative" />
              <input
                type="text"
                placeholder="Search for doctor/ biryani/ mutton chap/ chicken/ meow /meow"
                className="w-full py-2 px-4 bg-white rounded-32px border border-zinc-200 text-neutral-400 text-base font-medium font-['Lexend'] leading-snug"
              />
              <button className="px-4 py-3 bg-emerald-500 rounded-32px flex items-center gap-1">
                <span className="text-white text-sm font-semibold font-['Lexend'] leading-snug">
                  Search
                </span>
                <div className="w-6 h-6 relative" />
              </button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image src="/babydog.png" alt="Image 1" width={119} height={121} />
          </div>
        </div>
        <div className="text-4xl md:text-6xl font-semibold font-['Lexend'] capitalize absolute left-[31px] top-[32px]">
          Meow Web
        </div>
      </div>
    </div>
  );
}

export default Hero;
