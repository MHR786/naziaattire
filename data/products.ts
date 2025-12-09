export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
}

export const products: Product[] = [
  // Lawn Suits
  {
    id: 1,
    name: "Premium Embroidered Lawn Suit - Pink Blossom",
    price: 4500,
    originalPrice: 5500,
    image: "/images/lawn-pink-embroidered.jpg",
    category: "lawn-suits",
    rating: 4.8,
    reviews: 124,
    description:
      "Beautiful 3-piece lawn suit with intricate embroidery work. Perfect for summer occasions with comfortable cotton fabric and elegant design.",
  },
  {
    id: 2,
    name: "Floral Print Lawn Collection - Garden Fresh",
    price: 3200,
    image: "/images/lawn-floral-print.jpg",
    category: "lawn-suits",
    rating: 4.6,
    reviews: 89,
    description:
      "Vibrant floral printed lawn suit with matching dupatta. Ideal for casual wear and summer gatherings.",
  },
  {
    id: 3,
    name: "Classic White Lawn Suit with Gold Work",
    price: 5200,
    image: "/images/lawn-white-gold.jpg",
    category: "lawn-suits",
    rating: 4.9,
    reviews: 156,
    description:
      "Elegant white lawn suit featuring delicate gold embroidery. Perfect for formal occasions and celebrations.",
  },
  {
    id: 4,
    name: "Digital Print Lawn Suit - Modern Motifs",
    price: 2800,
    originalPrice: 3500,
    image: "/images/lawn-digital-print.webp",
    category: "lawn-suits",
    rating: 4.5,
    reviews: 73,
    description:
      "Contemporary digital print lawn suit with modern geometric patterns. Comfortable and stylish for everyday wear.",
  },
  {
    id: 5,
    name: "Pastel Lawn Collection - Mint Green",
    price: 3800,
    image: "/images/lawn-mint-green.webp",
    category: "lawn-suits",
    rating: 4.7,
    reviews: 92,
    description:
      "Soft mint green lawn suit with subtle embroidery. Perfect for spring and summer occasions.",
  },
  {
    id: 6,
    name: "Traditional Block Print Lawn Suit",
    price: 4200,
    image: "/images/lawn-block-print.jpg",
    category: "lawn-suits",
    rating: 4.4,
    reviews: 201,
    description:
      "Authentic block print lawn suit showcasing traditional Pakistani craftsmanship. Timeless design with cultural heritage.",
  },
  {
    id: 7,
    name: "Luxury Lawn Suit with Mirror Work",
    price: 6500,
    originalPrice: 7800,
    image: "/images/lawn-mirror-work.jpg", // Note: This file was not in the screenshots
    category: "lawn-suits",
    rating: 4.6,
    reviews: 67,
    description:
      "Premium lawn suit adorned with intricate mirror work and embroidery. Perfect for special occasions and festivities.",
  },
  {
    id: 8,
    name: "Summer Breeze Lawn Collection",
    price: 3500,
    image: "/images/lawn-summer-breeze.webp",
    category: "lawn-suits",
    rating: 4.3,
    reviews: 88,
    description:
      "Light and airy lawn suit perfect for hot summer days. Features breathable fabric and elegant design.",
  },

  // Formal Wear
  {
    id: 9,
    name: "Royal Velvet Formal Dress - Burgundy",
    price: 12500,
    image: "/images/formal-burgundy-velvet.webp",
    category: "formal-wear",
    rating: 4.5,
    reviews: 134,
    description:
      "Luxurious velvet formal dress with heavy embellishments. Perfect for weddings and formal events.",
  },
  {
    id: 10,
    name: "Silk Formal Suit with Zardozi Work",
    price: 15800,
    originalPrice: 18500,
    image: "/images/formal-silk-zardozi.webp",
    category: "formal-wear",
    rating: 4.4,
    reviews: 76,
    description:
      "Exquisite silk formal suit featuring traditional zardozi embroidery. Ideal for grand celebrations.",
  },
  {
    id: 11,
    name: "Chiffon Party Dress - Rose Gold",
    price: 8900,
    image: "/images/formal-chiffon-rosegold.webp",
    category: "formal-wear",
    rating: 4.6,
    reviews: 58,
    description:
      "Elegant chiffon party dress in rose gold with delicate beadwork. Perfect for evening events.",
  },
  {
    id: 12,
    name: "Formal Sharara Set - Navy Blue",
    price: 11200,
    image: "/images/formal-sharara-navy.jpg",
    category: "formal-wear",
    rating: 4.7,
    reviews: 41,
    description:
      "Traditional sharara set in navy blue with gold embroidery. Classic formal wear for special occasions.",
  },
  {
    id: 13,
    name: "Designer Anarkali Suit - Emerald Green",
    price: 13500,
    originalPrice: 16000,
    image: "/images/formal-anarkali-green.jpg",
    category: "formal-wear",
    rating: 4.8,
    reviews: 93,
    description:
      "Stunning anarkali suit in emerald green with intricate embroidery. Perfect for formal gatherings.",
  },
  {
    id: 14,
    name: "Formal Lehenga Choli - Maroon",
    price: 18500,
    image: "/images/formal-lehenga-maroon.jpg",
    category: "formal-wear",
    rating: 4.5,
    reviews: 112,
    description:
      "Traditional lehenga choli in rich maroon with heavy embellishments. Ideal for weddings and celebrations.",
  },

  // Casual Wear
  {
    id: 15,
    name: "Cotton Kurta with Palazzo - Sky Blue",
    price: 2500,
    image: "/images/casual-kurta-palazzo-skyblue.jpg",
    category: "casual-wear",
    rating: 4.4,
    reviews: 85,
    description:
      "Comfortable cotton kurta with matching palazzo pants. Perfect for daily wear and casual outings.",
  },
  {
    id: 16,
    name: "Printed Kurti with Straight Pants",
    price: 1800,
    image: "/images/casual-printed-kurti-pants.webp",
    category: "casual-wear",
    rating: 4.9,
    reviews: 67,
    description:
      "Trendy printed kurti with straight pants. Comfortable and stylish for everyday wear.",
  },
  {
    id: 17,
    name: "Casual Lawn Kurti - Floral Print",
    price: 1500,
    originalPrice: 2000,
    image: "/images/casual-lawn-kurti-floral.jpg",
    category: "casual-wear",
    rating: 4.7,
    reviews: 156,
    description:
      "Light and breezy lawn kurti with beautiful floral prints. Perfect for summer casual wear.",
  },
  {
    id: 18,
    name: "Cotton Shirt with Trouser Set",
    price: 2200,
    image: "/images/casual-cotton-shirt-trouser.jpg",
    category: "casual-wear",
    rating: 4.5,
    reviews: 78,
    description:
      "Simple yet elegant cotton shirt with matching trousers. Ideal for office and casual wear.",
  },
  {
    id: 19,
    name: "Denim Kurti with Leggings",
    price: 1900,
    image: "/images/casual-denim-kurti.webp",
    category: "casual-wear",
    rating: 4.3,
    reviews: 94,
    description:
      "Modern denim kurti with comfortable leggings. Perfect fusion of traditional and contemporary style.",
  },

  // Party Wear
  {
    id: 20,
    name: "Sequined Party Dress - Black & Gold",
    price: 7500,
    image: "/images/party-sequin-black-gold.jpg",
    category: "party-wear",
    rating: 4.6,
    reviews: 123,
    description:
      "Glamorous sequined party dress in black and gold. Perfect for cocktail parties and celebrations.",
  },
  {
    id: 21,
    name: "Designer Party Suit - Royal Purple",
    price: 9800,
    image: "/images/party-designer-purple.jpg",
    category: "party-wear",
    rating: 4.8,
    reviews: 87,
    description:
      "Elegant party suit in royal purple with intricate beadwork. Ideal for evening parties and events.",
  },
  {
    id: 22,
    name: "Cocktail Dress with Cape - Wine Red",
    price: 6800,
    originalPrice: 8500,
    image: "/images/party-cocktail-cape-wine.jpg",
    category: "party-wear",
    rating: 4.6,
    reviews: 102,
    description:
      "Stylish cocktail dress with attached cape in wine red. Perfect for formal parties and gatherings.",
  },

  // Winter Collection
  {
    id: 23,
    name: "Wool Shawl Suit - Cream & Brown",
    price: 8500,
    image: "/images/winter-wool-shawl.jpg",
    category: "winter-collection",
    rating: 4.4,
    reviews: 145,
    description:
      "Warm wool suit with matching shawl in cream and brown. Perfect for winter occasions and cold weather.",
  },
  {
    id: 24,
    name: "Pashmina Winter Suit - Charcoal Grey",
    price: 12000,
    image: "/images/winter-pashmina-grey.webp",
    category: "winter-collection",
    rating: 4.7,
    reviews: 67,
    description:
      "Luxurious pashmina winter suit in charcoal grey with elegant embroidery. Ideal for winter formal events.",
  },
  // --- Wedding Wear (Updated with Exact Filenames) ---
  {
    id: 25,
    name: "Royal Red Bridal Lehenga - Baraat Edition",
    price: 185000,
    originalPrice: 195000,
    image: "/images/Royal Red Bridal Lehenga.jpg",
    category: "wedding-wear",
    rating: 5.0,
    reviews: 42,
    description:
      "Traditional heavy embroidered red lehenga with intricate zardozi work, perfect for the main Baraat ceremony.",
  },
  {
    id: 26,
    name: "Ivory & Gold Nikkah Gharara",
    price: 95000,
    image: "/images/Ivory Nikkah Gharara.jpg",
    category: "wedding-wear",
    rating: 4.9,
    reviews: 35,
    description:
      "Elegant ivory gharara with delicate gold embroidery and net dupatta, designed for a sophisticated Nikkah look.",
  },
  {
    id: 27,
    name: "Pastel Peach Walima Maxi Dress",
    price: 165000,
    originalPrice: 172000,
    image: "/images/Pastel Walima Maxi.jpg",
    category: "wedding-wear",
    rating: 4.8,
    reviews: 28,
    description:
      "Soft pastel peach maxi dress with silver stone work, offering a modern and dreamy look for the Walima reception.",
  },
  {
    id: 28,
    name: "Vibrant Yellow Mehndi Sharara",
    price: 135000,
    image: "/images/Mehndi Sharara (Yellow).jpg",
    category: "wedding-wear",
    rating: 4.7,
    reviews: 55,
    description:
      "Bright yellow and green sharara set with gota work, lightweight and perfect for Mehndi festivities.",
  },
  {
    id: 29,
    name: "Maroon Velvet Winter Bridal Suit",
    price: 85000,
    image: "/images/Maroon Velvet Bridal.jpg",
    category: "wedding-wear",
    rating: 4.9,
    reviews: 19,
    description:
      "Luxurious maroon velvet bridal suit with antique gold embroidery, ideal for winter weddings.",
  },
  {
    id: 30,
    name: "Gold Tissue Zardozi Formal",
    price: 148000,
    originalPrice: 155000,
    image: "/images/Gold Tissue Zardozi Suit.jpg",
    category: "wedding-wear",
    rating: 4.6,
    reviews: 24,
    description:
      "Classic gold tissue suit with heavy zardozi handwork, a timeless addition to any bridal trousseau.",
  },
  {
    id: 31,
    name: "Silver Mist Walima Gown",
    price: 97000,
    image: "/images/Silver Mist Walima Gown.jpg",
    category: "wedding-wear",
    rating: 4.9,
    reviews: 31,
    description:
      "Contemporary silver-grey gown with crystal embellishments and a long trail, perfect for a grand reception.",
  },
  {
    id: 32,
    name: "Rust & Orange Mehndi Lehenga",
    price: 68000,
    originalPrice: 88000,
    image: "/images/Rust & Orange Mehndi Lehenga.jpg",
    category: "wedding-wear",
    rating: 4.8,
    reviews: 45,
    description:
      "A vibrant rust and orange multicolor lehenga with mirror work, capturing the true spirit of a traditional Mehndi.",
  },
  {
    id: 33,
    name: "Emerald Green Regal Pishwas",
    price: 78000,
    image: "/images/Emerald Green Pishwas.jpg",
    category: "wedding-wear",
    rating: 4.7,
    reviews: 22,
    description:
      "Floor-length emerald green pishwas with traditional gold embroidery, suitable for Shendi or reception events.",
  },
  {
    id: 34,
    name: "Regal Red Banarasi Saree",
    price: 59400,
    image: "/images/Regal Red Banarasi Saree.jpg",
    category: "wedding-wear",
    rating: 4.8,
    reviews: 18,
    description:
      "Timeless red Banarasi silk saree with heavy gold borders, a classic choice for post-wedding dinners.",
  },
];