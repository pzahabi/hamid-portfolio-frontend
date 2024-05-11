import Image from "next/image";
import Hamid from "@/public/HamidShojaei.webp";

export default function AboutMe() {
  return (
    <>
      <div className="container col align-center">
        <div className="container full-height-responsive align-center">
          <div className="about-container">
            <div className="about-content">
              <div className="about-title">
                <h1>About Me (He/Him)</h1>
                <span>Who I am</span>
              </div>
              <p>
                I'm Hamid Shojaei, born in February 1990 in Tehran. At the age
                of eight, I became acquainted with the piano, and a few years
                later, upon entering the music high school, I entered the
                professional music world and became familiar with the cello.
              </p>
            </div>
            <Image
              src={Hamid}
              width={700}
              height={1000}
              className="about-img"
              alt="Hamid Shojaei"
              priority
            />
          </div>
        </div>
        <div className="about-container-second">
          <p>
            After graduating from high school, I continued my studies in music
            at the Tehran School of Art and Architecture until the bachelor's
            level. Over the years, I have been active in various areas of music
            including piano playing, cello, composing music for theater and
            film, creating music for advertising teasers, leading pop
            orchestras, and more.
            <br />
            <br />
            However, my main activity has been in the field of songwriting and
            pop music production. During this time, I have collaborated with
            many artists inside and outside Iran, striving to have the best for
            producing quality music and meeting world standards at HR
            Production.
            <br />
            <br />
            Our goal here is to provide everything a singer needs to produce a
            piece, including music composition and arrangement, music mixing,
            cover art design, music video production, etc., with the best
            quality for enthusiasts of this field. My friends and I will do our
            best to present our best to our audience.
            <br />
            <br />
            Hamid Shojaei
            <br />
            April 2024
          </p>
        </div>
      </div>
    </>
  );
}
