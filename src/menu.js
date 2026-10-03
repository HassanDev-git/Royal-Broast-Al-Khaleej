// Menu content is kept here so prices and product details are easy to update.
const productPhotos = {
  'Quarter Leg Broast': '/images/products/quarter-leg-broast.webp',
  'Quarter Chest Broast': '/images/products/quarter-chest-broast.webp',
  'Half Broast': '/images/products/half-broast.webp',
  'Full Broast': '/images/products/full-broast.webp',
  'Chezzy Mufaja': '/images/products/chezzy-mufaja.webp',
  'Mini Monster Burger': '/images/products/mini-monster-burger.webp',
  'Zinger Injected Shola': '/images/products/zinger-injected-shola.webp',
  'Beef Burger': '/images/products/beef-burger.webp',
  'Smash Burger': '/images/products/smash-burger.webp',
  'Bunless Burger': '/images/products/bunless-burger.webp',
  'Injected Chicken Nuggets': '/images/products/injected-chicken-nuggets.webp',
  'Injected Fish Nuggets': '/images/products/injected-fish-nuggets.webp',
  'Fish Nuggets': '/images/products/fish-nuggets.webp',
  'Garlic Dip': '/images/products/garlic-dip.webp',
  'Honey Dip': '/images/products/honey-dip.webp',
  'Khaleej Signature Dip': '/images/products/khaleej-signature-dip.webp',
  'Pina Colada': '/images/products/pina-colada.webp',
  'Strawberry Colada': '/images/products/strawberry-colada.webp',
  'Blueberry Colada': '/images/products/blueberry-colada.webp',
  'Peach Margarita': '/images/products/peach-margarita.webp',
  'Blueberry Margarita': '/images/products/blueberry-margarita.webp',
  'Strawberry Margarita': '/images/products/strawberry-margarita.webp',
  'Khaleej Special Colada': '/images/products/khaleej-special-colada.webp',
  'Mint Lemonade': '/images/products/mint-lemonade.webp',
  'Plain Lemonade': '/images/products/plain-lemonade.webp',
  'Fresh Lime': '/images/products/fresh-lime.webp',
  'Lemo Pani': '/images/products/lemo-pani.webp',
  'Mango Ice Shake': '/images/products/mango-ice-shake.webp',
  'Vanilla Ice Shake': '/images/products/vanilla-ice-shake.webp',
  'Chocolate Ice Shake': '/images/products/chocolate-ice-shake.webp',
  'Strawberry Ice Shake': '/images/products/strawberry-ice-shake.webp',
  'Oreo Ice Shake': '/images/products/oreo-ice-shake.webp',
  'KitKat Ice Shake': '/images/products/kitkat-ice-shake.webp',
  'Strawberry Boba Tea': '/images/products/strawberry-boba-tea.webp',
  'Blueberry Boba Tea': '/images/products/blueberry-boba-tea.webp',
  'Chocolate Boba Tea': '/images/products/chocolate-boba-tea.webp',
  'Taro Boba Tea': '/images/products/taro-boba-tea.webp',
};

const product = (category, name, price, description, badge = '') => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), category, name, price,
  description, badge, image: productPhotos[name] || imageFor(category),
});

export const categoryPhotos = {
  Broast: '/images/broast.jpg', Burgers: '/images/burger.jpg',
  'Nuggets Mashiya': '/images/nuggets.jpg', 'Extras / Dips': '/images/nuggets.jpg',
  Mocktails: '/images/mocktail.jpg', Lemonades: '/images/mocktail.jpg',
  'Ice Cream Shakes': '/images/shake.jpg', 'Boba Tea': '/images/boba.jpg',
};
function imageFor(category) { return categoryPhotos[category] || '/images/broast.jpg'; }

