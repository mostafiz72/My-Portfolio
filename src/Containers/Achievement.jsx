import Lottie from "lottie-react";
import PropTypes from 'prop-types';

export default function Achievement({lottieIcon, title, desc}) {
    return (
        <>
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                <div className=' flex flex-col justify-between items-center w-full'>
                    <div className=' w-6/12'>
                        <Lottie animationData={lottieIcon}></Lottie>
                    </div>
                    <div className=' text-5xl pt-5 text-[#fff] font-bold w-full'>{title}</div>
                    {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                </div>
                <p className=' w-full py-5 text-xl font-bold text-[#8434fc]'>
                    {desc}
                </p>
            </div>
        </>
    )
}


Achievement.propTypes = {
  lottieIcon: PropTypes.any.isRequired, // or PropTypes.node / PropTypes.element depending on what it is
  title: PropTypes.any.isRequired,
  desc: PropTypes.any.isRequired,
};