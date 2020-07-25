import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LocalStorage from "../../services/LocalStorage";
import { Redirect } from "react-router-dom";

const localStorage = new LocalStorage();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  const [redirectLink, setRedirectLink] = useState("/login-page");

  const handleLogIn = event => {
    event.preventDefault();
    const userToBeLoggedIn = localStorage.get(email);
    
    if (userToBeLoggedIn.password === localStorage.encodePassword(email, password)) {
      const isLoggedInData = {
        isLoggedIn: true,
        userData: userToBeLoggedIn
      };
      localStorage.set("isLoggedIn", isLoggedInData);
      setRedirectLink("/");
    } else {
      alert("Incorrect email or password!");
    }
  }

  const handleEmailChange = (event) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(event.target.value)) {
      setEmailErrorText("Email not valid.");
      setEmailHasError(true);
      setEmail(event.target.value);
    } else {
      setEmailErrorText("");
      setEmailHasError(false);
      setEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const password = event.target.value;

    if (!regex.test(password)) {
      setPasswordHasError(true);
      setPasswordErrorText("Password not valid.");
      setPassword(password);
    } else {
      setPasswordHasError(false);
      setPasswordErrorText("");
      setPassword(password);
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <Redirect to={redirectLink} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
            error={emailHasError}
            helperText={emailErrorText}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            error={passwordHasError}
            helperText={passwordErrorText}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup-page" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}