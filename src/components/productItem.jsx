const ProductItem = ({product}) => {

  const { title, id, thumbnail, description } = product;

  return (
    <div className="product-item" key={id}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProductItem;