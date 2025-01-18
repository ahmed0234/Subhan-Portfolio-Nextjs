"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Download, Instagram } from "lucide-react";
import Image from "next/image";

const Header = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".HEADER_TITLE", {
      y: 400,
      opacity: 0,
      ease: "power3.inOut",
    })
      .from(".HEADER_IMAGE", {
        y: 400,
        rotate: "0deg",
        opacity: 0,
        ease: "power3.inOut",
        delay: -0.2,
      })
      .from(".HEADER_DESCRIPTION", {
        y: 400,
        opacity: 0,
        ease: "power3.inOut",
        delay: -0.2,
      })
      .from(".HEADER_SOCIALS", {
        y: 400,
        opacity: 0,
        ease: "power3.inOut",
        delay: -0.2,
      })
      .from(".ICON", {
        opacity: 0,
        x: 20,
        delay: -0.2,
        ease: "power2.in",
      })
      .to(".HEADER_IMAGE", {
        rotate: "-6deg",
        delay: -0.2,
        ease: "power4",
        duration: 0.5,
      })
      .to(".HEADER_IMAGE", {
        delay: -0.2,
        ease: "power4",
        duration: 0.5,
        rotate: "0deg",
      });
  });
  return (
    <header className="container flex flex-col gap-8 sm:flex-row lg:justify-center lg:items-center relative">
      <div className="HEADER_BACKGROUND_BLUR_GLOW_EFFECT absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-96  bg-yellow-500 rounded-full opacity-30 blur-3xl flex items-center justify-center animate-pulse"></div>
      <div className="JOIN flex flex-col gap-8 sm:flex-1 ">
        <div className="HEADER_TITLE font-sans">
          <h3 className="font-semibold text-lg sm:text-xl xl:text-2xl 2xl:text-3xl">
            I am Subhan Shahid
          </h3>
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to bg-yellow-200">
            Multi-Media
            <br />
            Artist
          </h1>
        </div>
        <div className="HEADER_IMAGE px-4 sm:hidden">
          <Image
            src={`https://myswmj0bx7.ufs.sh/f/S3rRKhy2jOuAEQXGFU02wE8qVfyuGZXvU4LFizTkRWtSKA70`}
            alt="Subhan Shahid"
            width={500}
            height={530}
            className="border object-cover bg-cover border-yellow-700 rounded-2xl hover:border-yellow-400 hover:border-2 transition-all duration-200 ease-in-out rotate-6 hover:rotate-0 hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="HEADER_DESCRIPTION">
          <p className="font-sans text-sm sm:text-lg">
            Hey there, I'm Subhan Shahid, a multimedia artist fueled by a
            passion for creativity and innovation. With expertise in 3D
            modeling, video editing, VFX, CGI, and more, I'm dedicated to
            pushing the boundaries of digital artistry. From crafting immersive
            environments to telling captivating stories through video, I'm here
            to bring your ideas to life with precision and flair. Let's
            collaborate and create something extraordinary together!
          </p>
        </div>
        <div className="HEADER_SOCIALS flex flex-col gap-4 items-start xl:flex-row xl:items-center">
          <div className="w-full sm:w-fit">
            <a href="https://drive.google.com/file/d/1VLy2ZXuMJ8_OSZ-22_Pf_GBL9H8Igjz0/view" target="_blank">
            <button className="w-full font-semibold lg:text-lg sm:w-fit px-6 py-3 flex gap-2 items-center border justify-center border-yellow-400 rounded-3xl text-yellow-500 hover:bg-yellow-400 hover:text-black transition-all duration-200 ease-in-out group">
              Download CV
              <Download className="size-6 text-yellow-400 group-hover:text-black transition-all duration-200" />
            </button>
            </a>
          </div>
          <div className="SOCIAL_ICONS flex items-center justify-center gap-4">
            <div className="ICON p-2 border border-yellow-400 rounded-full inline-block group hover:bg-yellow-400 transition-all duration-200 ease-in-out">
              <a href="https://www.upwork.com/freelancers/~01fc691ec1a320c941?mp_source=share" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="size-5 lg:size-6 text-yellow-400 group-hover:text-black transition-all duration-200"
                  fill="currentColor"
                >
                  <path d="M 1 9 A 1.0001 1.0001 0 0 0 0 10 L 0 24.5 C 0 30.832314 5.1676857 36 11.5 36 C 17.222701 36 21.784718 31.707225 22.650391 26.220703 C 23.266946 27.074852 23.852862 27.94719 24.548828 28.728516 C 23.305285 33.997601 21.75435 40.586226 21.003906 43.771484 A 1.0001 1.0001 0 0 0 21.976562 45 L 28.140625 45 A 1.0001 1.0001 0 0 0 29.115234 44.228516 C 29.796783 41.335284 30.661366 37.663644 31.474609 34.212891 C 33.325586 35.182074 35.46699 36 38 36 C 44.607457 36 50 30.607457 50 24 C 50 17.392543 44.607457 12 38 12 C 33.351597 12 29.329494 14.73649 27.349609 18.787109 C 25.250367 15.153046 23.679535 11.321256 23.107422 9.671875 A 1.0001 1.0001 0 0 0 22.162109 9 L 16 9 A 1.0001 1.0001 0 0 0 15 10 L 15 24.5 C 15 26.438477 13.438477 28 11.5 28 C 9.5615232 28 8 26.438477 8 24.5 L 8 10 A 1.0001 1.0001 0 0 0 7 9 L 1 9 z M 2 11 L 6 11 L 6 24.5 C 6 27.523523 8.4764768 30 11.5 30 C 14.523523 30 17 27.523523 17 24.5 L 17 11 L 21.482422 11 C 22.273404 13.215441 23.944949 17.537644 26.566406 21.546875 A 1.0001 1.0001 0 0 0 28.367188 21.269531 C 29.570504 16.954686 33.490696 14 38 14 C 43.522543 14 48 18.477457 48 24 C 48 29.522543 43.522543 34 38 34 C 35.415566 34 33.139372 33.060118 31.306641 31.933594 A 1.0001 1.0001 0 0 0 29.810547 32.556641 C 28.977084 36.092572 28.087065 39.869349 27.349609 43 L 23.240234 43 C 24.068273 39.484692 25.440674 33.656175 26.601562 28.738281 A 1.0001 1.0001 0 0 0 26.359375 27.826172 C 25.067499 26.438388 23.890106 24.834136 22.845703 23.173828 A 1.0001 1.0001 0 0 0 21 23.707031 L 21 24.5 C 21 29.747686 16.747686 34 11.5 34 C 6.2523143 34 2 29.747686 2 24.5 L 2 11 z M 38 18 C 35.267007 18 32.868994 19.854944 32.189453 22.5 C 32.117963 22.778361 31.79793 24.13658 31.296875 26.257812 A 1.0001 1.0001 0 0 0 31.640625 27.265625 C 33.155461 28.493019 35.372083 30 38 30 C 41.299377 30 44 27.299377 44 24 C 44 20.700623 41.299377 18 38 18 z M 38 20 C 40.214623 20 42 21.785377 42 24 C 42 26.214623 40.214623 28 38 28 C 36.36884 28 34.726398 27.035602 33.404297 26.041016 C 33.766735 24.509483 34.108542 23.067781 34.126953 22.996094 C 34.581412 21.22715 36.166993 20 38 20 z"></path>
                </svg>
              </a>
            </div>
            <div className="ICON p-2 border border-yellow-400 rounded-full inline-block group hover:bg-yellow-400 transition-all duration-200 ease-in-out">
              <a href="https://www.instagram.com/subhann.shahid/" target="_blank">
                <Instagram className="size-5 lg:size-6 text-yellow-400 group-hover:text-black transition-all duration-200" />
              </a>
            </div>
            <div className="ICON p-2 border border-yellow-400 rounded-full inline-block group hover:bg-yellow-400 transition-all duration-200 ease-in-out">
              <a href="https://api.whatsapp.com/send/?phone=%2B923171511108&text=Can%20we%20talk?&type=phone_number&app_absent=0" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="size-5 lg:size-6 text-yellow-400 group-hover:text-black transition-all duration-200"
                  fill="currentColor"
                >
                  <path d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="HEADER_IMAGE px-4 hidden sm:flex flex-1  items-center justify-center">
        <Image
          src={`https://myswmj0bx7.ufs.sh/f/S3rRKhy2jOuAEQXGFU02wE8qVfyuGZXvU4LFizTkRWtSKA70`}
          alt="Subhan Shahid"
          width={500}
          height={530}
          className="border object-cover bg-cover border-yellow-700 rounded-2xl hover:border-yellow-400 hover:border-2 transition-all duration-200 ease-in-out rotate-6 hover:rotate-0 hover:scale-105 hover:shadow-lg"
        />
      </div>
    </header>
  );
};
export default Header;
