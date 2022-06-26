import { z } from 'zod';

export const getTwoSchema = z.object({
  // TODO set max number
  first: z.number().min(1),
  second: z.number().min(1),
});

export const voteSchema = z.object({
  // TODO set the max number
  votedForId: z.number().min(1),
  votedAgainstId: z.number().min(1),
});
