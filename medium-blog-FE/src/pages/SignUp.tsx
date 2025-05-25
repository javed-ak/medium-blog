import Auth from "../components/Auth";
import Quote from "../components/Quote";

export default function SignUp() {
    return (
        <div className="">
            <div className="grid lg:grid-cols-2 h-screen">
                <div className="flex justify-center items-center"><Auth type="signup"/></div>
                <div className="flex justify-center items-center bg-gray-200 lg:grid hidden"><Quote /></div>
            </div>
        </div>
    )
}