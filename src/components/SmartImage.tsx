import { useState } from "react";
import type { TourPhoto } from "@/data/tours";
import { TourIllustration } from "@/components/illustrations";

interface SmartImageProps {
  photo?: TourPhoto;
  fallback: string;
  className?: string;
}

/**
 * Renders a photograph when one is configured and loads successfully;
 * otherwise falls back to the matching illustrated scene, so the layout
 * never shows a broken image.
 */
const SmartImage = ({ photo, fallback, className = "" }: SmartImageProps) => {
  const [failed, setFailed] = useState(false);

  if (!photo || failed) {
    return <TourIllustration variant={fallback} />;
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

export default SmartImage;
