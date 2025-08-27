import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const url = new URL(request.url);
  const allowedPaths = ['/', '/sitemap.xml'];

  if (!allowedPaths.includes(url.pathname)) {
    return new Response('Not Found', { status: 404 });
  }

  return next();
};
