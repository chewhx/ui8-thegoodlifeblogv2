import React from "react";
import { DateLink } from "../Details";
import kebabCase from "lodash/fp/kebabCase";
import _ from "lodash/string";

const Card = ({ size, title, image, description, date, link }) => {
  const sizeClasses = {
    large: "card-lg",
    medium: "card-md",
    small: "card-sm",
  };

  return (
    <div className={`card ${sizeClasses[size]}`}>
      <div className="card_image">
        <img src={image} alt={kebabCase(title)} />
      </div>
      <div className="card_title">{title}</div>
      <div className="card_text">
        {_.truncate(description, { length: 168, omission: "..." })}
      </div>
      <div className="card_footer">
        <DateLink date={date} link={link} />
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  title: "Effortless Spinach and Chicken Salad",
  description:
    "Pre-cooked chicken can be used in this recipe for an even quicker meal. I used pepita seeds, but sunflower seeds or other nuts will also work. Best if served right away.",
  image: "https://source.unsplash.com/random",
  size: "large",
};
