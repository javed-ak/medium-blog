import AuthHeader from "./AuthHeader";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Auth({type}: {type: 'signin' | 'signup'}){
    return (
        <div className="flex flex-col gap-5">
            <AuthHeader type={type}/>
            <div>
                {type == 'signup' ? (
                    <SignUpForm />
                ) : (
                    <SignInForm />
                )}
            </div>
        </div>
    )
}