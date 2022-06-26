import Image from 'next/image';
import Link from 'next/link';

function LeaderboardPage() {
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
      <p>Coming soon...</p>
    </div>
  );
}

export default LeaderboardPage;
