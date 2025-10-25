// components/SEO/schemas/organization.js
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tegsoft UAE",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-50-1234567",
    "contactType": "customer service",
    "areaServed": "AE",
    "availableLanguage": "English, Arabic"
  },
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.linkedin.com/company/yourcompany"
  ]
};

export default organization;
