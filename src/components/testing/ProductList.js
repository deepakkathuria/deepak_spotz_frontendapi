"use clienr"
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data: products, error, isLoading } = useFetch("products");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
