import React, { useState } from 'react';
import './item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    // Debug: Log initial props
    console.log("Initial image:", props.image);
    console.log("Hover image:", props.hoverImage);

    const [currentImage, setCurrentImage] = useState(props.image);

    // Debug: Log image state changes
    const handleMouseEnter = () => {
        console.log("Mouse Enter - Changing image to hover image");
        setCurrentImage(props.hoverImage);
    };
    const handleMouseLeave = () => {
        console.log("Mouse Leave - Reverting to original image");
        setCurrentImage(props.image);
    };

    return (
        <div className='item-container'>
            <div className='item'
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
            >
                <Link to={`/product/${props.id}`}>
                    <img onClick={() => window.scrollTo(0, 0)} src={currentImage} alt={props.name} />
                </Link>
                <p>{props.name}</p>
                <div className='item-prices'>
                    <div className="item-price">
                        ${props.price}
                    </div>
                </div>
            </div>
        </div>
    );
}
