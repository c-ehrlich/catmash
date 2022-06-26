import { TRPCError } from '@trpc/server';
import { createRouter } from '../../router/context';
import { getCatPicsByIdArray } from './catpic.service';
import { getTwoRandomNumbers } from './catpic.utils';

export const catPicRouter = createRouter().query('getTwo', {
  async resolve() {
    const ids = getTwoRandomNumbers();
    const catPics = await getCatPicsByIdArray(ids);
    if (!catPics) {
      console.error('ERROR');
      console.log(JSON.stringify(catPics));
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to retrieve cat pictures',
      });
    }
    return catPics;
  },
});
