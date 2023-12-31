import { categories } from "@/constants";
import React from "react";
import Container from "../container";
import CategoryItems from "../category-items";

const Categories = () => {
  return (
    <div className="mt-12 p-3">
      <Container>
        <div className="grid grid-cols-2 gap-5 items-center text-white">
          {categories.map((category) => (
            <CategoryItems key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
