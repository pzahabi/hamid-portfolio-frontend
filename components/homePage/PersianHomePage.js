import Link from "next/link";

export default function PersianHomePage() {
  return (
    <div dir="rtl" className="container">
      <div className="home-page-container home-page-container-persian">
        <div className="home-page-content">
          <div className="home-page-main">
            <div className="home-page-title home-page-title-persian">
              <h1>HR MUSIC PRODUCTION</h1>
              <p className="font">استودیوی حرفه ای تولید موسیقی</p>
            </div>
            <Link href="/reach">
              <button className="font">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                ارتباط با ما
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
