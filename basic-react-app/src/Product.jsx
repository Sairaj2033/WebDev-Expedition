import "./Product.css";
import Price from "./Price";

function Product ({title = "none",idx}) {
//const list = features.map((feature) => <li>{feature}</li> );
//let isDiscount = price >30000 ? "Discount of 5%" : "";

///PRICE
let oldPrice = ["1321","200","4303","4831"];
let newPrice = ["4231","500","5303","9321"];
let description = [
    ["1000DPI","5 Programmable Langauge"],
    ["Good Quality","Good battey"],
    ["Designed for ipad","iphone"],
    ["Wireless","Wired"]
];


 return ( 
        <div className="Product">
           <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}  />
        </div>
    ); 
}

export default Product;