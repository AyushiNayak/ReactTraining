import styles from "./products.module.css";
import { Product } from "../../models/product";
import React from "react";

type ProductViewProps = {
    product: Product;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export const ProductView: React.FC<ProductViewProps> = React.memo(({ product, onDelete, onEdit }) => {
    return (
        console.log("Rendering ProductView for product:", product.id),
         <div key={product.id} className={styles.product}>
                         <p>ID: {product.id}</p>
                         <p>Name: {product.name}</p>
                         <p>Price: {product.price}</p>
                         <p>Description: {product.description}</p>
                         <img src={product.imageUrl} alt={product.name} width="200" />
                                                 <hr />

                         <div>
                             <button className="btn btn-info" onClick={() =>  onEdit(product.id)}>Edit</button>&nbsp;
                             <button className="btn btn-warning" onClick={() =>  onDelete(product.id)}>Delete</button>
                         </div>
                     </div>)})