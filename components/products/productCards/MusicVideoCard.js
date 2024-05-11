

export default function MusicVideoCard({ item }) {
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <div className="product-card">
        <video
          src={`${baseApiUrl}/api/${item.video.replace(/\\/g, "/")}`}
          alt={item.title}
          controls
        />
        <h3 className="card-text">{item.title}</h3>
        <div className="card-text">{item.artist}</div>
        <div className="card-text">{item.producer}</div>
      </div>
    </>
  );
}
