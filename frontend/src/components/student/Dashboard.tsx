import { useContext, useMemo } from "react";
import { AppContext } from "../../api/context";
import { Card, Progress } from "flowbite-react";

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
        title: "Physics",
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
        <h1 className="text-2xl font-semibold leading-normal text-indigo-800 cursor-pointer dark:text-white border-l-2 border-indigo-700 pl-4">
          Welcome to your Portal Dashboard
        </h1>
        <h1
          className="text-4xl border-l-2 text border-indigo-300 pl-4"
          title={role}
        >
          {role || "Enoch Focus"}
        </h1>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full align-item-center text-white">
        {cards.map(({ className, title, course, id, progress }) => (
          <Card className={className} id={id}>
            <div className="flex justify-between">
              <span className="my-3 space-y-2">
                <h4>{title}</h4>
                <p className="text-sm">{course}</p>
              </span>
            </div>
            <Progress
              progress={progress}
              color={progress < 40 ? "red" : progress < 60 ? "yellow" : "green"}
            />
            <div className="flex justify-between">
              <p>Progress</p>
              <p>{progress}%</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
