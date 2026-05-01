import React from 'react';
import { tiles } from './data';
import Image from 'next/image';
import Link from 'next/link';

const Featuredtiles = async() => {
    const d = await tiles()
    const featuredtiles = d.slice(0,4)
    // console.log(featuredtiles)
    return (
        <div className='mt-5 flex flex-col justify-center items-center container mx-auto' >
            <h1 className='font-bold text-2xl' >Featured Tiles</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-5 mt-5">
                {
                    featuredtiles.map(ele => {
                        return <div key={ele.id} className="flex flex-col justify-center items-center gap-5 border p-5 max-w-100 card text-center hover:shadow-2xl ">
                            <Image src={ele.image} alt='Tiles Image' width={150} height={150}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='rounded-md' ></Image>
                            <h2>{ele.title}</h2>
                            <Link href={`tile/${ele.id}`}><button className='btn btn-success'>View Details</button></Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Featuredtiles;