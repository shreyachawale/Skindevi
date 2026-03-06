export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  usage: string;
  suitableFor: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'radiance-serum',
    name: 'Kumkumadi Radiance Serum',
    category: 'serums',
    description: 'A luxurious blend of saffron and rare Ayurvedic herbs that illuminates and evens skin tone. This ancient formulation brings out your natural radiance.',
    ingredients: ['Saffron', 'Sandalwood', 'Turmeric', 'Almond Oil', 'Lotus Extract'],
    usage: 'Apply 2-3 drops on cleansed face and neck. Gently massage in upward circular motions. Use morning and evening.',
    suitableFor: 'All skin types, especially dull and uneven skin tone',
    image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'anti-aging-serum',
    name: 'Ashwagandha Anti-Aging Serum',
    category: 'serums',
    description: 'Powered by the adaptogenic properties of Ashwagandha, this serum helps reduce fine lines and restore youthful vitality to mature skin.',
    ingredients: ['Ashwagandha', 'Rose', 'Gotu Kola', 'Jojoba Oil', 'Vitamin E'],
    usage: 'Apply on clean skin before moisturizer. Use twice daily for best results.',
    suitableFor: 'Mature skin, fine lines, loss of elasticity',
    image: 'https://images.pexels.com/photos/6621496/pexels-photo-6621496.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'bhringraj-hair-oil',
    name: 'Bhringraj Fortifying Hair Oil',
    category: 'hair-oils',
    description: 'The king of herbs for hair, Bhringraj promotes hair growth, prevents premature graying, and strengthens from root to tip.',
    ingredients: ['Bhringraj', 'Amla', 'Brahmi', 'Coconut Oil', 'Sesame Oil'],
    usage: 'Warm the oil slightly. Massage into scalp and hair. Leave for minimum 1 hour or overnight. Wash with mild shampoo.',
    suitableFor: 'Hair fall, premature graying, thinning hair',
    image: 'https://images.pexels.com/photos/7755404/pexels-photo-7755404.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'amla-hair-oil',
    name: 'Amla Nourishing Hair Oil',
    category: 'hair-oils',
    description: 'Rich in Vitamin C, this nourishing oil strengthens hair follicles, adds shine, and promotes healthy hair growth.',
    ingredients: ['Amla', 'Curry Leaves', 'Fenugreek', 'Almond Oil', 'Hibiscus'],
    usage: 'Apply generously to scalp and hair. Massage for 5-10 minutes. Leave for 2 hours minimum. Rinse thoroughly.',
    suitableFor: 'Dry hair, damaged hair, lack of shine',
    image: 'https://images.pexels.com/photos/7755401/pexels-photo-7755401.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'ubtan-powder-facewash',
    name: 'Ubtan Powder Face Wash',
    category: 'powder-facewash',
    description: 'A traditional blend of cleansing herbs and grains that gently exfoliates while maintaining skin\'s natural moisture balance.',
    ingredients: ['Chickpea Flour', 'Turmeric', 'Sandalwood', 'Rose Petal Powder', 'Neem'],
    usage: 'Mix a small amount with water or milk to form a paste. Massage gently on damp face. Rinse with lukewarm water.',
    suitableFor: 'All skin types, gentle daily cleansing',
    image: 'https://images.pexels.com/photos/7755396/pexels-photo-7755396.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'rose-toner',
    name: 'Rose & Vetiver Hydrating Toner',
    category: 'toner',
    description: 'A soothing alcohol-free toner that balances pH, tightens pores, and refreshes skin with the essence of pure rose and cooling vetiver.',
    ingredients: ['Rose Water', 'Vetiver', 'Aloe Vera', 'Tulsi', 'Glycerin'],
    usage: 'Apply to cleansed face using a cotton pad or spray directly. Follow with serum and moisturizer.',
    suitableFor: 'All skin types, sensitive skin, enlarged pores',
    image: 'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'vitamin-c-serum',
    name: 'Amalaki Vitamin C Serum',
    category: 'serums',
    description: 'Natural Vitamin C from Amla brightens, evens skin tone, and provides powerful antioxidant protection.',
    ingredients: ['Amla Extract', 'Licorice', 'Manjistha', 'Hyaluronic Acid', 'Orange Peel'],
    usage: 'Apply 2-3 drops after cleansing. Use in morning routine before sunscreen.',
    suitableFor: 'Dull skin, pigmentation, antioxidant protection',
    image: 'https://images.pexels.com/photos/7755508/pexels-photo-7755508.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'neem-facewash',
    name: 'Neem Purifying Face Wash',
    category: 'powder-facewash',
    description: 'Harness the purifying power of Neem to cleanse deeply, combat blemishes, and maintain clear, healthy skin.',
    ingredients: ['Neem Leaf', 'Tulsi', 'Multani Mitti', 'Tea Tree', 'Aloe Vera'],
    usage: 'Mix with water to create paste. Massage onto wet face in circular motions. Rinse thoroughly.',
    suitableFor: 'Oily skin, acne-prone skin, blemishes',
    image: 'https://images.pexels.com/photos/7755398/pexels-photo-7755398.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
