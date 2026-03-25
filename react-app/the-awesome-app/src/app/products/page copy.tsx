'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "../../models/product";
import { useRouter } from "next/navigation";
import { ProductView } from "./ProductView";
import { useTitle } from "@/hooks/useTitle";


export default function Products() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisble, setIsMessageVisible] = useState(false);


    useTitle("Products Page");
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
const  deleteProduct = useCallback(async (id: number) => {
    try {
        await axios.delete(`http://localhost:9000/products/${id}`);
        const copy_of_products = [...products];
        const index = copy_of_products.findIndex(product => product.id === id);
        copy_of_products.splice(index, 1);
        setProducts(copy_of_products);
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}, [products]);

const editProduct = useCallback(async (id: number) => {
    console.log("Edit product with id:", id);
    router.push(`/products/${id}`);
    
},[products]);

     const calculateTotalCost = useMemo(() => {
        console.log("Calculating total cost for products:");
        return products.reduce((total, product) => total + product.price, 0);
    }, [products]);


    return (
      
        <div>
            <h4>Products</h4>
            <p >This is the products page. You can display a list of products here.</p>
            <div>Total Cost of all products: ${calculateTotalCost}</div>
            {isMessageVisble ? <div>Message</div> : null}
            <br />
            <button className="btn btn-primary" onClick={() => setIsMessageVisible(!isMessageVisble)}>
                Toggle Message
            </button>

<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"spaceAround"}}>
                {products.map(product => (
                    <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct} />
                    
                    // <div key={product.id} className={styles.product}>
                    //     <p>ID: {product.id}</p>
                    //     <p>Name: {product.name}</p>
                    //     <p>Price: {product.price}</p>
                    //     <p>Description: {product.description}</p>
                    //     <img src={product.imageUrl} alt={product.name} width="200" />
                    //                             <hr />

                    //     <div>
                    //         <button className="btn btn-info" onClick={() => editProduct(product.id)}>Edit</button>&nbsp;
                    //         <button className="btn btn-warning" onClick={() => deleteProduct(product.id)}>Delete</button>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    )
}