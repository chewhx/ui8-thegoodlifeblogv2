import React from "react";

const DateLink = ({ date, link }) => {
  return (
    <div className="detail">
      <span>{date}</span>
      <span>•</span>
      <span>
        <a href={`/recipes/${link}`}>Read more</a>
      </span>
    </div>
  );
};

export default DateLink;

DateLink.defaultProps = {
  date: new Date().toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  link: "1",
};
