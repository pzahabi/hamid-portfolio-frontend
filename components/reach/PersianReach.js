import Image from "next/image";
import hr from "@/public/HR.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function PersianReachOut() {
    return(
        <>
            <div dir="rtl" className="container full-height align-center reach-page-container font">
                <div className="reach-left-side">
                    <div className="reach-disk-persian">
                        <Image width={200}
                        height={200}
                        alt="logo"
                        className="reach-logo-persian"
                        priority
                        src={hr}
                        />
                    </div>
                </div>
                <div className="reach-right-side">
                    <div className="reach-container">
                        <div className="reach-title">
                            <h1>راه های ارتباطی</h1>
                        </div>
                        <div className="reach-content">
                            <div>
                                <div><a href="mailto:hamidshojaeii@gmail.com">hamidshojaeii@gmail.com</a></div>
                                <div><a dir="ltr" href="tel:+989125968263">+98912 5968263</a></div>
                                <div><a dir="ltr" href="tel:+982188031762">+9821 88031762</a></div>
                            </div>
                            <div>
                                <div>شبکه های اجتماعی</div>
                                <div className="contact-me">
                                    <a href="https://www.instagram.com/hr.music.production?igsh=c2xyYXY1cWx3aTll" className="social">
                                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                                    </a>
                                    <a href="https://t.me/HRPROSTUDIO" className="social">
                                        <span><FontAwesomeIcon icon={faTelegram} /></span>
                                    </a>
                                    <a href="https://wa.me/+989353068100" className="social">
                                        <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}