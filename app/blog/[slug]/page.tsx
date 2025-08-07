import { Post } from '../../../sanity/types';
import { getPosts } from '../../../sanity/queries';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts: Post[] = await getPosts();
  const post = posts.find((p) => p.slug.current === params.slug);
  if (!post) return <div>Not found</div>;
  return (
    <main className="prose dark:prose-invert mx-auto py-8">
      <h1>{post.title}</h1>
      <img src={post.mainImage?.asset.url} alt={post.title} className="rounded" />
      <p>{post.excerpt}</p>
      <Link href="/blog">← Back to Blog</Link>
    </main>
  );
}
