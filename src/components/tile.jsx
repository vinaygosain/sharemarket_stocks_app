import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';

const TileComponent = ({ id, name, imgSrc, shareTrend, price }) => (
    <div className="tileDiv col-25 center">
        <Link to={'/details/' + id}>
            <div className="img-wrap"><img src={imgSrc} alt="tile" /></div>
            <div className="text-caption main-logo"> {name} </div>
            <div className="caption-bar">
                <div className="text-caption"> {price} </div>
                <div className="text-caption"> <img src={shareTrend ? up : down} width="20px" alt="shareTrend" /> </div>
            </div>
        </Link>
    </div>
);

TileComponent.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    shareTrend: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
};

export default TileComponent;