export const sections = [
  { id: 'broast', title: 'INJECTED BROAST', category: 'Broast', tagline: 'Juicy, Spicy, Royal!', bannerImage: '/images/banners/section-broast.webp', image: imageFor('Broast'), items: [
    product('Broast','Quarter Leg Broast',750,'1 Leg, 1 Thigh, French Fries, 1 Bun, 1 Sauce'),
    product('Broast','Quarter Chest Broast',850,'1 Chest, 1 Wing, French Fries, 1 Bun, 1 Sauce'),
    product('Broast','Half Broast',1450,'1 Leg, 1 Thigh, 1 Chest, 1 Wing, French Fries, 2 Buns, 2 Sauces','Bestseller'),
    product('Broast','Full Broast',2690,'2 Legs, 2 Thighs, 2 Chests, 2 Wings, French Fries, 4 Buns, 4 Sauces'),
    product('Broast','Chezzy Mufaja',1190,'With fries & 1 sauce'),
  ]},
  { id: 'burgers', title: 'INJECTED BURGERS', category: 'Burgers', tagline: 'Stacked, Juicy & Loaded!', bannerImage: '/images/banners/section-burgers.webp', image: imageFor('Burgers'), items: [
    product('Burgers','Mini Monster Burger',470,'All served with fries.'), product('Burgers','Zinger Injected Shola',690,'All served with fries.','Bestseller'), product('Burgers','Beef Burger',950,'All served with fries.'), product('Burgers','Smash Burger',1250,'All served with fries.'), product('Burgers','Bunless Burger',1490,'All served with fries.'),
  ]},
  { id: 'nuggets', title: 'NUGGETS MASHIYA', category: 'Nuggets Mashiya', tagline: 'Bite-sized crunch!', bannerImage: '/images/banners/section-nuggets.webp', image: imageFor('Nuggets Mashiya'), items: [
    product('Nuggets Mashiya','Injected Chicken Nuggets',690,'6 pcs + Fries','Bestseller'), product('Nuggets Mashiya','Injected Fish Nuggets',890,'3 pcs + Fries'), product('Nuggets Mashiya','Fish Nuggets',790,'Plus Fries'),
  ]},
  { id: 'dips', title: 'EXTRA DIPS & SAUCES', category: 'Extras / Dips', tagline: 'Dip it your way!', bannerImage: '/images/banners/section-dips.webp', image: imageFor('Extras / Dips'), items: [product('Extras / Dips','Garlic Dip',60,'Creamy garlic sauce'),product('Extras / Dips','Honey Dip',100,'Sweet and smooth'),product('Extras / Dips','Khaleej Signature Dip',120,'Our royal house sauce','Bestseller')]},
  { id: 'mocktails', title: 'MOCKTAILS', category: 'Mocktails', tagline: 'Chill, Sip, Repeat!', bannerImage: '/images/banners/section-mocktails.webp', image: imageFor('Mocktails'), items: ['Pina Colada','Strawberry Colada','Blueberry Colada','Peach Margarita','Blueberry Margarita','Strawberry Margarita'].map(n=>product('Mocktails',n,400,'A refreshing royal blend')).concat(product('Mocktails','Khaleej Special Colada',550,'A refreshing royal blend','Bestseller'))},
  { id: 'lemonades', title: 'LEMONADES', category: 'Lemonades', tagline: 'Fresh & Zesty!', bannerImage: '/images/banners/section-lemonades.webp', image: imageFor('Lemonades'), items: ['Mint Lemonade|280','Plain Lemonade|200','Fresh Lime|150','Lemo Pani|150'].map(s=>{const [n,p]=s.split('|');return product('Lemonades',n,+p,'Freshly made and zesty')})},
  { id: 'shakes', title: 'ICE CREAM SHAKES', category: 'Ice Cream Shakes', tagline: 'Thick, Cold & Creamy!', bannerImage: '/images/banners/section-shakes.webp', image: imageFor('Ice Cream Shakes'), items: ['Mango Ice Shake|400','Vanilla Ice Shake|400','Chocolate Ice Shake|400','Strawberry Ice Shake|400','Oreo Ice Shake|450','KitKat Ice Shake|450'].map(s=>{const [n,p]=s.split('|');return product('Ice Cream Shakes',n,+p,'Thick, cold and creamy')})},
  { id: 'boba', title: 'BOBA TEA', category: 'Boba Tea', tagline: 'Pop the Bubbles!', bannerImage: '/images/banners/section-boba.webp', image: imageFor('Boba Tea'), items: ['Strawberry Boba Tea','Blueberry Boba Tea','Chocolate Boba Tea','Taro Boba Tea'].map(n=>product('Boba Tea',n,500,'Iced tea with chewy tapioca pearls',n.startsWith('Strawberry')?'Bestseller':''))},
  { id: 'cold-coffee', title: 'COLD COFFEE', category: 'Cold Coffee', tagline: 'Coming soon to the menu!', bannerImage: '/images/banners/section-cold-coffee.webp', image: '/images/shake.jpg', items: [] },
];

export const popular = [sections[0].items[2], sections[1].items[1], sections[2].items[0], sections[7].items[0]];
export const allProducts = sections.flatMap(s => s.items);
