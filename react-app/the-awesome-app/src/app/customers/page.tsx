import { Customer } from "@/models/Customer";
import Link from "next/link";
import { Metadata } from "next";
import { headers } from "next/headers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Awesome App:Customers",
  description: "Listed of customers",
  keywords:["global customers,tech companies,fortune 500"]
};

export default async function CustomersListing() {
     await new Promise((resolve) => setTimeout(resolve, 3000));

   return(
        <div>
            <h4>Customer Listing</h4>
            <Suspense fallback={<div className="alert alert-info">Loading customers...</div>}>
                 <Customers timeout={7000}/>
            </Suspense>
            <Suspense fallback={<div className="alert alert-info">Loading customers...</div>}>
                 <Customers timeout={9000}/>
            </Suspense>
        </div>
    )
 
}

export  async function Customers({ timeout }: { timeout: number }) {

    console.log("Rendering Customers....")
     await new Promise((resolve) => setTimeout(resolve, timeout));

    const url = `${process.env.BASE_URL}/Customers`;
    const customers = await fetch(url,{method:"GET","cache":"no-store"});
    const customersData = await customers.json() as Customer[];       

    return (
        <div>
            <h2>Customers Page</h2>
           <table className="table table-striped">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>   
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {customersData.map((customer: Customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td><Link href={"/customers/"+customer.id}>{customer.name}</Link></td>
                        <td>{customer.location}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    )
}