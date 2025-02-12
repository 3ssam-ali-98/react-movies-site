




function Card(props){
    return(
        <div className="card m-5" style={{width: '20%'}}>
            <img src={props.img} className="card-img-top" style={{height: '250px' }}  alt="..."/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.type}</p>
                <hr style={{marginTop: "auto", border: "1px solid black"}}></hr>
                <div className='d-flex flex-row justify-content-center' style={{ marginBottom: '15px', cursor: 'pointer'}} onClick={props.favclc} value={props.favval}>
                    <img src={props.favimg} style={{width: '20px', marginRight:'5px'}} alt="..."></img>
                    <p className='m-0'>{props.fav}</p>
                </div>
                <button onClick={props.clc} className="btn btn-primary">{props.btntext}</button>
            </div>
        </div>
    )
}

export default Card