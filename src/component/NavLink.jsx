'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, name}) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`link-hover ${pathname == href ? 'text-accent ' : ''}`} >{name}</Link>
    );
};

export default NavLink;