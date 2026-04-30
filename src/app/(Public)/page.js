import Banner from "@/component/Banner";
import { tiles } from "@/component/data";
import Featuredtiles from "@/component/featuredtiles";
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="btn btn-success w-full" >
        <Marquee className="py-2 font-bold container mx-auto " pauseOnHover={true} speed={100} >
        New Arrivals: Blue Gradient Marble | Weekly Feature: Modern Geometric Patterns | Join the Community...
        </Marquee>
      </div>
      <Featuredtiles></Featuredtiles>
    </div>
  )
}
