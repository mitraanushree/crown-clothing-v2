import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:''
};

const SignUpForm = () => {
        const [formFields, setFormfields] = useState(defaultFormFields);
        const {displayName, email, password, confirmPassword}= formFields;
        
        console.log(formFields);

        const handleChanges = (event)=> {
            const { name, value} = event.target;
            setFormfields({...formFields, [name]:value });
        }



        return (
        <div>
            <h1>Sign Up With Email and Password</h1>
            <form onSubmit={()=> {}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChanges}
                name='displayName' value={displayName}></input>

                <label>Email</label>
                <input type="email" required onChange={handleChanges}
                name='email' value={email}></input>

                <label>Password</label>
                <input type="password" required onChange={handleChanges}
                name='password' value={password}></input>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChanges}
                name='confirmPassword' value={confirmPassword}></input>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUpForm;