import CoursesComponent from "./CoursesComponent";

interface ICoursePageProps {
  courses: Array<{ name: string }>;
}
export default function CoursesList({ courses }: ICoursePageProps) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-10 w-full align-item-center">
      {courses.map((item, idx) => (
        <CoursesComponent item={item} key={idx} />
      ))}
    </div>
  );
}
