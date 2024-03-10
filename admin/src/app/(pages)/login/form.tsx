"use client";
import { consoleLog } from "@/utils/constant";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const onSubmit = async (e: inputs) => {
    setButtonSubmit(true);
    try {
      const response = await signIn("credentials", {
        username: e.username,
        password: e.password,
        redirect: false,
      });
      if (response!.ok === false) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Username atau password yang anda masukkan salah",
          allowOutsideClick: false,
        });
      } else if (response!.ok === true) {
        router.push("/");
      }
      setButtonSubmit(false);
    } catch (error) {
      consoleLog && console.error(error);
      setButtonSubmit(false);
      Swal.fire({
        icon: "error",
        title: "Server Error 404",
        allowOutsideClick: false,
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-8 mb-16 lg:mb-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <input
          required
          placeholder="Username"
          className="input border-b bg-transparent h-8 rounded-none w-full border-b-slate-500"
          {...register("username", { required: true })}
        />
        <input
          required
          placeholder="Password"
          className="input border-b bg-transparent h-8 rounded-none border-b-slate-500 w-full"
          {...register("password", { required: true })}
        />
      </div>

      {buttonSubmit ? (
        <div className="btn btn-accent btn-sm rounded-none text-white">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <button className="btn btn-accent btn-sm rounded-none text-white">
          SUBMIT
        </button>
      )}
    </form>
  );
}
