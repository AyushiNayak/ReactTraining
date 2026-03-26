import { headers } from "next/headers";

export const revalidate = 60; // Disable caching for this page
export default async function About() {

    console.log("RenderingAbout....")
    //const contentTypeHeader = (await headers()).get("Content-Type") || "application/json";

    //Simulating a delay in loading the page
     await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div className="alert alert-info">
            <h4>Next.js Training Application</h4>
            <p>This is a sample application built with Next.js 13 and React 18. It demonstrates the use of various features of Next.js, including server-side rendering, client-side rendering, and API routes.</p>
            <p>Feel free to explore the code and learn how to build your own Next.js applications!</p>
        </div>
    )

}
//export const dynamic = 'force-dynamic'
