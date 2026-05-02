'use client'
import { tiles } from '@/component/data';
import TileCard from '@/component/TileCard';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

let data = []
const AllTiles = () => {
    const [allTiles, setAllTiles] = useState(data)

    useEffect(() => {
        const fetchTiles = async () => {
            data = await tiles();
            setAllTiles(data);
        };
        fetchTiles();
    }, [])

    const handleSearch = (e) => {
        const ele = e.target.value
        
        const searched = data.filter(tile => tile.title.toLowerCase().includes(ele.toLowerCase()) )

        
        // console.log(ele);
        if(ele == '') {
            setAllTiles(data)
        } else{
            setAllTiles(searched)
        }

    }
    return (
        <div className='container my-5 mx-5 md:mx-auto flex flex-col justify-center items-center ' >
                    <h1 className='mb-5 text-2xl font-bold'>All Tiles</h1>
                <div className="flex justify-center items-center mb-5">
                    <form >
                        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" onChange={handleSearch} required placeholder="Search" />
                    </label>
                    </form>
                </div>
            <div className="flex justify-center ">
            <div className="grid md:grid-cols-3 gap-5">
                {
                    allTiles.map(tile =><TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllTiles;