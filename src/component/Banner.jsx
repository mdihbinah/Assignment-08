import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='relative  h-[80vh] bg-base-200 my-5'>
            <Image src='https://i.ibb.co.com/VpzHWT68/pawel-czerwinski-CEr4ljp-MSh4-unsplash.jpg' alt='Background' fill className='object-cover' ></Image>

            <div className="relative z-10 flex flex-col justify-center items-center gap-10 h-[100%] ">
                <h1 className='text-4xl font-bold '>Discover Your Perfect Aesthetic</h1>
                <button className='btn btn-success'><Link href={'/all-tiles'}>Browse Now</Link></button>
            </div>
        </div>
    );
};

export default Banner;