import TitleSection from './TitleSection'
import man from '../assets/lottile/man.json'
import time from '../assets/lottile/time.json'
import star from '../assets/lottile/star.json'
import Achievement from './Achievement'

export default function Achievements() {
    return (
        <>
            <TitleSection title={'Achievements'} />
            <div className=' md:flex justify-between items-center gap-10'>
                <Achievement lottieIcon={man} title={"4+"} desc={"Years Active"} />
                <Achievement lottieIcon={star} title={"4.7+"} desc={"Average Rating"} />
                <Achievement lottieIcon={time} title={"100k+"} desc={"Worldwide Users"} />
            </div>
        </>
    )
}
