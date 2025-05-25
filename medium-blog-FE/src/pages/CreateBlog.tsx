import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";
import type { CreatePostType } from "@javed-ak/medium-common-app";
import Button from "../components/Button";

export default function CreateBlog() {
    const [postInput, setPostInput] = useState<CreatePostType>({
        title: '',
        content: ''
    });

    const handleRequest = async () => {
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, postInput, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
        return res.data.id
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="w-2/3">
                <input type="text" placeholder="Title" className="text-4xl w-full border-l p-3 focus:outline-none" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        title: e.target.value
                    })
                }}/>
                <textarea placeholder="Tell your story..." className=" w-full p-3 focus:outline-none" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        content: e.target.value
                    })
                }}/>
                <Button buttonText="Publish" onClick={handleRequest}/>
            </div>
        </div>
    )
}