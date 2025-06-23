import TitleSection from './TitleSection'
import Project from './Project'

export default function Projects() {
    return (
        <>
            <TitleSection title="Project" />
            <div className=' md:grid grid-cols-3 gap-10'>
                <Project url={"/"} title={"FoodSharing"} desc={"Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback."} tool1={"HTML"} tool2={"CSS"} tool3={"JavaScript"} tool4={"React"} color={"red"} />
                <Project url={"/"} title={"CarDoctor"} desc={"Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback."} tool1={"HTML"} tool2={"Tailwind"} tool3={"JavaScript"} tool4={"React"} color={"blue"} />
                <Project url={"/"} title={"BookLibrary"} desc={"Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback."} tool1={"HTML"} tool2={"CSS"} tool3={"React"} tool4={"MongoDB"} color={"pink"} />
                <Project url={"/"} title={"PlantNet"} desc={"Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback."} tool1={"React"} tool2={"Tailwind"} tool3={"MongoDB"} tool4={"Express"} color={"purple"} />
                <Project url={"/"} title={"MicroEarning"} desc={"Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback."} tool1={"HTML"} tool2={"CSS"} tool3={"React"} tool4={"MongoDB"} color={"green"} />
                <Project url={"/"} title={"GadgetHeavens"} desc={"Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback."} tool1={"HTML"} tool2={"Tailwind"} tool3={"JavaScript"} tool4={"React"} color={"yellow"} />
            </div>
        </>
    )
}
