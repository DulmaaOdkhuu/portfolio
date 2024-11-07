import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

type HomeInfoProps = {
    currentStage: number;
};

interface InfoBoxProps {
    text: string;
    link?: string;  // Optional prop
    btnText?: string;  // Optional prop
}
const InfoBox = ({ text, link, btnText }: InfoBoxProps) => (
    <div className="info-box">
      <p className='font-medium sm:text-xl text-center'>  {text}</p>
        {link && btnText && (
            <Link className="neo-brutalism-white neo-btn" href={link}>
                {btnText}
                <div className='w-4 h-4 object-contain'><FaArrowRight/></div>
            </Link>
        )}
    </div>
);

const renderContent: { [key: number]: JSX.Element } = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 rounded-lg text-white mx-5">
            Hi, I am <span className="font-semibold">Dulmaa Odkhuu</span> 👋 
            <br /> A Creative Developer from Mongolia.
        </h1>
    ), 
    2: <InfoBox text= "I have collaborated with a diverse range of companies"
    link="/about"
    btnText='Learn More'
    />,
    3: <InfoBox text= "Engaged in multiple projects"
    link="/projects"
    btnText='Visit My Portfolio'
    />,
    4: <InfoBox text= "Looking for a dev?"
    link="/contact"
    btnText='Lets talk'
    />,
};



export default function HomeInfo({ currentStage }: HomeInfoProps) {
    return renderContent[currentStage] || null;
}