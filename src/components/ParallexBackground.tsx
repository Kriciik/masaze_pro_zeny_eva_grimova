import { useEffect, useRef } from "react";
import logo_mobile from "../assets/27079_logo_zakladni.png";
import logo_pc from "../assets/logo_pc.png";

export default function ParallexBackground() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;

        imageRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative h-[70vh] w-full">
      <div
        ref={imageRef}
        className="absolute top-0 left-0 z-0 h-full w-full will-change-transform"
      >
        <img
          src={logo_mobile}
          alt="logo_zakladni_mobile"
          className="block h-auto w-full object-cover md:hidden"
        />

        <img
          src={logo_pc}
          alt="logo_zakladni_pc"
          className="mx-auto hidden h-auto w-auto max-w-full pt-10 md:block"
        />
      </div>
    </div>
  );
}
