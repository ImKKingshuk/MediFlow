"use client";
import Image from "next/image";

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div className="mx-auto mb-[8rem] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-full">
              <span className="text-blue-950 text-[40px] font-semibold font-['Lexend'] capitalize">
                The best place for <br />
                your{" "}
              </span>
              <span className="text-[40px] font-semibold font-['Lexend'] capitalize">
                your doctor
                <br />
              </span>
              <span className="text-blue-950 text-[40px] font-semibold font-['Lexend'] capitalize">
                Find now
              </span>
            </div>
            <div className="w-[496px] opacity-75 text-slate-500 text-base font-normal font-['Lexend'] leading-7">
              some more meow mwow meow
            </div>
          </div>
          <div className="w-[496px] pl-6 pr-1 py-1 bg-white rounded-[32px] border border-zinc-200 justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-neutral-400 text-base font-medium font-['Lexend'] leading-snug">
              Serarch for doctor/ biryani/ mutton chap/ chicken/ meow /meow
            </div>
            <div className="px-4 py-3 bg-emerald-500 rounded-[32px] justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-semibold font-['Lexend'] leading-snug">
                Search
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <div className="w-[451px] h-[440px]  ">
          <Image
            src="/babydog.png"
            alt="Image 1"
            width={119}
            height={121}
            className="left-0 top-[60px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 2"
            width={119}
            height={121}
            className="left-[332px] top-[223px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 3"
            width={119}
            height={121}
            className="left-0 top-[223px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 4"
            width={119}
            height={121}
            className="left-[332px] top-[60px] absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 5"
            width={119}
            height={121}
            className="left-[172px] top-0 absolute rounded-3xl"
          />
          <Image
            src="/babydog.png"
            alt="Image 6"
            width={119}
            height={121}
            className="left-[172px] top-[319px] absolute rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
