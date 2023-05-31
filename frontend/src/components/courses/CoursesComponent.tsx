import { Button, Card, Modal, Rating } from "flowbite-react";
interface ICoursesProps {
  item: {
    name: string;
  };
}

export default function CoursesComponent({ item }: ICoursesProps) {
  return (
    <>
      <Modal>
        <Modal.Header></Modal.Header>
      </Modal>
      <Card imgSrc="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4=">
        <div className="text-center">
          <h4>{item.name}</h4>
          <p className="text-xs">category</p>
        </div>
        <hr />
        <div className="flex justify-between space-x-3">
          <Rating>
            <Rating.Star />
            <p className="text-xs mx-2">4.2 rating</p>
          </Rating>
          <span className="border-l-1 border-gray-900">
            <Button outline gradientDuoTone="greenToBlue">
              Enroll Now
            </Button>
          </span>
        </div>
      </Card>
    </>
  );
}
