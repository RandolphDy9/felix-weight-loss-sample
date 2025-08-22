import BentoSection from "@/components/BentoSection";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Practitioner from "@/components/Practitioners";
import { getPractitioners } from "@/lib/getPractioners";
import { getFaqs } from "@/lib/getFaqs";

export default async function Home() {
  const practitionersData = await getPractitioners();
  const faqData = await getFaqs();

  return (
    <>
      <Navbar />
      <Hero />
      <section className="mt-44 sm:mt-0">
        <BentoSection />
      </section>
      <Practitioner practitionersData={practitionersData} />
      <Faqs faqData={faqData} />
    </>
  );
}
