import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
// import './Home.css'; // We'll create this CSS file

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <h1 className="netflix-text">Welcome to BOOKHROOFLIX</h1>
                <p className="tagline">Your Best Place To Orgonize What You Watch</p>
            </div>
            
            <div className="carousel-container">
                <Carousel data-bs-theme="dark" fade indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-image"
                            src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                            alt="Joker movie poster"
                            style={{width:'350px'}}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3 className='Ptext'>Explore Movies</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-image"
                            src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
                            alt="Titanic movie poster"
                            style={{width:'350px'}}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3 className='Ptext'>Watch with Hight Quality</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-image"
                            src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
                            alt="Lord of the Rings movie poster"
                            style={{width:'350px'}}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3 className='Ptext'>Create your own Playlist</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div className="cta-section">
                <Link to={'/MovieList'}><button className="explore-button">Explore Movies</button></Link>
            </div>
        </div>
    );
}

export default Home;