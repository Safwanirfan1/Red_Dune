import { useRef, useEffect } from "react";

interface SplashProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnd = () => {
      onFinish();
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/splash-video1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
