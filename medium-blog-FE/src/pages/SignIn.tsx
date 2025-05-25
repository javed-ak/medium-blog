import Auth from "../components/Auth";
import Quote from "../components/Quote";

export default function SignIn() {
    return (
        <div className="">
            <div className="grid grid-cols-2 h-screen">
                <div className="flex justify-center items-center"><Auth type="signin"/></div>
                <div className="flex justify-center items-center bg-gray-200"><Quote /></div>
            </div>
        </div>
    )
}