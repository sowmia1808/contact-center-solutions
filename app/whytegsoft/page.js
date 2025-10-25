export const metadata = {
  title: "Why Choose Tegsoft Contact Center in UAE | Cloud Contact Center Software",
  description:
    "Discover why Tegsoft is the leading cloud-based contact center solution in the UAE. Boost customer experience, agent efficiency, and sales with advanced features like IVR, call recording, AI, and real-time analytics.",
  keywords: [
    "Tegsoft Contact Center UAE",
    "Cloud Contact Center Dubai",
    "Call Center Software UAE",
    "Omnichannel Contact Center",
    "IVR UAE",
    "AI Contact Center Dubai"
  ],
  openGraph: {
    title: "Why Choose Tegsoft Contact Center in UAE",
    description:
      "Tegsoft is the leading cloud-based contact center solution in the UAE. Optimize customer interactions with IVR, call recording, AI, and real-time analytics.",
    url: "https://yourdomain.com/why-tegsoft", // replace with your URL
    siteName: "Tegsoft UAE",
    images: [
      {
        url: "/images/tegsoft-contact-center.png",
        width: 1200,
        height: 630,
        alt: "Tegsoft Contact Center Software UAE",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

import TegsoftFeaturesGrid from "@/components/TegsoftFeaturesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import Image from "next/image";
import JsonLd from "@/components/seo/jsonld";
import productSchema from "@/components/seo/schema/product";
export default function WhyTegsoftPage() {
    
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="max-w-8xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Left Side: Text */}
  <div className="md:w-1/2">
    <h1 className="text-4xl font-bold text-pink-900 mb-6">
      Why Choose Tegsoft for Your Contact Center in UAE
    </h1>

    <p className="text-gray-700 mb-6 text-justify">
      Tegsoft is the leading cloud-based contact center solution in the UAE,
      designed to optimize customer interactions across inbound, outbound,
      blended, and omnichannel communications. Businesses leverage Tegsoft to
      enhance customer experience, improve agent productivity, and increase
      sales conversions. With advanced features like IVR, call recording, HD
      voice, AI-assisted workflows, and real-time analytics, Tegsoft ensures
      your contact center operates at peak efficiency.
    </p>
    <h2 className="text-2xl font-semibold text-pink-900 mb-4">
  Optimize Customer Experience with Advanced Features
  </h2>

    <p className="text-gray-700 mb-6 text-justify">
      Whether you are a small business or a large enterprise, Tegsoft offers
      scalable deployment options, seamless integrations with existing CRM and
      business tools, and a user-friendly interface. Experience unmatched
      call quality, customizable service levels, and intelligent automation
      with Tegsoft.
    </p>
  </div>

  {/* Right Side: Image */}
  <div className="md:w-1/2">
    <Image
  src="/images/cloud contact center software.png"
  alt="Tegsoft Cloud Contact Center Software in UAE"
  width={400}
  height={400}
  className="w-full "
/>
  </div>
</div>


 
      <TegsoftFeaturesGrid/>
    <FeaturesSection/>
    <JsonLd data={productSchema}/>
      
    </div>
  );
}
