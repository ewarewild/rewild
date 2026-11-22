// Norwegian is the main language and lives at the plain URLs (/, /contact ...).
// English is the same page under /en (/en/, /en/contact ...).
export type Lang = 'no' | 'en';

// '/contact' -> '/en/contact' for English; also works with hashes, '/#events' -> '/en/#events'
export const localePath = (lang: Lang, path: string) => (lang === 'en' ? `/en${path}` : path);

export const langFromPath = (pathname: string): Lang => (/^\/en(\/|$)/.test(pathname) ? 'en' : 'no');

// The same page in the other language
export const otherLangPath = (pathname: string) => {
  if (langFromPath(pathname) === 'en') return pathname.replace(/^\/en/, '') || '/';
  return `/en${pathname}`;
};

// Pages that only exist in Norwegian (no language switch, no hreflang)
export const norwegianOnly = (pathname: string) => /^\/bedrift\/?$/.test(pathname);
