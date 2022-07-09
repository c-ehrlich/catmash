import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/future/image';
import Link from 'next/link';
import { useState } from 'react';
import { getIdsForVote } from '../utils/getIdsForVote';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const [ids, updateIds] = useState(() => getIdsForVote());
  const [first, second] = ids;

  const catPics = trpc.useQuery(['catpic.getTwo', { first, second }]);
  const [cat1, cat2] = catPics.data || [];

  const voteMutation = trpc.useMutation(['catpic.vote']);

  function vote(selected: number) {
    if (selected === first) {
      voteMutation.mutate({ votedForId: first, votedAgainstId: second });
    } else {
      voteMutation.mutate({ votedForId: second, votedAgainstId: first });
    }

    updateIds(getIdsForVote());
  }

  return (
    <>
      <Head>
        <title>CatMash</title>
        <meta name='description' content='Which cat is cuter???' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col gap-4 items-center justify-center mx-4 w-10/12'>
        <Image
          style={{ imageRendering: 'pixelated' }}
          src='/img/cats-header.png'
          alt='Cats Header'
          width={305}
          height={85}
        />
        <h1 className='text-5xl font-bold text-red-600 text-center'>
          Which cat is cuter?
        </h1>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'>
          <div className='flex flex-col gap-4 items-center p-4 bg-green-500 rounded-lg w-full max-w-sm'>
            <div className='flex items-center justify-center aspect-square w-full bg-transparent rounded-md overflow-hidden'>
              {cat1?.imageUrl ? (
                <div className='flex align-center items-center w-full h-full'>
                  <Image
                    className='object-fill rounded-md'
                    src={cat1.imageUrl}
                    alt='Cat Picture 1'
                    width={500}
                    height={500}
                  />
                </div>
              ) : (
                <div className='text-pink-500 text-2xl font-bold'>loading</div>
              )}
            </div>
            <button
              className='bg-yellow-300 hover:bg-yellow-400 text-xl text-yellow-800 font-bold py-2 px-4 rounded linkPointer'
              onClick={() => vote(first)}
              disabled={!cat1?.imageUrl}
            >
              Pick me!
            </button>
          </div>
          <div className='flex flex-col gap-4 items-center p-4 bg-green-500 rounded-lg w-full max-w-sm'>
            <div className='flex items-center justify-center aspect-square w-full bg-transparent rounded-md overflow-hidden'>
              {cat2?.imageUrl ? (
                <div className='flex align-center items-center w-full h-full'>
                  <Image
                    className='object-fill rounded-md'
                    src={cat2.imageUrl}
                    alt='Cat Picture 2'
                    width={500}
                    height={500}
                  />
                </div>
              ) : (
                <div className='text-pink-500 text-2xl font-bold'>plz wait</div>
              )}
            </div>
            <button
              className='bg-yellow-300 hover:bg-yellow-400 text-xl text-yellow-800 font-bold py-2 px-4 rounded'
              onClick={() => vote(second)}
              disabled={!cat1?.imageUrl}
            >
              Noooo pick me!
            </button>
          </div>
        </div>
        <span className='flex gap-2 text-sky-600 font-bold'>
          <Link href='/leaderboard'>
            <a>Cutest Cats</a>
          </Link>
          <span className='font-light'>/</span>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Home;
