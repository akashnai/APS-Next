import Link from 'next/link';
import { reader } from '../reader';
import '../styles.css';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: { slug: string; entry: { title: string } }) => (
          <li key={post.slug} className="text-sky-600 underline">
            <Link href={`/blogs/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
