import Image from "next/image";
import Hamid from "@/public/HamidShojaei.webp";

export default function PersianAboutMe() {
  return (
    <>
      <div dir="rtl" className="container col align-center font">
        <div className="container full-height-responsive align-center">
          <div className="about-container">
            <div className="about-content">
              <div className="about-title">
                <h1>درباره من</h1>
                <span>من چه کسی هستم</span>
              </div>
              <p>
                حمید شجاعی هستم، متولد بهمن ماه ۱۳۶۸ در تهران. در هشت سالگی موسیقی را با
                نوازندگی ساز پیانو شروع کردم و با ورود به هنرستان موسیقی به دنیای حرفه‌ای
                موسیقی وارد شدم و در آنجا با ساز کمانچه آشنا شدم.
              </p>
            </div>
            <Image
              src={Hamid}
              width={700}
              height={1000}
              className="about-img about-img-persian"
              alt="Hamid Shojaei"
              priority
            />
          </div>
        </div>
        <div className="about-container-second">
          <p>
            پس از فارغ التحصیلی از هنرستان، در رشته موسیقی در دانشکده هنر و
            معماری تهران تحصیلاتم را تا مقطع کارشناسی ادامه دادم. طی این سال‌ها
            در زمینه‌های مختلفی از جمله نوازندگی پیانو، کمانچه، ساخت موسیقی
            تئاتر و فیلم و سریال، ساخت موسیقی برای تیزرهای تبلیغاتی، رهبری
            ارکستر پاپ و ... فعالیت داشتم، اما عمده فعالیتم در زمینه آهنگسازی و
            ساخت موسیقی پاپ بوده است.
            <br />
            <br />
            همچنین با هنرمندان زیادی در داخل و خارج ایران همکاری داشته‌ام و سعی
            کرده‌ام تا بهترین‌ها را برای تولید موسیقی با کیفیت و استانداردهای
            روز دنیا در اچ آر پروداکشن داشته باشم.
            <br />
            <br />
            هدف ما در اینجا ارائه هر آنچه یک خواننده برای تولید یک اثر نیاز دارد
            اعم از ساخت و تنظیم موسیقی، میکس موسیقی، طراحی کاور آرت، ساخت موزیک
            ویدیو و ... با بهترین کیفیت برای دوستداران این رشته است. من و
            دوستانم تمام تلاش خود را می‌کنیم تا بهترین خودمان را به مخاطبینمان
            ارائه دهیم.
            <br />
            <br />
            حمید شجاعی
            <br />
            فروردین ماه ۱۴۰۳
          </p>
        </div>
      </div>
    </>
  );
}
