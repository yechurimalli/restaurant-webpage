import React from 'react'
import '../index.css'
function DishDetails(props) {
    return (  
        <div className="dish">
            <div className="img">
                <img src={props.img} alt="pizza"/>
                <div className="tit">
                    <h2>{props.title}</h2>
                    <h2>{props.price}</h2>
                </div>
            </div>
            <h4>{props.desc}</h4>
        </div>
    );
}

export default DishDetails;