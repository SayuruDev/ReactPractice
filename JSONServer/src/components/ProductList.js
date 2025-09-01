import { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    
    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
      //  .then(data => console.log(data));
        .then(data => setProducts(data));
    }, []);

  return (
    <div>ProductList</div>
  )
}

// npm install -g json-server
//json-server --watch data/db.json --port 8000