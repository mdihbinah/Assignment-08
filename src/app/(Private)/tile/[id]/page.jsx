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
        <div className='container mx-auto flex justify-center items-center gap-10 mt-5' >
            <Image src={image} alt='Tile Image' width={350} height={300}></Image>
            <div className="">
                <h2>{title}</h2>
                <div className="">
                    <p>{category}</p>
                    <p>${price}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TilDetails;