import { Categories } from "@/types";
import React from "react";

interface CategoryItemsProps {
  category: Categories;
}

const CategoryItems: React.FC<CategoryItemsProps> = ({ category }) => {
  return (
    <div className="bg-blue-500 p-8 rounded-2xl shadow-lg cursor-pointer flex items-center  gap-5 ">
      <category.icon className="text-5xl " size={50} />
      <p className="md:text-3xl text-md">{category.title}</p>
    </div>
  );
};

export default CategoryItems;
