import { MoveUpRight } from "lucide-react";

const Services = () => {
  return (
    <div className="container mt-20 font-semibold font-sans flex flex-col gap-6 items-center justify-center">
      <div className="SERVICES_TITLE flex flex-col items-center justify-center text-center gap-4">
        <h1
          className="yellow_gradiet text-2xl font-semibold md:text-4xl xl:text-6xl"
          id="Services"
        >
          My Quality Services
        </h1>
        <p className="text-sm font-normal font-sans md:text-lg max-w-[75ch] xl:text-xl">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>

      <div className="mx-auto lg:hidden">
        <a
          href="https://subhanshahidshowcase.vercel.app/#ytthumb"
          target="_blank"
        >
          <button className="px-6 py-3 yellow_bg_gradient text-black font-semibold rounded-lg text-xl drop-shadow-xl shadow-yellow-400">
            View My Work!
          </button>
        </a>
      </div>

      <div className="SERVICES_MAIN_PART hidden lg:flex flex-col gap-8 justify-center mt-8 xl:mt-12">
        {/* 01 start */}
        <a
          href="https://subhanshahidshowcase.vercel.app/#ytthumb"
          target="_blank"
        >
          <div className="SERVICES relative flex gap-6 items-center justify-between px-4 py-4 group cursor-pointer border-b">
            <div className="flex items-center justify-between">
              <h1 className="flex gap-4 items-center">
                <span className="text-yellow-400 group-hover:text-black group-hover:rotate-90">
                  01{" "}
                </span>
                <span className="text-3xl">Branding Design</span>
              </h1>
            </div>
            <div className="w-[60%]">
              <p className="text-base">
                Build and integrate APIs to connect websites with third-party
                applications, enhancing functionality and performance.
              </p>
            </div>
            <div>
              <MoveUpRight className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
        </a>
        {/* 01 end */}

        {/* 01 start */}
        <a
          href="https://subhanshahidshowcase.vercel.app/#posterdesigns"
          target="_blank"
        >
          <div className="SERVICES relative flex gap-6 items-center justify-between px-4 py-4 group cursor-pointer border-b">
            <div className="flex items-center justify-between">
              <h1 className="flex gap-4 items-center">
                <span className="text-yellow-400 group-hover:text-black group-hover:rotate-90">
                  02{" "}
                </span>
                <span className="text-3xl">Poster Designs</span>
              </h1>
            </div>
            <div className="w-[60%]">
              <p className="text-base">
                Build and integrate APIs to connect websites with third-party
                applications, enhancing functionality and performance.
              </p>
            </div>
            <div>
              <MoveUpRight className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
        </a>
        {/* 01 end */}

        {/* 01 start */}
        <a
          href="https://subhanshahidshowcase.vercel.app/#videoediting"
          target="_blank"
        >
          <div className="SERVICES relative flex gap-6 items-center justify-between px-4 py-4 group cursor-pointer border-b">
            <div className="flex items-center justify-between">
              <h1 className="flex gap-4 items-center">
                <span className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300">
                  03{" "}
                </span>
                <span className="text-3xl">Video Editing</span>
              </h1>
            </div>
            <div className="w-[60%]">
              <p className="text-base">
                Build and integrate APIs to connect websites with third-party
                applications, enhancing functionality and performance.
              </p>
            </div>
            <div>
              <MoveUpRight className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
        </a>
        {/* 01 end */}

        {/* 01 start */}
        <a
          href="https://subhanshahidshowcase.vercel.app/#3denvbuilding"
          target="_blank"
        >
          <div className="SERVICES relative flex gap-6 items-center justify-between px-4 py-4 group cursor-pointer border-b">
            <div className="flex items-center justify-between">
              <h1 className="flex gap-4 items-center">
                <span className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300">
                  04{" "}
                </span>
                <span className="text-3xl">3D Modeling</span>
              </h1>
            </div>
            <div className="w-[60%]">
              <p className="text-base">
                Build and integrate APIs to connect websites with third-party
                applications, enhancing functionality and performance.
              </p>
            </div>
            <div>
              <MoveUpRight className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
        </a>
        {/* 01 end */}

        {/* 01 start */}
        <a
          href="https://subhanshahidshowcase.vercel.app/#3denvbuilding"
          target="_blank"
        >
          <div className="SERVICES relative flex gap-6 items-center justify-between px-4 py-4 group cursor-pointer border-b">
            <div className="flex items-center justify-between">
              <h1 className="flex gap-4 items-center">
                <span className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300">
                  07
                </span>
                <span className="text-3xl">3D Animations</span>
              </h1>
            </div>
            <div className="w-[60%]">
              <p className="text-base">
                Build and integrate APIs to connect websites with third-party
                applications, enhancing functionality and performance.
              </p>
            </div>
            <div>
              <MoveUpRight className="text-yellow-400 group-hover:text-black group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
        </a>
        {/* 01 end */}
      </div>
    </div>
  );
};
export default Services;
