import Image from "next/image";
import hr from "../../public/HR-White.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function PersianFooter() {
  return (
    <>
      <footer dir="rtl">
        <div className="footer-container font">
          <div className="logo-wrapper-footer">
            <Image src={hr} width={100} alt="Logo" className="footer-hr" loading="lazy"/>
          </div>
          <div className="footer-content footer-content-persian">
            <div>
              <h5>دسترسی سریع</h5>
              <ul>
                <li>
                  <Link href="./">خانه</Link>
                </li>
                <li>
                  <Link href="./musics">موسیقی ها</Link>
                </li>
                <li>
                  <Link href="./videos">ویدیو ها</Link>
                </li>
                <li>
                  <Link href="./services">خدمات</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>ارتباط با ما</h5>
              <ul>
                <li>
                  <a href="mailto:hamidshojaeii@gmail.com">
                    hamidshojaeii@gmail.com
                  </a>
                </li>
                <li>
                  <a dir="ltr" href="tel:+989125968263">+98912 5968263</a>
                </li>
                <li>
                  <a dir="ltr" href="tel:+982188031762">+9821 88031762</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h5>شبکه های اجتماعی</h5>
              <div className="footer-sicial-media">
                <a href="https://www.instagram.com/hr.music.production?igsh=c2xyYXY1cWx3aTll" className="footer-social-icon">
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
                <a href="https://t.me/HRPROSTUDIO" className="footer-social-icon">
                  <span>
                    <FontAwesomeIcon icon={faTelegram} />
                  </span>
                </a>
                <a href="https://wa.me/+989353068100" className="footer-social-icon">
                  <span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <a className="dev dev-persian" href="https://pooyazahabi.com" target="_blank">Developed by: pooyazahabi.com</a>
        </div>
      </footer>
    </>
  );
}
