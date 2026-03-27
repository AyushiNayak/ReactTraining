import { useState, useEffect, useCallback, use } from "react";
import axios from "axios";
import { Product } from "@/models/product";
import {useSelector} from "react-redux";
import { AppState } from "@/redux/store";
import { useRouter } from "next/navigation";


export function useProduct() {

    useEffect(() => {
        fetchProducts();
        return () => {
            controller.abort();
        }
    },[]);
const [products, setProducts] = useState<Product[]>([]);
const  controller = new AbortController();
const auth = useSelector((state:AppState) => state.auth);
const router = useRouter();
    
    async  function fetchProducts() {
        if(!auth.isAuthenticated) {
            router.push("/login");
            return;
        }
    try {   
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/secure_products`;

        const header = { Authorization: `Bearer ${auth.accessToken}` };
        const response = await axios.get<Product[]>(url, { signal: controller.signal, headers: header });
        setProducts(response.data);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
return { products, setProducts };

}