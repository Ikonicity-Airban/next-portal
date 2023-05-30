// type Props = {};

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";

export default function HomeComponent(/* {}: Props */) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages([
      "https://media.istockphoto.com/id/1366798987/photo/interior-of-a-traditional-school-classroom-with-wooden-floor-and-furniture.webp?b=1&s=170667a&w=0&k=20&c=1g8wPFZm_FWK_RmqxtcS2_CN6cNF4uRtDb_PhODUXXk=",
      "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4=",
      "https://plus.unsplash.com/premium_photo-1682787495017-a8f4c7584868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.webp?b=1&s=170667a&w=0&k=20&c=wmjzzESyHcSDFXYI1qzngse-EIj7aBMfebEaqjT8cjM=",
    ]);
  }, []);

  return (
    <section className="h-[80vh] relative ">
      <div className="absolute inset-0 -z-10">
        <Carousel
          indicators
          slideInterval={7000}
          leftControl={<></>}
          rightControl={<></>}
        >
          {images.map((image, idx) => (
            <img src={image} key={idx} alt={idx.toString()} loading="lazy" />
          ))}
        </Carousel>
      </div>
      <div className="absolute min-h-[60vh] inset-0 bg-[#0239] -z-[1] grid place-items-center ">
        <div className="flex flex-col justify-between space-y-20 max-w-[605px] font-bold">
          <h1 className="text-center text-white">
            Welcome to Computer Science Air Force Base Portal
          </h1>
          <span className="mx-auto">
            <Button gradientDuoTone={"tealToLime"}>Browse Course</Button>
          </span>
        </div>
      </div>
    </section>
  );
}
