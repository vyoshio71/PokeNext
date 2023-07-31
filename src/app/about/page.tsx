import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div className='flex flex-col items-center min-h-[70vh] justify-center'>
      <h1 className='text-3xl font-medium mb-6'>Sobre o projeto</h1>
      <p className='mb-6 max-w-[500px] mx-auto leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere dolorum perspiciatis, dignissimos impedit mollitia asperiores eveniet consectetur vero autem nostrum quae expedita cum, quia, nobis provident non corrupti quis?</p>
      <Image src="/charizard.png" alt='charizard' width={300} height={300} />
    </div>
  );
}

export default about;