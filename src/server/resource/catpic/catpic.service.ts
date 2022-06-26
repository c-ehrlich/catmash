import { prisma } from '../../db/client';

export async function getCatPicsByIdArray(ids: number[]) {
  return prisma.catPic.findMany({
    where: {
      id: { in: ids },
    },
  });
}
