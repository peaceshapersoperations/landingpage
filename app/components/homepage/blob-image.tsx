import { useState, useEffect } from 'react';

export default function BlobImage({
  activeIndex,
  scopes,
}: {
  activeIndex: number;
  scopes: any[];
}) {
  const [previousImage, setPreviousImage] = useState(
    scopes[activeIndex]?.image,
  );
  const [currentImage, setCurrentImage] = useState(scopes[activeIndex]?.image);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const newImage = scopes[activeIndex]?.image;
    if (newImage !== currentImage) {
      setIsTransitioning(true);
      setPreviousImage(currentImage);

      // Start fade out
      const fadeOutTimer = setTimeout(() => {
        setCurrentImage(newImage);
        // Start fade in
        const fadeInTimer = setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
        return () => clearTimeout(fadeInTimer);
      }, 300);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [activeIndex, scopes, currentImage]);

  return (
    <figure className="relative rounded-[40px] md:rounded-[50px] aspect-4/3 lg:aspect-square w-full overflow-hidden">
      {/* Previous image (fading out) */}
      {previousImage && isTransitioning && (
        <div className="absolute inset-0">
          <img
            src={previousImage}
            className="w-full h-full object-cover transition-all duration-300 ease-out opacity-100 scale-100" 
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
            }}
            alt=""
          />
        </div>
      )}

      {/* Current image (fading in) */}
      <div className="absolute inset-0">
        <img
          src={currentImage}
          className={`
            w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale
            ${
              isTransitioning
                ? 'opacity-0 scale-105'
                : 'opacity-100 scale-100 hover:scale-105'
            }
          `}
          alt=""
        />
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />

      {/* Loading state indicator */}
      {isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </figure>
  );
}
