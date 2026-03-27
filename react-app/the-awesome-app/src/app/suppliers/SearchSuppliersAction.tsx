'use client'
import { sayHello } from "@/actions/hello";
import { Supplier } from "@/models/Supplier"
import axios from "axios";
import { use, useEffect, useState } from "react";
import { JSX } from "react";

type SearchSuppliersProps={
    suppliers: (q:string) => Promise<JSX.Element>
}


export default function SearchSuppliersAction({suppliers}: SearchSuppliersProps){

    const [searchText, setSearchText] = useState("")
    //const [suppliers, setSuppliers] = useState(data);
    const [messageView , setMessageView] = useState<JSX.Element>();
    const[supplierView , setSupplierView] = useState<JSX.Element>();
    async function search(){
        // const result = await sayHello(searchText);
        // setMessageView(result)

        const supplierJSX = await suppliers(searchText)
        setSupplierView(supplierJSX)
    }

    useEffect(() =>{
        async function  getSupplier(){
        const supplierJSX = await suppliers("")
        setSupplierView(supplierJSX)

        }
        getSupplier();
    },[])
    return(

        <div>
            <input className="form-control" type="search" 
                placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)}/>
            <br />
            <button className="btn btn-success" onClick={search}>Search</button>
            <div>{messageView}</div>
           <div>{supplierView}</div>
        </div>
    )
}