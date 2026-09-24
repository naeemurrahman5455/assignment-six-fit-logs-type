
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../assets/banner.png";

export default function Hero() {
  return (
    <section className="container mx-auto bg-[#0C0D10] pb-5">
      <div className="mx-auto mt-10 mb-10 max-w-7xl rounded-3xl bg-[#15171D] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-5">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            
            {/* Eyebrow */}
            <h2 className="mb-5 font-['Inter'] text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-[#C2F800]">
              WORKOUT LIBRARY
            </h2>

            {/* Main Heading */}
            <h1 className="font-['Oswald'] text-[48px] font-bold uppercase leading-[0.9] tracking-[-1.5px] text-white sm:text-[60px] sm:leading-[0.85] md:text-[45px] md:leading-[50px] lg:text-[60px] lg:leading-[1.05]">
              TRAIN WITH INTENT. LOG{" "}
              <br className="hidden sm:block" />
              EVERY SET.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[620px] font-['Inter'] text-[16px] font-normal leading-7 text-[#9CA3AF]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#library"
                className="inline-flex items-center gap-3 rounded-[10px] bg-[#C2F800] px-6 py-3.5 font-['Inter'] text-sm font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#d1ff33] hover:shadow-[0_0_25px_rgba(194,248,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#C2F800] focus:ring-offset-2 focus:ring-offset-[#0C0D10]"
              >
                <span>BROWSE WORKOUTS</span>

                {/* Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m13 6 6 6-6 6"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex w-full justify-center">
            <div className="relative w-[80%] max-w-2xl overflow-hidden">
              <Image
                src={heroImage}
                alt="FITLOG workout"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}