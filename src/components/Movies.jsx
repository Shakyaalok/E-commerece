import React, { useState,useEffect } from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [buttonClicked,setButtonClicked] = useState(false)


  const callMovie =async()=>{
    setLoading(true);
  try {
    const response = await axios.get("https://swapi.dev/api/films");
    const movieData = response.data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        text: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(movieData);
    setLoading(false);
   } catch (error) {
    setError(true)
   }
  }

  const fetchNewMovies = async () => {
  
    setError(false);
    setButtonClicked(true)
      callMovie();
       setButtonClicked(false)
  };

  useEffect(()=>{
    callMovie()
  },[])

  const retrying = () =>{
      setTimeout(()=>{
        fetchNewMovies()
      },5000)
  }

 

  return (
    <div style={{ margin: "1rem 0" }}>
      <Container>
        <Row>
          <Button variant="primary" onClick={fetchNewMovies}>Latest Movies</Button>
        </Row>
         {!loading && movies.length>0 &&   <Row className="mt-5 justify-content-md-between justify-content-sm-center">
            {movies.map((movie, index) =>(
              <Col  md='4'>
              <Card key={movie.id}>
                  <Card.Img variant="top" src='https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.text}</Card.Text>
                    <Card.Footer>
                      <small className="text-muted">Released on {movie.releaseDate}</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
                </Col>
            ))}
              </Row>}
              {!loading && movies.length===0 && !error && buttonClicked && <p>No movies found!</p>}
              {!loading && error && <p>something went wrong</p> && retrying() }
              {loading && <p>Loading ...</p>}
           

      </Container>
    </div>
  );
}

export default Movies;
