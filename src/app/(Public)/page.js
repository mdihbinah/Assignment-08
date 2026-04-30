import Banner from "@/component/Banner";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee className="btn btn-success py-2 font-bold " pauseOnHover={true} speed={100} >
        New Arrivals: [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community...
      </Marquee>
    </div>
  )
}
