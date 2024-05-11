"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="menu">
              <li>
                <Link href="/" className={ pathname === "/" ? "menu-active" : "menu-unactive"}>Home</Link>
                <span></span>
              </li>
              <li>
                <Link href="/about" className={ pathname === "/about" ? "menu-active" : "menu-unactive"}>About</Link>
                <span></span>
              </li>
              <li>
                <Link href="/musics" className={ pathname === "/musics" ? "menu-active" : "menu-unactive"}>Musics</Link>
                <span></span>
              </li>
              <li>
                <Link href="/videos" className={ pathname === "/videos" ? "menu-active" : "menu-unactive"}>Videos</Link>
                <span></span>
              </li>
              <li>
                <Link href="/team" className={ pathname === "/team" ? "menu-active" : "menu-unactive"}>Team</Link>
                <span></span>
              </li>
              <li>
                <Link href="/services" className={ pathname === "/services" ? "menu-active" : "menu-unactive"}>Services</Link>
                <span></span>
              </li>
              <li>
                <Link href="/reach" className={ pathname === "/reach" ? "menu-active" : "menu-unactive"}>Reach</Link>
                <span></span>
              </li>
            </ul>
          </nav>
    )
}