export const product = [
  {
    id: 1,
    name: "Nova Pro Headphones",
    category: "Audio",
    price: 249,
    oldPrice: 299,
    image: "/img/Headphones.png",
    badge: "BESTSELLER",
    description:
      "Premium wireless headphones with immersive sound and comfortable design.",
  },
  {
    id: 2,
    name: "Orbit Smartwatch",
    category: "Wearables",
    price: 189,
    oldPrice: 229,
    image: "/img/Smartwatch.webp",
    badge: "NEW",
    description:
      "A modern smartwatch for tracking daily activity and staying connected.",
  },
  {
    id: 3,
    name: "Pulse Wireless Earbuds",
    category: "Audio",
    price: 129,
    oldPrice: 159,
    image: "/img/Earbuds.png",
    badge: "",
    description:
      "Compact wireless earbuds with clear sound for music and calls.",
  },
  {
    id: 4,
    name: "Nova Ultra Smartphone",
    category: "Smartphones",
    price: 799,
    oldPrice: 899,
    image: "/img/Smartphone.png",
    badge: "POPULAR",
    description:
      "A sleek smartphone designed for everyday performance and entertainment.",
  },
  {
    id: 5,
    name: "Nova Mechanical Keyboard",
    category: "Accessories",
    price: 119,
    oldPrice: 149,
    image: "/img/Gaming%20Keyboard.webp",
    badge: "FEATURED",
    description:
      "A mechanical keyboard with responsive keys for work and gaming.",
  },
  {
    id: 6,
    name: "Nova Gaming Mouse",
    category: "Accessories",
    price: 149,
    oldPrice: 179,
    image: "/img/Gaming%20Mouse.webp",
    badge: "GAMING",
    description:
      "A precision gaming mouse built for comfortable control and accurate movement.",
  },
  {
    id: 7,
    name: "Nova Smart Speaker",
    category: "Audio",
    price: 99,
    oldPrice: 129,
    image: "/img/Smart%20Speaker.webp",
    badge: "NEW",
    description:
      "A compact smart speaker for enjoying music in your home.",
  },
  {
    id: 8,
    name: "Nova Performance Laptop",
    category: "Computers",
    price: 999,
    oldPrice: 1199,
    image: "/img/Laptop.png",
    badge: "FEATURED",
    description:
      "A versatile laptop for productivity, multitasking, and everyday computing.",
  },
];

export const categories = [
  { id: 1, name: "Audio", icon: "🎧" },
  { id: 2, name: "Smartphones", icon: "📱" },
  { id: 3, name: "Wearables", icon: "⌚" },
  { id: 4, name: "Accessories", icon: "⌨️" },
  { id: 5, name: "Computers", icon: "💻" },
].map((category) => ({
  ...category,
  count: `${product.filter((item) => item.category === category.name).length} Products`,
}));