import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Team from "@/components/Courses";
import Layout from "@/components/Layout";
import Blog from   "@/components/Blog";
import OurTeam from "@/components/OurTeam";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Header />
      <Logo />
      <Team />
      <Layout />
      <Blog />
      <OurTeam />
      <Testimonial />
      <Footer/>

    </div>
  );
}
