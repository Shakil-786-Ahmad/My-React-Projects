import React from "react";

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <img src={props.imgsrc} alt="no pic.." className="card_img"></img>
                    <div className="card_info">
                        <span className="card_category">A Netflix Original Series</span>
                        <h3 className="card_title">{props.title}</h3>
                        <a href={props.link} >
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;