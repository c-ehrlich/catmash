import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCatPicLeaderboard } from '../server/resource/catpic/catpic.service';
import { inferAsyncReturnType } from '@trpc/server';

type LeaderboardPageProps = inferAsyncReturnType<typeof getCatPicLeaderboard>;

const LeaderboardPage: React.FC<{ leaderboard: LeaderboardPageProps }> = (
  props
) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-1/2 min-h-screen mx-auto'>
      <div className='self-start'>
        <Link href='/' passHref>
          <a className='flex gap-2'>
            <Image
              style={{ imageRendering: 'pixelated' }}
              src='/img/cat-back.png'
              alt='Cat Back'
              width={23}
              height={21}
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
              <img src={cat.imageUrl} alt={`Cat #${cat.id}`} />
            </div>
          ))}
        </div>
      ) : (
        <div className='text-orange-600 font-bold text-xl'>loading</div>
      )}
      <div>But you know we love all cats equally</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const FIVE_MINUTES = 60 * 5;
  const leaderboard = await getCatPicLeaderboard();

  return {
    props: {
      leaderboard,
    },
    revalidate: FIVE_MINUTES,
  };
};

export default LeaderboardPage;
