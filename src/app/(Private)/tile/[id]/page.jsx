import { tiles } from '@/component/data';
import Image from 'next/image';
import React from 'react';

const TilDetails = async({params}) => {
    const {id} = await params
    console.log(id);
    const allTiles = await tiles()
    const tile = allTiles.find(ele => ele.id == id)
    // console.log(tile);
    const {id:tid,title,description,image,category,price,currency,dimensions,material,inStock} = tile
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 mt-5 bg-base-200 rounded-xl p-8' >
            <div className="w-full">
                <div className="card aspect-video">
                    <Image src={image} alt='Tile Image' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-lg'></Image>
                </div>
            </div>

            <div className=" rounded-lg w-full p-5 flex flex-col justify-between gap-4 my-3">
                <h2 className='text-md font-bold' >{title}</h2>
                <div className="flex justify-between ">
                    <p className='badge p-4 bg-emerald-300' >{category}</p>
                    <p className='badge p-4 bg-red-500' >{material}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-xl font-bold' >$ <span className='opacity-50 '>{price}</span></p>
                    <p className={`text-xl py-4 badge ${inStock ? 'badge-success' : 'badge-warning'}`} >{inStock? 'In Stock' : 'Out of Stock'}</p>
                    <p className='text-xl font-bold' >{dimensions}</p>
                </div>
                <p className='text-center  opacity-80' >{description}</p>
                <div className={`flex justify-between ${inStock ? '':'opacity-70'}`}>
                    <button className='btn btn-accent w-30'>Add to Cart</button>
                    <button className='btn btn-accent w-30'>Buy</button>
                </div>
            </div>
            
        </div>
    );
};

export default TilDetails;