import Blob from "@/components/Blob";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

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
    </div>
  );
};
export default Page;
