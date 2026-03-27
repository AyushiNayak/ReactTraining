'use client'
import { Supplier} from "@/models/Supplier"
import { useState } from "react";

type SearchSuppliersProps = {
  data: Supplier[];
}

export default function SearchSuppliers({ data }: SearchSuppliersProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState<Supplier[]>(data);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setResults(data);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(
                `/api/supplier?q=${encodeURIComponent(searchQuery)}`,
                { method: "GET" }
            );
            const searchResults = await response.json() as Supplier[];
            setResults(searchResults);
        } catch (error) {
            console.error("Search error:", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setSearchQuery("");
        setResults(data);
    };

    return (
        <div className="mt-4">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search suppliers by name, contact person, email, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    className="btn btn-primary" 
                    type="button"
                    onClick={handleSearch}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </span>
                            Searching...
                        </>
                    ) : (
                        "Search"
                    )}
                </button>
                <button 
                    className="btn btn-secondary" 
                    type="button"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>

            {results.length > 0 ? (
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
            ) : (
                <div className="alert alert-warning">
                    {searchQuery ? "No suppliers found matching your search." : "No suppliers available."}
                </div>
            )}
        </div>
    )
}