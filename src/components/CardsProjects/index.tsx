import { TbEyeSearch } from "react-icons/tb";

interface Projects {
  name: string;
  imageProject: string;
  description: string;
  technologies: string[];
  url: string;
  repository: string;
}

export function ProjectCard({ project }: { project: Projects }) {
  const goToProject = (projectUrl: string) => {
    window.open(projectUrl, "_blank");
  };

  return (
    <div className="border-2 p-4 rounded-xl border-[#c9caca75]">
      <div className="flex justify-center">
        <img src={project.imageProject} className="p-2 h-44" />
      </div>
      <p className="text-center text-white font-bold text-xl">{project.name}</p>
      <div>
        <p className="text-white text-base font-regular p-2">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 flex-row mt-2">
        {project.technologies.map((item) => (
          <p className="text-white text-sm font-medium text-center px-1 rounded border border-1 border-[#b4b4b4]">
            {item}
          </p>
        ))}
      </div>

      <div className="mt-6 mb-2 flex flex-col gap-4 justify-center md:flex-row">
        <button
          className="w-full border rounded-lg text-black bg-slate-400 p-2 flex gap-2 items-center justify-center border-[#c9caca75] hover:bg-white hover:text-black duration-300"
          onClick={() => goToProject(project.url)}
        >
          See project
          <TbEyeSearch size={20} />
        </button>

        <button
          className=" w-full border rounded-lg text-white p-2 flex gap-2 items-center justify-center border-[#c9caca75] hover:bg-white hover:text-black duration-300 "
          onClick={() => goToProject(project.repository)}
        >
          View repository
          <TbEyeSearch size={20} />
        </button>
      </div>
    </div>
  );
}
