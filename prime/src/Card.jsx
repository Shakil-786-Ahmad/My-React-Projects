import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <>
            <div className='card'>
                <img className='image' src={props.imgSrc} alt='pic..' />
                <div className='card-body'>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className='btnSection'>
                        <button>Watch now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;

