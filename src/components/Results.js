import React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Results = ({ images, searchArtist })=>{
  if(!images.length){
    return <h2>no results found!</h2>
  }
  return (
    <Container className="artist-results-container">
      <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        {images.map((image, index) => (
      <Col className='results-col results-footer' key={index}>
        <Link className="results-link-tag" to={`/artists/${image.id}`} style={{textDecoration: 'none'}}>
        <Card className='h-100'  >
          <div className='image-results' >
          <Card.Img className="image-thumbnail"
            src={image.cover_image.includes('.gif') ? null : image.cover_image} 
            id={image.id} 
            alt={searchArtist}
            />
        </div>
            <span className="results-image-title">
            {image.title}
            </span>
       </Card>
      </Link>
      </Col>
    ))}
    </Row>
    </Container>
  )
}

export default Results;

