import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Correct import
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Login Data:", data);
    };

    return (
        <>
            {/* Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    {/* Form - Removed method="dialog" */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email Input */}
                        <div className='py-1'>
                            <p>Email</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className='dark:border-2 rounded-md mt-1 border-2'
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
                        </div>

                        {/* Password Input */}
                        <div className='py-1'>
                            <p>Password</p>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className='dark:border-2 rounded-md mt-1 border-2'
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='dark:bg-white dark:text-black rounded-md py-1 px-2 bg-blue-800 text-white'>Login</button>
                            <p>Not Signed Up? <Link to='/signup' className='underline'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
