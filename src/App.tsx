import logo from "../src/assets/Screenshot_13-removebg-preview-1.svg";
import videobg from "../src/assets/videoplayback (1).mp4";
import image from "../src/assets/Imagem do WhatsApp de 2024-09-24 à(s) 00.35.44_0bbccc27.jpg";
import footerImage from "../src/assets/Copyright ©️ Tg Dev - 2024.svg";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  RiLinkedinFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoVuejs } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { ProjectCard } from "./components/CardsProjects";
import { CertificateCard } from "./components/CardsCertificates";
import { MdOutgoingMail } from "react-icons/md";
import { MobileHeader } from "./components/MenuMobile";

export function PagePortfolio() {
  const projects = [
    {
      name: "Money Manager",
      description:
        "I created a website to help people have financial control, being able to add inflows or outflows of money.",
      technologies: ["React", " Tailwind CSS", " Typescript"],
      url: "https://money-manager-alpha.vercel.app",
      repository: "https://github.com/tiagolopes-dev/MoneyManager",
    },
    {
      name: "To-Do List",
      description:
        "I created a website that helps people organize themselves, optimize their tasks, and list the tasks done.",
      technologies: ["React", " Tailwind CSS", " Typescript"],
      url: "https://todolist-psi-black.vercel.app",
      repository: "https://github.com/tiagolopes-dev/todolist",
    },
    {
      name: "Clima Tempo",
      description:
        "I created a website where people can see the weather forecast for the day in any region of the world.",
      technologies: ["Html", " CSS", " Typescript", " API Public Weather"],
      url: "https://tiagolopes-dev.github.io/Clima-Tempo/",
      repository: "https://github.com/tiagolopes-dev/Clima-Tempo",
    },
    {
      name: "Recruitment Test",
      description:
        "I created a website where a company designed it and I had to redo it the same way.",
      technologies: ["NextJS", " Tailwind CSS", " Typescript"],
      url: "https://russel-teste-frontend.vercel.app",
      repository: "https://github.com/tiagolopes-dev/russel-teste-frontend",
    },
    {
      name: "Tg Hub",
      description:
        "I created a website where people can see synopses and trailers of some films chosen by me.",
      technologies: ["Html", " Css", " JavaScript"],
      url: "https://tiagolopes-dev.github.io/TgHub/index.html",
      repository: "https://github.com/tiagolopes-dev/TgHub",
    },
    {
      name: "Mario Game",
      description:
        "I created a website where people can see synopses and trailers of some films chosen by me.",
      technologies: ["Html", " Css", " JavaScript"],
      url: "https://tiagolopes-dev.github.io/mario-game/",
      repository: "https://github.com/tiagolopes-dev/mario-game",
    },
  ];

  const courses = [
    {
      name: "NLW Expert Trilha HTML, CSS e Javascript",
      institution: "Rockeatseat",
      state: "Completed",
    },
    {
      name: "Raciocínio lógico",
      institution: "Curso em video",
      state: "Completed",
    },
    {
      name: "Curso Web Moderno Completo com JavaScript + Projetos",
      institution: "Udemy",
      state: "Completed",
    },
    {
      name: "Curso de Introdução ao Git e Github",
      institution: "Refatorando",
      state: "Completed",
    },
    {
      name: "React Avançado: Crie aplicações com NextJs",
      institution: "Udemy",
      state: "in progress",
    },
  ];

  const goToCv = () => {
    window.open("https://drive.google.com/file/d/1zYaxW1IMnKGdC_wUcGTf3K-7gX_8v8Ut/view?usp=sharing", "_blank");
  };

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        id="myVideo"
        className="fixed right-0 top-0 w-full opacity-55 h-dvh object-cover pointer-events-none"
      >
        <source src={videobg} type="video/mp4" />
      </video>

      <div className="relative max-w-[1200px] md:mx-auto h-full flex flex-col mx-4">
        <header className="w-full py-4 hidden md:block">
          <div className="flex gap-6 items-center justify-center">
            <img src={logo} alt="logo do projeto " />
            <nav>
              <ul className="flex gap-5 text-white font-medium ">
                <li>
                  <a href="#Home" className="hover:text-blue-200 duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#AboutMe"
                    className="hover:text-blue-200 duration-300"
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    href="#Technologies"
                    className="hover:text-blue-200 duration-300"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="hover:text-blue-200 duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Courses"
                    className="hover:text-blue-200 duration-300"
                  >
                    Courses
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <MobileHeader />

        <main>
          <article
            className="flex items-center justify-center gap-4 text-center text-white flex-col py-10 "
            id="Home"
          >
            <p className="md:text-base font-medium text-sm ">Hello World🌍</p>
            <p className="text-4xl font-bold">My name is Tiago Lopes</p>
            <p className="text-base font-normal">I am a front-end developer</p>
            <div className="flex gap-3">
              <button className="border p-2 rounded-md hover:bg-white hover:text-black duration-300"
              onClick={() => goToCv()}
              >
                Preview CV
              </button>
            </div>
          </article>
          <div data-aos="fade-up">
            <p
              className="text-white text-center text-2xl font-bold"
              id="AboutMe"
            >
              About Me
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-6">
              <img
                src={image}
                alt="imagem de perfil"
                width={250}
                className="border-2 border-white rounded-full p-1"
              />
              <p className="text-white md:text-2xl text-lg font-medium text-start">
                My name is Tiago, I'm 19 years old, I'm studying system analysis
                and development at UniCarioca, I'm passionate about technology
                and front-end development. I'm looking for an internship in the
                Front-End area.
                <div className="flex gap-3 text-start mt-8">
                  <a
                    href="https://github.com/tiagolopes-dev"
                    target="blank"
                    className="hover:bg-white hover:text-black hover:rounded-md duration-300 text-white"
                  >
                    <FiGithub size={40} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tiago-lopes-340776230/"
                    target="blank"
                    className="hover:bg-white hover:text-black hover:rounded-md duration-300 text-white"
                  >
                    <RiLinkedinFill size={40} />
                  </a>
                  <a
                    href="https://www.tomail@tiagolopesc.dev"
                    target="blank"
                    className="hover:bg-white hover:text-black hover:rounded-md duration-300 text-white"
                  >
                    <MdOutgoingMail size={40} />
                  </a>
                </div>
              </p>
            </div>
          </div>

          <div id="Technologies">
          <div data-aos="fade-up" >
            <p className="text-white text-center text-2xl font-bold pb-6">
              Technologies
            </p>
            <div className="flex gap-2 text-white justify-center py-4">
              <FaHtml5 size={50} />
              <IoLogoCss3 size={50} />
              <IoLogoJavascript size={50} />
              <FaReact size={50} />
              <RiNextjsFill size={50} />
              <BiLogoVuejs size={50} />
              <RiTailwindCssFill size={50} />
            </div>
          </div>
          </div>

          <div id="Projects">
            <div data-aos="fade-up" className="pt-6">
              <p className="text-white text-center text-2xl font-bold pb-6">
                Projects
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                {projects.map((project) => (
                  <ProjectCard project={project} />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-12">
            <p
              className="text-white text-center text-2xl font-bold pb-6"
              id="Courses"
            >
              Courses
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10"
              id="Courses"
              data-aos="fade-up"
            >
              {courses.map((course) => (
                <CertificateCard course={course} />
              ))}
            </div>
          </div>
        </main>
        <footer className="flex justify-center my-9 p-2">
          <img src={footerImage} />
        </footer>
      </div>
    </>
  );
}
