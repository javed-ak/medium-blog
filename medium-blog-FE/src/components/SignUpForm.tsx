import { useState } from "react";
import InputBox from "./InputBox";
import type { SignUpType } from "@javed-ak/medium-common-app";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<SignUpType>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const sendRequest = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputData)
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/')
        } catch (err) {
            return console.log('Something went wrong!')
        }
    }
    return (
        <div className="flex flex-col gap-2">
            <InputBox label="First Name" placeholder="Javed" onChange={(e) => {
                setInputData({
                    ...inputData,
                    firstName: e.target.value
                })
            }}/>
            <InputBox label="Last Name" placeholder="Akhtar" onChange={(e) => {
                setInputData({
                    ...inputData,
                    lastName: e.target.value
                })
            }}/>
            <InputBox label="Email" placeholder="javed.ak@example.com" onChange={(e) => {
                setInputData({
                    ...inputData,
                    email: e.target.value
                })
            }}/>
            <InputBox label="Password" placeholder="" type="password" onChange={(e) => {
                setInputData({
                    ...inputData,
                    password: e.target.value
                })
            }}/>
            <Button buttonText="Sign Up" onClick={sendRequest}/>
        </div>
    )
}