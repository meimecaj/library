import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LocalStorage from "../../services/LocalStorage";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const localStorage = new LocalStorage();
const books = localStorage.get("books");

const SearchByAuthor = () => {
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const [searchText, setSearchText] = useState("");
  const [filteredByAuthor, setFilteredByAuthor] = useState([]);

  const handleSearchBarChange = (event) => {
    setSearchText(event.target.value);
  };

  const keyPress = (event) => {
    if (event.keyCode === 13) {
      search();
    }
  };

  const search = () => {
    const booksByAuthor = [];

    Object.keys(books).map((category) => {
      books[category].map((book) => {
        if (book.author.includes(searchText)) {
          booksByAuthor.push(book);
        }
      });
    });

    setFilteredByAuthor(booksByAuthor);
  };

  return (
    <div>
      <TextField
        id="standard-search"
        label="Search author"
        type="search"
        variant="outlined"
        onChange={handleSearchBarChange}
        value={searchText}
        onKeyDown={keyPress}
      />
      <br />
      <Button color="primary" onClick={search}>
        Search
      </Button>
      <br />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {filteredByAuthor.map((book) => (
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
    </div>
  );
};

export default SearchByAuthor;
