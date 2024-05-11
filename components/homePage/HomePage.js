import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <div className="home-page-container">
        <div className="home-page-content">
          <div className="home-page-main">
            <div className="home-page-title">
              <h1>HR MUSIC PRODUCTION</h1>
              <p>Professional Music Production Studio</p>
            </div>
            <Link href="/reach">
              <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Reach Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
