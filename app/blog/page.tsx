import { getPosts } from '../../sanity/queries';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className="prose dark:prose-invert mx-auto py-8">
      <h1>Blog</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug?.current}`}>{post.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
