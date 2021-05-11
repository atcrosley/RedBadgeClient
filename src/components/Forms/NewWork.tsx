import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { TextField, Grid, Paper, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

function NewWork() {
  const [state, handleSubmit] = useForm("xleoplnr");
  const [value, setValue] = React.useState("Controlled");
  const classes = useStyles();
  if (state.succeeded) {
    return <p>Lets see what we can do!</p>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <hr />
      <form className={classes.root} onSubmit={handleSubmit}>
        <Paper style={{ padding: 30, maxWidth: 600, margin: "auto" }}>
          <h1>Application</h1>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Required"
                defaultValue="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Required"
                defaultValue="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Required"
                defaultValue="Email"
                variant="outlined"
              />
            </Grid>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Required"
                defaultValue="Address"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Description"
                defaultValue="Please include work needed, location, timeframe"
                multiline
                rowsMax={5}
                value={value}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" disabled={state.submitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  );
}

export default NewWork;
