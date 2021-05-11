import React, { useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap'
import PMCreate from './PMCreate';
import PMTable from './PMTable';
import PMEdit from './PMEdit';

const PMIndex = (props: any) => {
    const [jobs, setJobs]= useState([]);
    const [updateActive, setUpdateActive]= useState(false);
    const [jobsToUpdate, setJobsToUpdate] = useState({});
    const fetchJobs = () => {
        fetch('http://localhost:3000/jobs/',{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("token")!.toString(),
            }),
        }) .then ( (res) => res.json())
        .then((jobsData) => {
            setJobs(jobsData)
            console.log(jobsData)}
           )
        }
    useEffect(() => {
        fetchJobs();
    }, [])

    const editUpdateJobs = (jobs: any) => {setJobsToUpdate(jobs)
    console.log(jobs)}

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <Container>
            <Row>
                <Col md="3">
                    <PMCreate fetchJobs={fetchJobs} token={props.token}/>     
                   </Col>
                <Col md="9">
                    <PMTable jobs={jobs}
                    editUpdateJobs={editUpdateJobs}
                    updateOn={updateOn} fetchJobs={fetchJobs}
                    token={props.token}/>
                </Col>
                {updateActive ? <PMEdit jobsToUpdate= {jobsToUpdate} updateOff={updateOff} token={props.token} fetchJobs={fetchJobs}/> : <> </>}
            </Row>
        </Container>
        )
}

export default PMIndex;