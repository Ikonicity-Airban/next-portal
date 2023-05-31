import CoursesComponent from "./CoursesComponent";

interface ICoursePageProps {
  courses: Array<{ name: string }>;
}
export default function CoursesList({ courses }: ICoursePageProps) {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-10 w-full align-item-center">
      {courses.map((item, idx) => (
        <CoursesComponent item={item} key={idx} />
      ))}
    </div>
  );
}
