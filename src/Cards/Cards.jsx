import React,{ Component } from 'react';
import Card from './CardUi';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';


class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={image1}/>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={image2}/>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={image3}/>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;