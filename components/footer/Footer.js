import Image from "next/image";
import hr from "../../public/HR-White.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="logo-wrapper-footer">
            <Image src={hr} width={100} alt="Logo" className="footer-hr" loading="lazy"/>
          </div>
          <div className="footer-content">
            <div className="quick-access">
              <h5>QUICK ACCESS</h5>
              <ul>
                <li>
                  <Link href="./">Home</Link>
                </li>
                <li>
                  <Link href="./musics">Musics</Link>
                </li>
                <li>
                  <Link href="./videos">Videos</Link>
                </li>
                <li>
                  <Link href="./services">Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer-reach">
              <h5>REACH OUT</h5>
              <ul>
                <li>
                  <a href="mailto:hamidshojaeii@gmail.com">
                    hamidshojaeii@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+989125968263">+98912 5968263</a>
                </li>
                <li>
                  <a href="tel:+982188031762">+9821 88031762</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h5>SOCIAL MEDIA</h5>
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
          <a className="dev" href="https://pooyazahabi.com" target="_blank">Developed by: pooyazahabi.com</a>
        </div>
      </footer>
    </>
  );
}
