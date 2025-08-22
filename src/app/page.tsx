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
      <BentoSection />
      <Practitioner practitionersData={practitionersData} />
      <Faqs faqData={faqData} />
    </>
  );
}
