import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useFormik } from 'formik'
import { createTournament } from '../api/createTournament'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  serverErrorMsg: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}))

export function Tournament() {
  const formik = useFormik({
    initialValues: {
      selectedDate: '2021-08-18T21:11:54',
      location: '',
    },
    onSubmit: (values) => {
      // clear any previous errors
      setServerError('')
      return createTournament(values).then(
        () => {
          // window.location.href = '/'
          console.log('created tournament')
        },
        () => {
          setServerError('An error occurred on the server, please try again')
        },
      )
    },
  })

  const [serverError, setServerError] = useState('')

  console.log('formik.values', formik.values)

  const classes = useStyles()

  // const [selectedDate, setSelectedDate] = useState<Date | null>(
  //   new Date('2021-08-18T21:11:54'),
  // )
  // const [location, setLocation] = useState('')

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date)
  // }
  // const handleLocation = (event) => {
  //   setLocation(event.target.value)
  // }

  // const handleSubmit = () => {}

  // console.log(`location`, location)
  // console.log(`selectedDate`, selectedDate)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Tournament details
        </Typography>
        {serverError && (
          <Alert className={classes.serverErrorMsg} severity="error">
            {serverError}
          </Alert>
        )}
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Tournament Date"
                  value={formik.values.selectedDate}
                  onChange={formik.handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Start time"
                  value={formik.values.selectedDate}
                  onChange={formik.handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  )
}
