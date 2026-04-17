import { file, glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const books = defineCollection({
  // loader: file("src/content/books.json"), // -> no caso de ser apena um unico ficheiro .json
  loader: glob({ base: "src/content/books", pattern: "*.md" }),
  schema: z.object({
    // id: z.string(), // -> no caso de ser apena um unico ficheiro .json
    title: z.string(),
    author: z.string(),
    rating: z.number(),
    summary: z.string(),
  }),
});

export const collections = {
  books,
};
