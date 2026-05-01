import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='relative  h-[70vh] bg-base-200 my-10'>
            <Image src='https://i.ibb.co.com/4wNgNGYr/pawel-czerwinski-CEr4ljp-MSh4-unsplash.jpg' alt='Background' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover' ></Image>

            <div className="relative z-10 flex flex-col justify-center items-center gap-5 md:gap-10 h-[100%]">
                <h1 className='text-2xl md:text-4xl font-bold text-center'>Discover Your Perfect Aesthetic</h1>
                <button className='btn btn-success '><Link href={'/all-tiles'}>Browse Now</Link></button>
            </div>
        </div>
    );
};

export default Banner;