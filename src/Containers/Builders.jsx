import TitleSection from './TitleSection'
// import Lottie from 'lottie-react'
import engineer from '../assets/lottile/enginnering.json'
import design from '../assets/lottile/rocket.json'
import marketing from '../assets/lottile/marketing.json'
import Builder from '../Pages/MainPage/Builder'

export default function Builders() {
    return (
        <>
            <TitleSection title={'A True Builder'} />
            <div className=' md:flex justify-between items-center gap-10'>
                <Builder lottieIcoln={engineer} title={"Enginnering"} desc={"Software engineering with expertise in Web and AI Technologies."} />
                <Builder lottieIcoln={design} title={"Design"} desc={"Creating intuitive user experiences and visually appealing interfaces."} />
                <Builder lottieIcoln={marketing} title={"Marketing"} desc={"Building and growing products with effective marketing strategies."} />
            </div>
        </>
    )
}
