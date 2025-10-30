const getBlogSchema = (post) => {
  const textPreview = post.body
    ?.find((block) => block._type === "block")
    ?.children.map((c) => c.text)
    .join(" ")
    .slice(0, 150);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: textPreview || "",
    image: post.mainImage?.asset?.url || "",
    author: {
      "@type": "Organization",
      name: "TechBee IT & Designs LLC",
    },
    publisher: {
      "@type": "Organization",
      name: "TechBee IT & Designs LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://techbee.ae/images/logo.png",
      },
    },
    datePublished: post._createdAt || "2025-10-30",
    dateModified: post._updatedAt || post._createdAt || "2025-10-30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://techbee.ae/blog/${post.slug.current}`,
    },
  };
};
