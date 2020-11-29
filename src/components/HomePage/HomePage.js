import React, { useEffect, useState } from 'react';
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
import LocalStorage from "../../services/LocalStorage";

const localStorage = new LocalStorage();

const useStyles = makeStyles((theme) => ({
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
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    const books = localStorage.get("books");

    if(books !== null) {
      const tempBooks = Object.keys(books).map(bookCategory => {
        const aCategory = books[bookCategory];
        return aCategory[Math.floor(Math.random() * aCategory.length)];
      });
  
      setRandomBooks(tempBooks);
    }
  }, []);

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
                      <Typography noWrap>
                        {book.description}
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
      </React.Fragment>
    );
  } return <div></div>
}