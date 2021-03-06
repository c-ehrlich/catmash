import { GetStaticProps } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';
import { getCatPicLeaderboard } from '../server/resource/catpic/catpic.service';
import { inferAsyncReturnType } from '@trpc/server';

type LeaderboardPageProps = inferAsyncReturnType<typeof getCatPicLeaderboard>;

const LeaderboardPage: React.FC<{ leaderboard: LeaderboardPageProps }> = (
  props
) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center px-4 lg:max-w-4xl'>
      <div className='self-start'>
        <Link href='/' passHref>
          <a className='flex gap-2'>
            <Image
              style={{ imageRendering: 'pixelated' }}
              src='/img/cat-back.png'
              alt='Cat Back'
              className='w-6 h-8'
            />
            <span className='text-2xl font-bold text-pink-500'>Go back</span>
          </a>
        </Link>
      </div>
      <h1 className='text-6xl text-red-700 font-bold text-center'>
        Official Top10 cutest cats!
      </h1>
      {props.leaderboard ? (
        <div className='flex flex-col gap-4'>
          {props.leaderboard.map((cat, index) => (
            <div key={`cat-${cat.id}`}>
              <h2 className='text-orange-600 font-bold text-xl'>
                Rank {index + 1}
              </h2>
              <Image
                className='rounded-lg'
                src={cat.imageUrl}
                alt={`Cat #${cat.id}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='text-orange-600 font-bold text-xl'>loading</div>
      )}
      <Image src='/img/alert-siren.gif' alt='siren' />
      <div className='text-2xl text-red-600 font-bold text-center'>
        This is just a lil project I did for fun. Please give the same amount of
        love to all cats!!
      </div>
      <Image src='/img/alert-siren.gif' alt='siren' />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const FIVE_MINUTES = 60 * 5;
  // TODO should we use trpc.useQuery for this?
  const leaderboard = await getCatPicLeaderboard();

  return {
    props: {
      leaderboard,
    },
    revalidate: FIVE_MINUTES,
  };
};

export default LeaderboardPage;
