import { useState, useEffect } from "react";

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9812/products') 
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
    }, [])

    console.log(products);
    
    



    return (
        <>
            <h1>Boutique</h1>
            {products.map((el) => ( 
            <div className="product-container" key={el._id}>
                {el.image}
            </div>
            ))}
        
        
        
        </>
        


    )
}

    

export default Shop;