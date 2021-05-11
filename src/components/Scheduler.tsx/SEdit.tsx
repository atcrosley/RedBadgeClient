import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const SEdit = (props: any) => {
  const [editName, setEditName] = useState(props.scheduleToUpdate.name);
  const [editDate, setEditDate] = useState(props.scheduleToUpdate.date);
  const [editLocation, setEditLocation] = useState(props.jobsToUpdate.location);
  const [editWorked, setEditWorked] = useState(props.jobsToUpdate.worked);

  const scheduleUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/schedule/${props.scheduleToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        jobs: {
          name: editName,
          date: editDate,
          location: editLocation,
          worked: editWorked,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")!.toString(),
      }),
    }).then((res) => {
      props.fetchSchedule();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader> Update Project</ModalHeader>
      <ModalBody>
        <Form onSubmit={scheduleUpdate}>
          <FormGroup>
            <Label htmlFor="result">Edit Name:</Label>
            <Input
              name="result"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="result">Edit Date:</Label>
            <Input
              type="date"
              name="startDate"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="definition">Edit Location:</Label>
            <Input
              type="text"
              name="location"
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="worked">Edit Worked:</Label>
            <Input
              type="radio"
              name="status"
              value={editWorked}
              onChange={(e) => setEditWorked(e.target.value)}
            >
              <option value="true">Worked</option>
              <option value="false">Absent</option>
            </Input>
          </FormGroup>
          <Button type="submit">Update the Project!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default SEdit;
