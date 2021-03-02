import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import { Loader } from "../Details";

const CommentList = ({ recipeObjectId }) => {
  const [comments, setComments] = useState();
  useEffect(() => {
    axios
      .get(`/api/comments/${recipeObjectId}`)
      .then((res) => setComments(res.data));
  }, [recipeObjectId]);

  return !comments ? (
    <Loader />
  ) : (
    comments.map(({ username, createdAt, comment }, index) => (
      <Comment
        key={`username-${index}`}
        username={username}
        createdAt={createdAt}
        comment={comment}
      />
    ))
  );
};

export default CommentList;
