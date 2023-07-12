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
      <Card imgSrc="math.png" className="p-6">
        <div className="text-center">
          <h4>{item.name}</h4>
          <p className="text-xs">category</p>
        </div>
        <hr />
        <div className="flex justify-between items-center space-y-3 flex-wrap">
          <Rating>
            <Rating.Star />
            <p className="text-xs mx-2">4.2 rating</p>
          </Rating>
          <span className="border-l-1 border-gray-900"></span>
          <Button outline gradientDuoTone="greenToBlue" className="w-full">
            Enroll Now
          </Button>
        </div>
      </Card>
    </>
  );
}
