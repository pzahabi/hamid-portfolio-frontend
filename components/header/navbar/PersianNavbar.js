"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PersianNavbar() {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="menu">
              <li>
                <Link href="/" className={ pathname === "/" ? "menu-active" : "menu-unactive-persian"}>خانه</Link>
                <span></span>
              </li>
              <li>
                <Link href="/about" className={ pathname === "/about" ? "menu-active" : "menu-unactive-persian"}>درباره من</Link>
                <span></span>
              </li>
              <li>
                <Link href="/musics" className={ pathname === "/musics" ? "menu-active" : "menu-unactive-persian"}>موسیقی ها</Link>
                <span></span>
              </li>
              <li>
                <Link href="/videos" className={ pathname === "/videos" ? "menu-active" : "menu-unactive-persian"}>ویدیو ها</Link>
                <span></span>
              </li>
              <li>
                <Link href="/team" className={ pathname === "/team" ? "menu-active" : "menu-unactive-persian"}>همکاران</Link>
                <span></span>
              </li>
              <li>
                <Link href="/services" className={ pathname === "/services" ? "menu-active" : "menu-unactive-persian"}>خدمات</Link>
                <span></span>
              </li>
              <li>
                <Link href="/reach" className={ pathname === "/reach" ? "menu-active" : "menu-unactive-persian"}>ارتباط با ما</Link>
                <span></span>
              </li>
            </ul>
          </nav>
    )
}