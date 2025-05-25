import { Link } from "react-router-dom";
import Avatar from "./Avatar"
import { format } from 'date-fns';

interface BlogCardProps {
    id: number;
    firstName: string;
    title: string;
    content: string;
    pubishedDate: string
}
export default function BlogCard({id, firstName, title, content, pubishedDate}: BlogCardProps) {
    const formatted = format(new Date(pubishedDate), "dd MMMM yyyy");
    return (
        <Link to={`/blog/${id}`}>
        <div className="pt-5 px-10 flex flex-col gap-3 cursor-pointer">
            <div className="flex gap-2 items-center">
                <Avatar username={firstName} size={8}/>
                <div className="font-bold">{firstName}</div>
                <div className="text-gray-300">•</div>
                <div className="text-gray-500 text-sm">{formatted}</div>
            </div>
            <div className="font-bold text-2xl">{title}</div>
            <div>{content.length > 100 ? (content.slice(0, 100) + "...") : content} </div>
            <div className="text-xs text-gray-400">{`${Math.ceil(content.length / 100)} Minutes`}</div>
            <div className="h-0.5 w-full bg-gray-100"/>
        </div>
        </Link>
    )
}