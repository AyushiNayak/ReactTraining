'use server'
import {Supplier} from "@/models/Supplier";
import path from "path";
import fs from "fs";
import { redirect } from "next/navigation";

//export  async function formSubmit(form: FormData){
 export async function formSubmit(prevStatus:object,form:FormData) {
    const id =    form.get("id")?.toString();
     const name = form.get("name")?.toString()
     const contactPerson = form.get("contactPerson")?.toString()
     const email = form.get("email")?.toString()
     const location = form.get("location")?.toString()

    const supplier: Supplier = {
        id:Number(id), name: name ? name as string : "", location: location ? location as string : "", contactPerson: contactPerson ? contactPerson as string : "", email: email ? email as string : ""
    }
    if(supplier.id<100){
        return({status:"0",message:"supplier id must be greater than 100"})
    }

    const filePath = path.join(process.cwd(), 'data', 'suppliers.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const suppliers = JSON.parse(fileContents)as Supplier[];

    suppliers.push(supplier);

    fs.writeFileSync(filePath, JSON.stringify(suppliers));

   //  redirect("/suppliers")

    return({status:"1",message:"supplier submitted successfully"})
}
