import React, { useState, useEffect } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";

const SCreate = (props: any) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [worked, setWorked] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(date);
    fetch("http://localhost:3000/schedule/create", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        date: date.toString(),
        location: location,
        worked: worked,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")!.toString(),
      }),
    })
      .then((res) => res.json())
      .then((scheduleData) => {
        console.log(scheduleData);
        setName("");
        setDate("");
        setLocation("");
        setWorked("");
        props.fetchSchedule();
      });
  };
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWorked(event.target.value as string);
  };

  return (
    <>
      <h3>Create a schedule</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name" />
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date" />
          <Input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location" />
          <Input
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="worked" />
          <Input
            type="select"
            name="worked"
            label="Did you work?"
            value={worked}
            onChange={(e) => setWorked(e.target.value)}
          >
            <option value="True">Worked</option>
            <option value="False">Absent</option>
          </Input>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};
export default SCreate;
