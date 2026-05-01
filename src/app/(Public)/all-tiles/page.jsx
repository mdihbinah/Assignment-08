import { tiles } from '@/component/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTiles = async() => {
    const allTiles = await tiles()
    return (
        <div className='container my-5 mx-5 md:mx-auto' >
            <h1 className='mb-5 text-2xl font-bold'>All Tiles</h1>
            <div className="flex justify-center ">
            <div className="grid md:grid-cols-3 gap-5">
                {
                    allTiles.map(ele =>{
                        return <div key={ele.id} className="flex flex-col justify-center items-center gap-5 border p-5 max-w-100 card text-center hover:shadow-2xl ">
                        <Image src={ele.image} alt='Tiles Image' width={150} height={150}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-md' ></Image>
                        <h2>{ele.title}</h2>
                        <Link href={`tile/${ele.id}`} ><button className='btn btn-success'>Details</button></Link>
                    </div>
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default AllTiles;