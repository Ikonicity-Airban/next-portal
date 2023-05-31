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
      <Card imgSrc="https://plus.unsplash.com/premium_photo-1682787495017-a8f4c7584868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60">
        <div className="text-center">
          <h4>{item.name}</h4>
          <p className="text-xs">category</p>
        </div>
        <hr />
        <div className="flex justify-between items-center mx-auto space-x-3 flex-wrap">
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
