import { client } from "@/lib/sanity";
import Image from "next/image";

export default async function BlogPost({ params }) {
  const { slug } = params;

  const post = await client.fetch(
  `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    body
  }`,
  { slug }
);


  if (!post) {
    return <p className="text-center py-10">Post not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 mt-10">
      <h1 className="text-xl md:text-3xl lg:text-3xl text-pink-800 font-bold mb-6">{post.title}</h1>
     {post.mainImage?.asset?.url && (
  <Image
    src={post.mainImage.asset.url}
    alt={post.mainImage.alt || post.title}
    width={800}
    height={400}
    className="object-cover rounded-lg"
  />
)}


     <div className="prose dark:prose-invert text-justify">
  {post.body.map((block) => (
    <p key={block._key} className="mb-4">
      {block.children?.map((child) => child.text).join(" ") || ""}
    </p>
  ))}
</div>

    </div>
  );
}
