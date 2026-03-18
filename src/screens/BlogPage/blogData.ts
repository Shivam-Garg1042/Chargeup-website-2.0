export type BlogPost = {
  slug: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "driver-first-ev-ownership",
    readTime: "8 Mins Read",
    date: "02 Dec 2025",
    title: "How Chargeup is powering driver-first EV ownership.",
    excerpt:
      "From flexible financing to smarter battery management, see how our Fi-Ne-Tech stack keeps drivers on the road.",
    image: "/news3.jpg",
    content: [
      "Drivers need an EV platform that reduces downtime and increases earning potential. Chargeup brings financing, asset care, and performance visibility into one experience so drivers can make smarter daily decisions.",
      "Our Fi-Ne-Tech stack connects battery health, charging access, and service history in one place. That means fewer surprises and faster fixes when issues appear.",
      "With data-backed insights, drivers and partners can plan maintenance, optimize routes, and protect asset value. The result is more reliable income and a better ownership journey.",
    ],
  },
  {
    slug: "marketplace-ecosystem",
    readTime: "6 Mins Read",
    date: "18 Nov 2025",
    title: "Inside our marketplace: the ecosystem behind every trip.",
    excerpt:
      "Partners, OEMs, and service providers working together to deliver a more reliable EV journey.",
    image: "/news4.jpg",
    content: [
      "The Chargeup marketplace brings OEMs, financiers, service providers, and charging operators together to reduce friction for drivers.",
      "By connecting these players, we shorten service cycles and improve vehicle uptime. Drivers can access the right help faster, without chasing multiple vendors.",
      "This ecosystem approach scales EV adoption while keeping the driver experience consistent and dependable.",
    ],
  },
  {
    slug: "transparent-ev-assets",
    readTime: "5 Mins Read",
    date: "06 Nov 2025",
    title: "Building trust in EV assets with transparent data flows.",
    excerpt:
      "A look at how Chargeup tracks lifecycle health and supports better decisions for owners and lenders.",
    image: "/news5.png",
    content: [
      "Trust is built on visibility. Chargeup tracks key lifecycle data to help owners, lenders, and partners understand EV health in real time.",
      "Transparent data flows reduce risk and improve resale confidence. It also helps drivers maintain vehicles proactively.",
      "With clearer insights, the entire ecosystem can make faster, smarter decisions.",
    ],
  },
  {
    slug: "earnings-grow-with-tech",
    readTime: "7 Mins Read",
    date: "24 Oct 2025",
    title: "Why driver earnings grow when tech removes friction.",
    excerpt:
      "A deep dive into the tools that help drivers maximize uptime and unlock higher income.",
    image: "/news7.png",
    content: [
      "Every hour saved on maintenance, charging, or paperwork is an hour that can be spent on the road. Chargeup reduces friction with clear workflows and fast support.",
      "The platform surfaces actionable alerts and nearby services so drivers can keep moving with less downtime.",
      "When friction drops, earnings rise. That is the heart of our driver-first design.",
    ],
  },
  {
    slug: "blueprint-for-ev-adoption",
    readTime: "4 Mins Read",
    date: "10 Oct 2025",
    title: "The Chargeup blueprint for faster EV adoption in India.",
    excerpt:
      "Policy, infrastructure, and financial innovation aligned for scale and sustainability.",
    image: "/news8.jpg",
    content: [
      "EV adoption scales fastest when finance, infrastructure, and service networks grow together. Chargeup aligns these layers in a single platform.",
      "By de-risking ownership and improving asset care, we help more drivers transition confidently.",
      "This blueprint supports scale without sacrificing reliability.",
    ],
  },
  {
    slug: "data-to-action",
    readTime: "5 Mins Read",
    date: "22 Sep 2025",
    title: "From data to action: improving battery performance at scale.",
    excerpt:
      "How analytics and predictive maintenance keep fleets healthy and costs under control.",
    image: "/hero2.png",
    content: [
      "Battery performance depends on early detection of issues. Chargeup uses analytics to flag anomalies before they become failures.",
      "Predictive maintenance reduces unexpected costs and keeps fleets running smoothly.",
      "The result is more reliable operations for drivers and partners alike.",
    ],
  },
];

export const defaultBlogPost = blogPosts[0];
