import { skills, experiences } from "@/constants";
import Image from "next/image";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I&aposm <span className="blue-gradient_text">Dulmaa</span> 😇
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a front-end developer based in Mongolia, specializing in creating
          dynamic, responsive web interfaces that enhance user experience and
          bring design concepts to life.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill,index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}{" "}
        </div>

        <div className="py-16 mt-5">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I have worked with many companies alongside wonderful people,
              collaborating to build engaging, high-quality websites and
              applications that prioritize user satisfaction and innovation.
            </p>
          </div>
        </div>
        <div className="pb-16 ">
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
           
              {experiences.map((experience,index) => (
                <div  key={index} className="mt-5 ">
                  <h3 className="head-text">{experience.title}</h3>
                  <div className="mt-5 flex flex-col gap-3 text-slate-400 text-sm">
                    {experience.date}
                  </div>
                  <div className="mt-5 flex flex-col gap-3 text-slate-500 uppercase">
                    {experience.company_name}
                  </div>
                  <ul className="mt-5 flex flex-col gap-3 text-slate-500 list-disc">
                    {experience.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </div>
    </section>
  );
}
