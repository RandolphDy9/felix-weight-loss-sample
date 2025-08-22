import { client } from "./contentful";

export async function getFaqs() {

  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.warn('Contentful environment variables not set, returning empty data');
    return [];
  }

  try {
    const entries = await client.getEntries({ content_type: "faq" });
    return entries.items.map(item => ({
      id: item.sys.id,
      question: (item.fields.question as string) || "",
      answer: (item.fields.answer as string) || "",
      category: item.fields.category as string || "",
    }));
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}
