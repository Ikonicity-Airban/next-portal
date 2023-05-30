import CoursesComponent from "./CoursesComponent";

interface ICoursePageProps {
  courses: Array<{ name: string }>;
}
export default function CoursesList({ courses }: ICoursePageProps) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10 w-full">
      {courses.map((item, idx) => (
        <CoursesComponent item={item} key={idx} />
      ))}
    </div>
  );
}
