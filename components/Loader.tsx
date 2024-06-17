import React from 'react'

import loaderGif from "@/public/Animation - 1718620269666.gif";
import Image from 'next/image';

const Loader = () => {
  return (
    <div>
        <Image src={loaderGif} height={50} width={50} alt='Loading'/>
    </div>
  )
}

export default Loader