import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Team from "@/components/Courses";
import Layout from "@/components/Layout";
import Layout2 from "@/components/Layoutcopy";
import Blog from   "@/components/Blog";
import OurTeam from "@/components/OurTeam";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Top from "@/components/Top";
export default function Home() {
  return (
    <div  >
      <Top />
      <div className="h-0 sm:h-4"></div>
      <Navbar  />
      <Header />
      <Logo />
      <Team />
      <Layout />
      <Layout2/>
      <Blog /> 
      <OurTeam />
      <Testimonial />
       <Footer/>

    </div>
  );
}
