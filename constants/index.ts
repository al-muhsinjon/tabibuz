import { ClipboardList, Microscope, BookPlus } from "lucide-react";
import { FaLaptopMedical } from "react-icons/fa6";
export const categories = [
  {
    id: 0,
    title: "Qabulga yozilish",
    icon: ClipboardList,
    href: "/qabul",
  },
  {
    id: 1,
    title: "Tahlil Natijalari",
    icon: Microscope,
    href: "/tahlil",
  },
  {
    id: 2,
    title: "Online Ko'rik",
    icon: FaLaptopMedical,
    href: "/korik",
  },
  {
    id: 3,
    title: "Online Yordam qo'llanmasi  ",
    icon: BookPlus,
    href: "/yordam",
  },
];

export const doctorInfo = [
  {
    id: 0,
    name: "Alijon Po'latov",
    src: "/doktor1.svg",
    role: "Terapevt",
    age: 29,
    address: "Uch Tepa 2-oilaviy poliklinika",
    staj: "Oliy",
    rate: 5,
  },
  {
    id: 1,
    name: "Sardor Karimov",
    src: "/doktor2.svg",
    role: "Lor",
    age: 32,
    address: "Oqjar 7-oilaviy poliklinika",
    staj: "Oliy",
    rate: 4,
  },
  {
    id: 2,
    name: "Feruza Asadova",
    src: "/doktor3.svg",
    role: "Nevropatolog",
    age: 35,
    address: "Kenagas 4-oilaviy poliklinika",
    staj: "Oliy",
    rate: 3,
  },
  {
    id: 3,
    name: "Zohid Azimov",
    src: "/doktor4.svg",
    role: "Hirurg",
    age: 45,
    address: "Uzumzor 3-oilaviy poliklinika",
    staj: "Oliy",
    rate: 5,
  },
  {
    id: 4,
    name: "Alijon Po'latov",
    src: "/doktor1.svg",
    role: "Terapevt",
    age: 29,
    address: "Uch Tepa 2-oilaviy poliklinika",
    staj: "Oliy",
    rate: 5,
  },
];
