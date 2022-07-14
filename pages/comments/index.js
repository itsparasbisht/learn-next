import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState();

  const getComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <div>
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
