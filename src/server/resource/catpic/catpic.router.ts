import { TRPCError } from '@trpc/server';
import { createRouter } from '../../router/context';
import { getTwoSchema, voteSchema } from './catpic.schema';
import {
  castCatVotes,
  getCatPicLeaderboard,
  getTwoCatPics,
} from './catpic.service';

export const catPicRouter = createRouter()
  .query('getTwo', {
    input: getTwoSchema,
    async resolve({ input }) {
      const catPics = await getTwoCatPics(input);
      if (!catPics) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to retrieve cat pictures',
        });
      }
      return catPics;
    },
  })
  .mutation('vote', {
    input: voteSchema,
    async resolve({ input }) {
      const vote = await castCatVotes(input);
      if (!vote) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to place votes',
        });
      }
      return true;
    },
  })
  .query('leaderboard', {
    async resolve() {
      return await getCatPicLeaderboard();
    },
  });
