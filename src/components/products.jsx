import ProductItem from "./productItem";
const Products = ({ products }) => {
  if (!products.length) {
    return <h1 className="no-products-found">No products found</h1>;
  }

  return (
    <div className="products">
      {products && products.length > 0
        ? products.map((product) => <ProductItem product={product} />)
        : null}
    </div>
  );
};

export default Products;
