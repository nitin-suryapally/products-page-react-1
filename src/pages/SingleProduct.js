import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productsid } = useParams();
  const product = products.find((product) => product.id === productsid);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5> {name} </h5>
      <Link to="products" className="btn">
        Back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
