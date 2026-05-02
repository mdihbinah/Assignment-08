import React from 'react';
import { tiles } from './data';
import Image from 'next/image';
import Link from 'next/link';
import TileCard from './TileCard';

const Featuredtiles = async() => {
    const d = await tiles()
    const featuredtiles = d.slice(0,4)
    // console.log(featuredtiles)
    return (
        <div className='mt-5 flex flex-col justify-center items-center container mx-auto' >
            <h1 className='font-bold text-2xl' >Featured Tiles</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-5 mt-5">
                {
                    featuredtiles.map(tile => {
                        return <TileCard key={tile} tile={tile} ></TileCard>
                    })
                }
            </div>
        </div>
    );
};

export default Featuredtiles;