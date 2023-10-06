import { IconType } from "react-icons";

export interface Categories {
  id: number;
  title: string;
  icon: IconType;
  href: string;
}

export interface InfoProps {
  id: number;
  name: string;
  src: string;
  role: string;
  age: number;
  address: string;
  staj: string;
  rate: number;
}
