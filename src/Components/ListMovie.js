import CardMovie from "./CardMovie";

const ListMovie = ({movies,titleSearch,ratingSearch}) => {
    const Filter = movies.filter((el,i,t)=>el.title.toLowerCase().includes(titleSearch.toLowerCase())&& ratingSearch<=el.rating )
    return (
        <div className="cardMovie">
{
    Filter.length === 0 ?
    'Not Found':
    Filter.map((el,i,t)=> <CardMovie el={el}/>)
}
        </div>
    )
}

export default ListMovie;