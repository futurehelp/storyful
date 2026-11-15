export type NavItem = { label: string; href: string; children?: NavItem[] };
export type HeroSlide = { eyebrow: string; title: string; description: string; image: string; href: string; cta: string };
export type Service = { number: string; title: string; description: string; image: string; href: string };
export type Testimonial = { quote: string; author: string; detail: string; image: string };

export const navigation: NavItem[] = [
  { label: "Intelligence", href: "#services", children: [{ label: "Risk", href: "#services" }, { label: "Reputation", href: "#services" }, { label: "Influence", href: "#services" }] },
  { label: "Verified video", href: "#about", children: [{ label: "Newswire", href: "#about" }, { label: "Commercial licensing", href: "#about" }, { label: "Monetize your videos", href: "#about" }] },
  { label: "Resources", href: "#partners" },
  { label: "About", href: "#about" },
  { label: "Contact us", href: "#contact" },
];

export const heroSlides: HeroSlide[] = [
  { eyebrow: "REPUTATION INTELLIGENCE", title: "Verified. Contextualized. Decision-grade.", description: "Turn fast-moving online signals into the clarity leaders need to protect trust, manage risk, and move with confidence.", image: "/images/source/deciphering.avif", href: "#services", cta: "Explore intelligence" },
  { eyebrow: "VERIFIED VIDEO", title: "The truth behind the moment.", description: "Find, verify, clear, and publish the eyewitness video that makes the story matter.", image: "/images/source/verified-video.avif", href: "#about", cta: "Explore verified video" },
  { eyebrow: "STORYFUL / FROM DOW JONES", title: "See what others miss.", description: "Editorial rigor and modern technology for brands, institutions, and newsrooms under constant scrutiny.", image: "/images/source/newswire.png", href: "#contact", cta: "Talk to Storyful" },
];

export const services: Service[] = [
  { number: "01", title: "Risk intelligence", description: "Anticipate emerging issues, understand the voices shaping them, and act before a signal becomes a crisis.", image: "/images/source/drone.avif", href: "#contact" },
  { number: "02", title: "Reputation intelligence", description: "Measure how people experience your brand in the real world, then build the context to respond intelligently.", image: "/images/source/deciphering.avif", href: "#contact" },
  { number: "03", title: "Newswire", description: "Source and license verified eyewitness video with the editorial confidence to publish it everywhere.", image: "/images/source/newswire.png", href: "#contact" },
  { number: "04", title: "Commercial licensing", description: "Unlock the value of real moments through rights-cleared content built for modern campaigns and platforms.", image: "/images/source/verified-by.avif", href: "#contact" },
];

export const testimonials: Testimonial[] = [
  { quote: "Storyful gives our teams the confidence to move quickly without losing editorial or brand trust.", author: "Global newsroom leader", detail: "Storyful partner", image: "/images/source/newswire.png" },
  { quote: "The difference is context. Storyful helps us understand what is happening and what matters next.", author: "Communications director", detail: "Reputation intelligence client", image: "/images/source/deciphering.avif" },
];

export const partners = [
  ["Google", "/images/source/google.avif"],
  ["GSK", "/images/source/gsk.png"],
  ["Pinterest", "/images/source/pinterest.avif"],
  ["ABC News", "/images/source/newswire.png"],
  ["The Wall Street Journal", "/images/source/verified-by.avif"],
] as const;
