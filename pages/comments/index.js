import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const getComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const addComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
      <button onClick={getComments}>Get Comments</button>
      {comments &&
        comments.map((item) => (
          <p key={item.id}>
            <span>
              <b>{item.id}.</b>
              {item.text}
            </span>
          </p>
        ))}
    </div>
  );
}
