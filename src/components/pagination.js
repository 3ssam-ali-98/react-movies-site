import { Link } from 'react-router-dom';
const Pagination = ({ page, link }) => {
    
    return(
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${page < 2 ? 'disabled' : ''}`}>
                    <Link to={`${link}${page-1}`} className="page-link">Previous</Link>
                </li>
                {page > 1 && (<li className="page-item"><Link to={`${link}${page-1}`} className="page-link" >{page-1}</Link></li>)}
                    <li className="page-item active" aria-current="page">
                    <Link className="page-link" >{page}</Link>
                </li>
                    <li className="page-item"><Link to={`${link}${page+1}`} className="page-link" >{page+1}</Link></li>
                    <li className="page-item">
                    <Link to={`${link}${page+1}`} className="page-link" >Next</Link>
                </li>
            </ul>
        </nav>
    )


}

export default Pagination