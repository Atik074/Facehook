import { useForm } from "react-hook-form";
import Field from "../common/Field";

const LoginForm = () => {
    const {
        register,
        handleSubmit ,
        formState: { errors }
    } = useForm()

    const handleClick =(data)=>{
        console.log(data)

    }

    return (
        <form onSubmit={ handleSubmit(handleClick)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
            <Field label="Email" error={errors.email}>
                <input 
                  {...register("email", { required: "Email id is required"})} 
                
                 className={`auth-input ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                id="email" 
                type="email"
                name="email" />
                 

            </Field>
            <Field label="Password" error={errors.password}>
                <input 
                  {...register("password", 
                     { required: "Password is required" , 
        
                    minLength:{
                    value:8,
                     message:"Password at least 8 characters" },
                    maxLength:{
                    value:16,
                     message:"Password must not exceed 16 characters." }
            })} 
                
                 className={`auth-input ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                id="password" 
                type="password"
                name="password"/>
                 

            </Field>
            <button
                  className="auth-input bg-green font-bold text-deepDark transition-all hover:opacity-90"
                  type="submit"
                >
                  Login
                </button>
        </form>
    );
};

export default LoginForm;