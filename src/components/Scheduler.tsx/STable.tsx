import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const STable = (props: any) => {
  const useStyles = makeStyles({
    table: {
      minWidth: "50%",
      width: 800,
    },
    tableBody: {
      maxWidth: 1500,
    },
  });

  const deleteSchedule = (job: any) => {
    fetch(`http://localhost:3000/schedule/${job.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")!.toString(),
      }),
    }).then(() => props.fetchJobs());
  };
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    })
  )(TableCell);

  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    })
  )(TableRow);

  const scheduleMapper = () => {
    return props.schedule.map((schedule: any, index: any) => {
      return (
        <TableRow key={index}>
          <StyledTableCell>{schedule.name}</StyledTableCell>
          <StyledTableCell>{schedule.date.split("T")[0]}</StyledTableCell>
          <StyledTableCell>{schedule.location}</StyledTableCell>
          <StyledTableCell>{schedule.worked}</StyledTableCell>
          <StyledTableCell>
            <Button
              onClick={() => {
                props.editUpdateJobs(schedule);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              onClick={() => {
                deleteSchedule(schedule);
              }}
            >
              Delete
            </Button>
          </StyledTableCell>
        </TableRow>
      );
    });
  };

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Worked</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          <StyledTableRow>{scheduleMapper()}</StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default STable;
