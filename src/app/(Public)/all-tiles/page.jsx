'use client'
import { tiles } from '@/component/data';
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
    }, []);
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
                    allTiles.map(ele =>{
                        return <div key={ele.id} className="flex flex-col justify-center items-center gap-5 border p-5 max-w-100 card text-center hover:shadow-2xl animate__animated animate__slideInUp animate__delay-.5s animate__slow">
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