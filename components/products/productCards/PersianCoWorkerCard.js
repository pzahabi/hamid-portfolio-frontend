import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PersianCoWorkerCard({ item }) {
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <Link href={`/team/${item._id}`} className="product-card">
        <div key={item._id} >
          <div className="image">
          <img
            src={`${baseApiUrl}/api/${item.image.replace(/\\/g, "/")}`}
            alt={item.title}
            loading="lazy"
          />
          </div>
          <h3 className="card-text">{item.persianArtist}</h3>
          <div className="card-text">{item.persianTitle}</div>
        </div>
        <div className="more more-persian">بیشتر...<FontAwesomeIcon icon={faPlus} /></div>
      </Link>
    </>
  );
}
