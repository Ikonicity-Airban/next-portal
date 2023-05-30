import { Card } from "flowbite-react";
import { useState, useEffect } from "react";

export default function CoursesList() {
  const [courses, setCourses] = useState<Array<string>>([]);

  useEffect(() => {
    setCourses(Array(9).fill(0));
  }, []);

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-3 p-4 gap-10 tablet:px-6">
      {courses.map((item, idx) => (
        <Card
          key={idx}
          className="hover:scale-[1.01] duration-200 hover:shadow-none"
        >
          <div className=" h-72">{item}</div>
        </Card>
      ))}
    </div>
  );
}
