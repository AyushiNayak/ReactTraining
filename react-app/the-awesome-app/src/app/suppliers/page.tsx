import SearchSuppliers from "./SeachSuppliers";

export default async function Suppliers() {

    async function fetchSuppliers(query?:string) {
        const suppliers = await fetch('http://localhost:3000/api/supplier',{method:"GET","cache":"no-store"});
        const suppliersData = await suppliers.json() as any[];       
        console.log(suppliersData);
        return suppliersData;
    }

    const suppliers = await fetchSuppliers();

    return (
        <div>
            <h1>Suppliers</h1>
           <SearchSuppliers data={suppliers} />
        </div>
    )
}