export default function Loading() {
  return (
    <>
      <div className="loading-container">
        <svg className="circle-svg" height="200" width="200">
          <circle cx="100" cy="100" r="50"></circle>
        </svg>
        <div className="loading">Loading...</div>
      </div>
    </>
  );
}
