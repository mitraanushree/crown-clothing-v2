import { signInWithGooglePopup } from "../../assets/utils/firebase/firabase.utils";
import  SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () =>{
    const logGoogleUser = async()=> {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with pop up</button>
            <SignUpForm/>
        </div>
    );
};

export default SignIn;