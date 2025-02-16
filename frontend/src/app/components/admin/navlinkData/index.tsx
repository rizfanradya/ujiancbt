import { BiBookReader, BiEdit } from "react-icons/bi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import {
  FaRegCheckCircle,
  FaRegEdit,
  FaRegFolder,
  FaRegUser,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FiDatabase, FiMonitor } from "react-icons/fi";
import { GiWoodenChair } from "react-icons/gi";
import {
  GrSchedule,
  GrUploadOption,
  GrUserPolice,
  GrUserSettings,
} from "react-icons/gr";
import { IoMdCard } from "react-icons/io";
import {
  IoCheckmarkCircleOutline,
  IoCloudDownloadOutline,
  IoDocumentsOutline,
  IoHomeOutline,
  IoList,
  IoPrintOutline,
  IoSchoolOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { MdTableView } from "react-icons/md";
import { SlBookOpen, SlNotebook, SlRefresh } from "react-icons/sl";
import { TbProgressX } from "react-icons/tb";
import { TiPen } from "react-icons/ti";
import { VscNotebook } from "react-icons/vsc";

const size = 20;
export const adminSideNavLink = [
  {
    path: "dashboard",
    name: "Beranda",
    icon: <IoHomeOutline size={size} />,
    subLink: undefined,
  },
  {
    name: "System Server",
    icon: <FiMonitor size={size} />,
    subLink: [
      {
        path: "setting-server",
        name: "Setting Server",
        icon: <BsDatabaseFillGear size={size} />,
      },
      {
        path: "school-server",
        name: "Server Sekolah (Klien)",
        icon: <FaWifi size={size} />,
      },
      {
        path: "user-management",
        name: "Manajemen User",
        icon: <GrUserSettings size={size} />,
      },
      {
        path: "change-database",
        name: "Ubah Database",
        icon: <FaRegFolder size={size} />,
      },
    ],
  },
  {
    name: "Administrative",
    icon: <SlNotebook size={size} />,
    subLink: [
      {
        path: "school-identity",
        name: "Identitas Sekolah",
        icon: <IoSchoolOutline size={size} />,
      },
      {
        path: "class-list",
        name: "Daftar Kelas",
        icon: <IoList size={size} />,
      },
      {
        path: "subjects",
        name: "Mata Pelajaran",
        icon: <IoDocumentsOutline size={size} />,
      },
      {
        path: "type-test",
        name: "Jenis Tes",
        icon: <IoCheckmarkCircleOutline size={size} />,
      },
    ],
  },
  {
    name: "Bank Soal",
    icon: <SlBookOpen size={size} />,
    subLink: [
      {
        path: "list-question-bank",
        name: "Daftar Bank Soal",
        icon: <FaRegFolderClosed size={size} />,
      },
      {
        path: "support-file",
        name: "File Pendukung",
        icon: <VscNotebook size={size} />,
      },
      {
        path: "assignment-value",
        name: "Nilai Tugas",
        icon: <GrUploadOption size={size} />,
      },
    ],
  },
  {
    path: "download-status",
    name: "Status Donwload",
    icon: <IoCloudDownloadOutline size={size} />,
    subLink: undefined,
  },
  {
    path: "status-test",
    name: "Status Test",
    icon: <FaRegEdit size={size} />,
    subLink: undefined,
  },
  {
    path: "list-student",
    name: "Daftar Peserta",
    icon: <IoDocumentsOutline size={size} />,
    subLink: undefined,
  },
  {
    path: "student-status",
    name: "Status Peserta",
    icon: <FaRegUser size={size} />,
  },
  {
    path: "group-test",
    name: "Kelompok Tes",
    icon: <FaRegUser size={size} />,
    subLink: undefined,
  },

  {
    name: "Setting Test",
    icon: <TiPen size={size} />,
    subLink: [
      {
        path: "setting-test",
        name: "Setting Test",
        icon: <TiPen size={size} />,
      },
      {
        path: "test-schedule",
        name: "Jadwal Test",
        icon: <GrSchedule size={size} />,
      },
      {
        path: "edit-test-schedule",
        name: "Edit Jadwal Test",
        icon: <BiEdit size={size} />,
      },
      {
        path: "exam-database",
        name: "Database Ujian",
        icon: <FiDatabase size={size} />,
      },
    ],
  },
  {
    name: "Data Ujian",
    icon: <BiBookReader size={size} />,
    subLink: [
      {
        path: "news",
        name: "Selesai Ujian",
        icon: <FaRegCheckCircle size={size} />,
      },
      {
        path: "list-present",
        name: "Belum Ujian",
        icon: <TbProgressX size={size} />,
      },
      {
        path: "exam-participant",
        name: "Force Selesai",
        icon: <FaUsers size={size} />,
      },
    ],
  },
  {
    name: "Print Out",
    icon: <IoPrintOutline size={size} />,
    subLink: [
      {
        path: "student-exam-card",
        name: "Kartu Ujian",
        icon: <IoMdCard size={size} />,
      },
      {
        path: "list-present",
        name: "Daftar Hadir",
        icon: <IoDocumentsOutline size={size} />,
      },
      {
        path: "news",
        name: "Berita Acara",
        icon: <IoDocumentsOutline size={size} />,
      },
      {
        path: "score-list",
        name: "Daftar Nilai",
        icon: <CiViewList size={size} />,
      },
      {
        path: "seating-plan",
        name: "Denah Lokasi Duduk",
        icon: <GiWoodenChair size={size} />,
      },
      {
        path: "result-format",
        name: "Format Nilai",
        icon: <MdTableView size={size} />,
      },
      {
        path: "leger-result",
        name: "Leger Nilai",
        icon: <LuBookMarked size={size} />,
      },
      {
        path: "supervisor-list",
        name: "Pengawas Ujian",
        icon: <GrUserPolice size={size} />,
      },
      {
        path: "cbt-exam-result",
        name: "Hasil Ujian CBT",
        icon: <SlBookOpen size={size} />,
      },
    ],
  },
  {
    path: "reset-student-login",
    name: "Reset Login Peserta",
    icon: <SlRefresh size={size} />,
    subLink: undefined,
  },
  {
    path: "legacy-report",
    name: "Legacy Report",
    icon: <SlRefresh size={size} />,
    subLink: undefined,
  },
  {
    path: "student-photo",
    name: "Poto Peserta",
    icon: <FaRegUser size={size} />,
    subLink: undefined,
  },
  {
    path: "backup-and-delete",
    name: "Back up & Hapus",
    icon: <IoSettingsOutline size={size} />,
    subLink: undefined,
  },
];
