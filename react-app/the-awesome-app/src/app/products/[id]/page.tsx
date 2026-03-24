'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../../models/product";

export default function EditProduct() {
 
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
    },[params.id]);

    async function fetchProduct() {
        try {
            const response = await axios.get<Product>(`http://localhost:9000/products/${params.id}`);
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product:", error);
            setLoading(false);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!product) return;
        
        try {
            await axios.put(`http://localhost:9000/products/${params.id}`, product);
            alert("Product updated successfully!");
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Error updating product");
        }
    }

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return(
        <div style={{ padding: "20px", maxWidth: "600px" }}>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        id="id"
                        value={product.id}
                        disabled
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                        required
                        step="0.01"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        required
                        style={{ width: "100%", padding: "8px", minHeight: "100px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={product.imageUrl}
                        onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Update Product
                </button>
            </form>
        </div>
    )
}