import Image from "next/image";
import FrostedBar from "./FrostedBar";

export default function Hero() {
  return (
    <main className="sm:min-h-[calc(85vh-4.5rem)] flex flex-col lg:flex-row justify-between relative">
      <section className="lg:w-1/2 order-2 lg:order-1 bg-white mt-8 sm:mt-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="flex justify-center items-center text-center gap-1 mb-4">
              <Image
                src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c60d38926d75d131a7921_Vectors-Wrapper.svg"
                alt="felix-logo"
                width={13}
                height={13}
                priority
                className="w-3.5 h-3.5"
              />
              <h3 className="font-medium">Weight Loss</h3>
            </div>
            <div className="text-4xl sm:text-6xl text-gray-900 mb-6">
              <div>Lose weight</div>
              <div className="relative inline-block">
                with{" "}
                <span className="relative">
                  science
                  <Image
                    src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/655a59c6a75bf3251638d749_VP%20Should.svg"
                    alt="underline"
                    width={120}
                    height={20}
                    priority
                    className="absolute left-0 w-full h-auto"
                  />
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8 mx-auto">
              Get weight loss treatment prescribed online in Canada.
            </p>
            <button className="bg-felix-dark w-full sm:w-auto text-white font-semibold py-3 sm:py-4 px-8 rounded-xl text-md sm:text-lg mb-8">
              Find out if you&apos;re eligible
            </button>

            {/* FrostedBar displayed inline on mobile */}
            <div className="sm:hidden">
              <FrostedBar />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:w-1/2 order-1 lg:order-2 sm:-mb-[4.5rem]">
        <Image
          src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/673ce1c9ba496a679030fa7c_WL-hero-img.avif"
          alt="hero-image"
          width={600}
          height={400}
          priority
          className="w-full h-full object-cover -mt-[4.5rem]"
        />
      </section>

      {/* FrostedBar positioned absolutely on desktop */}
      <div className="hidden sm:block">
        <FrostedBar />
      </div>
    </main>
  )
}