import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const allowedPaths = ['/', '/sitemap.xml', '/robots.txt'];

  if (!allowedPaths.includes(url.pathname)) {
    return redirect('/', 302);
  }

  return next();
};