// type Props = {};

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import CoursesList from "../courses/CoursesList";

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
    <section>
      <section className="min-h-[85vh] relative ">
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
          <div className="flex flex-col justify-between space-y-20 max-w-[605px]  p-1 font-semibold">
            <h1 className="text-center text-white text-3xl tablet:text-4xl to-indigo-800">
              Welcome to Computer Science Air Force Base Portal
            </h1>
            <span className="mx-auto flex text-white">
              <Button gradientDuoTone={"greenToBlue"} className="text-white">
                Browse Course{" "}
                <FontAwesomeIcon icon={faArrowRightLong} className="mx-3" />
              </Button>
            </span>
          </div>
        </div>
      </section>
      <section className="p-4 my-4 space-y-6">
        <h1 className="text-center text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          doloremque, eius eaque, officiis deserunt quisquam consectetur vero
          veritatis obcaecati, quas quibusdam nam tempora aliquid repellendus
          quam sunt architecto beatae blanditiis.
        </p>
      </section>
      <main className="space-y-4 p-6 bg-slate-100">
        <h4 id="course" className="text-center">
          Courses
        </h4>
        <CoursesList />
      </main>
    </section>
  );
}
