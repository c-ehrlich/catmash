// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { catPicRouter } from '../resource/catpic/catpic.router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('catpic.', catPicRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
