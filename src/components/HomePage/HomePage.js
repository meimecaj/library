import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LocalStorage from "../../services/LocalStorage";

const localStorage = new LocalStorage();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="mailto:meimecaj@gmail.com">
        Mei Meçaj
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

let randomBooks = [];

export default function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    const tempBooks = localStorage.get("books");

    randomBooks = Object.keys(tempBooks).map(bookCategory => {
      const aCategory = tempBooks[bookCategory];
      return aCategory[Math.floor(Math.random() * aCategory.length)];
    });
  });

  if ((randomBooks.length > 0)) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                Welcome to Library
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Find books you love and save them in to your own little chest of treasures.
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Top Picks
                  </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" href="/login-page">
                      Log in
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {randomBooks.map((book) => (
                <Grid item key={book.isbn} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {book.title}
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                    </Button>
                      <Button size="small" color="primary">
                        Edit
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            {/* Footer */}
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          </Typography>
          <Copyright />
        </footer>
        {/* End footer  */}
      </React.Fragment>
    );
  } return <div></div>
}