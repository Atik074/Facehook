import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  //  handle login form data
  const handleFormData = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token?.token;
          const refreshToken = token?.refreshToken;
          
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      //handle global error
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `user email with ${formData.email} does not match`,
      });
    }
  };


  return (
    <form
      onSubmit={handleSubmit(handleFormData)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email id is required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          id="email"
          type="email"
          name="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",

            minLength: {
              value: 8,
              message: "Password at least 8 characters",
            },
            maxLength: {
              value: 16,
              message: "Password must not exceed 16 characters.",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          id="password"
          type="password"
          name="password"
        />
      </Field>
      <p className="text-red-500 text-[15px] mb-2 mt-0">
        {errors?.root?.random?.message}
      </p>
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
