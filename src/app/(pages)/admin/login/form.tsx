"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type inputs = {
  username: string;
  password: string;
};

export default function FormLogin() {
  const { register, handleSubmit } = useForm<inputs>();
  const [buttonSubmit, setButtonSubmit] = useState(false);

  const onSubmit = async (e: inputs) => {
    setButtonSubmit(true);
    try {
      console.log(e);
      // const response = await signIn("credentials", {
      //   username: e.username,
      //   password: e.password,
      //   redirect: false,
      // });
      // if (response!.ok === false) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Error",
      //     text: "Username atau password yang anda masukkan salah",
      //     allowOutsideClick: false,
      //   });
      // } else if (response!.ok === true) {
      //   router.push("/");
      // }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Server Error 404",
        allowOutsideClick: false,
      });
    }
    setButtonSubmit(false);
  };

  return (
    <form
      className="flex flex-col gap-8 mb-16 lg:mb-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-8 lg:flex-row">
        <input
          required
          placeholder="Username"
          className="w-full h-8 bg-transparent border-b rounded-none input border-b-slate-500"
          {...register("username", { required: true })}
        />
        <input
          required
          placeholder="Password"
          className="w-full h-8 bg-transparent border-b rounded-none input border-b-slate-500"
          {...register("password", { required: true })}
        />
      </div>

      {buttonSubmit ? (
        <div className="text-white rounded-none btn btn-accent btn-sm">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <button className="text-white rounded-none btn btn-accent btn-sm">
          SUBMIT
        </button>
      )}
    </form>
  );
}
