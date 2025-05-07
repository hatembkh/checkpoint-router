import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const CardMovie = ({ el }) => {
    const [show, setShow] = useState(false);
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={el.imageUrl} style={{ width: '286px', height: '406px' }} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {show ? el.description : `${el.description.substring(0, 50)}...`}
                    <button style={{
                        border: 'none',
                        backgroundColor: 'white',
                        color: 'black',
                        textDecoration: 'underline'
                    }} onClick={() => setShow(!show)}>{show ? 'Show Less' : 'Show More'}</button>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{el.releaseDate}</ListGroup.Item>
                <Rating name="read-only" value={el.rating} precision={0.1} readOnly /> {el.rating}
            </ListGroup>

            <Card.Body>
                <Link to={`/Movie/${el.id}`}><Button variant="outline-primary" >Click To Watch</Button></Link>

            </Card.Body>


        </Card >
    )
}

export default CardMovie;