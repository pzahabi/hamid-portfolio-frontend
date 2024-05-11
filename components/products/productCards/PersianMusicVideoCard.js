

export default function PersianMusicVideoCard({ item }) {
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <div className="product-card">
        <video
          src={`${baseApiUrl}/api/${item.video.replace(/\\/g, "/")}`}
          alt={item.title}
          controls
        />
        <h3 className="card-text">{item.persianTitle}</h3>
        <div className="card-text">{item.persianArtist}</div>
        <div className="card-text">{item.persianProducer}</div>
      </div>
    </>
  );
}
