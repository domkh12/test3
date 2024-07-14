import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchLogin } from "../../redux/user/UserSlice";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const handleGetStartClick = () => {
    navigate("/register");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setFieldError }) => {
      console.log("Submitting form with values:", values);
      dispatch(fetchLogin(values))
        .unwrap()
        .then(() => {
          if (navigate) {
            navigate("/dashboard"); // Redirect to dashboard on successful login
          }
        })
        .catch((err) => {
          console.error("Login error:", err);
          setFieldError("email", "Invalid email or password");
          setFieldError("password", "Invalid email or password");
        });
    },
  });

  return (
    <main className="sm:bg-primary lg:bg-transparent sm:px-3 flex sm:flex-col-reverse lg:flex-row w-[100vw] h-[100vh] lg:p-3 xl:p-5 justify-start xl:gap-10 items-center overflow-scroll">
      <section className="flex justify-center sm:bg-gray-100 lg:bg-transparent sm:items-center xl:items-start gap-10 flex-col xl:w-[50%] sm:rounded-tl-md sm:rounded-tr-md sm:h-[95vh] xl:px-10 2xl:px-20">       
        <Link to="/" className="flex sm:justify-center xl:justify-start items-center gap-4">
          <img
            loading="lazy"
            src="public/Login/2.jpg"
            alt=""
            className="xl:w-[8%] sm-max:w-[5%] sm:w-[5%]"
          />          
          <h1 className="xl:text-2xl font-semibold text-gray-900 sm:text-lg">Showcase</h1>
          </Link>
        <div className="flex flex-col gap-4 sm:justify-center sm:items-center lg:item-start lg:justify-start 2xl:items-start">
          <h2 className="xl:text-4xl 2xl:text-5xl sm:text-3xl font-bold leading-[60px]">
          Welcome to Showcase
          </h2>
          <p className="text-gray-700">Easily create and customize your beautiful portfolio.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full sm:px-24 xl:p-0">
          <div>
            <label
              htmlFor="email"
              className="mt-9 text-neutral-600 max-md:max-w-full"
            >
              Email
            </label>
            <div>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className={`w-full mt-2.5 h-12 bg-white rounded-md border border-solid ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-neutral-300"
                } max-md:max-w-full`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-5">
            <label
              htmlFor="password"
              className=""
            >
              Password
            </label>
              </div>
            <div className="relative">
              <input
                type={formik.values.showPassword ? "text" : "password"}
                id="password"
                {...formik.getFieldProps("password")}
                className={`w-full mt-2.5 h-12 bg-white rounded-md border border-solid ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-neutral-300"
                } max-md:max-w-full`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
              <button
                type="button"
                className="absolute top-5 right-2 flex justify-center items-center gap-1"
                onClick={() =>
                  formik.setFieldValue(
                    "showPassword",
                    !formik.values.showPassword
                  )
                }
              >
                {formik.values.showPassword ? (
                  <FiEyeOff className="w-6 h-6 text-gray-700" />
                ) : (
                  <FiEye className="w-6 h-6 text-gray-700" />
                )}               
              </button>
            </div>
          </div>
          <div className="flex gap-3 self-start mt-5 text-neutral-500">
            <input
              type="checkbox"
              id="rememberMe"
              checked={formik.values.rememberMe}
              onChange={() =>
                formik.setFieldValue("rememberMe", !formik.values.rememberMe)
              }
              className="shrink-0 my-auto w-5 h-5 rounded-md border border-solid border-neutral-400"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button
            type="submit"
            className="justify-center items-center px-16 py-3 mt-4 max-w-full text-white whitespace-nowrap bg-indigo-600 rounded-md sm:w-full max-md:px-5"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Logging in..." : "Login"}
          </button>
        </form>
        {status === "failed" && (
          <p className="mt-5 text-sm text-red-600 max-md:max-w-full">
            Invalid email or password
          </p>
        )}
        <p className="flex gap-2">
          Already have an account?
          <button
            onClick={handleGetStartClick}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Create an account
          </button>
        </p>
      </section>
      <section className="lg:bg-primary lg:h-full flex justify-center items-center lg:rounded-md lg:w-[50%] lg-max:hidden">
        <img
          loading="lazy"
          src="public/Login/login-img.png"
          alt=""
          className="lg:w-[700px] xl:w-[900px]"
        />
      </section>
    </main>
  );
}

export default LoginSection;
