import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause, faCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function PersianTrackCard({ item }) {
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <>
      <div className="product-card">
        <div className="image">
        <img
          src={`${baseApiUrl}/api/${item.image.replace(/\\/g, "/")}`}
          alt={item.title}
          loading="lazy"
        />
        </div>
        <div className="audio-player">
          <input
            dir="ltr"
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
          />
          {isPlaying ? (
            <span className="control pause" onClick={pauseAudio}>
              <FontAwesomeIcon icon={faCirclePause} />
            </span>
          ) : (
            <span className="control play" onClick={playAudio}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </span>
          )}
          <a
            className="control-2 download"
            href={`${baseApiUrl}/api/${item.audio.replace(/\\/g, "/")}`}
            download={`${item.title}.${item.audio.split(".").pop()}`}
          >
            <div dir="ltr" className="download-icon">
              <span>دانلود</span>
              <FontAwesomeIcon icon={faCircleDown} />
            </div>
          </a>
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={`${baseApiUrl}/api/${item.audio.replace(/\\/g, "/")}`} />
            Your browser does not support the audio element.
          </audio>
        </div>
        <h3 className="card-text">{item.persianTitle}</h3>
        <div className="card-text">خواننده: {item.persianArtist}</div>
        <div className="card-text">آهنگساز: {item.persianProducer}</div>
      </div>
    </>
  );
}
