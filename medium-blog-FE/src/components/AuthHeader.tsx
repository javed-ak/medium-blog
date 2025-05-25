import { Link } from "react-router-dom";

export default function AuthHeader({type}: {type: 'signin' | 'signup'}) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold mb-2">{type == 'signup' ? 'Create an account' : 'Login'}</div>
            <div className="text-sm text-gray-400">{type == 'signup' ? 'Already have an account? ' : 'Do not have an account? '}
                <Link className="text-sky-600 underline" to={type == 'signup' ? '/signin' : '/signup'}>{type == 'signup' ? 'Login' : 'Signup'}</Link>
            </div>
        </div>
    )
}