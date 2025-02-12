import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import Card from "../components/card";
import { useNavigate } from 'react-router-dom';
import Filledstar from '../assets/images/Filled_star.png';
import { addToFavorites} from '../Redux/actions/addfav';
import Emptystar from '../assets/images/empty_star.png';
import Pagination from "../components/pagination";
import { useParams } from "react-router-dom";




function SearchResults(){

    const [movies, setmovies] = useState([]);
    const { page } = useParams();
    const myfav = useSelector((state) => state.myfav.favorites)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const search = useSelector((state) => state.mysearch.value)


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ab2735d9a5f228cfbf8d7e40a0c59017&query=${search}&page=${page}`)
        .then((responce) => setmovies(responce.data.results))

        .catch((err) => console.log(err))
    }, [search, page])

    const changepage = (e) => {
        navigate(`/moviedet/${e}`);
    }
    const addtofav = (e) => {

        dispatch(addToFavorites(e))

    }

    return(
        <> 
            <div className='d-flex contaner-fluid flex-wrap justify-content-center'>
            {
                movies.map((mov) => {
                    const movieId = mov.id;
                    if (myfav.some(fav => fav.id === mov.id))
                    {
                        return(
                            <Card key={movieId}  title={mov.original_title} type={mov.overview} img={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} favimg={Filledstar} favclc={() => addtofav(movieId)} fav="Added to faviortes" clc={() => changepage(movieId)} btntext="More detials"/>
                        )
                    }
                    else
                    {
                        return(
                            <Card key={movieId}  title={mov.original_title} type={mov.overview} img={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} favimg={Emptystar} favclc={() => addtofav(movieId)} fav="Add to faviourts" clc={() => changepage(movieId)} btntext="More detials"/>
                        ) 
                    }
                    
                
                })
            }
            </div>
            <Pagination page={parseInt(page)} link={"/movies/search/"}/>
        </>
    )


}

export default SearchResults