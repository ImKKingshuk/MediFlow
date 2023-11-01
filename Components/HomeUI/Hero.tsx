"use client";
import Image from "next/image";

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div className="mx-auto mb-[8rem] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
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
          <div className="w-[496px] px-4 py-1 bg-white rounded-full border border-zinc-200 justify-start items-center inline-flex">
            <input
              placeholder="Search for doctor/ biryani/ mutton chap/ chicken/ meow"
              className="grow shrink focus:outline-none text-black text-base font-medium font-['Lexend'] leading-snug"
            />

            <div className="px-4 py-3 bg-emerald-500 rounded-[32px] justify-start items-center gap-1 flex">
              Search
            </div>
          </div>
        </div>

        <div className="w-[439px] h-[451px] relative ">
          <div className="w-[119px] h-[121px] left-0 top-[72px] absolute rounded-3xl">
            <Image src="/babydog.png" alt="Image 1" width={119} height={121} />
          </div>
          <div className="w-[119px] h-[121px] left-[320px] top-[247px] absolute rounded-3xl">
            <Image src="/babydog.png" alt="Image 2" width={119} height={121} />
          </div>
          <div className="w-[119px] h-[121px] left-0 top-[247px] absolute rounded-3xl">
            <Image src="/babydog.png" alt="Image 3" width={119} height={121} />
          </div>
          <div className="w-[119px] h-[121px] left-[320px] top-[72px] absolute rounded-3xl">
            <Image src="/babydog.png" alt="Image 4" width={119} height={121} />
          </div>
          <div className="w-[119px] h-[121px] left-[160px] top-0 absolute rounded-3xl">
            <Image src="/babydog.png" alt="Image 5" width={119} height={121} />
          </div>
          <div className="w-[119px] h-[121px] left-[160px] top-[330px] absolute rounded-3xl">
            <Image src="/babydog.png" alt="Image 6" width={119} height={121} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
