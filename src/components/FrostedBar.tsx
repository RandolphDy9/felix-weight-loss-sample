import Image from "next/image"

interface ShippingInfoProps {
  iconSrc?: string
  iconAlt?: string
  text: string
  className?: string
}

function ShippingInfo({
  iconSrc = "https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c57e3d1584ec8b9199df6_Vectors-Wrapper.svg",
  iconAlt = "shipping icon",
  text,
  className = ""
}: ShippingInfoProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          priority
          className="w-6 h-6"
          aria-hidden="false"
        />
      )}
      <span className="text-md font-medium text-gray-700">{text}</span>
    </div>
  )
}

export default function FrostedBar() {
  return (
    <section
      className="w-full mx-auto flex justify-center 
                 sm:w-full sm:mx-auto sm:flex sm:justify-center 
                 relative sm:absolute sm:bottom-0 sm:translate-y-1/2 sm:z-10"
      aria-label="Service highlights and trust indicators"
    >
      <div className="w-full flex flex-col items-start sm:w-auto sm:flex-row sm:justify-between sm:items-center min-w-[20rem] sm:min-w-[74rem] px-4 sm:px-16 py-4 border-light border-1 bg-white backdrop-blur-sm rounded-xl gap-4 sm:gap-0">
        <ShippingInfo
          iconSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c57e3d1584ec8b9199df6_Vectors-Wrapper.svg"
          text="Free and fast shipping"
          iconAlt="shipping-icon"
        />

        <ShippingInfo
          iconSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c57e3a095647c4646e2b9_Vectors-Wrapper.svg"
          text="Licensed healthcare practitioners"
          iconAlt="licensed-healthcare-icon"
        />

        <ShippingInfo
          iconSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c57e4ac6e037d192b9a73_Vectors-Wrapper.svg"
          text="Direct insurance billing"
          iconAlt="direct-billing-icon"
        />

        <ShippingInfo
          iconSrc="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c57e40daa58359f5d9580_Vectors-Wrapper.svg"
          text="Trusted by 1,000,000+ Canadians"
          iconAlt="trusted-icon"
        />
      </div>
    </section>
  )
}
