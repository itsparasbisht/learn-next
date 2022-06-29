import { useRouter } from "next/router";

function ProductDetail() {
  const route = useRouter();
  const productId = route.query.productId;
  return <h1>Details of product {productId}</h1>;
}

export default ProductDetail;
