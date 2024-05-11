"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HamMenuNavbar({clicked}) {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="ham-menu-content">
              <li>
                <Link onClick={clicked} href="/" className={ pathname === "/" ? "menu-active" : ""}>Home</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/about" className={ pathname === "/about" ? "menu-active" : ""}>About</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/musics" className={ pathname === "/musics" ? "menu-active" : ""}>Musics</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/videos" className={ pathname === "/videos" ? "menu-active" : ""}>Videos</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/team" className={ pathname === "/team" ? "menu-active" : ""}>Team</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/services" className={ pathname === "/services" ? "menu-active" : ""}>Services</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/reach" className={ pathname === "/reach" ? "menu-active" : ""}>Reach</Link>
              </li>
            </ul>
          </nav>
    )
}