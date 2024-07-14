import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaRegEye } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchRegister } from "../../redux/verify-user/userRegisterSlice";
import { FiEye, FiEyeOff } from "react-icons/fi";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export function ComponentRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.userRegister);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password, confirmPassword, username } = values;

      dispatch(fetchRegister({ email, password, confirmPassword, username }))
        .unwrap()
        .then(() => {
          navigate("/register/verify", { state: { email } });
        })
        .catch((err) => {
          console.error("Registration error:", err);
        });
    },
  });

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="sm:bg-primary lg:bg-transparent sm:px-3 flex sm:flex-col-reverse lg:flex-row w-[100vw] h-[100vh] lg:p-3 xl:p-5 justify-start xl:gap-10 items-center overflow-scroll">
      <section className="flex justify-center sm:verflow-scroll lg:overflow-hidden sm:pt-10 lg:pt-0 sm:bg-gray-100 lg:bg-transparent sm:items-center xl:items-start gap-5 flex-col xl:w-[50%] sm:rounded-tl-md sm:rounded-tr-md sm:h-[95vh] xl:px-10 2xl:px-20">
        <Link
          to="/"
          className="flex sm:justify-center xl:justify-start items-center gap-4"
        >
          <img
            className="xl:w-[8%] sm-max:w-[5%] sm:w-[5%]"
            src="src/assets/img-register/logo-register.png"
            alt="logo"
          />
          <h1 className="xl:text-2xl font-semibold text-gray-900 sm:text-lg">
            Showcase
          </h1>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center sm:items-center lg:item-start xl:justify-start xl:items-start lg:justify-start 2xl:items-start">
          <h2 className="xl:text-4xl 2xl:text-5xl sm:text-3xl font-bold leading-[60px]">
            Join Showcase Today
          </h2>
          <p className="text-gray-700">
            Create and customize your beautiful portfolio easily.
          </p>
        </div>
        <form className="w-full sm:px-24 xl:p-0" onSubmit={formik.handleSubmit}>
          <div className="w-full flex flex-col gap-1">
            <div className="my-[10px] block">
              <label
                htmlFor="username"
                className="mt-9 text-neutral-600 max-md:max-w-full"
              >
                Username
              </label>
              <input
                className="w-full mt-2.5 h-12 bg-white rounded-md border border-solid"
                name="username"
                type="text"
                required
                placeholder="Enter your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-red-500">{formik.errors.username}</p>
              ) : null}
            </div>

            <div className="my-[10px] block">
              <label
                htmlFor="email"
                className="mt-9 text-neutral-600 max-md:max-w-full"
              >
                Your email
              </label>

              <input
                className="w-full mt-2.5 h-12 bg-white rounded-md border border-solid"
                id="email"
                name="email"
                type="email"
                placeholder="name@gmail.com"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="my-[10px] block relative">
              <label
                htmlFor="password"
                className="mt-9 text-neutral-600 max-md:max-w-full"
              >
                Your password
              </label>

              <input
                className="w-full mt-2.5 h-12 bg-white rounded-md border border-solid"
                id="password"
                name="password"
                type={formik.values.showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* <div className="absolute top-5 right-2 flex justify-center items-center gap-1">
                <FaRegEye className="w-6 h-6 text-gray-700"/>
              </div> */}
              <button
                type="button"
                className="absolute top-11 right-2 flex justify-center items-center gap-1"
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
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500">{formik.errors.password}</p>
              ) : null}
            </div>

            <div className="my-[10px] block relative">
              <label
                htmlFor="confirmPassword"
                className="mt-9 text-neutral-600 max-md:max-w-full"
              >
                Confirm password
              </label>

              <input
                className="w-full mt-2.5 h-12 bg-white rounded-md border border-solid"
                id="confirmPassword"
                name="confirmPassword"
                type={formik.values.showConPassword ? "text" : "password"}
                required
                placeholder="Enter your password again"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* <div className="absolute top-[50px] right-[10px]">
                <FaRegEye />
              </div> */}
              <button
                type="button"
                className="absolute top-11 right-2 flex justify-center items-center gap-1"
                onClick={() =>
                  formik.setFieldValue(
                    "showConPassword",
                    !formik.values.showConPassword
                  )
                }
              >
                {formik.values.showConPassword ? (
                  <FiEyeOff className="w-6 h-6 text-gray-700" />
                ) : (
                  <FiEye className="w-6 h-6 text-gray-700" />
                )}
              </button>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <Button
              className="justify-center items-center px-16 py-3 mt-4 max-w-full text-white whitespace-nowrap bg-indigo-600 rounded-md sm:w-full max-md:px-5"
              type="submit"
              color="purple"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create an Account"}
            </Button>
            <p className="flex gap-2 mt-4">
              Already have an account?
              <button
                onClick={handleLoginClick}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                login
              </button>
            </p>
          </div>
        </form>
      </section>
      <section className="lg:bg-primary lg:h-full flex justify-center items-center lg:rounded-md lg:w-[50%] lg-max:hidden">
        <img src="src\assets\img-register\img_register.png" alt="" />
      </section>
    </div>
  );
}
