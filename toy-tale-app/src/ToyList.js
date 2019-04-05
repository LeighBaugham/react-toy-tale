import React from 'react';
import ToyCard from './ToyCard';

const ToyList= (props) => {

    // var addToy = () => {
    //     props.showForms()
    // }

    return (
        <div>
        <p>Andy needs your help! 
            <button id='new-toy-btn' onClick={props.showForms} >Add a new toy!</button>
        </p>

            <h2>Toy List</h2>
            {props.toys.map((toyElement)=> <ToyCard toy={toyElement} handleLike={props.handleLike}/>
            )}

        </div>
    )
}

export default ToyList;