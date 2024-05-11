"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PersianHamMenuNavbar({clicked}) {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="ham-menu-content font">
              <li>
                <Link onClick={clicked} href="/" className={ pathname === "/" ? "menu-active" : ""}>خانه</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/about" className={ pathname === "/about" ? "menu-active" : ""}>درباره من</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/musics" className={ pathname === "/musics" ? "menu-active" : ""}>موسیقی ها</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/videos" className={ pathname === "/videos" ? "menu-active" : ""}>ویدیو ها</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/team" className={ pathname === "/team" ? "menu-active" : ""}>همکاران</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/services" className={ pathname === "/services" ? "menu-active" : ""}>خدمات</Link>
              </li>
              <li>
                <Link onClick={clicked} href="/reach" className={ pathname === "/reach" ? "menu-active" : ""}>ارتباط با ما</Link>
              </li>
            </ul>
          </nav>
    )
}