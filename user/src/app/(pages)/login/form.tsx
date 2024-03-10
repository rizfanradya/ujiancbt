"use client";
import { consoleLog } from "@/utils/constant";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillLock } from "react-icons/ai";
import { FaBook, FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

type inputs = {
  nisNisn: string;
  password: string;
  mataPelajaran: string;
};

export default function FormLogin() {
  const { register, handleSubmit } = useForm<inputs>();
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: inputs) => {
    if (e.mataPelajaran === "PILIH MAPEL") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Pilih mata pelajaran",
        allowOutsideClick: false,
      });
    } else {
      setButtonSubmit(true);
      try {
        const response = await signIn("credentials", {
          username: e.nisNisn,
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
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3 items-center justify-between border-b w-30 mt-30">
        <FaUserCircle size={"1.5em"} className="text-gray-300" />
        <input
          id="Username"
          placeholder="Username"
          type="text"
          className="w-full"
          required
          autoComplete="off"
          {...register("nisNisn", { required: true })}
        />
      </div>

      <div className="flex gap-3 items-center justify-between border-b text-normal">
        <div className="bg-gray-300 rounded-full p-1 text-white">
          <AiFillLock size={16} />
        </div>
        <input
          id="Password"
          type="password"
          placeholder="Password"
          className="w-full"
          required
          autoComplete="off"
          {...register("password", { required: true })}
        />
      </div>

      <div className="flex gap-3 items-center justify-between border-b ">
        <div className="bg-gray-300 rounded-full p-[5px] text-white">
          <FaBook size={15} />
        </div>
        <select
          autoComplete="off"
          required
          {...register("mataPelajaran", { required: true })}
          className="w-full cursor-pointer appearance-none"
        >
          <option className="opacity-10 blur-10% ">PILIH MAPEL</option>
          <option value={"akm2023"}>AKM 2024</option>
        </select>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
        {buttonSubmit ? (
          <div className="btn btn-info text-white w-full rounded-2xl">
            <span className="loading loading-spinner"></span>
          </div>
        ) : (
          <button className="btn btn-info text-white w-full rounded-2xl">
            LOGIN
          </button>
        )}
      </div>
    </form>
  );
}
