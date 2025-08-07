import post from './post';
import { defineConfig } from 'sanity';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'The Sake Company Studio',
  schema: {
    types: [post],
  },
});
