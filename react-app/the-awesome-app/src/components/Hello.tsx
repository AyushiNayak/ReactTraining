'use client';

export default function Hello({ message, color }: { message?: string; color?: string }) {
    console.log("Hello Component Rendered");
    function calculateTime() {
        return new Date().toLocaleString();
    }
    return (
        <div>
            <h1>Hello, This is a React Component!</h1>
            <p>Generated at {new Date().toLocaleString()}</p>
            <h4>{calculateTime()}</h4>
            <p style={{ color }}>{message}</p>
        </div>
    )
}