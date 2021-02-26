import React from "react";

const Tags = ({ children }) => {
  const tags = children.split(",");
  return tags.map((tag) => <div class="tag">{tag}</div>);
};

export default Tags;
