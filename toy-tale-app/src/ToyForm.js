import React from 'react';

const ToyForm = (props) => {
    const display = props.display ? "block" : "none"
    return(
        <div style= {{display: display}}>
        <h2> Add a New Toy!</h2>
        <form onSubmit={props.handleSubmit}>
        <label>
        Toy Name:
        <input name="name" type="text" />
        </label>
        <label>
        Toy Image: 
        <input name="image" type="text"   />
        </label>
        <label>
        <br></br>
        Likes:
        <input name="likes" type="text" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
        </form>  
        </div>
    )
}

export default ToyForm;