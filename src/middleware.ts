import type { MiddlewareHandler } from 'astro';
import i18next from 'i18next';

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  const url = new URL(request.url);

  const [, lang, ...rest] = url.pathname.split('/');

  if (!lang || !i18next.languages.includes(lang)) {
    const newPath = url.pathname.replace(/\/$/, '');
    return redirect(`/${i18next.language}${newPath}`, 302);
  }

  if (rest.length > 0) {
    return redirect(`/${lang}`, 302);
  }

  return next();
};