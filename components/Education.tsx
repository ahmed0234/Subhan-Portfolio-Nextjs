import { Award, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="container mt-20 font-sans">

      <div className="MAIN_CONTAINER grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">


        <div className="MY_EXPERIENCE font-sans">

          <div className="experience_title flex gap-2 items-center">
            <Award className="size-12 text-yellow-400"/>
            <h1 className="text-4xl yellow_gradiet font-semibold">Experience</h1>
          </div>

            <div className="EXPERIENCEES mt-8 flex flex-col gap-8"> 

                    <div className="px-4 py-3 bg-yellow-950 rounded-3xl xl:max-w-[90%] 2xl:max-w-[80%]">
                        <h1 className="yellow_gradiet font-semibold text-xl">2020 - 2021</h1>   
                        <h1 className="text-2xl lg:text-3xl font-semibold">Senior Graphic Designer</h1> 
                        <h1>Gethreem Rawalpindi</h1>
                    </div>  

                    <div className="px-4 py-3 bg-yellow-950 rounded-3xl xl:max-w-[90%] 2xl:max-w-[80%]">
                        <h1 className="yellow_gradiet font-semibold text-xl">2021 - 2022</h1>   
                        <h1 className="text-2xl lg:text-3xl font-semibold">UI Department Head</h1> 
                        <h1>Rubrics/Bahria Town ph7</h1>
                    </div>  

                    <div className="px-4 py-3 bg-yellow-950 rounded-3xl xl:max-w-[90%] 2xl:max-w-[80%]">
                        <h1 className="yellow_gradiet font-semibold text-xl">2015 - Present</h1>   
                        <h1 className="text-2xl lg:text-3xl font-semibold">Techno World / Rawalpindi</h1> 
                        <h1>Owner & Operations Manager</h1>
                    </div>  

            </div>
            
        </div>

        <div className="MY_EDUCATION font-sans">

<div className="experience_title flex gap-2 items-center">
  <GraduationCap  className="size-12 text-yellow-400"/>
  <h1 className="text-4xl yellow_gradiet font-semibold">Education</h1>
</div>

  <div className="EXPERIENCEES mt-8 flex flex-col gap-8"> 

          <div className="px-4 py-3 bg-yellow-950 rounded-3xl xl:max-w-[90%] 2xl:max-w-[80%]">
              <h1 className="yellow_gradiet font-semibold text-xl">2017 - 2020</h1>   
              <h1 className="text-2xl lg:text-3xl font-semibold">O - Levels</h1> 
              <h1>Benchmark College</h1>
          </div>  

          <div className="px-4 py-3 bg-yellow-950 rounded-3xl xl:max-w-[90%] 2xl:max-w-[80%]">
              <h1 className="yellow_gradiet font-semibold text-xl">2020 - 2023</h1>   
              <h1 className="text-2xl lg:text-3xl font-semibold">A - Levels</h1> 
              <h1>Benchmark College</h1>
          </div>  

  </div>
  
</div>




      </div>
    </div>
  );
};
export default Education;
