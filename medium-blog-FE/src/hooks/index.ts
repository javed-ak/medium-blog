import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface BlogProps {
    id: number,
    title: string;
    content: string;
    publishedAt: string,
    author: {
        firstName: string
        lastName?: string
    }
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog`, {
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(response => {
            setBlogs(response.data.posts)
            setLoading(false);
        })
    }, [])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({id} : {id: number}) => {
    const [blog, setBlog] = useState<BlogProps>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(response => {
            setBlog(response.data.post)
            setLoading(false);
        })
    }, [id])

    return {
        loading,
        blog
    }
}
