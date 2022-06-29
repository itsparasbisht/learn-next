import { useRouter } from "next/router";

function Review() {
  const { productId, reviewId } = useRouter().query;

  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}

export default Review;
