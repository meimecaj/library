import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LocalStorage from "../../services/LocalStorage";
import { useLocation } from "react-router-dom";

import useStyles from "./drawerItemStyle";
import categories from "../../utils/categories";

const localStorage = new LocalStorage();

const DrawerItem = (props) => {
  const classes = useStyles();
  const location = useLocation();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const books = localStorage.get("books");
    let pathname = location.pathname.split("/")[1];

    if (pathname.includes("-")) {
      pathname = pathname.replace("-", "and");
      setCategory(books[pathname]);
    } else {
      setCategory(books[pathname]);
    }
  }, category);

  if (category.length > 0) {
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {props.title}
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {category.map((book) => (
                <Grid item key={book} xs={12} sm={6} md={4}>
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
                      <Typography noWrap>{book.description}</Typography>
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
  }
  return <div></div>;
};

export default DrawerItem;
