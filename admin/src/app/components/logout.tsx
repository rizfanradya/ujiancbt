"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
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
        signOut({ redirect: false });
        router.push("/login");
        setTimeout(() => window.location.reload(), 1000);
      }
    });
  }

  return (
    <li>
      {buttonSubmit ? (
        <div>
          <span className="text-blue-500">
            <FaPowerOff size={20} />
          </span>
          <span className="text-slate-500/90">Logout</span>
        </div>
      ) : (
        <div onClick={() => handleLogout()}>
          <span className="text-blue-500">
            <FaPowerOff size={20} />
          </span>
          <span className="text-slate-500/90">Logout</span>
        </div>
      )}
    </li>
  );
}
