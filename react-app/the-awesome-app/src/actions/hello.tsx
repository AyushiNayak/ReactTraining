'use server'

export async function sayHello(message:string){
    console.log("Invoking say hello",+message)
    return (
        <div style={{color:"blue"}}>
            <h4>Hello , {message}</h4>
        </div>
    )
}