import { Customer } from "@/models/Customer";
import { Metadata } from "next";


export async function generateMetadata(props:CustomerDetailProps):Promise<Metadata>{
     const id = (await props.params).id;

    const url = `${process.env.BASE_URL}/Customers/${id}`;
    const customers = await fetch(url,{method:"GET"});
    const customersData = await customers.json() as Customer;  
    return{
         title: `Awesome App: ${customersData.name}`,
        description: "Listed of customers",
        keywords:["global customers,tech companies,fortune 500"]
    }
}


type CustomerDetailProps=
{
    params:Promise<{id:number}>
}

export default async function CustomerDetails(props:CustomerDetailProps){
    console.log("Rendering Customers Details....")

         const id = (await props.params).id;

    const url = `${process.env.BASE_URL}/Customers/${id}`;
    const customers = await fetch(url,{method:"GET"});
    const customersData = await customers.json() as Customer;  

    return (
        <div>
        <div>Customer Details</div>
        <div>ID: {customersData.id}</div>
        <div>Customer Name: {customersData.name}</div>
        <div>Customer Location: {customersData.location}</div>
</div>
    )
}