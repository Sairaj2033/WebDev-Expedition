import "./Product.css";


function Product ({title = "none", price, features = []}) {
const list = features.map((feature) => <li>{feature}</li> );

    return ( 
        <div className="Product">
            <h3>{title}</h3>    
            <h5>Product Descripton</h5>
            <h5>Price: {price} </h5>
            <ul>{list}</ul>
        </div>
    );
}

export default Product;