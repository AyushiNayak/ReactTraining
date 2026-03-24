'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState , useEffect, useRef} from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [message, setMessage] = useState("");
    const router = useRouter();
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

 console.log("Login Rendered");
    //This use effect is invoked once on component mount.

    useEffect(() => {
        console.log("Login component mounted");
        userNameRef.current?.focus();
        passwordRef.current?.focus();
        return() => {
            console.log
            ("Login component unmounted");

        }
    },[]);


    async function handleLogin(evt: SubmitEvent<HTMLFormElement>) {
        evt.preventDefault();
      if(username && password) {
        // Perform login logic here (e.g., API call)
        setMessage("");
       try {
        const response = await axios.post("http://localhost:9000/login", { name: username, password })
        console.log(response.data);
        router.push("/");
      } catch (error) {
        console.error("Login error:", error);
        setMessage("Invalid username or password.");

        }
    }
      else{
        setMessage("Please enter both username and password.");
      }

    }

    return (
       <div>
        <h4>Login</h4>

      {message ?  <div className="alert alert-warning">{message}</div> : null}
        <form onSubmit={handleLogin}>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input ref={userNameRef}
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input ref={passwordRef}
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
         </div> 
    )

}