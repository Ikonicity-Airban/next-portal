import ReactDataGrid from "@inovua/reactdatagrid-community";
import { useContext, useMemo } from "react";
import { AppContext } from "../../api/context";
import { Card, ListGroup, Progress } from "flowbite-react";
import Section from "../../components/Section";
import Heading from "../../components/Heading";

const assignmentColumns = [
  {
    name: "id",
    header: "Id",
    defaultVisible: false,
    type: "number",
    defaultWidth: 40,
  },
  { name: "title", defaultFlex: 1, header: "Title" },
  {
    name: "description",
    defaultFlex: 1,
    header: "Description",
    // render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: "Course", defaultFlex: 1, header: "course" },
  { name: "Date", defaultFlex: 1, type: "date", header: "Date" },
  { name: "Action", defaultWidth: 100, header: "Action" },
];

function StudentDashboard() {
  const {
    state: {
      LoggedUser: { role },
    },
  } = useContext(AppContext);

  const cards = useMemo(
    () => [
      {
        id: "1",
        title: "Mathematics",
        course: "MTH222",
        progress: Math.floor(Math.random() * 100) + 20,
        className: "bg-gradient-to-r from-cyan-800 to-indigo-600",
      },
      {
        id: "2",
        title: "English",
        course: "ELS288",
        progress: Math.floor(Math.random() * 100) + 20,
        className: "bg-gradient-to-tr from-cyan-700 to-green-600",
      },
      {
        id: "3",
        title: "Physics",
        course: "PHY256",
        progress: Math.floor(Math.random() * 100) + 20,
        className: "bg-gradient-to-br from-indigo-900 to-blue-600",
      },
      {
        id: "4",
        title: "Chemistry",
        course: "PHY256",
        progress: Math.floor(Math.random() * 100 + 20),
        className: "bg-gradient-to-r from-red-300 to-pink-800",
      },
    ],
    []
  );

  return (
    <div className="space-y-6">
      <hr />
      <div className="h1 my-4">
        <h1 className="tablet:text-xl text-lg font-semibold leading-normal cursor-pointer border-l-2 border-red-700 pl-4">
          Welcome to your Portal Dashboard
        </h1>
        <h1
          className="font-robo text-4xl border-l-2 font-thin logo-clipped border-indigo-300 pl-4"
          title={role}
        >
          {role || "Enoch"}
        </h1>
      </div>
      <hr />
      <ListGroup>
        <ListGroup.Item>
          <Section title="My course progress">
            <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 w-full align-item-center text-white">
              {cards.map(({ className, title, course, id, progress }, i) => (
                <div
                  className={`block ${
                    i == 3 ? "laptop:hidden desktop:block" : ""
                  }`}
                  key={id}
                >
                  <Card className={className}>
                    <div className="flex justify-between">
                      <span className="my-1 space-y-2">
                        <h4>{title}</h4>
                        <p className="text-sm">{course}</p>
                      </span>
                    </div>
                    <Progress
                      progress={progress}
                      color={
                        progress < 40
                          ? "red"
                          : progress < 60
                          ? "yellow"
                          : "green"
                      }
                    />
                    <div className="flex justify-between">
                      <p>Progress</p>
                      <p>{progress}%</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </Section>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="overflow-auto w-full">
            <Heading section_title="Assignments" />
            <ReactDataGrid
              style={{
                minWidth: "100%",
              }}
              columns={assignmentColumns}
              dataSource={[]}
            />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default StudentDashboard;
