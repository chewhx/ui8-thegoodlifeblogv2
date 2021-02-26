import React, { useState } from "react";
import { Button } from "../Buttons";

const CommentForm = () => {
  const [input, setInput] = useState();
  const [name, setName] = useState();

  const sumbitHandler = () => {
    console.log("Submit");
    setInput("");
    setName("");
  };

  return (
    <form>
      <input
        className="comment_form"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="comment_form"
        style={{ height: "100px" }}
        type="text"
        value={input}
        placeholder="Enter your comment..."
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={() => sumbitHandler()}>Leave a comment</Button>
    </form>
  );
};

export default CommentForm;
