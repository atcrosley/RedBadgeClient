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

const PMEdit = (props: any) => {
  const [editDesc, setEditDesc] = useState(props.jobsToUpdate.description);
  const [editStartDate, setEditStartDate] = useState(props.jobsToUpdate.startDate);
  const [editEndDate, setEditEndDate] = useState(props.jobsToUpdate.endDate);
  const [editStatus, setEditStatus] = useState(props.jobsToUpdate.status);

  const jobsUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/jobs/${props.jobsToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        jobs: { description: editDesc, startDate: editStartDate, endDate: editEndDate, status: editStatus },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token")!.toString(),
    })
    }).then((res) => {
      props.fetchJobs();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader> Update Project</ModalHeader>
      <ModalBody>
        <Form onSubmit={jobsUpdate}>
          <FormGroup>
            <Label htmlFor="result">Edit Description:</Label>
            <Input
              name="result"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="result">Edit Start Date:</Label>
            <Input
              type="date"
              name="startDate"
              value={editStartDate}
              onChange={(e) => setEditStartDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="definition">Edit End Date:</Label>
            <Input
              type="date"
              name="endDate"
              value={editEndDate}
              onChange={(e) => setEditEndDate(e.target.value)}
            >
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="status">Edit Status:</Label>
             <Input
            type='select'
              name="status"
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}>
              <option value="Project Status">Project Status</option>
              <option value="Has not started">Has not started</option>
              <option value="In Progress">In Progress</option>
              <option value="Nearly Completed">Nearly Completed</option>
              <option value="Completed">Completed</option>
              </Input>
          </FormGroup>
          <Button type="submit">Update the Project!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PMEdit;
