import { client } from "./contentful";

interface PhotoField {
  fields?: {
    file?: {
      url?: string;
    };
  };
}

export async function getPractitioners() {
  const entries = await client.getEntries({ content_type: "practitioners" });

  return entries.items.map(item => {
    const photoField = item.fields.photo as PhotoField;
    const photoUrl = photoField?.fields?.file?.url
      ? `https:${photoField.fields.file.url}`
      : "";

    return {
      id: item.sys.id,
      photo: photoUrl,
      name: (item.fields.name as string) || "",
      position: (item.fields.position as string) || "",
      gender: (item.fields.gender as string) || "",
    };
  });
}

