import React from 'react';
import './card-style.css';

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} className="card-img-top img-fluid" alt=""/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt tenetur necessitatibus eaque rerum harum officiis error commodi dignissimos mollitia.</p>
                <a href="google.com" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    );
}

export default Card;