import { useState } from "react";
import InputBox from "./InputBox";
import type { SignInType } from "@javed-ak/medium-common-app";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
    const [inputData, setInputData] = useState<SignInType>({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleRequest = async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputData);
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');
    }
    return (
        <div className="flex flex-col gap-2">
            <InputBox label="Email" placeholder="javed.ak@example.com" onChange={(e) => {
                setInputData({
                    ...inputData,
                    email: e.target.value
                })
            }}/>
            <InputBox label="Password" type="password" placeholder="" onChange={(e) => {
                setInputData({
                    ...inputData,
                    password: e.target.value
                })
            }}/>
            <Button buttonText="Login" onClick={handleRequest}/>
        </div>
    )
}