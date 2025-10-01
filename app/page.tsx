import About from "@/components/pages/Landing/About";
import ClassTime from "@/components/pages/Landing/ClassTime";
import Coach from "@/components/pages/Landing/Coach";
import Courses from "@/components/pages/Landing/Courses";
import Footer from "@/components/pages/Landing/Footer";
import Hero from "@/components/pages/Landing/Hero";
import Navbar from "@/components/pages/Landing/Navbar";
import Pricing from "@/components/pages/Landing/Pricing";
import Contact from "@/components/templates/Contact";
import ReviewsSlider from "@/components/pages/Landing/ReviewsSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Coach />
      <ClassTime />
      <Pricing />
      <ReviewsSlider />
      <Contact />
      <Footer />
    </div>
  );
}
