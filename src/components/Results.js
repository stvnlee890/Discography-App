
import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Container'

function Results({ images, searchArtist }) {
  console.log(searchArtist)
  if(!images.length){
    return <h2>no results found!</h2>
  }
  // console.log(images.results[0].thumb)
  // Inside the onClick function is where you route the viewers to the sub component
  // const onClick = (event) => {
  //   if(event.target.id === '1993487'){
  //     console.log(true)
  //   }else{
  //     console.log(false)
  //   }
  //   console.log(event.target.id)
  // }
 
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
   {images.map((image) => (
      <Col className='results-col results-footer' key={image.id}>
        <Link className="results-link-tag" to={`/artists/${image.id}`} style={{textDecoration: 'none'}}>
        <Card className='h-100'  >
          <div className='image-results' >
           
          
          <Card.Img className="image-thumbnail"
            src={image.thumb} 
            id={image.id} 
            alt={searchArtist}
            />
            <span className="results-image-title">

            {image.title}
            </span>
         
          
        </div>
       </Card>
       <Card.Body>
        <Card.Footer >
        </Card.Footer>
       </Card.Body>
      </Link>
      </Col>
    ))} 
       

      {/* <Container>
    <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
    {images.map((image) => {
            return(
     <Col key={image.id}>
            <Card className='h-100'  >
                {image.thumb && (
               <Card.Img
                variant='top'
                src={image.thumb ? image.thumb : ''}
                alt={image.id}
            />
        )}
        <Card.Body>
            {image.thumb ? (
                ''
            ) : (
                <Card.Title>No Image Available</Card.Title>
            )}
            <Card.Text className='results-card-text'>{image.title}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button>test</Button>
        </Card.Footer>
    </Card>
                   </Col>
            )
        })}
        </Row>
    </Container> */}
    </Row>
    </Container>
  )
}

export default Results;

