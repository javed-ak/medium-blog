import { atomFamily } from "recoil";
import { useBlogs } from "../../hooks";

const { blogs } = useBlogs();
export const PostAtomFamily = atomFamily({
    key: 'PostAtomFamily',
    default: id => {
        return blogs.find(x => x.id === id)
    }
})