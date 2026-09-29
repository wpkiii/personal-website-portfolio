import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap";
import { media } from "@/animations/config";

const MAX_TILT = 6; // degrees at the card's edges

// Tilts its contents slightly toward the cursor, with a soft light glare
// that follows the pointer. Mouse/trackpad only and off under reduced
// motion, so touch devices and reduced-motion visitors get a plain card.
export default function TiltCard({ children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      const mm = gsap.matchMedia();
      mm.add(`${media.motion} and ${media.finePointer}`, () => {
        gsap.set(el, { transformPerspective: 900 });
        const toX = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
        const toY = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });

        const move = (e) => {
          // Measure the untilted parent so the tilt doesn't feed back into itself
          const r = el.parentElement.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          toY((px - 0.5) * 2 * MAX_TILT);
          toX(-(py - 0.5) * 2 * MAX_TILT);
          el.style.setProperty("--glare-x", `${px * 100}%`);
          el.style.setProperty("--glare-y", `${py * 100}%`);
        };
        const leave = () => {
          toX(0);
          toY(0);
        };

        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="tilt-card relative rounded-lg">
      {children}
      <span aria-hidden="true" className="tilt-glare" />
    </div>
  );
}
