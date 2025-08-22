import Image from "next/image";
import PractitionerCards from "./PractitionerCards";

interface Practitioner {
  id: number | string
  name: string
  position: string
  gender: string
  photo: string
}

export default function Practitioner({ practitionersData }: { practitionersData: Practitioner[] }) {
  return (
    <div className="bg-linear-to-b from-lighter-blue to-light-blue pt-28">
      <div className="max-w-[74rem] mx-auto">
        <div className="flex flex-col justify-center items-center px-5 text-center">
          <div className="relative inline-block mb-4">
            <h1 className="text-4xl">Exceptional care delivered by <span className="relative inline-block">practitioners
              <Image
                src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/67b48b5c9b4222c61c21b3b0_6dc3ea5773265e81776038e756db3070_circle-4-06.svg"
                alt="circle-svg"
                width={216}
                height={50}
                className="absolute -bottom-2 w-56 h-12 z-10"
              />
            </span></h1>
          </div>
          <h6>Access our network of experienced healthcare practitioners across Canada.</h6>
        </div>
      </div>

      <PractitionerCards practitioners={practitionersData} />

      <div className="max-w-[74rem] mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <div className="sm:w-1/2 flex flex-col justify-center px-5">
            <h2 className="text-xl sm:text-3xl">&ldquo;Our team of practitioners is here to provide compassionate care, without judgement. From diagnosis, to treatment and beyond, we&rsquo;re in this together — every step of the way.&rdquo;</h2>
            <div className="my-10 flex flex-col gap-4">
              <Image
                src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651d4c1eb2c68ccbc292e09d_Doc-sign.png"
                alt="dr-kelly-signature"
                width={108}
                height={48}
                className="w-[108px] h-[48]"
              />
              <div>
                <h4 className="underline text-3xl font-semibold">Dr. Kelly Anderson, MD</h4>
                <h5>Medical Director, Felix</h5>
              </div>
            </div>
          </div>

          <div className="sm:w-1/2">
            <Image
              src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/655dd05be26c279330c27b2b_kelly-new.webp"
              alt="dr-kelly-image"
              width={552}
              height={552}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}