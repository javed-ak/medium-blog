import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar"
import { useBlog } from "../hooks"
import { format } from "date-fns";
import BlogSkeleton from "../components/skeletons/BlogSkeleton";

export default function Blog() {
    const { id } = useParams()
    const {blog, loading} = useBlog({
        id: Number(id)
    });
    const formattedDate = blog?.publishedAt
        ? format(new Date(blog.publishedAt), "dd MMMM yyyy")
        : "Unknown date";

    if(loading) {
        return <div>
            <BlogSkeleton />
        </div>
    }
    return (
        <div className="grid grid-cols-3 container m-auto gap-10 p-10">
            <div className="grid col-span-2 gap-5">
                <div className="text-4xl font-bold">{blog?.title}</div>
                <div className="text-sm text-gray-400">{formattedDate}</div>
                <div>{blog?.content}</div>
            </div>
            <div>
                <div className="font-medium">Author</div>
                <div className="flex items-center gap-5">
                    <Avatar username={blog?.author.firstName || ''} size={12}/>
                    <div>
                        <div className="font-bold text-xl">{`${blog?.author.firstName} ${blog?.author.lastName}`}</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}