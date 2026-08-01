import Product from "./Product.jsx";
function ProductTab() {
  let features_opt = [ "hi-tech","durable"]
      return (
   <>
  <Product title ='pen' price={40000} features={ features_opt}/>
  <Product title ='Notebook' price={40000}/>
  <Product title ='Dairy' price={1} />
  </> 
  
  );
}

export default ProductTab; 