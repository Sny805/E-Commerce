const HOC = (Product) => {
  return (props) => {
    return (
      <div className="best-seller-wrapper">
        <span className="badge">Best Seller</span>
        <Product {...props} />
      </div>
    );
  };
};

export default HOC;
