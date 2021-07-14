import { useState } from "react";

const Tour = ({id,image,info,price,name,removeTour}) => {



const[ readMore,setReaadMore]=useState(false);




const readMoreHandler=()=>{ 
    setReaadMore(!readMore);
}

    return ( 
        <article>
            <div className="single-tour">
                <img src={image} alt={name}></img>
                <footer>
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className="tour-price">$ {price}</h4>
                    </div>
                    <p>
                        { readMore ? info : `${info.substring(0,200)}....` }
                        <button onClick={readMoreHandler}>{ !readMore ? 'read more' : '...read less'} </button>
                    </p>
                    <button className={ 'delete-btn'} onClick={()=>removeTour(id)}> not interested</button>
                </footer>
            </div>
        </article>
     );
}
 
export default Tour;