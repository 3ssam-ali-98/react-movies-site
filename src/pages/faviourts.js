import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Card from "../components/card";
import { useNavigate } from 'react-router-dom';
import Filledstar from '../assets/images/Filled_star.png';
import { removefromFavorites} from '../Redux/actions/addfav';




function Favorites(){




    

    
    const myfav = useSelector((state) => state.myfav.favorites)
    const [movies, setmovies] = useState(myfav);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        
        setmovies(myfav);
        
    }, [myfav])

    const changepage = () => {
        navigate("/");
    }
    const removefromfav = (e) => {

        dispatch(removefromFavorites(movies[e]))
    }

    

    return(
        <>
            {
                movies.map((mov, index) => {
                    
                    return(
                        <Card key={index}  title={mov.original_title} type={mov.overview} img={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} favimg={Filledstar} favclc={() => removefromfav(index)} fav="remove from fav" clc={() => changepage(mov.id)} btntext="Go Back"/>
                    )
                })
            }
        
        </>
    )


}

export default Favorites