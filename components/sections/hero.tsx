import Image from 'next/image'
import React from 'react'
import hero from "@/public/main.svg"

const Hero = () => {
  return (
    <main className="w-full" >
      <Image src={hero} className='object-cover w-full' alt="ueh"  /> 

    </main>
  )
}

export default Hero