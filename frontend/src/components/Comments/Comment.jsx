import React from "react";

const Comment = ({ username, createdAt, comment, avatar }) => {
  return (
    <div className="comment">
      <span className="comment_avatar">
        <img src={avatar} alt="avatar-user" />
      </span>
      <div className="comment_body">
        <div className="detail">
          {username} • {createdAt}
        </div>
        <div className="comment_text">{comment}</div>
        <div className="detail">REPLY • SHARE</div>
      </div>
    </div>
  );
};

export default Comment;

Comment.defaultProps = {
  name: "Michael Julian",
  dateTime: new Date().toLocaleDateString(),
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga labore itaque odio necessitatibus eveniet nemo quae vel doloribus, cupiditate consequatur modi nulla minima velit, dolorem, magnam commodi molestiae expedita?",
  avatar: "https://i.pravatar.cc/60",
};
