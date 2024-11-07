import { arrow } from "@/assets/icons";
import CTA from "@/components/CTA";
import Loader from "@/components/Loader";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          As a front-end developer, I&aposve taken on a variety of projects over the
          years, but these are the ones that truly resonate with me. Feel free
          to share your ideas! I&aposm always open to collaboration and excited to
          bring new concepts to life in ways that enhance user experience and
          push the boundaries of design
        </p>
      </div>
      <div>
        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:width-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <Image
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-15 h-15 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                <p>{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                    <Link href={project.link} target="_blank" rel="nooperner noreferrer" className="font-semibold text-blue-600">
                    Live Link
                    </Link>
                    <Image
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  );
}
