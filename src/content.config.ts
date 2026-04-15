import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const books = defineCollection({
  loader: file("src/content/books.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    rating: z.number(),
    summary: z.string(),
  }),
});

export const collections = {
  books,
};
