import Image from 'next/image';
import Link from 'next/link';

function AboutPage() {
  return (
    <div className='w-screen h-screen catbg'>
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
        {/* @ts-ignore */}
        <marquee className='text-4xl font-extrabold text-cyan-700'>
          Thank you for visiting my web site.
          {/* @ts-ignore */}
        </marquee>
        <p className='text-xl text-red-700'>
          This page is built using the{' '}
          <Link href='https://init.tips/'>
            <a className='text-green-700 font-bold'>T3 Stack</a>
          </Link>
        </p>
        <p className='text-xl text-red-700'>
          Click{' '}
          <Link href='https://github.com/c-ehrlich/catmash'>
            <a className='text-green-700 font-bold'>HERE</a>
          </Link>{' '}
          to view the source code
        </p>
        <p className='text-xl text-red-700'>
          Cat pictures courtesy of{' '}
          <Link href='https://docs.thecatapi.com/'>
            <a className='text-green-700 font-bold'>The Cat Api</a>
          </Link>
        </p>
        <Link href='https://pink73.tripod.com/CATSRINGindex65.html' passHref>
          <a>
            <Image
              src='/img/crazy-cat.jpg'
              alt='Crazy Cats Ring Banner'
              width={300}
              height={150}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
