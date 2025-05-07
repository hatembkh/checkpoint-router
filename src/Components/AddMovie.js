import Rating from '@mui/material/Rating';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const AddMovie = ({ movies, setMovies }) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [rating, setRating] = useState(0);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddMovie = () => {
        const newMovie ={
            title,
            description,
            releaseDate,
            imageUrl,
            rating
        }
        setMovies([...movies, newMovie])
        resetAdding();
        handleClose();
    }
    const resetAdding =()=>{
        setTitle('');
        setDescription('');
        setReleaseDate('');
        setImageUrl('');
        setRating(0);
    }
    return (
        <> 
            <div style={{ display: 'flex', flexDirection:'column', alignItems: 'flex-start' }}>
            {/* <h4>Add a Movie to your Playlist</h4> */}
            <Button variant="outline-primary" onClick={handleShow}>
            + Add New Movie
            </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your Movies ID</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label >Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Type Movie Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label >Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Type Movie Description'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Label >ReleaseDate</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Type Movie Release Date'
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <Form.Label >Image Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Type Movie Image URL'
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    
                        <Rating  style={{margin:'10px'}} onChange={(e)=>setRating(e.target.value)}/>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddMovie}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddMovie