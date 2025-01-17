"use client";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    const navbar: any = document.querySelector(".MOBILE_MENU");
    navbar.classList.toggle("hidden");
    setopen(!open);
  };
  return (
    <>
      <div className="border-b w-full overflow-x-hidden mb-4 sm:mb-8 lg:mb-10 2xl:mb-12">
        <nav className="container py-4 flex justify-between items-center">
          <div className="LOGO">
            <Image
              src="https://myswmj0bx7.ufs.sh/f/S3rRKhy2jOuAuZ4tSiwXw4mLEfdK3zBVgUSAxYjceuHO0vWy"
              alt="logo"
              width={70}
              height={70}
              className=""
            />
          </div>

          <div className="HAMBURGER md:hidden" onClick={handleClick}>
            {open ? (
              <X className="text-yellow-400 size-8 cursor-pointer " />
            ) : (
              <AlignRight className="text-yellow-400 size-8 cursor-pointer " />
            )}
          </div>

          <div className="LARGE_SCREEN_LINKS hidden md:flex font-sans">
            <ul className="flex items-center justify-center gap-4 lg:gap-5 xl:gap-6 text-yellow-400">
              <li className="navlinks">
                <Link href="/">Home</Link>
              </li>
              <li className="navlinks">
                <Link href="#Projects">Projects</Link>
              </li>
              <li className="navlinks">
                <Link href="#Services">Services</Link>
              </li>
              <li className="navlinks">
                <Link href="#Resume">Resume</Link>
              </li>
              <li className="navlinks">
                <Link href="#Testimonials">Testimonials</Link>
              </li>
              <li className="navlinks">
                <Link href="#Reviews">Reviews</Link>
              </li>
              <li className="lg:pl-4">
                <Link href={"#Contact"}>
                  <Button className="bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-300 hover:to-yellow-500 border-none ring-0 font-sans font-semibold transition-all duration-300 ease-linear">
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="MOBILE_MENU h-screen bg-stone-950 hidden">
        <div className="LARGE_SCREEN_LINKS flex md:hidden font-sans w-full h-screen">
          <ul className="flex flex-col items-center justify-center gap-6  text-yellow-400 w-full h-full">
            <li className="navlinks" onClick={handleClick}>
              <Link href="/">Home</Link>
            </li>
            <li className="navlinks" onClick={handleClick}>
              <Link href="#Projects">Projects</Link>
            </li>
            <li className="navlinks" onClick={handleClick}>
              <Link href="#Services">Services</Link>
            </li>
            <li className="navlinks" onClick={handleClick}>
              <Link href="#Resume">Resume</Link>
            </li>
            <li className="navlinks" onClick={handleClick}>
              <Link href="#Testimonials">Testimonials</Link>
            </li>
            <li className="navlinks" onClick={handleClick}>
              <Link href="#Reviews">Reviews</Link>
            </li>
            <li className="lg:pl-4" onClick={handleClick}>
              <Link href={"#Contact"}>
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-300 hover:to-yellow-500 border-none ring-0 font-sans font-semibold transition-all duration-300 ease-linear">
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
