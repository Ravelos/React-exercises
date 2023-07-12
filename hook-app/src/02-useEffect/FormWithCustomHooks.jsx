import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHooks = () => {

    const {formState, onInputChange, onResetForm, username, password, email} =useForm({
        username:'',
        email: '',
        password:'',
    });
    
    // const {username, email, password} = formState;

    useEffect(() =>{
        // console.log("UseEffect called")
    },[]);

    useEffect(() =>{
        // console.log("formState called")
    },[formState]);

    useEffect(() =>{
        // console.log("email called")
    },[email]);

  return (
    <>
        <h1>Form with custom hooks</h1>
        <hr/>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
            />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="oswaldo@google.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
        />
        <button onClick={onResetForm} className="btn btn-primary mt-2">Erase</button>
    </>
    
  )
}
