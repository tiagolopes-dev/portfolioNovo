import { TbEyeSearch } from "react-icons/tb";

interface Projects {
  name: string;
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
    <div className="border-2 px-6 py-4 rounded-xl border-[#c9caca75]">
      <p className="text-center text-white font-bold text-xl">{project.name}</p>
      <div className="flex justify-center">
        <img src="" width={230} className="p-2" />
      </div>
      <div>
        <p className="text-white text-lg font-semibold text-center">
          Description
        </p>
        <p className="text-white text-base font-medium text-center p-2">
          {project.description}
        </p>
      </div>
      <div>
        <p className="text-white text-lg font-semibold text-center">
          Technologies used
        </p>
        <p className="text-white text-base font-medium text-center p-2">
          {project.technologies}
        </p>
      </div>
      <div className="p-3 flex flex-col gap-2 justify-center md:flex-row">
        <button
          className="border rounded-lg text-black bg-slate-400 p-2 flex gap-2 items-center justify-center border-[#c9caca75] hover:bg-white hover:text-black duration-300"
          onClick={() => goToProject(project.url)}
        >
          See project
          <TbEyeSearch size={20} />
        </button>

        <button
          className="border rounded-lg text-white p-2 flex gap-2 items-center justify-center border-[#c9caca75] hover:bg-white hover:text-black duration-300 "
          onClick={() => goToProject(project.repository)}
        >
          View repository
          <TbEyeSearch size={20} />
        </button>
      </div>
    </div>
  );
}
