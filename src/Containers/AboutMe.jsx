
import { FaCloudDownloadAlt, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import me from "../assets/images/me.png";

export default function AboutMe() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content flex flex-col text-left">
                <h1 className=" w-full text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Hi there! <br />
                  <span className=" text-[#5104c5]">I'm Mostafiz</span>
                </h1>
                <h3 className=" w-full text-[#813aeb] font-bold text-xl mb-5">Full-Stack Developer</h3>
                <p className=" text-base font-semibold text-body-color dark:text-dark-6 w-full">
                I'm Mostafiz, a passionate full-stack developer specializing in JavaScript, React.js, Next.js, and MongoDB. I enjoy building scalable web applications, user-friendly interfaces, and robust backend systems. My journey into programming started with curiosity, leading me to develop interactive and efficient digital solutions. Outside of coding, I love exploring new places, outdoor activities, and spending time with friends and family. I believe in continuous learning, teamwork, and creating impactful solutions.
                </p>
                <ul className=" w-full my-3 flex gap-5">
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaLinkedinIn /></Link></li>
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaTwitter /></Link></li>
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaFacebookF /></Link></li>
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaWhatsapp /></Link></li>
                </ul>
                <ul className="flex flex-wrap items-center gap-5 w-full">
                  <li><button className="btn bg-[#570acc] border-none text-lg"><FaCloudDownloadAlt /> Resume</button></li>
                  <li><button className="btn  text-lg border border-gray-600 hover:border-[#5104c5]"><MdOutlineEmail /> Contact</button></li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12 flex justify-center items-center">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block lg:pt-0">
                  <img
                    src={me}
                    alt="hero"
                    className=" lg:ml-auto w-full md:max-w-md rounded-tl-full rounded-tr-full rounded-br-full"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
