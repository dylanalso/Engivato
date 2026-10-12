import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import config from '../../../../../keystatic.config';

const handler = makeGenericAPIRouteHandler({ config }, {
  slugEnvName: 'NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG',
});

async function routeHandler(request: Request) {
  const { body, headers, status } = await handler(request);
  return new Response(body as BodyInit, { status, headers });
}

export const GET = routeHandler;
export const POST = routeHandler;

export function generateStaticParams() {
  return [{ params: ['keystatic'] }];
}
