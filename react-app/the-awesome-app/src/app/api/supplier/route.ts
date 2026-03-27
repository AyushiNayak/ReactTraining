import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// read from supplier json
type Supplier = {
    id:number;
    name:string;
    contactPerson:string;
    email:string;
    location:string;
}


export async function GET(request:Request) {

    const url = new URL(request.url);
     const query = url.searchParams.get("q");

        const filePath = path.join(process.cwd(), 'data', 'suppliers.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const suppliers = JSON.parse(fileContents)as Supplier[];
        if(!query){
            return NextResponse.json(suppliers)
        }else{
           const filteredSuppliers = suppliers.filter(supplier => 
            supplier.name.toLowerCase().includes(query.toLowerCase()) ||
            supplier.contactPerson.toLowerCase().includes(query.toLowerCase()) ||
            supplier.email.toLowerCase().includes(query.toLowerCase()) ||
            supplier.location.toLowerCase().includes(query.toLowerCase())
            
        )

                   return NextResponse.json(filteredSuppliers);

        }
   
}