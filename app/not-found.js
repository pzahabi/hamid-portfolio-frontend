import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
        <div className="not-found-container">
          <div className="my-404-wrapper">
            <div>404</div>
            <h2>Not Found</h2>
          </div>
          <p>Could not find requested resource</p>
          <p className="font">صفحه مورد نظر یافت نشد</p>
          <Link href="/" className="return-home">Return Home</Link>
        </div>
    </div>
  );
}
