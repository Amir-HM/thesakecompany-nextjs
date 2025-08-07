import { createClient } from 'next-sanity';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-08-01',
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);
