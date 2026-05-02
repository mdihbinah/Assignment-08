import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileCard = ({tile}) => {
    const time = parseInt(tile.id.slice(5,9))

    return (
        <div key={tile.id}  className={`flex flex-col justify-center items-center gap-5 rounded-md overflow-hidden border min-w-60  max-w-100 text-center hover:shadow-2xl animate__animated animate__slideInUp animate__slow`}
        style={{
            animationDelay: `${time * 0.3}s`
        }}
        >
            <div className={`w-full`}>
                <div className="card w-full aspect-video">
                <Image src={tile.image} alt='Tiles Image' fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=' rounded-md' ></Image>
            </div>
            
            <div className="p-3 space-y-4 ">
                <h2 className='font-bold'>{tile.title}</h2>
                <div className="flex justify-between items-center font-bold">
                    <p className='opacity-70 text-lg' >${tile.price}</p>
                    <p className={`badge ${tile.inStock ? 'badge-success' : 'badge-warning'}`} >{tile.inStock ? 'In Stock': 'Out of Stock'}</p>
                </div>
                <Link href={`tile/${tile.id}`} ><button className='bg-slate-300 hover:bg-success py-1 w-full rounded-sm '>Details</button></Link>
            </div>
            </div>
        </div>
    );
};

export default TileCard;