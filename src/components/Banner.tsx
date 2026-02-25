import  { useRef, useEffect } from "react";
import { Hand } from "lucide-react";
import gsap from "gsap";
import TypingComponent from "../components/TypingComponent";
import Magnet from "./Magnet";


const Banner = () => {
    const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotate: 20,
        transformOrigin: "70% 70%",
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, []);
  

  return (
    <section className="mt-40 px-50">
      <div className="wrapper">
        <div className="container fade-out">
          <div className="bio ">
            <div className="flex items-center gap-2.5">
              <h2 className="text-white font-normal text-4xl">Hi There!</h2>
              <Hand
                className="animate-wave text-[var(--color-primary)]"
                size={40}
                ref={iconRef}
              />
            </div>
            <h2 className="font-normal text-5xl mt-8">
              <span className="text-white">I&apos;M </span>
              <span className="text-[var(--color-primary)]">Rawaa Ahmed</span>
            </h2>
            <h2 className="text-left ">
              <TypingComponent />
            </h2>
            <div className="download_cv mt-6 flex items-center justify-start ">
             
              <Magnet padding={50} disabled={false} magnetStrength={3}>
                 <a
                href="/files/Resume 2026.pdf"
                download={true}
                className="uppercase bg-[var(--color-primary)] text-white decoration-none text-left text-lg px-5 py-4 rounded-3xl"
              >
                download cv
              </a>
              </Magnet>
            </div>
          </div>
          
        </div>
        <div className="flex justify-end w-full fade-in">
            <code className="text-white">
              <span className="text-[var(--color-primary)] block">{"<span>"}</span>
             <div className="transform translate-x-6">
               <span className="block">a passionate Frontend Developer who loves building modern, responsive and</span>
              <span className="block">user-friendly web applications. I enjoy turning ideas into interactive</span>
              <span className="block">digital experiences using modern web technologies and clean UI design</span>
             </div>
              <span className="text-[var(--color-primary)] block">{"</span>"}</span>
            </code>
          </div>
      </div>
    </section>
  )
}

export default Banner
