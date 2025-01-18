import Blob from "@/components/Blob";
import ContactForm from "@/components/Contactform";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { TestimonialSlider } from "@/components/Testimonialslider";
import { VideoTestimonialSlider } from "@/components/Videotestimonials";

const Page = () => {
  return (
    <div className="relative">
      <Blob />
      <Navbar />
      <Header />
      <Experience />
      <Services />
      <Education />
      <Skills />
      <TestimonialSlider />
      <VideoTestimonialSlider />
      <ContactForm />
    </div>
  );
};
export default Page;
