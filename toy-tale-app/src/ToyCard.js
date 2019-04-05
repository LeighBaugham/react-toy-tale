import React from 'react';

const ToyCard = (props) => {

    return(
        <div>
        <div className='card'>
        <h2>{props.toy.name}</h2>
            <img className="toy-avatar" id="img" src={props.toy.image} alt="toy"/>
                
                <p>{props.toy.likes === null ? 0 : props.toy.likes }</p>
                <button onClick= {(e) => props.handleLike(props.toy.id)} className="like-btn">Like</button>

        </div>
        </div>
    )
}

export default ToyCard;