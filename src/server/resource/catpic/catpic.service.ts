import { prisma } from '../../db/client';

export async function getTwoCatPics({
  first,
  second,
}: {
  first: number;
  second: number;
}) {
  return prisma.catPic.findMany({
    where: {
      id: { in: [first, second] },
    },
  });
}

export async function castCatVotes({
  votedForId,
  votedAgainstId,
}: {
  votedForId: number;
  votedAgainstId: number;
}) {
  return prisma.vote.create({
    data: {
      votedForId,
      votedAgainstId,
    },
  });
}
