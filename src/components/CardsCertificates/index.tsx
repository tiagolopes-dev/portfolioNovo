interface CoursesCard {
  name: string;
  institution: string;
  state: string;
}

export function CertificateCard({ course }: { course: CoursesCard }) {
  return (
    <div className="border-2 p-4 rounded-xl border-[#c9caca75] flex flex-col justify-between">
      <p className="text-white font-semibold">{course.name} - <span className="text-sm font-normal">{course.institution}</span></p>
      <p className="text-white text-sm"></p>

      <div className="mt-2">
        <p className="text-white font-medium mb-1">{course.state}</p>
      </div>
    </div>
  );
}
