export const SOCIAL_LINKS = [
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/3xc.cz/' },
  // TODO: Add proper link
  // {
  //   ariaLabel: 'Linkedin',
  //   icon: 'tabler:brand-linkedin',
  //   href: '#',
  // },
];

export const NAV_LINKS_MAP = {
  HOME: { text: undefined, href: '#home' },
  ABOUT: { text: 'navigation.about', href: '#about' },
  SERVICES: { text: 'navigation.services', href: '#services' },
  REFERENCES: { text: 'navigation.references', href: '#references' },
  TEAM: { text: 'navigation.team', href: '#team' },
  DNA: { text: 'navigation.dna', href: '#dna' },
  CONTACT: { text: undefined, href: '#contact' },
};

export const NAV_LINKS = Object.values(NAV_LINKS_MAP).filter((item) => item.text !== undefined);
