import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import doctor from "@/public/doctor.svg"

const About = () => {
  return (
    <div className="pt-20">
      <Container>
        <div className="flex justify-between pr-3 items-center">
          <p className="w-2/4 text-xs pl-3  md:text-2xl leading-relaxed">
            Hech qanday navbatlarsiz, charchoq va asabiyliklarsiz, o'z
            uyingizdan turib bizning ilova orqali malakali shifokorlardan tibbiy
            ko'rikdan o'tingHech qanday navbatlarsiz, charchoq va
            asabiyliklarsiz, o'z uyingizdan turib bizning ilova orqali malakali
            shifokorlardan tibbiy ko'rikdan o'ting
          </p>
          <div className="bg-white w-2/6 border-2 border-black rounded-t-full shadow-md pt-2 flex justify-center items-center" >
            <Image src={doctor} alt="krm" className="w-full px-4 pt-8 "  />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
