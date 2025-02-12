import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import Card from "../components/card";
import { useNavigate } from 'react-router-dom';
import Filledstar from '../assets/images/Filled_star.png';
import { addToFavorites} from '../Redux/actions/addfav';
import Emptystar from '../assets/images/empty_star.png';
import { useParams } from "react-router-dom";


function Moviedet(){


    const { id } = useParams();
    const [movies, setmovies] = useState({})
    const myfav = useSelector((state) => state.myfav.favorites )
    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ab2735d9a5f228cfbf8d7e40a0c59017`)
        .then((responce) => setmovies(responce.data)
    )
        .catch((err) => console.log(err))
    }, [id])

    const changepage = () => {
        navigate("/");
    }

    const addtofav = (e) => {
        dispatch(addToFavorites(e))
    }
    

    return(
        <>
            {
                myfav.some(fav => fav.id === mov.id) ?
                (
                    <Card key={movies.id}  title={movies.original_title} type={movies.overview} img={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} favimg={Filledstar}  fav="Added to faviortes" clc={() => changepage()}  btntext="Go back"/>
                ):(
                    <Card key={movies.id}  title={movies.original_title} type={movies.overview} img={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} favimg={Emptystar} favclc={() => addtofav(movies.id)} fav="Add to faviourts" clc={() => changepage()} btntext="Go Back"/>
                )
            }
            
        
        </>
    )


}

export default Moviedet