import React, { useState } from 'react';

const LikeSection = props => {

  const [like, setLike] = useState(0);

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick ={ () => setLike(like + 1)}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
    {props.likes + like}  likes</p>
</div>
  )
};

export default LikeSection;
