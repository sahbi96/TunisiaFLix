import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

import StarRatingComponent from "react-star-rating-component";
function MovieCard({ movie }) {
  return (
    <Card
      className="card"
      style={{
        width: "18rem",
        height:"700px",
        backgroundColor: "grey",
      }}
    >
      
        
      
      <Card.Img style = {{height:"370px"}} variant="Card" src={movie.posterURL} />
      
      <Card.Body>
        <Card.Title >{movie.title}</Card.Title>
        <div>
        <StarRatingComponent
          name="Rate"
          starCount={5}
          value={movie.Rate}
          emptyStarColor={"white"}
        />
      </div>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
      
    
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Button variant="primary">Watch now</Button>
      <Button variant="primary"> Trailer</Button>
      </div>
      

      
    </Card>
  );
}
export default MovieCard;
