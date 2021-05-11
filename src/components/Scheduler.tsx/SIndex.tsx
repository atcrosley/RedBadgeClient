import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SCreate from "./SCreate";
import STable from "./STable";
import SEdit from "./SEdit";

const SIndex = (props: any) => {
  const [schedule, setSchedule] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [scheduleToUpdate, setScheduleToUpdate] = useState({});
  const fetchSchedule = () => {
    fetch("http://localhost:3000/schedule/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")!.toString(),
      }),
    })
      .then((res) => res.json())
      .then((scheduleData) => {
        setSchedule(scheduleData);
        console.log(scheduleData);
      });
  };
  useEffect(() => {
    fetchSchedule();
  }, []);

  const editUpdateSchedule = (jobs: any) => {
    setScheduleToUpdate(schedule);
    console.log(schedule);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      <Row>
        <Col md="3">
          <SCreate fetchSchedule={fetchSchedule} token={props.token} />
        </Col>
        <Col md="9">
          <STable
            schedule={schedule}
            editUpdateSchedule={editUpdateSchedule}
            updateOn={updateOn}
            fetchSchedule={fetchSchedule}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <SEdit
            scheduleToUpdate={scheduleToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchSchedule={fetchSchedule}
          />
        ) : (
          <> </>
        )}
      </Row>
    </Container>
  );
};

export default SIndex;
