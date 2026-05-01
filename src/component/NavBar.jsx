import Link from "next/link";
import NavLink from "./NavLink";
import RightBar from "./RightBar";



const NavBar = () => {

    const links = (
        <>
            <li><NavLink href={'/'} name={'Home'}></NavLink></li>
            <li><NavLink href={'/all-tiles'} name={'All Tiles'}></NavLink></li>
        </>
    )

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl"><span className="font-extrabold text-success">Tiles</span>Gallery</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <RightBar></RightBar>
  </div>
</div>
        </div>
    );
};

export default NavBar;