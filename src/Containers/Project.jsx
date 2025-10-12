import { RiExternalLinkLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Project({url, title, desc, tool1, tool2, tool3, tool4, tool5, color}) {


const colorMap = {
  red: 'text-red-500 hover:border-red-500',
  blue: 'text-blue-500 hover:border-blue-500',
  pink: 'text-pink-500 hover:border-pink-500',
  purple: 'text-purple-500 hover:border-purple-500',
  green: 'text-green-500 hover:border-green-500',
  yellow: 'text-yellow-500 hover:border-yellow-500',
};


const colorClass = colorMap[color] || 'text-white hover:border-[#7e31f1ab]';


    return (
        <>
            <Link to={url}>
                <div className={`bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-1 flex flex-col justify-center items-center border-gray-800 ${colorClass}`}>
                    <div className=' flex justify-between items-center w-full'>
                        <div className={`text-2xl ${colorClass.split( )[0]} font-bold`}>{title}</div>
                        <div className={`text-2xl ${colorClass.split( )[0]}`}><RiExternalLinkLine /></div>
                        {/* <Lottie animationData={language}></Lottie> */}
                    </div>
                    <p className=' w-full text-white text-left py-5'>
                        {desc}
                    </p>
                    <ul className='flex flex-wrap gap-3 text-left w-full'>
                        <li className={`bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md ${colorClass} border border-gray-800 ${tool1? "": "hidden"}`}>{tool1}</li>
                        <li className={`bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md ${colorClass} border border-gray-800 ${tool2? "": "hidden"}`}>{tool2}</li>
                        <li className={`bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md ${colorClass} border border-gray-800 ${tool3? "": "hidden"}`}>{tool3}</li>
                        <li className={`bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md ${colorClass} border border-gray-800 ${tool4? "": "hidden"}`}>{tool4}</li>
                        <li className={`bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md ${colorClass} border border-gray-800 ${tool5? "": "hidden"}`}>{tool5}</li>
                       
                    </ul>
                </div>
            </Link>
        </>
    )
}


Project.propTypes = {
  url: PropTypes.any.isRequired, // or PropTypes.node / PropTypes.element depending on what it is
  title: PropTypes.any.isRequired,
  desc: PropTypes.any.isRequired,
  tool1: PropTypes.any.isRequired,
  tool2: PropTypes.any.isRequired,
  tool3: PropTypes.any.isRequired,
  tool4: PropTypes.any.isRequired,
  tool5: PropTypes.any.isRequired,
  color: PropTypes.any.isRequired,
};