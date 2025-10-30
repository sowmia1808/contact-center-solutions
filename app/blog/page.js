import { client } from "../../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  body
}`);
 const getPreview = (body) => {
    if (!body || !Array.isArray(body)) return "";
    const textBlock = body.find((block) => block._type === "block");
    if (!textBlock?.children) return "";
    const text = textBlock.children.map((c) => c.text).join(" ");
    return text.slice(0, 150) + (text.length > 150 ? "..." : "");
  };


  return (
    <div className="ml-5 mr-5 md:mr-5 md:ml-5 sm:ml-0 max-w-6xl lg:mx-auto py-10 mt-15 lg:mt-30">
      <h1 className="text-4xl text-pink-800 font-bold mb-8">Blogs</h1>
      {posts.map((post) => (
        <div key={post._id} className="mb-10 border-b pb-6">
          <h2 className="text-2xl text-pink-800 font-semibold mb-2">{post.title}</h2>
          {post.mainImage?.asset?.url && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={400}
              height={500}
              className="rounded-lg mb-4 object-cover"
            />
          )}
                <p className="mb-2 text-gray-700">{getPreview(post.body)}</p>         
          <Link
            href={`/blog/${post.slug.current}`}
            className="text-pink-600 hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
