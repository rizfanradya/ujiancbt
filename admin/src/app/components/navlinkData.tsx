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
export const sideNavLink = [
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
        path: "settingServer",
        name: "Setting Server",
        icon: <BsDatabaseFillGear size={size} />,
      },
      {
        path: "schoolServer",
        name: "Server Sekolah (Klien)",
        icon: <FaWifi size={size} />,
      },
      {
        path: "userManagement",
        name: "Manajemen User",
        icon: <GrUserSettings size={size} />,
      },
      {
        path: "changeDatabase",
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
        path: "schoolIdentity",
        name: "Identitas Sekolah",
        icon: <IoSchoolOutline size={size} />,
      },
      {
        path: "classList",
        name: "Daftar Kelas",
        icon: <IoList size={size} />,
      },
      {
        path: "subjects",
        name: "Mata Pelajaran",
        icon: <IoDocumentsOutline size={size} />,
      },
      {
        path: "typeTest",
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
        path: "listQuestionBank",
        name: "Daftar Bank Soal",
        icon: <FaRegFolderClosed size={size} />,
      },
      {
        path: "supportFile",
        name: "File Pendukung",
        icon: <VscNotebook size={size} />,
      },
      {
        path: "assignmentValue",
        name: "Nilai Tugas",
        icon: <GrUploadOption size={size} />,
      },
    ],
  },
  {
    path: "downloadStatus",
    name: "Status Donwload",
    icon: <IoCloudDownloadOutline size={size} />,
    subLink: undefined,
  },
  {
    path: "statusTest",
    name: "Status Test",
    icon: <FaRegEdit size={size} />,
    subLink: undefined,
  },
  {
    path: "listStudent",
    name: "Daftar Peserta",
    icon: <IoDocumentsOutline size={size} />,
    subLink: undefined,
  },
  {
    path: "studentStatus",
    name: "Status Peserta",
    icon: <FaRegUser size={size} />,
  },
  {
    path: "groupTest",
    name: "Kelompok Tes",
    icon: <FaRegUser size={size} />,
    subLink: undefined,
  },

  {
    path: "settingTest",
    name: "Setting Test",
    icon: <TiPen size={size} />,
    subLink: [
      {
        path: "settingTest",
        name: "Setting Test",
        icon: <TiPen size={size} />,
      },
      {
        path: "testSchedule",
        name: "Jadwal Test",
        icon: <GrSchedule size={size} />,
      },
      {
        path: "editTestSchedule",
        name: "Edit Jadwal Test",
        icon: <BiEdit size={size} />,
      },
      {
        path: "examDatabase",
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
        path: "listPresent",
        name: "Belum Ujian",
        icon: <TbProgressX size={size} />,
      },
      {
        path: "examParticipant",
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
        path: "studentExamCard",
        name: "Kartu Ujian",
        icon: <IoMdCard size={size} />,
      },
      {
        path: "listPresent",
        name: "Daftar Hadir",
        icon: <IoDocumentsOutline size={size} />,
      },
      {
        path: "news",
        name: "Berita Acara",
        icon: <IoDocumentsOutline size={size} />,
      },
      {
        path: "scoreList",
        name: "Daftar Nilai",
        icon: <CiViewList size={size} />,
      },
      {
        path: "seatingPlan",
        name: "Denah Lokasi Duduk",
        icon: <GiWoodenChair size={size} />,
      },
      {
        path: "resultFormat",
        name: "Format Nilai",
        icon: <MdTableView size={size} />,
      },
      {
        path: "legerResult",
        name: "Leger Nilai",
        icon: <LuBookMarked size={size} />,
      },
      {
        path: "supervisorList",
        name: "Pengawas Ujian",
        icon: <GrUserPolice size={size} />,
      },
      {
        path: "cbtExamResult",
        name: "Hasil Ujian CBT",
        icon: <SlBookOpen size={size} />,
      },
    ],
  },
  {
    path: "resetStudentLogin",
    name: "Reset Login Peserta",
    icon: <SlRefresh size={size} />,
    subLink: undefined,
  },
  {
    path: "legacyReport",
    name: "Legacy Report",
    icon: <SlRefresh size={size} />,
    subLink: undefined,
  },
  {
    path: "potopeserta",
    name: "Poto Peserta",
    icon: <FaRegUser size={size} />,
    subLink: undefined,
  },
  {
    path: "backupAndDelete",
    name: "Back up & Hapus",
    icon: <IoSettingsOutline size={size} />,
    subLink: undefined,
  },
];
