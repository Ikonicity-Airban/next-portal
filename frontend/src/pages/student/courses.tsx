import ReactDataGrid from "@inovua/reactdatagrid-community";
import Section from "../../components/Section";
import { useState } from "react";
import { Button, ListGroup, Modal } from "flowbite-react";
import CoursesComponent from "../courses/CoursesComponent";

const gridStyle = { minHeight: 550, minWidth: 860 };

const columns = [
  {
    name: "id",
    header: "Id",
    type: "number",
    defaultWidth: 80,
  },
  { name: "title", defaultFlex: 1, header: "Title" },
  {
    name: "Code",
    defaultFlex: 1,
    header: "code",
    // render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: "description", defaultFlex: 1, header: "Description" },
  { name: "department", defaultFlex: 1, header: "Department" },
  { name: "instructor", defaultFlex: 1, header: "Instructor" },
];

function StudentCoursesPage() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [activateRowOnFocus] = useState(true);
  return (
    <main className="my-10">
      <Button onClick={() => props.setOpenModal("dismissible")}>
        Toggle modal
      </Button>
      <Modal
        position="bottom-center"
        dismissible
        show={props.openModal === "dismissible"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Register Course</Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
      <ListGroup>
        <ListGroup.Item>
          <div className="w-full p-2 bg-red-50">register</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Section title="Courses">
            <div className="overflow-auto">
              {/* add new course */}
              <ReactDataGrid
                idProperty="id"
                style={gridStyle}
                activateRowOnFocus={activateRowOnFocus}
                columns={columns}
                dataSource={[]}
              />
            </div>
            {/* all courses semester by semester list add and delete */}
          </Section>
        </ListGroup.Item>
        <ListGroup.Item>
          <Section title="Available course">
            <CoursesComponent item={{ name: "Math 1" }} />
          </Section>
        </ListGroup.Item>
      </ListGroup>
    </main>
  );
}

export default StudentCoursesPage;
