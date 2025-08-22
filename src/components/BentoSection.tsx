import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  className?: string;
  children?: React.ReactNode;
}

function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  className = "",
  children
}: CardProps) {
  return (
    <div className={`border-light border-1 bg-white rounded-xl relative flex flex-col h-full ${className} hover:shadow-lg`}>
      <div className="p-4 sm:p-10 pb-0 flex-shrink-0">
        <h1 className="text-4xl mb-3 sm:mb-4">{title}</h1>
        <h6 className="text-sm sm:text-xl mb-4 sm:mb-6 sm:pr-10">{description}</h6>
      </div>
      {children}
      <div className="relative flex-shrink-0 mt-auto h-48 sm:h-64 flex items-end" style={{ height: `clamp(12rem, 30vw, ${imageHeight}px)` }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority
          className="w-full h-full object-contain rounded-b-xl"
        />
      </div>
    </div>
  );
}

export default function BentoSection() {
  return (
    <div className="py-8 sm:py-16 bg-felix-lighter">
      <div className="max-w-[74rem] mx-auto px-4 sm:p-0">
        <section className="w-full text-center p-2 sm:p-2.5 rounded-xl bg-felix-lighter2 mb-6 sm:mb-10 sm:text-sm text-xs">
          Only available in Alberta, British Columbia, Manitoba, Ontario, Saskatchewan
        </section>

        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full mt-8">
            <Card
              title="Cutting-edge treatment"
              description="Access modern prescription weight loss treatments that can help address the biological factors influencing your weight."
              imageSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/66f4661f9cbe4b4d686619bf_WL_Ailment_Bento1%20White%201.avif"
              imageAlt="cutting-edge-image"
              imageWidth={575}
              imageHeight={575}
              className="sm:row-span-5 order-1 sm:order-1 bg-gradient-to-b from-white to-[#d5e5ee]"
            />

            <div className="sm:row-span-2 sm:col-start-1 sm:row-start-6 border-light border-1 bg-white rounded-xl p-4 sm:p-10 text-center flex flex-col items-center order-4 sm:order-2 hover:shadow-lg">
              <h1 className="text-2xl sm:text-4xl mb-2">
                &ldquo;If I had to sum up my experience, I would use the word{" "}
                <span className="relative inline-block">
                  transformational
                  <Image
                    src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/655a59c6a75bf3251638d749_VP%20Should.svg"
                    alt="underline"
                    width={120}
                    height={20}
                    priority
                    className="absolute bottom-0 left-0 w-full h-auto"
                  />
                </span>
                .&rdquo;
              </h1>
              <h6 className="text-lg sm:text-2xl text-gray-500">Yves, a Felix patient</h6>
            </div>

            <Card
              title="Comprehensive care"
              description="Get a treatment plan made just for you along with tools to support healthy habits."
              imageSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/68272922f60fc7a98a4a39ce_2263c6be38396b21df27afcc19eb8912_wl-tracker-tile.avif"
              imageAlt="comprehensive-care-image"
              imageWidth={575}
              imageHeight={250}
              className="sm:row-span-3 sm:col-start-2 sm:row-start-1 order-2 sm:order-3"
            />

            <Card
              title="Ongoing support"
              description="Chat with your healthcare practitioner at any time for support on your weight loss journey."
              imageSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/655b4bd2c059a3c374e0cf1b_WL_Ailment_Bento3.webp"
              imageAlt="ongoing-support-image"
              imageWidth={575}
              imageHeight={374}
              className="sm:row-span-4 sm:col-start-2 sm:row-start-4 order-3 sm:order-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

