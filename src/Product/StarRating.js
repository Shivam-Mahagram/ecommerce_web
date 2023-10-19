
import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
    const maxStars = 5; // Maximum number of stars

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= maxStars; i++) {
            const starClass = i <= rating ? 'star filled' : 'star'; // Apply styles for filled and unfilled stars
            stars.push(<div key={i} className={starClass}></div>);
        }
        
        return stars;
    };

    return <div className="star-rating">{renderStars()}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarRating;