import { client } from "./contentful";

export async function getFaqs() {
  const entries = await client.getEntries({ content_type: "faq" });
  return entries.items.map(item => ({
    id: item.sys.id,
    question: (item.fields.question as string) || "",
    answer: (item.fields.answer as string) || "",
    category: item.fields.category as string || "",
  }));
}
