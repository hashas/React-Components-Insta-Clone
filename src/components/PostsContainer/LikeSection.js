import React, { useState } from 'react';

const LikeSection = props => {
  // set a state to keep track of the number of likes a post has 
  const [postLikes, setpostLikes] = useState(props.likes);
  // set a state to keep track of whether the like button has been clicked or not
  const [clicked, setClicked] = useState(false);

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick = {() => {
          // if prior to clicking the 'heart' it's state is unclicked or 'false' then
          // set the click state to 'true' and increment the postLikes by 1
          if (clicked === false) {
            setClicked(!clicked);
            setpostLikes(postLikes + 1);
          // otherwise if prior to clicking 'heart' the state is clicked or 'true' then
          // sete the click state to 'false' and decrement the postLikes by 1
          } else {
            setClicked(!clicked);
            setpostLikes(postLikes - 1);
          }
        }}
        />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
    {/* display the current state of postLikes */}
    {postLikes}  likes</p>
</div>
  )
};

export default LikeSection;
