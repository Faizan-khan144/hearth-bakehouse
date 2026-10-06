export const img = (id, w = 1400, q = 68) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`

export const hero = {
  image: '1509440159596-0249088772ff',
  eyebrow: 'Old market · since 2011',
  title: 'Baked before sunrise, sold until gone',
  note: 'One oven, three bakers, and a starter we have kept alive for fourteen years.',
}

export const tickerItems = [
  'Sourdough — out at 07:00',
  'Croissants — out at 07:30',
  'Cardamom buns — out at 08:15',
  'Rye loaf — out at 09:00',
  'Cinnamon knots — out at 10:30',
  'Focaccia — out at 11:00',
  'Seasonal tart — until it runs out',
]

export const stats = [
  { value: 340, suffix: '', label: 'Loaves out of the oven each morning' },
  { value: 36, suffix: ' h', label: 'Fermentation on every sourdough' },
  { value: 14, suffix: '', label: 'Years the starter has been alive' },
  { value: 3, suffix: '', label: 'Bakers, no machines that shape' },
]

export const menuGroups = [
  {
    id: 'bread',
    label: 'Bread',
    items: [
      {
        name: 'Country sourdough',
        price: '6.50',
        desc: 'Stone-milled wheat, 36-hour ferment, blistered crust.',
        id: '1509440159596-0249088772ff',
        badge: 'House loaf',
      },
      {
        name: 'Dark rye',
        price: '7.00',
        desc: 'Molasses, caraway and a dense crumb that keeps a week.',
        id: '1549931319-a545dcf3bc73',
      },
      {
        name: 'Seeded batard',
        price: '7.50',
        desc: 'Flax, sunflower and sesame pressed into the scored top.',
        id: '1608198093002-ad4e005484ec',
      },
    ],
  },
  {
    id: 'pastry',
    label: 'Viennoiserie',
    items: [
      {
        name: 'Butter croissant',
        price: '3.80',
        desc: 'Laminated over three days. Shatters properly.',
        id: '1555507036-ab1f4038808a',
        badge: 'Best seller',
      },
      {
        name: 'Cardamom bun',
        price: '4.20',
        desc: 'Hand-knotted, brushed with brown sugar syrup.',
        id: '1509365465985-25d11c17e812',
      },
      {
        name: 'Almond pain',
        price: '4.60',
        desc: 'Yesterday\'s croissant, today\'s frangipane.',
        id: '1517433670267-08bbd4be890f',
      },
    ],
  },
  {
    id: 'sweet',
    label: 'Cakes & tarts',
    items: [
      {
        name: 'Lemon tart',
        price: '5.50',
        desc: 'Torched meringue, short pastry, no shortcuts.',
        id: '1464349095431-e9a21285b5f3',
      },
      {
        name: 'Olive oil cake',
        price: '5.00',
        desc: 'Orange zest, sea salt, better on the second day.',
        id: '1486427944299-d1955d23e34d',
      },
      {
        name: 'Seasonal fruit tart',
        price: '6.00',
        desc: 'Whatever the market gave us that morning.',
        id: '1568254183919-78a4f43a2877',
        badge: 'Changes daily',
      },
    ],
  },
]

export const process = [
  {
    step: '01',
    title: 'Mix',
    text: 'Flour, water, salt and the starter. Nothing else goes in — no improvers, no accelerators.',
    icon: 'Wheat',
  },
  {
    step: '02',
    title: 'Ferment',
    text: 'Thirty-six hours cold. The dough does its work while the street sleeps.',
    icon: 'Timer',
  },
  {
    step: '03',
    title: 'Bake',
    text: 'Stone deck oven, first load at five. By seven the window is full and the queue is out the door.',
    icon: 'Flame',
  },
]

export const gallery = [
  { id: '1534432182912-63863115e106', alt: 'Loaves cooling on the rack', span: 'tall' },
  { id: '1519676867240-f03562e64548', alt: 'Hands shaping a boule', span: '' },
  { id: '1590080875515-8a3a8dc5735e', alt: 'Morning light on the counter', span: 'wide' },
  { id: '1495147466023-ac5c588e2e94', alt: 'The pastry case at opening', span: '' },
  { id: '1558961363-fa8fdf82db35', alt: 'Croissants straight from the oven', span: '' },
  { id: '1587241321921-91a834d6d191', alt: 'Flour-dusted worktop', span: 'wide' },
]

export const testimonials = [
  {
    quote:
      'I moved two streets away and still walk back for the country loaf. That should tell you everything.',
    name: 'Amina Yusuf',
    role: 'Regular since 2014',
    initials: 'AY',
  },
  {
    quote:
      'They sell out by half ten, which is annoying until you realise it means nothing sat around yesterday.',
    name: 'Daniel Rees',
    role: 'Saturday queue',
    initials: 'DR',
  },
  {
    quote:
      'The cardamom bun ruined every other cardamom bun for me. I have made peace with it.',
    name: 'Sofia Lindqvist',
    role: 'Neighbour',
    initials: 'SL',
  },
]

export const hours = [
  { day: 'Tuesday — Friday', time: '07:00 — 15:00' },
  { day: 'Saturday', time: '07:00 — 16:00' },
  { day: 'Sunday', time: '08:00 — 13:00' },
  { day: 'Monday', time: 'Closed — the ovens rest' },
]

export const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'The bakehouse', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
]