import React, { useState, useEffect } from "react";

import { Form, Button, FormGroup, Input, Label } from "reactstrap";

const JobsCreate = (props: any) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(endDate);
    fetch("http://localhost:3000/jobs/create", {
      method: "POST",
      body: JSON.stringify({
        description: description,
        status: status,
        startDate: startDate.toString(),
        endDate: endDate.toString(),
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")!.toString(),
      }),
    })
      .then((res) => res.json())
      .then((jobsData) => {
        console.log(jobsData);
        setDescription("");
        setStatus("");
        setStartDate("");
        setEndDate("");
        props.fetchJobs();
      });
  };
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <Paper style={{ padding: 30, maxWidth: 700, margin: "auto" }}>
          <h1>Create A Job</h1>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                type="date"
                defaultValue="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                type="date"
                id="outlined-required"
                defaultValue="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                defaultValue="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <Select
                  value={status}
                  onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Not Started">Not Started</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Almost Complete">Almost Complete</MenuItem>
                  <MenuItem value="Complete!">Complete</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Button type="submit">Click to Submit</Button>
          </Grid>
        </Paper>
      </form> */}

      <h3>Create a job</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="startDate" />
          <Input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="endDate" />
          <Input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description" />
          <Input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="status" />
          <Input
            type="select"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Project Status">Project Status</option>
            <option value="Has not started">Has not started</option>
            <option value="In Progress">In Progress</option>
            <option value="Nearly Completed">Nearly Completed</option>
            <option value="Completed">Completed</option>
          </Input>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};
export default JobsCreate;
