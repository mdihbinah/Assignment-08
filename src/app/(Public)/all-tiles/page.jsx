import { tiles } from '@/component/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTiles = async() => {
    const allTiles = await tiles()
    return (
        <div className='container mx-auto' >
            <h1 className='mb-3 mx-auto'>All Tiles</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    allTiles.map(ele =>{
                        return <div key={ele.id} className="flex flex-col justify-center items-center gap-5 border p-5 max-w-100 card text-center hover:shadow-2xl ">
                        <Image src={ele.image} alt='Tiles Image' width={150} height={150} className='rounded-md' ></Image>
                        <h2>{ele.title}</h2>
                        <Link href={`tile/${ele.id}`} ><button className='btn btn-success'>Details</button></Link>
                    </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllTiles;