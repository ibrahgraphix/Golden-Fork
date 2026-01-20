import { MenuItem, Review, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
];

export const FEATURED_MENU: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Jumbo Prawns",
    description:
      "Ocean-fresh prawns marinated in local spices and garlic butter, served with coconut rice.",
    price: 35000,
    category: "Main",
    image:
      "https://images.unsplash.com/photo-1625943555419-56a2cb596640?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JpbGxlZCUyMHNocmltcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Zanzibar Spice Pilau",
    description:
      "Aromatic Tanzanian rice dish cooked with beef, ginger, and a blend of island spices.",
    price: 28000,
    category: "Main",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Mishkaki Skewers",
    description:
      "Tender beef chunks marinated overnight in a spicy blend and flame-grilled to perfection.",
    price: 22000,
    category: "Starter",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Golden Fork Special Platter",
    description:
      "A grand selection of our best grilled meats, seafood, and traditional side dishes.",
    price: 85000,
    category: "Main",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800",
  },
];

export const FULL_MENU_DATA = {
  "Starters & Light Bites": [
    {
      name: "Beef Mishkaki (3 Skewers)",
      price: 15000,
      desc: "Tender marinated beef cubes grilled over charcoal.",
    },
    {
      name: "Chicken Wings (6pcs)",
      price: 18000,
      desc: "Choice of BBQ, Spicy, or Garlic Ginger.",
    },
    {
      name: "Vegetable Samosas (4pcs)",
      price: 8000,
      desc: "Crispy pastry filled with spiced vegetables.",
    },
    {
      name: "Paneer Tikka",
      price: 20000,
      desc: "Grilled cottage cheese marinated in yogurt and spices.",
    },
  ],
  "BBQ & Grills": [
    {
      name: "Half Grilled Chicken",
      price: 25000,
      desc: "Flame-grilled chicken with choice of peri-peri or mild lemon.",
    },
    {
      name: "Mutton Chops",
      price: 32000,
      desc: "Succulent mutton chops marinated in secret Golden Fork spices.",
    },
    {
      name: "T-Bone Steak",
      price: 38000,
      desc: "Premium cut served with mushroom or black pepper sauce.",
    },
    {
      name: "Mix Grill Platter",
      price: 75000,
      desc: "A combination of beef, chicken, mutton, and seekh kebabs.",
    },
  ],
  "Tanzanian Specials": [
    {
      name: "Beef Pilau",
      price: 18000,
      desc: "Traditional aromatic rice cooked with tender beef.",
    },
    {
      name: "Fish Curry with Coconut",
      price: 22000,
      desc: "Fresh catch cooked in a rich, creamy coconut sauce.",
    },
    {
      name: "Kuku Paka",
      price: 20000,
      desc: "Traditional Swahili chicken curry with coconut milk.",
    },
    {
      name: "Ugali with Fried Fish",
      price: 18000,
      desc: "Served with local greens and mchuzi wa kuku.",
    },
  ],
  "International Favorites": [
    {
      name: "Beef Burger with Chips",
      price: 18000,
      desc: "Homemade patty with cheese, lettuce, and tomatoes.",
    },
    {
      name: "Chicken Alfredo Pasta",
      price: 24000,
      desc: "Creamy white sauce with grilled chicken breast.",
    },
    {
      name: "Fish and Chips",
      price: 20000,
      desc: "Golden fried fillet served with tartar sauce.",
    },
  ],
  "Beverages & Juices": [
    {
      name: "Fresh Passion Juice",
      price: 6000,
      desc: "Squeezed from local sun-ripened passion fruits.",
    },
    {
      name: "Mango Smoothie",
      price: 8000,
      desc: "Thick, creamy blend of fresh mangoes.",
    },
    {
      name: "Golden Fork Spiced Tea",
      price: 5000,
      desc: "Traditional black tea with cardamom and ginger.",
    },
    {
      name: "Cold Brew Coffee",
      price: 7000,
      desc: "Locally sourced Tanzanian coffee beans.",
    },
  ],
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Fatma Juma",
    rating: 5,
    comment:
      "The best Pilau in Dar! The service was impeccable and the atmosphere at the Palestina Hospital Rd branch is so welcoming.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    author: "David Miller",
    rating: 4,
    comment:
      "Great place for a business lunch. Quick service, professional staff, and the Grilled Prawns were exceptional.",
    date: "1 month ago",
  },
  {
    id: 3,
    author: "Aisha Mohammed",
    rating: 5,
    comment:
      "Ordered delivery through their website. It arrived hot and the packaging was excellent. Highly recommend the no-contact delivery.",
    date: "3 days ago",
  },
];
