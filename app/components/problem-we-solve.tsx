import Container from '@/components/layout/container';
import { HugeiconsIcon } from '@hugeicons/react';
import { PlayIcon, PauseIcon } from '@hugeicons/core-free-icons';
import { useState, useRef } from 'react';
import AnimateIn from './ui/animate-in';

const ProblemWeSolve = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="bg-white py-20 md:py-0">
      <Container className="">
        <AnimateIn animation="slideUp">
          <div className="h-full md:h-160 grid grid-rows-[400px_1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-[1fr_1fr] rounded-[40px] md:rounded-[50px] overflow-hidden">
          <figure className="relative block overflow-hidden bg-slate-100">
            <video
              ref={videoRef}
              src="video/solve.mp4"
              playsInline
              loop
              className="w-full h-full object-cover md:object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            ></video>

            {/* Thumbnail overlay when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-accent/30 flex items-center justify-center animate-fade-in">
                <img
                  src="video/solve-thumbnail.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-accent/10 hover:bg-opacity-30 transition-all duration-300"
                >
                  <div className="bg-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 animate-scale-in">
                    <HugeiconsIcon
                      icon={PlayIcon}
                      size={32}
                      className="text-accent"
                    />
                  </div>
                </button>
              </div>
            )}

            {/* Pause button when playing */}
            {isPlaying && (
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.pause();
                  }
                }}
                className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 rounded-full p-5 transform hover:scale-105 animate-slide-up"
              >
                <HugeiconsIcon
                  icon={PauseIcon}
                  size={20}
                  className="text-accent transition-transform duration-200"
                />
              </button>
            )}
          </figure>

          <article className="flex flex-col items-start justify-center text-white bg-accent px-6 py-14 md:p-20 space-y-10 md:space-y-16">
            <h2 className="text-4xl font-medium sm:text-5xl">
              The Problem we Solve
            </h2>

            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:gap-y-10 text-sm md:text-base font-light text-white leading-relaxed ">
              <p className="">
                Most Nigerian schools have a discipline policy. Most Nigerian
                organisations have processes for when things go wrong. Very few
                have a safety system.
              </p>

              <p className="">
                The difference matters. A policy tells people what the rules
                are. A system is the living architecture — the culture, the
                training
              </p>

              <p className="">
                The reporting structures, the leadership behaviour, the response
                protocols — that actually determines whether people are safe or
                not.
              </p>

              <p className="font-heading text-2xl font-semibold">
                Peace Shapers builds the system.
              </p>
            </div>
          </article>
        </div>
        </AnimateIn>
      </Container>
    </section>
  );
};

export default ProblemWeSolve;
