import { useEffect, useRef } from 'react';

// Drop-in replacement for GIFs: a muted, looping video from /public/media.
// Nothing downloads until the video nears the viewport, and it pauses while
// off-screen. Reduced-motion visitors get the still poster plus controls.
export default function LoopVideo({ name, webm = true, className = '', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.controls = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: '200px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={`/media/${name}-poster.webp`}
      className={className}
      {...props}
    >
      {webm && <source src={`/media/${name}.webm`} type="video/webm" />}
      <source src={`/media/${name}.mp4`} type="video/mp4" />
    </video>
  );
}
