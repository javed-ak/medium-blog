import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className="shadow-lg">
            <div className="flex justify-between items-center container m-auto p-2">
            <div className="font-bold text-xl"><Link to='/'>Medium</Link></div>
            <div>
                <Button buttonText="Post" onClick={() => {
                    navigate('/createblog')
                }}/>
            </div>
        </div>
        </div>
    )
}