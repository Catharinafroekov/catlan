"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";  // Import useRouter for navigation

const Formel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const router = useRouter();  // Instantiate the router

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Redirect to payment page after successful form submission
    router.push("/payment"); // Make sure the route "/payment" matches your payment page URL
  };

  return (
    <div className="bg-white bg-opacity-75 h-400 w-400 rounded-12 pb-7 pt-7 ml-20">
      <h2 className="text-darkblue ml-5">FOO-TICKET</h2>
      <p className="text-darkblue ml-5 pb-5">Guest 1</p>
      <form className="flex flex-col ml-5" onSubmit={handleSubmit(onSubmit)}>
        <label>Firstname</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="text"
          placeholder="Yourname"
          {...register("firstname", { required: "Firstname is required" })}
        />
        {errors.firstname && (
          <p className="text-red-500">{errors.firstname.message}</p>
        )}

        <label>Lastname</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="text"
          placeholder="Yourlastname"
          {...register("lastname", { required: "Lastname is required" })}
        />
        {errors.lastname && (
          <p className="text-red-500">{errors.lastname.message}</p>
        )}

        <label>Phone number</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="tel"
          placeholder="+45 12345678"
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]+$/, message: "Invalid phone number" },
          })}
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}

        <label>Email</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="email"
          placeholder="yourname@idont.know"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        
        <button
          type="submit"
          className="bg-darkblue text-white mt-5 rounded-12 w-300 h-30"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formel;
