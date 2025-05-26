import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  const url = new URL(request.url);

  // Allow only root path "/"
  if (url.pathname !== '/') {
    return redirect('/', 302);
  }

  return next();
};
