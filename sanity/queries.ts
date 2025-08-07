import { sanityClient } from './client';
import { groq } from 'next-sanity';

export async function getPosts() {
  return sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...5]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset->{url, metadata}
      }
    }`
  );
}
