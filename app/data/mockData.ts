export type Service = {
  id: number;
  name: string;
  description: string;
  icon: string;
};

export type Professional = {
  id: number;
  name: string;
  service: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  badges: string[];
  location: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  service: string;
};

export const services: Service[] = [
  { id: 1, name: "Plumbing", description: "Fix leaks, install fixtures, and handle urgent repairs.", icon: "🚰" },
  { id: 2, name: "House Cleaning", description: "Deep cleans, move-in/move-out, and recurring visits.", icon: "🧹" },
  { id: 3, name: "Electrical", description: "Troubleshooting, new outlets, lighting, and rewiring.", icon: "💡" },
  { id: 4, name: "Painting", description: "Interior refreshes, exterior prep, and accent walls.", icon: "🎨" },
  { id: 5, name: "Moving", description: "Local moves, packing help, and furniture assembly.", icon: "📦" },
  { id: 6, name: "AC & Heating", description: "Tune-ups, repairs, and smart thermostat installs.", icon: "❄️" },
  { id: 7, name: "Landscaping", description: "Lawn care, seasonal cleanups, and patio projects.", icon: "🌿" },
  { id: 8, name: "Handyman", description: "Small fixes, mounting, caulking, and weekend projects.", icon: "🛠️" },
  { id: 9, name: "Roofing", description: "Leak fixes, inspections, and shingle replacements.", icon: "🏠" },
  { id: 10, name: "Flooring", description: "Hardwood install, refinishing, and tile work.", icon: "🪵" },
  { id: 11, name: "Carpet Cleaning", description: "Steam cleaning, pet treatments, and stain removal.", icon: "🧴" },
  { id: 12, name: "Window Cleaning", description: "Interior/exterior washes and streak-free finishes.", icon: "🪟" }
];

export const featuredProfessionals: Professional[] = [
  {
    id: 1,
    name: "Harper & Co. Plumbing",
    service: "Plumbing",
    rating: 4.9,
    reviewCount: 248,
    startingPrice: "$85",
    badges: ["Top Rated", "Same-day visits"],
    location: "Nearby • 0.8 mi"
  },
  {
    id: 2,
    name: "Brightside Cleaning Crew",
    service: "House Cleaning",
    rating: 4.8,
    reviewCount: 312,
    startingPrice: "$120",
    badges: ["Green products", "Quick response"],
    location: "Serving your area"
  },
  {
    id: 3,
    name: "North Star Electric",
    service: "Electrical",
    rating: 5.0,
    reviewCount: 189,
    startingPrice: "$95",
    badges: ["Licensed & insured", "Evening hours"],
    location: "Nearby • 1.4 mi"
  },
  {
    id: 4,
    name: "Peak Painting Studio",
    service: "Painting",
    rating: 4.9,
    reviewCount: 174,
    startingPrice: "$150",
    badges: ["Color consult", "Top Rated"],
    location: "Citywide"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Danielle M.",
    quote: "They matched me with three pros in under an hour. I booked the same day.",
    service: "House Cleaning"
  },
  {
    name: "Marcus J.",
    quote: "Clear reviews and upfront pricing made hiring a breeze.",
    service: "Electrical"
  },
  {
    name: "Priya K.",
    quote: "Loved the quick responses—felt like a concierge for home projects.",
    service: "Painting"
  },
  {
    name: "Logan R.",
    quote: "The pro arrived on time, explained everything, and the work was spotless.",
    service: "Plumbing"
  }
];

export const howItWorksSteps = [
  { title: "Post your job", description: "Tell us what you need, share timing, and add a couple photos.", icon: "📝" },
  { title: "Get matched with pros", description: "We surface trusted pros nearby with the right expertise.", icon: "🤝" },
  { title: "Hire with confidence", description: "Message, compare quotes, and book when you're ready.", icon: "✅" }
];
