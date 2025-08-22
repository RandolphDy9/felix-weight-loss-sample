"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FaqsProps {
  faqData: FAQ[];
}

export default function Faqs({ faqData }: FaqsProps) {
  const faqsByCategory = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  const categories = Object.keys(faqsByCategory).sort();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-normal text-foreground">Frequently asked questions</h1>
      </div>

      {categories.map((category) => (
        <div key={category} className="flex flex-col lg:flex-row gap-4 lg:gap-16 mb-12">
          <div className="lg:w-48 flex-shrink-0 sm:my-4">
            <div className="text-xl font-medium text-foreground">
              {category}
            </div>
          </div>

          <div className="flex-1 max-w-4xl">
            <Accordion
              type="single"
              collapsible
              className="sm:space-y-4"
            >
              {faqsByCategory[category].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-border sm:pb-4">
                  <AccordionTrigger className="text-left sm:text-lg font-normal text-md hover:no-underline sm:py-4 px-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="sm:text-base sm:pt-2 sm:pb-4 pb-8">
                    {faq.answer.split("\n\n").map((paragraph, index) => (
                      <p key={index} className={index > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
}
