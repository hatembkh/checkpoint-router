import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";

const Movie = ({ movies }) => {
  const { id } = useParams();
  const found = movies.find((el) => 
    el.id == id
  );

  if (!found) return <div style={styles.notFound}>Movie not found!</div>;

  return (
    <div style={styles.container}>
      {/* Movie Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>{found.title}</h1>
        <p style={styles.releaseDate}>
          Released: {new Date(found.releaseDate).toLocaleDateString()}
        </p>
      </div>

      {/* Movie Content */}
      <div style={styles.content}>
        <img 
          src={found.imageUrl} 
          alt={found.title} 
          style={styles.image} 
        />
        
        <div style={styles.details}>
          <p style={styles.description}>{found.description}</p>
          
          <div style={styles.ratingContainer}>
            <Rating 
              name="read-only" 
              value={found.rating} 
              precision={0.1} 
              readOnly 
              sx={styles.rating}
            />
            <span style={styles.ratingText}>{found.rating}/5</span>
          </div>
        </div>
      </div>

      {/* Trailer */}
      <div style={styles.trailerContainer}>
        <iframe
          style={styles.trailer}
          src={found.trailer}
          title={`${found.title} Trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

// CSS-in-JS (Can be moved to a separate .css file)
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  },
  header: {
    marginBottom: "30px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 10px 0",
    color: "#2c3e50",
  },
  releaseDate: {
    fontSize: "1rem",
    color: "#7f8c8d",
    margin: "0",
  },
  content: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: "30px",
    marginBottom: "40px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#34495e",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    gap: "10px",
  },
  rating: {
    fontSize: "1.8rem",
    color: "#e74c3c",
  },
  ratingText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  trailerContainer: {
    marginTop: "40px",
    textAlign: "center",
  },
  trailer: {
    width: "100%",
    maxWidth: "800px",
    height: "450px",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  notFound: {
    textAlign: "center",
    fontSize: "1.5rem",
    margin: "50px 0",
    color: "#e74c3c",
  },
};

export default Movie;