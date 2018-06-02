import React from 'react';

const RateStars = props => {
  const fullStar = (<i className="fas fa-star"></i>);
  const emptyStar = (<i className="far fa-star"></i>);
  const emptyStarsArr = Array(10).fill(emptyStar);

  return(
    <div style={{fontSize: '1.4em', padding: '5px'}}>
      {emptyStarsArr}
    </div>
  )
};

export default RateStars;