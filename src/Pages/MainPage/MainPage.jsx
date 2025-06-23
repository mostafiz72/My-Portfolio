// import animationData from "../../assets/lottile/projapoti.json";
import animationData from "../../assets/lottile/bg.json";
// import animationData from "../../assets/lottile/bgani.json";
import Lottie from 'lottie-react';
import AboutMe from '../../Containers/AboutMe';
import Navbar from '../../Containers/Navbar';
import Skills from '../../Containers/Skills';
import Projects from '../../Containers/Projects';
import Achievements from '../../Containers/Achievements';
import Contact from '../../Containers/Contact';
import Footer from '../../Containers/Footer';
import Builders from '../../Containers/Builders';

export default function MainPage() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Fixed Lottie Background */}
        <div className="fixed bg-[#0E0E1B] inset-0 -z-10 w-full min-h-full h-screen">
          <Lottie animationData={animationData} loop className="w-full h-full object-cover" />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 text-center text-white space-y-10 container mx-auto w-11/12">
        <Navbar />
        <div><AboutMe /></div>
        <div><Builders /></div>
        <div><Skills /></div>
        <div><Projects /></div>
        <div><Achievements /></div>
        <div><Contact /></div>
        <div><Footer /></div>
        </div>
      </div>
    </>
  )
}
