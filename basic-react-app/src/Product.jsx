import "./Product.css";
import Price from "./Price";

function Product ({title = "none"}) {
//const list = features.map((feature) => <li>{feature}</li> );
//let isDiscount = price >30000 ? "Discount of 5%" : "";

 return ( 
        <div className="Product">
           <h4>{title}</h4>
            <p>Desciption</p>
            <Price/>
        </div>
    ); 
}

export default Product;