import { Supplier } from "@/models/Supplier";
import SearchSuppliers from "./SeachSuppliers";
import SearchSuppliersAction from "./SearchSuppliersAction";
import Link from "next/link";
export default async function Suppliers() {

    // async function fetchSuppliers(query?:string) {
    //     const suppliers = await fetch('http://localhost:3000/api/supplier',{method:"GET","cache":"no-store"});
    //     const suppliersData = await suppliers.json() as any[];       
    //     console.log(suppliersData);
    //     return suppliersData;
    // }

    async function fetchSuppliersAsync(query?:string) {
        'use server'
        const suppliers = await fetch('http://localhost:3000/api/supplier?q='+query,{method:"GET","cache":"no-store"});
        const results = await suppliers.json() as Supplier[]    
        console.log(results);
        return(
             <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Contact Person</th>
                            <th>Email</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((supplier) => (
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.contactPerson}</td>
                                <td>{supplier.email}</td>
                                <td>{supplier.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        )
    }

    return (
        <div>
            <h1>Suppliers</h1>
            <Link href="/suppliers/add">Add New Supplier</Link>
           {/* <SearchSuppliers data={suppliers} /> */}
           {<SearchSuppliersAction suppliers={fetchSuppliersAsync} />}
        </div>
    )
}