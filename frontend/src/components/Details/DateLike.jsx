import React from "react";

const DateLike = ({ date, numLikes, recipeId }) => {
  return (
    <div className="detail">
      <span>{date}</span>
      <span>
        <i className="fas fa-heart"></i> {String(numLikes)} Likes
      </span>
    </div>
  );
};

export default DateLike;

DateLike.defaultProps = {
  date: new Date().toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  numLikes: 214
};
