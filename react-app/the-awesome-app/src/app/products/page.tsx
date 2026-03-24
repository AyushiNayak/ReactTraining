'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../models/product";
import styles from "./products.module.css";
import { useRouter } from "next/navigation";


export default function Products() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts();
    },[]);

    async  function fetchProducts() {
    try {
        const response = await axios.get<Product[]>("http://localhost:9000/products");
        setProducts(response.data);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
async  function deleteProduct(id: number) {
    try {
        await axios.delete(`http://localhost:9000/products/${id}`);
        const copy_of_products = [...products];
        const index = copy_of_products.findIndex(product => product.id === id);
        copy_of_products.splice(index, 1);
        setProducts(copy_of_products);
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

function editProduct(id: number) {
    console.log("Edit product with id:", id);
    router.push(`/products/${id}`);
    
}

     
    return (
      
        <div>
            <h4>Products</h4>
            <p >This is the products page. You can display a list of products here.</p>
<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"spaceAround"}}>
                {products.map(product => (
                    <div key={product.id} className={styles.product}>
                        <p>ID: {product.id}</p>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <img src={product.imageUrl} alt={product.name} width="200" />
                                                <hr />

                        <div>
                            <button className="btn btn-info" onClick={() => editProduct(product.id)}>Edit</button>&nbsp;
                            <button className="btn btn-warning" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}