import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { Searchfor } from '../Redux/actions/search';

function Navbar(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.myfav.count)




    const searchfun = (e) => {
        if (e.target.value === '')
        {
            dispatch(Searchfor(e.target.value))
            navigate("/");
        }
        else
        {
            dispatch(Searchfor(e.target.value))
            navigate("/movies/search/1");

        }
    }



    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex justify-content-between w-100">
                    <div className="d-flex">
                        <button className="nav-link" aria-current="page" onClick={() => navigate('/')}>Home</button>
                        <button className="nav-link" onClick={() => navigate('/Favorites')}>Favorites ({count})</button>
                    </div>
                    <div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchfun}/>
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary m-2" aria-current="page" onClick={() => navigate('/login')}>login</button>
                        <button className="btn btn-success m-2" onClick={() => navigate('/register')}>Register</button>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar