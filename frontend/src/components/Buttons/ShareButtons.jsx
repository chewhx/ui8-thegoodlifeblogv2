import React from "react";

const ShareButtons = ({ facebook, twitter }) => {
  return (
    <div className="share">
      {facebook && (
        <div className="btn_share">
          <i className="fab fa-facebook-f"></i> Share
        </div>
      )}
      {twitter && (
        <div className="btn_share">
          <i className="fab fa-twitter"></i> Tweet
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
