import Rating from '@mui/material/Rating';

const FilterMovie = ({ titleSearch, ratingSearch, setTitleSearch, setRatingSearch }) => {



    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <input type="text" value={titleSearch} placeholder="Search Movie" style={{ width: '300px', margin: '10px auto', display: 'block' }}
                onChange={(e) => setTitleSearch(e.target.value)} />
            <Rating style={{ margin: '7px' }} value={ratingSearch} onChange={(e) => setRatingSearch(e.target.value)} />

        </div> 
    )
}

export default FilterMovie;