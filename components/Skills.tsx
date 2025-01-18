import Image from "next/image";

const Skills = () => {
  return (
    <div className="container mt-20 font-sans">
      <div className="SKILLS_TITLe flex items-center justify-center flex-col text-center gap-4">
        <h1 className="yellow_gradiet text-3xl font-semibold md:text-4xl xl:text-6xl">
          My Skills
        </h1>
        <p className="text-sm font-normal font-sans md:text-lg max-w-[60ch] xl:text-xl">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>

      <div className="SKILLS grid grid-cols-2 gap-4 mt-12 md:grid-cols-3 lg:grid-cols-6">

       

        <div className="flex flex-col gap-6 items-center group ">
          <div className="py-10 px-11 bg-zinc-900 hover:bg-yellow-900 rounded-3xl flex items-center justify-center hover:border-2 hover:border-yellow-500 transition-all duration-300">
            <Image src={`/photoshop.png`} alt="skill" width={120} height={120} className="grayscale group-hover:grayscale-0"/>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Photoshop</h1>
          </div>
        </div>

             
        <div className="flex flex-col gap-6 items-center group ">
          <div className="py-10 px-11 bg-zinc-900 hover:bg-yellow-900 rounded-3xl flex items-center justify-center hover:border-2 hover:border-yellow-500 transition-all duration-300">
            <Image src={`/aftereffects.png`} alt="skill" width={120} height={120} className="grayscale group-hover:grayscale-0"/>
          </div>
          <div>
            <h1 className="text-xl font-semibold">After Effects</h1>
          </div>
        </div>


        <div className="flex flex-col gap-6 items-center group ">
          <div className="py-10 px-11 bg-zinc-900 hover:bg-yellow-900 rounded-3xl flex items-center justify-center hover:border-2 hover:border-yellow-500 transition-all duration-300">
            <Image src={`/Davinci.png`} alt="skill" width={120} height={120} className="grayscale group-hover:grayscale-0"/>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Davinci</h1>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center group ">
          <div className="py-10 px-11 bg-zinc-900 hover:bg-yellow-900 rounded-3xl flex items-center justify-center hover:border-2 hover:border-yellow-500 transition-all duration-300">
            <Image src={`/premierpro.png`} alt="skill" width={120} height={120} className="grayscale group-hover:grayscale-0"/>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Premier Pro</h1>
          </div>
        </div>

        
        <div className="flex flex-col gap-6 items-center group ">
          <div className="py-10 px-11 bg-zinc-900 hover:bg-yellow-900 rounded-3xl flex items-center justify-center hover:border-2 hover:border-yellow-500 transition-all duration-300">
            <Image src={`/unreal.png`} alt="skill" width={120} height={120} className="grayscale group-hover:grayscale-0"/>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Unreal Engine</h1>
          </div>
        </div>

        
        
        <div className="flex flex-col gap-6 items-center group ">
          <div className="py-10 px-11 bg-zinc-900 hover:bg-yellow-900 rounded-3xl flex items-center justify-center hover:border-2 hover:border-yellow-500 transition-all duration-300">
            <Image src={`/blender.png`} alt="skill" width={120} height={120} className="grayscale group-hover:grayscale-0"/>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Blender</h1>
          </div>
        </div>





      </div>
    </div>
  );
};
export default Skills;
