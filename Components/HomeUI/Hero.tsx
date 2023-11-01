"use client";
import Image from "next/image";

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div className="mx-auto mb-8rem w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-full">
              <span className="text-blue-950 text-4xl font-semibold font-['Lexend'] capitalize">
                The best place for <br />
                your{" "}
              </span>
              <span className="text-4xl font-semibold font-['Lexend'] capitalize">
                your doctor
                <br />
              </span>
              <span className="text-blue-950 text-4xl font-semibold font-['Lexend'] capitalize">
                Find now
              </span>
            </div>
            <div className="w-96 opacity-75 text-slate-500 text-base font-normal font-['Lexend'] leading-7">
              some more meow mwow meow
            </div>
          </div>
          <div className="w-96 pl-6 pr-1 py-1 bg-white rounded-32px border border-zinc-200 justify-start items-center gap-4 inline-flex">
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
        <div className="w-[451px] h-[440px]  ">
          <Image
            src="/babydog.png"
            alt="Image 1"
            width={119}
            height={121}
            className="right-0 top-0 absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 2"
            width={119}
            height={121}
            className="right-[332px] top-[163px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 3"
            width={119}
            height={121}
            className="right-0 top-[326px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 4"
            width={119}
            height={121}
            className="right-[332px] top-[489px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 5"
            width={119}
            height={121}
            className="right-[172px] top-0 absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 6"
            width={119}
            height={121}
            className="right-[172px] top-[163px] absolute rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
