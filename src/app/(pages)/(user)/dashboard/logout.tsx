"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Logout() {
  const [buttonSubmit, setButtonSubmit] = useState<boolean>();
  const router = useRouter();

  function handleLogout() {
    Swal.fire({
      title: "Apakah anda yakin ingin keluar dari sesi ini?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      allowOutsideClick: false,
      icon: "question",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setButtonSubmit(true);
        // signOut({ redirect: false });
        router.push("/login");
        setTimeout(() => window.location.reload(), 1000);
      }
    });
  }

  return (
    <>
      {buttonSubmit ? (
        <div className="bg-white rounded-full cursor-pointer btn btn-disabled btn-sm ">
          LOGOUT
        </div>
      ) : (
        <div
          onClick={() => handleLogout()}
          className="bg-white rounded-full cursor-pointer btn btn-sm text-slate-500/95"
        >
          Logout
        </div>
      )}
    </>
  );
}
