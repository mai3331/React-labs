const Products = ({ data }) => {
  return (
    <div className="container">
      {data.map((product) => (
        <div key={product.product_id} className="card mb-3">
          <div className="card-body shadow">
            <h3 style={{ color: "#FF1493" }}>{product.product_name}</h3>
            <p>{product.product_desc}</p>
            <p>
              <strong>Category:</strong> {product.product_category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

