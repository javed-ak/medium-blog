import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/skeletons/BlogCardSkeleton";
import { useBlogs } from "../hooks";

export default function Home() {
    const { blogs, loading } = useBlogs();

    if (loading) {
        return <div>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
        </div>
    }
    return (
        <div className="flex justify-center ">
            <div className="w-1/2">
                {blogs.map(blog => <BlogCard
                    key={blog.id}
                    id={blog.id}
                    firstName={blog.author.firstName}
                    title={blog.title}
                    content={blog.content}
                    pubishedDate={blog.publishedAt} />
                )}
            </div>
        </div>
    )
}