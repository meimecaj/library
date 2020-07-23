import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: 50
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="mailto:meimecaj@gmail.com">
        Mei Meçaj
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Library
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          All about books!
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
};
