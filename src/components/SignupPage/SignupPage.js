import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import LocalStorage from "../../services/LocalStorage";
import { Redirect } from "react-router-dom";

const localStorage = new LocalStorage();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupPage() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  const [firstNameHasError, setFirstNameHasError] = useState(false);
  const [firstNameErrorText, setFirstNameErrorText] = useState("");

  const [lastNameHasError, setLastNameHasError] = useState(false);
  const [lastNameErrorText, setLastNameErrorText] = useState("");

  const [confirmPasswordHasError, setConfirmPasswordHasError] = useState(false);
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");

  const [redirectLink, setRedirectLink] = useState("/signup-page");

  const handleSignUp = () => {
    const userData = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: localStorage.encodePassword(email, password)
    }

    localStorage.set(email, userData);
    setRedirectLink("/login-page");
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

  const handleFirstNameChange = (event) => {
    const firstName = event.target.value;
    const length = firstName.length;

    if(length < 2 || length > 20) {
      setFirstName(firstName);
      setFirstNameErrorText("First name must be between 2 and 20 characters.");
      setFirstNameHasError(true);
    } else {
      setFirstName(firstName);
      setFirstNameErrorText("");
      setFirstNameHasError(false);
    }
  };

  const handleLastNameChange = (event) => {
    const lastName = event.target.value;
    const length = lastName.length;

    if(length < 2 || length > 20) {
      setLastName(lastName);
      setLastNameErrorText("Last name must be between 2 and 20 characters.");
      setLastNameHasError(true);
    } else {
      setLastName(lastName);
      setLastNameErrorText("");
      setLastNameHasError(false);
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

  const handleConfirmPasswordChange = (event) => {
    const passwordValue = event.target.value;

    if(passwordValue !== password) {
      setConfirmPassword(passwordValue);
      setConfirmPasswordErrorText("Passwords do not match!");
      setConfirmPasswordHasError(true);
    } else {
      setConfirmPassword(passwordValue);
      setConfirmPasswordErrorText("");
      setConfirmPasswordHasError(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Redirect to={redirectLink}/>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={handleFirstNameChange}
            error={firstNameHasError}
            helperText={firstNameErrorText}
            value={firstName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last Name"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={handleLastNameChange}
            error={lastNameHasError}
            helperText={lastNameErrorText}
            value={lastName}
          />
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
            autoComplete="password"
            onChange={handlePasswordChange}
            error={passwordHasError}
            helperText={passwordErrorText}
            value={password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm password"
            type="password"
            id="password"
            autoComplete="password"
            onChange={handleConfirmPasswordChange}
            error={confirmPasswordHasError}
            helperText={confirmPasswordErrorText}
            value={confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
