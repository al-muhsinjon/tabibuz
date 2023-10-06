import About from "@/components/sections/about";
import Categories from "@/components/sections/categories";
import Complaint from "@/components/sections/complaint";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <About />
      <Info />
      <Complaint />
    </div>
  );
}
