// src/app/api/keystatic/[...params]/route.ts
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../../keystatic.config';

const isDev = process.env.NODE_ENV === 'development';

export const { POST, GET } = isDev 
  ? makeRouteHandler({ config })
  : { POST: () => new Response('Not Found', { status: 404 }), GET: () => new Response('Not Found', { status: 404 }) };
