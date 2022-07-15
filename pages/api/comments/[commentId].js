import { comments } from "../../../data/comments";

export default function handler(req, res) {
  console.log(req.query);
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  res.status(200).json(comment);
}
