import { Card } from "flowbite-react";
interface ICoursesProps {
  item: {
    name: string;
  };
}

export default function CoursesComponent({ item }: ICoursesProps) {
  return (
    <Card imgSrc="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4=">
      {item.name}
    </Card>
  );
}
